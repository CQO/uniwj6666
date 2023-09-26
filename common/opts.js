const opts = {
	"type": "candle",
	"canvasId": "",
	"canvas2d": false,
	"background": "none",
	"animation": true,
	"timing": "easeOut",
	"duration": 1000,
	"color": [
		"#1890FF",
		"#91CB74",
		"#FAC858",
		"#EE6666",
		"#73C0DE",
		"#3CA272",
		"#FC8452",
		"#9A60B4",
		"#ea7ccc"
	],
	"padding": [
		15,
		15,
		0,
		15
	],
	"rotate": false,
	"errorReload": true,
	"fontSize": 13,
	"fontColor": "#666666",
	"enableScroll": true,
	"touchMoveLimit": 60,
	"enableMarkLine": true,
	"dataLabel": false,
	"dataPointShape": true,
	"dataPointShapeType": "solid",
	"tapLegend": true,
	"xAxis": {
		"disabled": false,
		"axisLine": true,
		"axisLineColor": "#CCCCCC",
		"calibration": false,
		"fontColor": "#666666",
		"fontSize": 13,
		"rotateLabel": false,
		"labelCount": 4,
		"itemCount": 40,
		"boundaryGap": "center",
		"disableGrid": true,
		"gridColor": "#CCCCCC",
		"gridType": "solid",
		"dashLength": 4,
		"gridEval": 1,
		"scrollShow": true,
		"scrollAlign": "left",
		"scrollColor": "#A6A6A6",
		"scrollBackgroundColor": "#EFEBEF",
		"format": ""
	},
	"yAxis": {
		"disabled": false,
		"disableGrid": false,
		"splitNumber":10,
		"gridType": "solid",
		"dashLength": 8,
		"gridColor": "#CCCCCC",
		"padding": 10,
		"showTitle": false,
		"data": [{
			"type": "value",
			"position": "left",
			"disabled": false,
			"axisLine": true,
			"axisLineColor": "#CCCCCC",
			"calibration": false,
			"fontColor": "#666666",
			"fontSize": 13,
			"textAlign": "right",
			"title": "",
			"titleFontSize": 13,
			"titleOffsetY": 0,
			"titleOffsetX": 0,
			"titleFontColor": "#666666",
			"min": null,
			"max": null,
			"tofix": 3,
			"unit": "",
			"format": ""
		}]
	},
	"legend": {
		"show": false,
		"position": "bottom",
		"float": "center",
		"padding": 5,
		"margin": 5,
		"backgroundColor": "rgba(0,0,0,0)",
		"borderColor": "rgba(0,0,0,0)",
		"borderWidth": 0,
		"fontSize": 13,
		"fontColor": "#666666",
		"lineHeight": 11,
		"hiddenColor": "#CECECE",
		"itemGap": 10
	},
	"extra": {
		"candle": {
			"color": {
				"upLine": "#f04864",
				"upFill": "#f04864",
				"downLine": "#2fc25b",
				"downFill": "#2fc25b"
			},
			"average": {
				"show": true,
				"name": [
					"MA5",
					"MA10",
					"MA30"
				],
				"day": [
					5,
					10,
					20
				],
				"color": [
					"#1890ff",
					"#2fc25b",
					"#facc14"
				]
			}
		},
		"tooltip": {
			"showBox": true,
			"showArrow": true,
			"showCategory": false,
			"borderWidth": 0,
			"borderRadius": 0,
			"borderColor": "#000000",
			"borderOpacity": 0.7,
			"bgColor": "#000000",
			"bgOpacity": 0.7,
			"gridType": "solid",
			"dashLength": 4,
			"gridColor": "#CCCCCC",
			"fontColor": "#FFFFFF",
			"splitLine": true,
			"horizentalLine": false,
			"xAxisLabel": false,
			"yAxisLabel": false,
			"labelBgColor": "#FFFFFF",
			"labelBgOpacity": 0.7,
			"labelFontColor": "#666666"
		},
		"markLine": {
			"type": "dash",
			"dashLength": 5,
			"data": [{
					"value": 2150,
					"lineColor": "#f04864",
					"showLabel": true
				},
				{
					"value": 2350,
					"lineColor": "#f04864",
					"showLabel": true
				}
			]
		}
	}
}
export default {
	opts
}
