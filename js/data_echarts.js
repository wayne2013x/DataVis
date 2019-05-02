

$(function(){
    //执行echarts方法
    $("#echartsbox1").length > 0 ? setEcharts('echartsbox1',[10,1,30,1,1,20,40,60,70,70,100,20,2,3,4,5,6,7,8,70]) : '';
    $("#echartsbox2").length > 0 ? setEcharts('echartsbox2',[15,20,1,1,1,20,40,60,70,70,100,20,2,3,4,5,6,7,8,70]) : '';
    $("#echartsbox3").length > 0 ? setEcharts('echartsbox3',[10,1,1,1,1,20,40,60,70,70,100,20,2,3,4,5,6,7,8,70]) : '';
    $("#echartsbox4").length > 0 ? setEcharts('echartsbox4',[1,1,1,15,1,20,40,60,70,70,100,20,2,3,4,5,6,7,8,70]) : '';    
    
    $(window).resize(function() {
            //执行echarts方法
            $("#echartsbox1").length > 0 ? setEcharts('echartsbox1',[1,1,1,1,1,20,40,60,70,70,100,20,2,3,4,5,6,7,8,70]) : '';
            $("#echartsbox2").length > 0 ? setEcharts('echartsbox2',[1,1,1,1,1,20,40,60,70,70,100,20,2,3,4,5,6,7,8,70]) : '';
            $("#echartsbox3").length > 0 ? setEcharts('echartsbox3',[1,1,1,1,1,20,40,60,70,70,100,20,2,3,4,5,6,7,8,70]) : '';
            $("#echartsbox4").length > 0 ? setEcharts('echartsbox4',[1,1,1,1,1,20,40,60,70,70,100,20,2,3,4,5,6,7,8,70]) : '';            
    });


    
})

//echarts渲染方法
function setEcharts(id,jsonData){    
    var myChart = echarts.init(document.getElementById(id));    
    var option = {
                grid:{
                    x:45,
                    y:15,
                    x2:20,
                    y2:30,
                    borderWidth:1
                 },
                xAxis: {
                    type: 'category',
                    data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
                    axisLabel: {
                        textStyle: {
                            color: '#606f7e'
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#606f7e',
                            width:0
                        }
                    },
                },
                yAxis: {
                    type: 'value',
                    splitNumber:3,
                    axisLabel: {
                        textStyle: {
                            color: '#606f7e'
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#606f7e',
                            width:0
                        }
                    },
                },
                series: [{
                    data: jsonData,
                    type: 'bar',
                    itemStyle: {
                        normal: {                 
                            // 定制显示（按顺序）
                            color: function(params) { 
                                var colorList = ['#188df0']; 
                                return colorList[params.dataIndex] 
                            }
                        },
                    },
            
                    
                }]
            };   
    myChart.setOption(option);
    window.onresize = myChart.resize;
}


