

//恶臭污染溯源模型系统
$(function(){

     //通用-模拟滚动条
    $(window).on("load",function(){				
        $(".scrolldiv").mCustomScrollbar({
            mouseWheelPixels:160,
            theme:"minimal"
        });				
    });

    //通用：浮层-点击选中，再点取消
    $(".floatDiv li").on('click',function(){
        $(this).toggleClass('active').siblings('li').removeClass('active');
    });

    //通用：恶臭溯源、污染源： 污染物信息填充
    if($('.wuranwuDatabox').length >0){    
            var wuranwuHtml = '';
            for(let i=0; i<wuranwuData.length; i++){
                 if(i%2 == 0){
                    wuranwuHtml += '<tr><td class="td1">'+ wuranwuData[i].name +'</td><td class="td2">'+ wuranwuData[i].nongdu +'</td>';
                 }
                 else if( i%2 ==1 ){
                    wuranwuHtml += '<td class="td1">'+ wuranwuData[i].name +'</td><td class="td2">'+ wuranwuData[i].nongdu +'</td></tr>';
                 }                                
            }

            if( wuranwuData.length %2 ==1 ){
                wuranwuHtml += '<td class="td1"></td><td class="td1"></td></tr>';
            }                       
            $('.wuranwuDatabox').empty().append(wuranwuHtml);
    }
    

    //通用：echarts右上角的下拉切换
    $('.echartSelect h3').on('mouseover',function(){
        $(this).next('ul').show();
    })
    $('.echartSelect li').on('click',function(){
        var val = $(this).html();
        $(this).parents('.echartSelect').find('h3 span').html(val);
        $(this).parents('ul').hide();

        //获取id和数据，实现echarts渲染
        var echartsboxId = $(this).parents('.echartSelect').next('.mkContent').prop('id');
        var dataEcharts = $(this).attr('data-echarts');
        dataEcharts = eval("("+ dataEcharts+")");       
        setEcharts(echartsboxId,dataEcharts);
    })

    



    //模块高度计算
    resetContH();    
    $(window).resize(function(){
        resetContH();
    });


    
    
   
})

//----------------------函数-----------------



//通用：自动计算模块高度：
function resetContH(){
    //每个模块的高度自适应
    $('.mkbox').each(function(index,el){
        let H_all = $(el).height();
        let H_title;
        if($(el).find('.mkTitlebox').length >0){
            H_title = $(el).find('.mkTitlebox').height();
        }else{
            H_title = 0;
        }
        
        let H_cont = H_all - H_title -10;
        $(el).find('.mkContent').height(H_cont );            
    });

    //五星指示牌自适应位置
    var yH = $(".suyuanHistroyBox").height() + 45;
    if($('.indexBottomBar').length > 0){
        var xW = $('.indexBottomBar').offset().left;
        $(".wuxingpos").css({
            "display":"block",
            "left":xW,
            "bottom":yH
        });
    }        
    

    //浮层位置自适应
    if($(".indexRightBar").length >0){
        var fW = $(".indexRightBar").width() + 60;
        var fH = $(".indexRightBar").offset().top;
        $(".floatDiv").css({
            "right":fW,
            "top":fH
        });
    }
    
}



//首页\敏感点页：污染事件详情 填充 （第二个模块）
var appendMingan_event = (minganId)=>{
    minganData.forEach(function(value,index,array){    
        if(minganId == value.id){                
                var date =  value.date;                        
                var nongdu = value.nongdu;
                var qiangduNum = '';
                if( nongdu > 90){
                    qiangduNum = 5;
                }
                else if(nongdu > 80 && nongdu <=90){
                    qiangduNum = 4;
                }
                else if(nongdu > 60 && nongdu <=80){
                    qiangduNum = 3;
                }
                else {
                    qiangduNum = 3;
                }
                var describe =  value.describe;
                var wuranwu = value.wuranwu;
                var wuranwuHtml = '';
                wuranwu.forEach((el,index)=>{
                    var name = el.name;
                    var value = el.value;
                    wuranwuHtml += `<li><p>${name}</p><span>${value}</span></li>`;
                });
                

                var mingan_eventHtml = `<div class="divstylebox clearfix">
                        <div class="divstyle">
                            <h4>恶臭浓度：</h4>
                            <h5>${nongdu}</h5>
                            <p class="qiangdu qiangdu${qiangduNum}">臭气强度: ${qiangduNum} 级</p>
                        </div>

                        <div class="divstyle">
                            <h4>主要污染物：</h4>
                            <ul>
                                ${wuranwuHtml}
                            </ul>
                        </div>
                    </div>
                    <div class="everDescribe">
                        <h3>事件描述：</h3>
                        <p class="limit">${describe}</p>
                    </div>`;
            
            $(".appendMingan_event .time").html(date);
            $(".appendMingan_event .mkContent").html(mingan_eventHtml);
        }
    });    
}


//通用：弹出层关闭
var closeTanchu = () =>{
    $('.coverbg').fadeOut();
    $(".tanchucontainer").fadeOut();
    $(".floatDiv li").removeClass('active');
}

//通用：弹出层打开
var openTanchu = (id) =>{
    $('.coverbg').fadeIn();
    $("#"+id).fadeIn();
}


 //通用：弹出层缩小
 var lessWin = ()=>{
    $(".tanchucontainer").addClass("zuobiaoStyle");
    $(".coverbg").hide();
}

 //通用：弹出层放大
 var fangdaWin = ()=>{
    $(".tanchucontainer").removeClass("zuobiaoStyle");
    $(".coverbg").show();
}







