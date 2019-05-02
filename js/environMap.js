var map = null;
var markers = [];
$(function() {
	//创建本页地图
	map = createMap({
		enableMapClick: false,
		mapTypeControl: true
	});
    map.setMapStyle({
        styleJson:[
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": {
                    "color": "#021019"
                }
            },
            {
                "featureType": "highway",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#162c43"
                }
            },
            {
                "featureType": "highway",
                "elementType": "geometry.stroke",
                "stylers": {
                    "color": "#162c43"
                }
            },
            {
                "featureType": "arterial",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#000000"
                }
            },
            {
                "featureType": "arterial",
                "elementType": "geometry.stroke",
                "stylers": {
                    "color": "#0b3d51"
                }
            },
            {//无
                "featureType": "local",
                "elementType": "geometry",
                "stylers": {
                    "color": "#000000"
                }
            },
            {
                "featureType": "land",
                "elementType": "all",
                "stylers": {
                    "color": "#001a32"
                }
            },
            {
                "featureType": "railway",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#000000"
                }
            },
            {
                "featureType": "railway",
                "elementType": "geometry.stroke",
                "stylers": {
                    "color": "#08304b"
                }
            },
            {
                "featureType": "subway",
                "elementType": "geometry",
                "stylers": {
                    "lightness": -70
                }
            },
            {
                "featureType": "building",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#000000"
                }
            },
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#857f7f"
                }
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": {
                    "color": "#000000"
                }
            },
            {
                "featureType": "building",
                "elementType": "geometry",
                "stylers": {
                    "color": "#022338"
                }
            },
            {
                "featureType": "green",
                "elementType": "geometry",
                "stylers": {
                    "color": "#062032"
                }
            },
            {
                "featureType": "boundary",
                "elementType": "all",
                "stylers": {
                    "color": "#1e1c1c"
                }
            },
            {
                "featureType": "manmade",
                "elementType": "geometry",
                "stylers": {
                    "color": "#022338"
                }
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": {
                    "visibility": "off"
                }
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": {
                    "visibility": "off"
                }
            },
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#2da0c6",
                    "visibility": "on"
                }
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": {
                    "color": "#000000",
                    "hue": "#000000",
                    "lightness": 10
                }
            }
        ]
    });
	//showData();

	//地图放大缩小按钮
	$("#zoomIn").on("click", function() {
		map.zoomIn();
	});
	$("#zoomOut").on("click", function() {
		map.zoomOut();
	});
	$(".blockli").on("click",function(){
		$(this).toggleClass("active");
       if(!$(this).hasClass("active")){
           markers[$(this).index()].map(function(entity,inde1){
               map.removeOverlay(entity);
           });
	   }else{
           if($(this).index() == 0){
               getAirList();
           }
           if($(this).index() == 1){
               getWaterPlantList(1);
           }
           if($(this).index() == 2){
               getEntList();
           }
           if($(this).index() == 3){
               getWaterPlantList(2);
           }
	   }
	});
});


//查询事件点位
function showData(){
	getAirList();
	getEntList();
	getWaterPlantList(1);
	getWaterPlantList(2);

}

//创建地图
function createMap(options) {
	var defaults = {
	    center: new BMap.Point(113.885409,22.923791),
		zoom: 15,
		removeTL: true,
		enableMapClick: false,
		mapTypeControl: false
	}
	var opts = $.extend({}, defaults, options);
	//创建地图
	map = new BMap.Map("map", opts);
	//初始化地图,设置中心点坐标和地图级别
	map.centerAndZoom(opts.center, opts.zoom);
	//开启鼠标滚轮缩放
	map.enableScrollWheelZoom(true);
	//开启连续缩放
	map.enableContinuousZoom(true);
	//创建地图比例尺
	//map.addControl(new BMap.ScaleControl({
	//	anchor: BMAP_ANCHOR_BOTTOM_LEFT
	//}));

	/*
	var stCtrl = new BMap.PanoramaControl(); //构造全景控件
	stCtrl.setAnchor(BMAP_ANCHOR_BOTTOM_RIGHT);
	stCtrl.setOffset(new BMap.Size(50, 15));
	map.addControl(stCtrl); //添加全景控件
	*/

	//创建一个点
	// addMarker('1','敏感点',114.292075,22.695412,'xing1.png',30,30,1);
	
	// addMarker('W01','污染源1',   114.299261 , 22.704214      ,'xing4.png',30,30,1);
	// addMarker('W02','污染源2',   114.299261 , 22.70128      ,'xing5.png',30,30,1);
	// addMarker('W03','污染源3',   114.292219 , 22.703681      ,'xing2.png',30,30,1);
	// addMarker('W04','污染源1',   114.287979 , 22.701947      ,'xing3.png',30,30,1);
	// addMarker('W05','污染源2',   114.281655 , 22.687876      ,'xing5.png',30,30,1);
	// addMarker('W06','污染源3',   114.27375  ,   22.693878      ,'xing5.png',30,30,1);
	// addMarker('W06','污染源3',   114.319743 , 22.704948      ,'xing5.png',30,30,1);
	// addMarker('W06','污染源3',   114.319024 , 22.702814      ,'xing5.png',30,30,1);

	




	if(opts.mapTypeControl == true) {
		var mapType = new BMap.MapTypeControl({
			mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP],
			anchor: BMAP_ANCHOR_BOTTOM_LEFT,
			offset: new BMap.Size(80, 50)
		});
		map.addControl(mapType);
	}
	//移除百度logo
	setTimeout(removeMapLogo, 3000);
	//设置地图点击事件
	map.addEventListener("click", function(e) {
		
	});
	//设置指针
	map.setDefaultCursor("default");
	return map;
}
//移除地图组件
function removeMapLogo() {
	$(".pano_close, .pano_pc_indoor_exit").remove();
	$("#zoomer").remove();
	$(".BMap_cpyCtrl").remove();
	$(".anchorBL").find("a").remove();
}



//添加标注点
function addMarker(id,name,longitude,latitude,markerImage,markerWidth,markerHeight,type) {
	markerWidth = markerWidth && markerWidth != null ?markerWidth:15;
	markerHeight = markerHeight  && markerHeight != null?markerHeight:15;
	var markerPoint = new BMap.Point(longitude, latitude);
	var markerImage = "images/"+markerImage;

	var myIcon = new BMap.Icon(markerImage, new BMap.Size(markerWidth,markerHeight));
	var marker = new BMap.Marker(markerPoint,{icon:myIcon});
	
	map.addOverlay(marker);
	
}


//清除覆盖物
function remove_overlay(){
	map.clearOverlays();         
}



//出现小气泡
var labels = [];
function loadPositionLabel(name,longitude,latitude,markerHeight) {
	$.each(labels, function(i,label) {
		label.remove();
	});
	var labelOffset = getMarkerLabelOffset(name.length*18, markerHeight+10);
	var labelContent = "<div class='positionLabel'>" + name + "<div class='max_trangle'></div></div>";
	var labelPoint = new BMap.Point(longitude,latitude);
	//生成详情地图覆盖物对象
	var labelOpts = {
		position: labelPoint,
		offset: labelOffset
	};
	markerLabel = new BMap.Label(labelContent, labelOpts);
	markerLabel.setStyle({
		fontFamily: "微软雅黑",
		border: "0"
	});
	markerLabel.addEventListener("click", function(){
		
	});
	//加载详情
	map.addOverlay(markerLabel);
	labels.push(markerLabel);
}

//计算气泡偏移量
function getMarkerLabelOffset(labelWidth, labelHeight) {
	return new BMap.Size(-(labelWidth / 2), -labelHeight - 30);
}

//判断浏览器是否支持canvas
function isSupportCanvas(){
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
}


//重点污染源监控
function getEntList() {
	$.ajax({
		type: "post",
		url: URLConfig.ENT_POINT,
		data: JSON.stringify({
			longitude: "",
			latitude: "",
			radius: "",
			entName: '',
			level:''
		}),
		dataType: "json",
		contentType: "application/json",
		success: function(result) {
			var entCount = 0;
			if(result.status == 1) {
				entCount = result.result.length;
				$.each(result.result,function(i,entity){
					var markerImage = 'marker_';
					if(entity.creditRatingColor == "绿色") {
						markerImage += "green";
					} else if(entity.creditRatingColor == "蓝色") {
						markerImage += "blue";
					} else if(entity.creditRatingColor == "黄色") {
						markerImage += "moderate";
					} else if(entity.creditRatingColor == "红色") {
						markerImage += "red";
					} else if(entity.creditRatingColor == "黑色") {
						markerImage += "black";
					}else{
						markerImage += "blue";
					}
					markerImage += '.png';
					addMarker(entity.id,entity.entName,entity.longitude,entity.latitude,markerImage,null,null,2);
				});
			}
			$("#entCount").text(entCount);
		}
	});
}



function formatPhone(phone) {
	return phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
}

function formatName(phone) {
	return phone.replace(/.(?=.)/g, '*');
}

function getMonthFirst(fDate){
	var date = stringToDate(fDate);
	date.setDate(1);
	return formatDate(date,'yyyy-MM-dd');
}

function getMonthLast(fDate) {
	var date = stringToDate(fDate);
	var currentMonth = date.getMonth();
	var nextMonth = ++currentMonth;
	var nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
	var oneDay = 1000 * 60 * 60 * 24;
	return formatDate(new Date(nextMonthFirstDay - oneDay),'yyyy-MM-dd');
}

function stringToDate(fDate) {
	var fullDate = fDate.split("-");
	return new Date(fullDate[0], fullDate[1] - 1, fullDate[2], 0, 0, 0);
}

/** 
 * 格式化日期 
 * @param date 日期 
 * @param format 格式化样式,例如yyyy-MM-dd HH:mm:ss E 
 * @return 格式化后的金额 
 */
function formatDate(date, format) {
	var v = "";
	if(typeof date == "string" || typeof date != "object") {
		return;
	}
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
	var weekDay = date.getDay();
	var ms = date.getMilliseconds();
	var weekDayString = "";

	if(weekDay == 1) {
		weekDayString = "星期一";
	} else if(weekDay == 2) {
		weekDayString = "星期二";
	} else if(weekDay == 3) {
		weekDayString = "星期三";
	} else if(weekDay == 4) {
		weekDayString = "星期四";
	} else if(weekDay == 5) {
		weekDayString = "星期五";
	} else if(weekDay == 6) {
		weekDayString = "星期六";
	} else if(weekDay == 7) {
		weekDayString = "星期日";
	}

	v = format;
	//Year 
	v = v.replace(/yyyy/g, year);
	v = v.replace(/YYYY/g, year);
	v = v.replace(/yy/g, (year + "").substring(2, 4));
	v = v.replace(/YY/g, (year + "").substring(2, 4));

	//Month 
	var monthStr = ("0" + month);
	v = v.replace(/MM/g, monthStr.substring(monthStr.length - 2));

	//Day 
	var dayStr = ("0" + day);
	v = v.replace(/dd/g, dayStr.substring(dayStr.length - 2));

	//hour 
	var hourStr = ("0" + hour);
	v = v.replace(/HH/g, hourStr.substring(hourStr.length - 2));
	v = v.replace(/hh/g, hourStr.substring(hourStr.length - 2));

	//minute 
	var minuteStr = ("0" + minute);
	v = v.replace(/mm/g, minuteStr.substring(minuteStr.length - 2));

	//Millisecond 
	v = v.replace(/sss/g, ms);
	v = v.replace(/SSS/g, ms);

	//second 
	var secondStr = ("0" + second);
	v = v.replace(/ss/g, secondStr.substring(secondStr.length - 2));
	v = v.replace(/SS/g, secondStr.substring(secondStr.length - 2));

	//weekDay 
	v = v.replace(/E/g, weekDayString);
	return v;
}


