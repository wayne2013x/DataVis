$(function(){

        //***************** 溯源模型 js ************************* */

        //溯源模型：敏感点列表加载
        if($("#suyuanmoxingList").length >0){
            var suyuan_minganHtml = '';
            $.each(minganData,function(index,el){
                if(index ==0 ){
                    suyuan_minganHtml += '<li data-id="'+ el.id +'" class="active"><p>'+ el.name +'</p><span class="data">'+ el.date +'</span></li>';
                }else{
                    suyuan_minganHtml += '<li data-id="'+ el.id +'"><p>'+ el.name +'</p><span class="data">'+ el.date +'</span></li>';
                }            
            });
            //默认加载第一次
            getWuranyuanList(minganData[0].id);
            $('#suyuanmoxingList').empty().append(suyuan_minganHtml);
        }

        //溯源模型：点击左侧敏感点列表，加载右侧污染源
        $("#suyuanmoxingList li").on('click',function(){
            $(this).addClass('active').siblings('li').removeClass('active');
            var minganId = $(this).attr('data-id');
            getWuranyuanList(minganId);

            //临时假数据处理: 随机生成几个值设置选中效果 (处理真实数据时请删除)
            var radioLength = $('#wuranyuanList_onsuyuanmoxing').find('input').length;
            $('#wuranyuanList_onsuyuanmoxing').find('input').attr('checked',false);
            for(let i=0; i< 8; i++ ){
                var radioNum = Math.round( Math.random() * radioLength);
                $('#wuranyuanList_onsuyuanmoxing').find('input').eq(radioNum).attr('checked',true);
            }// 假数据代码 删除end 

        });

         //溯源模型：弹出层-选项卡
        $(".tabTitle li").on('click',function(){
            $(this).addClass('on').siblings('li').removeClass('on');
            var index =$(".wuranyuanAddcont .tabTitle li").index($(this));            
            $('.wuranyuanAddcont .tabcont-min').eq(index).fadeIn().siblings('.tabcont-min').hide();

            if(index == 2){
                setEcharts('echartsbox_detail',[1,1,1,15,1,20,40,60,70,70,100,20,2,3,4,5,6,7,8,70])
            }        
        });

       
    
        //溯源模型：添加指纹图谱-保存事件
        $("#zhiwenSavebtn").on('click',function(){
            closeTanchu();
        
        });


        //溯源模型：右侧的保存按钮
        $("#suyuanmoxing_rightbarSaveBtn").on('click',function(){
        
            //弹出保存成功
            openTanchu('saveCont2');
        });
})



//通过敏感点，加载污染源列表
var getWuranyuanList = (id) =>{
    var wuranyuanTableHtml = '';
    $.each(wuranwuyuanData,function(index,el){
        if(id == el.mingandianId){
                        wuranyuanTableHtml += `
                            <tr>
                                <td class="td1"><input type="checkbox" name="wuranyuan"></td>
                                <td class="td2"><p class="limit1">{{company}}</p></td>
                                <td class="td3"><p class="limit1">{{type}}</p></td>
                                <td class="td4"><p class="limit1">{{guimo}}</p></td>
                                <td class="td5"><p class="limit1">{{address}}</p></td>
                                <td class="td6"><p class="limit1">{{product}}</p></td>
                                <td class="td7"><p class="limit1">{{material}}</p></td>
                                <td class="td8"><p class="limit1">{{characteristic}}</p></td>
                                <td class="td9"><p class="limit1">{{distance}}</p></td>
                                <td class="td10"><i class="iconfont icon-info" onclick="opensuyuanTanchu('wuranyuanShowcont','{{wryId}}')"></i></td>
                            </tr>`;

                        wuranyuanTableHtml = wuranyuanTableHtml
                                    .replace(/{{company}}/g,el.company)
                                    .replace(/{{type}}/g,el.type)
                                    .replace(/{{guimo}}/g,el.guimo)
                                    .replace(/{{address}}/g,el.address)
                                    .replace(/{{product}}/g,el.product)
                                    .replace(/{{material}}/g,el.material)
                                    .replace(/{{characteristic}}/g,el.characteristic)
                                    .replace(/{{distance}}/g,el.distance)
                                    .replace(/{{wryId}}/g,el.wryId);
        }
           
    });

    $("#wuranyuanList_onsuyuanmoxing").empty().append(wuranyuanTableHtml);

}


//溯源模型 通过id，打开详情层
var opensuyuanTanchu = (id,wuranyuanId) =>{
    $('.coverbg').fadeIn();
    $("#"+id).fadeIn();   
}

