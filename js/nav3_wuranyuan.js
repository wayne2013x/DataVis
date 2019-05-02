$(function(){
     //污染源：列表数据渲染，并在地图上循环插入所有敏感点
     if($('#wuranyuan_wuranyuanlistData').length >0){  
        wuranyuanListLoad();
        addWuranyuanSpot();
    }

    //污染源-左侧列表：点击后，地图上的污染源居中定位
    $("#wuranyuan_wuranyuanlistData li").on('click',function(){
        $(this).addClass('active').siblings('li').removeClass('active');  
        var wryId = $(this).attr('data-id');
        var company = $(this).find('.cont').html();
        var jingdu = $(this).attr('data-jingdu');
        var weidu = $(this).attr('data-weidu');

        //点选后：删除该坐标，插入一个新图标
        wuranyuanReplaceIcon(wryId,company,jingdu,weidu);

          
    });


    

    //污染源：弹出层上的选项卡
    $(".wuranyuanAddcont .tabTitle li").on('click',function(){
        $(this).addClass('on').siblings('li').removeClass('on');
        var index =$(".wuranyuanAddcont .tabTitle li").index($(this));
        $('.wuranyuanAddcont .tabcont-min').eq(index).fadeIn().siblings('.tabcont-min').hide();
       
    });

     //污染源：弹出层-上传后数据展示
     $('#wuranyuan_formbtn').on("change","#wuranyuan_formfile",function(e){               
        //输出选中结果                
        $("#wuranyuan_addbtn").hide();
        $("#wuranyuan_upload_after").show();
        setEcharts('wuranyuan_upload_zhiwen',[1,1,1,15,1,20,40,60,70,70,100,20,2,3,4,5,6,7,8,70])
    })

    //污染源：弹出层-保存
    $("#wuranyuanSavebtn").on('click',function(){
        //保存方法
        //....

        //关闭弹层
        closeTanchu();
    });    

})




//=================================== 污染源 函数方法 =========================================================
//污染源：列表数据加载
let wuranyuanListLoad = ()=>{
    $.each(wuranwuyuanData,function(index,el){       
        var wryId = el.wryId;      
        var jingdu = el.jingdu;
        var weidu = el.weidu;     
        var company = el.company;
        var wuranyuan_wuranHtml = '<li data-id="'+ wryId+'" data-jingdu="'+ jingdu +'" data-weidu="'+ weidu +'"><i class="iconfont icon-iconlookmap"></i><span class="cont">'+ company +'</span></li>';
        $('#wuranyuan_wuranyuanlistData').append(wuranyuan_wuranHtml);
    });
}


//污染源：通过id在地图上只插入污染源的点
var addWuranyuanSpot = () =>{    
    //先移除点
    remove_overlay();
    $.each(wuranwuyuanData,(index,el)=>{      
        var wryId = el.wryId;
        var company = el.company;
        var jingdu = el.jingdu;
        var weidu = el.weidu;       
        var icon = 'xing5.png';
              
        var addEvent_wuranyuan = function(){                
            addMarker(wryId,company,jingdu,weidu,icon,30,30,1);         
            map.setZoom(15);    
            map.removeEventListener("tilesloaded",addEvent_wuranyuan);   
        };
        map.addEventListener("tilesloaded",addEvent_wuranyuan);                  
    }) 
      
}

//污染源：替换地图上的图标
function wuranyuanReplaceIcon(wryId,company,jingdu,weidu){
    var icon = 'xing2.png';
    addMarker(wryId,company,jingdu,weidu,icon,30,30,1);
    map.centerAndZoom(new BMap.Point(jingdu,weidu),15); 
   
     //删除指定经度的点
    var allOverlay = map.getOverlays();
    for(var i = 0;i<allOverlay.length;i++) {           
        if (allOverlay[i].getPosition().lng == jingdu && allOverlay[i].getPosition().lat == weidu ) {
            map.removeOverlay(allOverlay[i]);            
            return false;
        }
    }
}