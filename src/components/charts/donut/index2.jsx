// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { Pie, measureTextWidth } from '@ant-design/plots';
//
// const Donut = () => {
// 	function renderStatistic(containerWidth, text, style) {
// 		const { width: textWidth, height: textHeight } = measureTextWidth(text, style);
// 		const R = containerWidth / 2; // r^2 = (w / 2)^2 + (h - offsetY)^2
//
// 		let scale = 1;
//
// 		if (containerWidth < textWidth) {
// 			scale = Math.min(Math.sqrt(Math.abs(Math.pow(R, 2) / (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2)))), 1);
// 		}
//
// 		const textStyleStr = `width:${containerWidth}px;`;
// 		return `<div style="${textStyleStr};font-size:${scale}em;line-height:${scale < 1 ? 1 : 'inherit'};">${text}</div>`;
// 	}
//
// 	const data = [
// 		{
// 			type: 'მიმდინარე',
// 			value: 17445,
// 		},
// 		{
// 			type: 'დახარჯული',
// 			value: 2225,
// 		},
//
// 	];
// 	const config = {
// 		data,
// 		autoFit:true,
// 		padding:0,
// 		color: ['#9766F0', '#F5CE5A'],
// 		angleField: 'value',
// 		colorField: 'type',
// 		legend: false,
// 		radius: 1,
// 		innerRadius: 0.74,
// 		meta: {
// 			value: {
// 				formatter: (v) => `${v}`,
// 			},
// 		},
// 		label:false,
// 		// label: {
// 		//   type: 'inner',
// 		//   offset: '-50%',
// 		//   style: {
// 		//     textAlign: 'center',
// 		//   },
// 		//   autoRotate: false,
// 		//   content: '{value}',
// 		// },
// 		statistic: {
// 			title: {
// 				offsetY: -4,
// 				customHtml: (container, view, datum) => {
// 					const { width, height } = container.getBoundingClientRect();
// 					const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
// 					const text = datum ? datum.type :'';
// 					return renderStatistic(d, text, {
// 						fontSize:18,
// 					});
// 				},
// 			},
//
// 			content: {
// 				offsetY: -7,
// 				style: {
// 					fontSize: '18px',
// 				},
// 				customHtml: (container, view, datum, data) => {
// 					const { width } = container.getBoundingClientRect();
// 					const text = datum ? `${datum.value}` : `${data.reduce((r, d) => r + d.value, 0)}`;
// 					return renderStatistic(width, text, {
// 						fontSize: 18,
// 					});
// 				},
// 			},
// 		},
// 		// 添加 中心统计文本 交互
// 		interactions: [
// 			// {
// 			//   type: 'element-selected',
// 			// },
// 			// {
// 			//   type: 'element-active',
// 			// },
// 			// {
// 			//   type: 'pie-statistic-active',
// 			// },
// 		],
// 	};
// 	return <Pie {...config} />;
// };
//
//
// export default  Donut;