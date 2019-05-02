/**
 * 服务器配置 
 */
var ServerConfig = {
//	url:"http://36.110.115.116:8082/lsnt/",//服务地址
//	url:"http://www.isspm25.com/nt/",//服务地址 - 测试
//	url:"http://localhost:80/webconsole/",//服务地址 - 测试
//	url:"http://localhost:8080/webconsole/",//服务地址 - 测试
//	url:"http://10.16.82.64:80/webconsole/",//服务地址 - 王皓本地
	url:"http://114.115.158.187:8080/ht/",//服务地址 - 131
	appKey:"",//appkey
	roleType : "government",
	epMap:"http://114.115.158.187:8080/ht/jsp/map/epMap.html",
}
var URLConfig = {
	
	//近五年酸雨频率
	RAIN_FULL_URL : ServerConfig.url+"/rest/prAir/getRainfullData",
	//获取近五年空气优良天数占比
	PROPORTION_DATA_URL : ServerConfig.url+"/rest/prAir/getAirProportionData",
	//	空气质量24小时数据
	LEADER_AIRHOURDATA_URL : ServerConfig.url + "/rest/olAirAqi/getOlAirAqiRealreportHourData",
	//	今天空气质量
	TODAY_AIRDATA_URL : ServerConfig.url + "/rest/olAirAqi/getOlAirAqiRealreport",
	//	查询环境空气质量等级状况数据
	AIR_LECEL_URL : ServerConfig.url + "/rest/prAir/getAirLevel",
	//	空气优良天数占比
	AIR_COLUMN_URL : ServerConfig.url + "/rest/prAir/getCityAirProportionData",
	//	城镇酸雨统计
	RAIN_FULLDATA_URL : ServerConfig.url + "/rest/prAir/getCityRainfullData",
	//	城镇环境空气主要污染指标检测结果
	AIR_MONITOR_DATA : ServerConfig.url + "/rest/prAir/getAirMonitorData",
	//	各个事项名称许可量
	ITEM_COUNT_DATA : ServerConfig.url + "/rest/applyresult/getItemCount",
	//	各个部门审批数量
	APPLY_DEPT_COUNT : ServerConfig.url + "/rest/applyresult/getDepCount",
	//	处理结果数量（准予许可，不予受理，不予许可）
	APPLY_RESULT_COUNT : ServerConfig.url + "/rest/applyresult/getResultCount",
	//	许可审批总量
	APPLY_PASS_COUNT : ServerConfig.url + "/rest/applyresult/getApplyCount",
	//	审批企业总量
	APPLY_ENT_COUNT : ServerConfig.url + "/rest/applyresult/getEntCount",
	//	近五年审批总数对比
	APPLY_FIVE_YEAR_COUNT : ServerConfig.url + "/rest/applyresult/getApplyResult",
	//	近五年审批通过率对比
	APPLY_FIVE_YEAR_PASS_RESULT : ServerConfig.url + "/rest/applyresult/getApplyPassResult",
	//	近五年国控企业各个信用评级
	APPLY_FIVE_YEAR_ENT_RESULT: ServerConfig.url + "/rest/applyresult/getApplyEntResult",
	//	全县工业固体废物产生量
	WASTE_SOLID_DATA: ServerConfig.url + "/rest/prSolid/getWasteSolid",
	//	全县、县区污水排放量 以及主要污染物(1、全县 2、县区)
	WATER_INDUSTRIAL_DATA: ServerConfig.url + "/rest/prWater/getWaterIndustrial",
	//	行政审批详情
	APPLY_RESULT_DATA: ServerConfig.url + "/rest/applyresult/getApplyData",
	//	获取某年的移动执法总量
	LAW_COUNT:ServerConfig.url + "/rest/lawReport/getLawCount",
	//	获取某年的移动执法类型占比
	LAW_BODY:ServerConfig.url + "/rest/lawReport/getLawBody",
	//	获取某年12个月的移动执法统计量
	LAW_MONTH:ServerConfig.url + "/rest/lawReport/getLawMonth",
	//	获取某年每个部门的移动执法统计量
	LAW_DEPARTMENT:ServerConfig.url + "/rest/lawReport/getLawDepartment",
	//	获取最近五年的移动执法总量
	LAW_FIVE_COUNT:ServerConfig.url + "/rest/lawReport/getLawFiveCount",
	//	获取近五年各个执法部门执法量对比
	LAW_FIVE_DEPARTMENT:ServerConfig.url + "/rest/lawReport/getLawFiveDepartmentCount",
	//	水环境质量饮用水源水质
	WATER_WORKS_DATA:ServerConfig.url + "/rest/prWater/getWaterWorksData",
	//	获取某年国控企业评级颜色数量
	RATING_COUNT:ServerConfig.url +'/rest/ratingReport/getRatingCount',
	//	获取各个评级颜色的国控企业五年数量
	RATING_FIVE_COLOR:ServerConfig.url +'/rest/ratingReport/getRatingFiveColor',
	//	获取五年的国控企业评级颜色数量
	RATING_FIVE_YEAR:ServerConfig.url +'/rest/ratingReport/getRatingFiveYear',
	//	获取国控企业评级列表
	RATING_LIST:ServerConfig.url +'/rest/ratingReport/getRatingList',
	//	获取功能区昼夜噪声
	NOISE_FUNCTION_DATA:ServerConfig.url +'/rest/prNoise/getNoiseFunctionData',
	//	获取交通干线噪声
	NOISE_TRAFFIC_DATA:ServerConfig.url +'/rest/prNoise/getNoiseTrafficData',
	//	区域环境噪声
	NOISE_AREA_DATA:ServerConfig.url +'/rest/prNoise/getNoiseAreaData',
	//	内河水质
	WATER_INLAND_DATA:ServerConfig.url +'/rest/prWater/getWaterInlandData',
	//	饮用水质
	WATER_WORKS_DATA:ServerConfig.url +'/rest/prWater/getWaterWorksData',
	//	长江水质
	WATER_CHANGJIANG_DATA:ServerConfig.url +'/rest/prWater/getWaterChangJiangData',
	//	濠河水质
	WATER_HAOHE_DATA:ServerConfig.url +'/rest/prWater/getWaterHaoheData',
	//	根据地区获取检测站点
	VEHICLE_STATION:ServerConfig.url +'/rest/vehicleReport/getVehicleStationInfo',
	//	获取检测站数量和检测数量以及合格与不合格数量
	VEHICLE_INFO:ServerConfig.url +'/rest/vehicleReport/getVehicleInfo',
	//	获取检测站检测量降序或正序排名前6
	VEHICLE_STATION_ORDER:ServerConfig.url +'/rest/vehicleReport/getVehicleStationOrder',
	//	获取各个区域检测站数量
	VEHICLE_STATION_REGION:ServerConfig.url +'/rest/vehicleReport/getVehicleStationRegion',
	//	获取近五年检测量合格与不合格
	VEHICLE_INFO_FIVE:ServerConfig.url +'/rest/vehicleReport/getVehicleInfoFive',
	//	获取各个地区机动车检测量合格量与检测量
	VEHICLE_COUNT_REGION:ServerConfig.url +'/rest/vehicleReport/getVehicleCountByRegion',
	//	生态指数
	ECOLOGICAL_DATA :ServerConfig.url +'/rest/prEcological/getEcologicalData',
	//	根据时间段查询263专项行动列表
	SPRCIALACTION_LIST :ServerConfig.url +'/rest/specialActionController/getSpecialActionByTime',
	//	根据ID查询263专项行动
	SPRCIALACTION_DATA :ServerConfig.url +'/rest/specialActionController/getSpecialActionById',
	//	工业废气
	WASTE_GAS_DATA :ServerConfig.url +'/rest/prAir/getWasteGasData',
	//	空气质量历史演进 
	AIR_AQI_DATA :ServerConfig.url +'/rest/aqiReport/getOlAirRegionDayData',
	//	生活污水
	WASTE_WATER_DOMESTIC_DATA :ServerConfig.url +'/rest/prWater/getWasteWaterDomestic',
	//	数据传输达标情况
	STANDARD_DATA :ServerConfig.url +'/rest/prEffective/getStandardData',
	//	重点污染源传输有效率
	MONITOR_EFFECTIVE_DATA :ServerConfig.url +'/rest/prEffective/getMonitorEffective',
	//	重点污染源信息
	ENTINFO_DATA :ServerConfig.url +'/rest/prEffective/getEntInfoData',
	//	重点污染源信息 排口列表
	POLLUT_DATA :ServerConfig.url +'/rest/prEffective/getPollutData',
	//	删除模块
	DELETE_MODEL_DATA :ServerConfig.url +'/rest/prEmer/deleteEmerData',
	//	近五年全县环境信访量
	MASS_COUNT :ServerConfig.url +'/rest/prEffective/getMassCount',
	//	全县各污染类型信访量
	PLLUTION_TYPE_COUNT :ServerConfig.url +'/rest/prEffective/getPllutionTypeCount',
	//	全县区县信访量
	REGION_COUNT :ServerConfig.url +'/rest/prEffective/getRegionCount',
	//	近五年举报方式数量
	COMPLAIN_TYPE_COUNT :ServerConfig.url +'/rest/prEffective/getComplainTypeCount',
	//	近五年处室信访数量
	OFFICE_EFFEC_COUNT :ServerConfig.url +'/rest/prEffective/getOfficeCount',
	//	近五年处室信访数量前五
	OFFICE_FIVE_EFFEC_COUNT :ServerConfig.url +'/rest/prEffective/getFiveOfficeCount',
	//	功能区列表
	EMER_LIST_DATA :ServerConfig.url +'/rest/prEmer/getEmerData',
	//	删除功能区
	DELETE_MODEL_DATA :ServerConfig.url +'/rest/prEmer/deleteEmerData',
	//	启用功能区
	OPEN_MODEL_DATA :ServerConfig.url +'/rest/prEmer/openTempType',
	//	编辑功能区
	UPDATE_MODEL_DATA :ServerConfig.url +'/rest/prEmer/insertOrUpdateEmerData',
	//	获取功能区缩略图
	IMAGE_DATA :ServerConfig.url +'/rest/prEmer/getModelImg',
	//	获取所有功能区缩略图
	MODEL_IMAGE_DATA :ServerConfig.url +'/rest/prEmer/getAllModelImg',
	//	编辑功能区
	EMER_OPEN_DATA :ServerConfig.url +'/rest/prEmer/getIsOpenModel',
	//	查询一天的监控告警列表
	OL_ALARM_LIST :ServerConfig.url +'/rest/olAlarm/getOlAlarmList',
	//	查询一天的监控告警图表
	OL_ALARM_CHARTS :ServerConfig.url +'/rest/olAlarm/getOlAlarmCharts',
	//	查询每个点位的最新监控告警数据
	OL_ALARM_LAST :ServerConfig.url +'/rest/olAlarm/getLastAlarm',
	//	查询一天的企业监控告警列表
	ENT_ALARM_LIST :ServerConfig.url +'/rest/olAlarm/getEntAlarmList',
	//	查询一天的企业监控告警图表
	ENT_ALARM_CHARTS :ServerConfig.url +'/rest/olAlarm/getEntAlarmCharts',
	//	查询每个企业的最新监控告警数据
	ENT_ALARM_LAST :ServerConfig.url +'/rest/olAlarm/getEntLastAlarm',
	//	系统用户量展示
	SYS_USER_COUNT :ServerConfig.url +'/rest/prEmer/getSystemUser',
	//	月度活跃用户
	ACTIVE_USER_COUNT :ServerConfig.url +'/rest/prEmer/getActiveSystemUser',
	//	南通各区举报数据
	NANTONG_REGION_COUNT :ServerConfig.url +'/rest/complainCount/getComplainCountByArea',
	//	南通各类污染举报数据
	NANTONG_POLL_COUNT :ServerConfig.url +'/rest/complainCount/getComplainCountByType',
	//	南通角色举报数据
	NANTONG_ROLE_COUNT :ServerConfig.url +'/rest/complainCount/getComplainCountByRole',
	//	空气质量监测站实时监测数据
	AIR_REAL_DATA :ServerConfig.url +'/rest/olAirAqi/getOlAirAqiHourRealdataList',
	//	获取水环境质量-水质监测站点列表    
	WATER_STATION_DATA :ServerConfig.url +'/rest/prWater/getWaterStationList',
	//	水断面自动监测
	RIVER_SECTION_DATA :ServerConfig.url +'/rest/prWater/getRiverSectionList',
	//	噪声实时监测
	NOISE_DAY_DATA :ServerConfig.url +'/rest/prNoise/getOlNoiseDayDataList',
	//	空气质量监测站
	AIR_POINT :ServerConfig.url +'/rest/entInfo/getSiteInfoList',
	//	获取1饮用水源地、2污水处理厂和3沿江排口列表
	WATER_PLANT_POINT :ServerConfig.url +'/rest/waterPlant/getOlWaterPlantListByType',
	//	重点污染源监控
	ENT_POINT :ServerConfig.url +'/rest/entInfo/getEntList'
}

/**
 * 用户登录访问地址 
 */
var LoginConfig = {
	url:ServerConfig.url + "/rest/Login/login",
	urlForHuaGang:ServerConfig.url + "/rest/LoginForHuaGang/login",
}
/**
 * 前端调用插件 
 */
var HtmlConfig = {
	url:location.href.substring(0,location.href.lastIndexOf("/")),
}

//公报公用数据定义
var DataConfig = {
	lastYear:new Date().getFullYear() - 1,
	currYear:new Date().getFullYear() 
}
