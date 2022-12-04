import React from 'react';
import {Chart as ChartJS,ArcElement,Tooltip,Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import CountUp from 'react-countup';

ChartJS.register(ArcElement,Tooltip);

const data = {
	// labels:['მიმდინარე','დახარჯული'],
	order: 1,
	// tooltips: {
	// 	titleFontSize: 20,
	// 	borderWidth: 2,
	// 	borderColor: "white",
	// 	displayColors: false, /* if true, color boxes are shown in the tooltip */
	// 	/*########### Custom model ###########*/
	// 	custom: function(tooltipModel) {
	// 		/* if data & datasets not empty & tooltip available */
	// 		if (tooltipModel.opacity !== 0 && data.labels.length && data.datasets.length) {
	// 			/* get dataPoints index */
	// 			var index = tooltipModel.dataPoints[0].index;
	// 			/* get dataPoints datasetIndex */
	// 			var dataSetIndex = tooltipModel.dataPoints[0].datasetIndex;
	// 			/* get the current color on index and datasetIndex position */
	// 			var color =  data.datasets[dataSetIndex].backgroundColor[index];
	// 			/* set backgroundColor */
	// 			tooltipModel.backgroundColor = color;
	// 		};
	//
	// 	}
	// },

	datasets:[
		{
			cutout:"75%",
			responsive:true,
			data:[17445,2225],
			backgroundColor:['#9766F0','#F5CE5A'],
			// borderColor:['#ff001e','#ff001e'],
			borderWidth:0,
		},
	],
};

const Donut = () => {
	return <div className={"relative"}>
		<span className={"absolute text-base text-[#383838] left-[50%] top-[50%] -translate-x-[50%] translate-y-[-50%]"}>
			<CountUp duration={1}
			         end={19670}
			         separator=","
			         start={19670 * 0.75}/>
		</span>
		<Doughnut data={data}/>
	</div>;
}

export default Donut;