$(function(){


    //首页-敏感点数据渲染          
    minganSearch('');
    $("#minganIpt").on('keyup',function(){
        var key = $(this).val();
        minganSearch(key);
    });

     //首页-地图上添加默认的点
     var addspot = function(){      
        addMapSpot(minganData[0].id);  //默认在地图上添加第一个敏感点和污染源 
        appendMingan_event(minganData[0].id); //默认填充污染事件详情
        appendSuyuanjieguo(minganData[0].id); //默认填充溯源结果：第一个敏感点的企业列表
       
        $("#echousuyuan_minganData tr").eq(0).addClass('bluebg');  //默认首次点击敏感列表
        map.removeEventListener("tilesloaded",addspot);   
    }
    map.addEventListener("tilesloaded",addspot);  


    //首页-溯源
    $("#suyuanrun").on('click',function(){
        //run        
    });

})



//========================================= 首页函数方法====================================================================
//首页- 敏感点 检索
var minganSearch = (key) =>{
    var echousuyuan_minganHtml = '';
    $.each(minganData,function(index,el){
        var id = el.id;
        var date = el.date;
        var name = el.name;        
        var describe = el.describe;
        if(date.indexOf(key) !=-1 || name.indexOf(key) !=-1 || describe.indexOf(key) !=-1 ){
            echousuyuan_minganHtml += '<tr><td class="data">' + date + '</td><td class="name"  data-id="'+ id +'"><p  class="limit1">' + name + '</p></td><td class="describe"><p class="limit1">' + describe + '</p></td></tr>';                                                                                            
        }else{
            console.log('暂无信息！');
        }        
    });        
    $('#echousuyuan_minganData').empty().append(echousuyuan_minganHtml);   
    
     //首页-列表点击：map
     $("#echousuyuan_minganData .name").on('click',function(){
        $(this).parents('tr').addClass('bluebg').siblings('tr').removeClass('bluebg');       
        var id = $(this).attr('data-id');
        addMapSpot(id); //在地图上添加敏感点和污染源 
        appendMingan_event(id); //通过敏感点id,填充污染事件详情
        appendSuyuanjieguo(id); //通过敏感点id,填充溯源结果
    });

     
}


//首页-敏感点： 在地图上插入敏感点
var addMapSpot = (id) => {       
    //先移除点
    remove_overlay();
    $.each(minganData,(index,el)=>{
        if(id == el.id){
            var name = el.name;
            var jingdu = el.jingdu;
            var weidu = el.weidu;        
            addMarker(id,name,jingdu,weidu,'xing1.png',30,30,1);
            map.centerAndZoom(new BMap.Point(jingdu,weidu),16); 
           
        }
    })

    $.each(wuranwuyuanData,(index,el)=>{
        if(id == el.mingandianId){
            var wryId = el.wryId;
            var company = el.company;
            var jingdu = el.jingdu;
            var weidu = el.weidu;       
            var similarity = el.similarity;
            var icon = 'xing2.png';
            if( similarity > 90){
                icon = 'xing2.png';
            }
            else if(similarity > 80 && similarity <=90){
                icon = 'xing3.png';
            }
            else if(similarity > 60 && similarity <=80){
                icon = 'xing4.png';
            }
            else {
                icon = 'xing5.png';
            }

            addMarker(wryId,company,jingdu,weidu,icon,30,30,1);
            map.setZoom(15);   
        }
    })
    
}


//首页：通过敏感点，加载污染源列表
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

//首页：溯源结果 数据渲染
var appendSuyuanjieguo = (minganId)=>{
    wuranwuyuanData.forEach(function(el,index){
        if(minganId == el.mingandianId){
            console.log(el.wryId);


        }
    });
}