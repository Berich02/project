
var ec_left1 = echarts.init(document.getElementById('left1'), "dark");

var ec_left1_Option = {
	//标题样式
	title: {
		text: "随机4个省份增长趋势",
		textStyle: {
			// color: 'white',
		},
		left: 'left',
	},
	tooltip: {
		trigger: 'axis',
		//指示器
		axisPointer: {
			type: 'line',
			lineStyle: {
				color: '#7171C6'
			}
		},
	},
	legend: {
		data: ['山东省', '河北省', "江西省", "四川省"],
		left: "right",
		top:25
	},

	//图形位置
	grid: {
		left: '4%',
		right: '6%',
		bottom: '4%',
		top: 50,
		containLabel: true
	},
	xAxis: [{
		type: 'category',
		//x轴坐标点开始与结束点位置都不在最边缘
		// boundaryGap : true,
		data: []
	}],
	yAxis: [{
		type: 'value',
		//y轴字体设置
		axisLabel: {
			show: true,
			color: 'white',
			fontSize: 12,
			formatter: function(value) {
				if (value >= 1000) {
					value = value / 1000 + 'k';
				}
				return value;
			}
		},
		//y轴线设置显示
		axisLine: {
			show: true
		},
		//与x轴平行的线样式
		splitLine: {
			show: true,
			lineStyle: {
				color: '#17273B',
				width: 1,
				type: 'solid',
			}
		}
	}],
	series: [{
		name: "山东省",
		type: 'line',
		smooth: true,
		data: []
	}, {
		name: "河北省",
		type: 'line',
		smooth: true,
		data: []
	},
		{
		name: "江西省",
		type: 'line',
		smooth: true,
		data: []
	}, {
		name: "四川省",
		type: 'line',
		smooth: true,
		data: []
	}]
};
ec_left1.setOption(ec_left1_Option)
