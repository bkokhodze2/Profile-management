import React,{useEffect,useState} from 'react';
import {Chart as ChartJS,ArcElement,Tooltip,Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import CountUp from 'react-countup';
import {useSelector} from "react-redux";

ChartJS.register(ArcElement,Tooltip);

const Donut = () => {
	const userInfo = useSelector((state) => state.user.userInfo);
	const [currentPoints,setCurrentPoints] = useState(0);
	const [spentPoints,setSpentPoints] = useState(0);

	useEffect(() => {
		setCurrentPoints(userInfo?.accountDetail?.amountOfPoint?.amountOfPoints)
		setSpentPoints(userInfo?.accountDetail?.amountOfSpentPoints?.amountOfSpentPoints)
	},[userInfo])


	const data = {
		// labels:['მიმდინარე','დახარჯული'],
		order:1,

		datasets:[
			{
				cutout:"75%",
				responsive:true,
				data:[currentPoints,spentPoints],
				backgroundColor:['#9766F0','#F5CE5A'],
				// borderColor:['#ff001e','#ff001e'],
				borderWidth:0,
			},
		],
	};


	return <div className={"relative"}>
		<span className={"absolute text-base text-[#383838] left-[50%] top-[50%] -translate-x-[50%] translate-y-[-50%]"}>
			<CountUp duration={1}
			         end={currentPoints + spentPoints}
			         separator=","
			         start={(currentPoints + spentPoints) * 0.75}/>
		</span>
		<Doughnut data={data}/>
	</div>;
}

export default Donut;