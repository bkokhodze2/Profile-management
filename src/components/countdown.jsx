import useCountdown from "../utils/hooks/useCountdown";

export default function CountDown(){
	const countDownDate = new Date("Feb 27, 2023 00:00:01").getTime();
	const [days,hours,minutes,seconds] = useCountdown(countDownDate);

	const startDate = new Date("Feb 1, 2023 00:00:01").getTime();
	const endDate = new Date("Feb 27, 2023 00:00:01").getTime();
	const currentDate = new Date().getTime();

	//time percents
	let x0 = currentDate - startDate;
	let x1 = endDate - startDate;
	let total = (x0 / x1) * 100;

	return <div className={"countdown"}>
		<div className={"backgroundC"}></div>
		<div className={"birds"}>
			<div className={"bird_1"}>
				<img src="https://i.imgur.com/Ry6ziNr.png" alt={"bird1"}/>
			</div>
			<div className={"bird_2"}>
				<img src="https://i.imgur.com/dByVPCO.png" alt={"bird2"}/>
			</div>
		</div>
		<div className={"content"}>
			<div className={"header"}>
				<h2>გინდა გაიგო რას გიმზადებთ?</h2>
			</div>
			<div className={"countDownComponent"}>
				<div className={"days countBlock"}>
					<h3>{days}</h3>
					<span>დღე</span>
				</div>
				<div className={"to"}></div>
				<div className={"hours countBlock"}>
					<h3>{hours}</h3>
					<span>საათი</span>
				</div>
				<div className={"to"}></div>
				<div className={"minutes countBlock"}>
					<h3>{minutes}</h3>
					<span>წუთი</span>
				</div>
				<div className={"to"}></div>
				<div className={"seconds countBlock"}>
					<h3>{seconds}</h3>
					<span>წამი</span>
				</div>
			</div>
			<div className={"countDownBar"}>
				<div className={"countDonwBird"} style={{left:`${total - 1}%`}}></div>
				<div className={"countDownBarProgress"} style={{width:`${total}%`}}></div>
				<div className={"countDownBarBtn"} style={{left:`${total}%`}}></div>
			</div>
			<div className={"countDownInfo"}>
                    <span>
                        დაელოდე 27 თებერვალს და იყავი პირველი!
                    </span>
			</div>
		</div>
	</div>
}

