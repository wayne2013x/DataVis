$(function(){

     //敏感点：列表数据渲染，并在地图上循环插入所有敏感点
    if($('#mingandian_minganlistData').length >0){  
        minganListLoad();
        addMinganSpot();
        appendMingan_event(minganData[0].id);        
    }

    //敏感点-左侧列表：点击后，地图上的敏感点居中定位
    $("#mingandian_minganlistData li").on('click',function(){
        $(this).addClass('active').siblings('li').removeClass('active');  
        var id = $(this).attr('data-id');
        var name = $(this).find('.cont').html();
        var jingdu = $(this).attr('data-jingdu');
        var weidu = $(this).attr('data-weidu');

        minganReplaceIcon(id,name,jingdu,weidu);

        appendMingan_event(id);

          
    });

    //敏感点-弹出层-上传后数据展示
    $('#mingan_formbtn').on("change","#mingan_formfile",function(e){               
        //输出选中结果                
        $("#mingan_addbtn").hide();
        $(".upload_afterbox").show();
        setEcharts('mingandian_wuranEcharts_min',[1,1,1,15,1,20,40,60,70,70,100,20,2,3,4,5,6,7,8,70])
    })

    //敏感点-弹出层-保存
    $("#mingandianSavebtn").on('click',function(){
        //保存方法
        //....

        //关闭弹层
        closeTanchu();
    });    

   

})


//=================================== 敏感点 函数方法 =========================================================


//敏感点：列表数据加载
var minganListLoad = () =>{
    var mingandian_minganHtml = "";
    $.each(minganData,function(index,el){
        var id = el.id;
        var data = el.date;
        var name = el.name;   
        var jingdu = el.jingdu;
        var weidu = el.weidu;     
        var describe = el.describe;     

        mingandian_minganHtml += '<li data-id="'+ id +'" data-jingdu="'+ jingdu +'" data-weidu="'+ weidu +'"><i class="iconfont icon-iconlookmap"></i><span class="cont">'+ name +'</span><span class="data">' + data + '</span></li>';                                                
                     
    });
    $('#mingandian_minganlistData ul').empty().append(mingandian_minganHtml);
}


//敏感点：通过id在地图上只插入敏感点
var addMinganSpot = () =>{    
    //先移除点
    remove_overlay();
    $.each(minganData,function(index,el){
        var id = el.id;
        var name = el.name;   
        var jingdu = el.jingdu;
        var weidu = el.weidu;   
        //地图上循环插入敏感点
        var addEvent_mingandian = function(){                
            addMarker(id,name,jingdu,weidu,'xing0.png',30,30,1);
            map.setZoom(15);   
            map.removeEventListener("tilesloaded",addEvent_mingandian);   
        };
        map.addEventListener("tilesloaded",addEvent_mingandian);  
           
    });        
    console.log('清除所有，再添加点'); 
}

//敏感点：替换地图上的图标
function minganReplaceIcon(wryId,company,jingdu,weidu){

    //添加点
    var icon = 'xing1.png';
    addMarker(wryId,company,jingdu,weidu,icon,30,30,1);
    map.centerAndZoom(new BMap.Point(jingdu,weidu),16); 


     //删除指定经度的点
     var allOverlay = map.getOverlays();
     for(var i = 0;i<allOverlay.length;i++) { 
         if (allOverlay[i].getPosition().lng == jingdu && allOverlay[i].getPosition().lat == weidu ) {
             map.removeOverlay(allOverlay[i]);            
             return false;
         }
     }
}


