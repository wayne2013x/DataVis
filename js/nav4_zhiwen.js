
$(function(){

    //弹出层：指纹图谱-保存事件
    $("#zhiwenAddSave").on('click',function(){
        
        //关闭弹框
        closeTanchu();        
    });

    //指纹图谱：点击星星，设置默认
    $("#zhiwenliist li .iconfont").on('click',function(){
        $(this).addClass('active').parents('li').siblings('li').find('.iconfont').removeClass('active');
    })

    //指纹图谱：点击列表，右侧内容选中不同。
    $("#zhiwenliist li span.txt").on('click',function(){
            $(this).addClass('active').parents('li').siblings('li').find('.txt').removeClass('active');

            //临时假数据处理: 随机生成几个值设置选中效果 (处理真实数据时请删除)
            var radioLength = $('#zhiwenDataList').find('input').length;
            $('#zhiwenDataList').find('input').attr('checked',false);
            for(let i=0; i< 8; i++ ){
                var radioNum = Math.round( Math.random() * radioLength);
                $('#zhiwenDataList').find('input').eq(radioNum).attr('checked',true);
            }// 假数据代码 删除end 
            
    });

    //指纹图谱右侧：保存按钮，弹出保存框
    $("#rightSaveBtn").on('click',function(){
        
        //弹出保存成功
        openTanchu('rightSavebox');
    });

    //指纹图谱:左侧列表-删除确认框
    


})



//指纹信息: 左侧列表删除事件
var delzhiwen = (id) =>{
    openTanchu('delConfirmBox');
    $("#deltrue").on('click',function(){
        //删除操作
        //...

        //关闭弹出层
        closeTanchu();        
    });
    
}