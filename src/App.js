import './App.css';
import {useState} from "react";
import {useSpring, animated, interpolate} from 'react-spring'

const helpURL = "https://support.google.com/chrome/answer/95314?co=GENIE.Platform%3DDesktop&hl=fa#zippy=%2C%D8%A8%D8%A7%D8%B2-%DA%A9%D8%B1%D8%AF%D9%86-%DB%8C%DA%A9-%D9%85%D8%AC%D9%85%D9%88%D8%B9%D9%87-%D8%A7%D8%B2-%D8%B5%D9%81%D8%AD%D9%87%D9%87%D8%A7%DB%8C-%D8%AE%D8%A7%D8%B5";
const emailURL = "mailto:toutounchi.ma@gmail.com";

function BigItem(props) {
	const [isHover, setIsHover] = useState(false)
	const itemsProps = useSpring({
		config: {duration: 500},
		from: {
			opacity: 0,
			// marginRight: 0,
			// marginLeft: 0,
			// width: 0,
		},
		// marginRight: 100,
		// marginLeft: 100,
		opacity: 1,
		// width: 300,
	})

	return (
		<animated.div
			className={isHover ? "big-item hover" : "big-item"}
			style={itemsProps}
			onMouseOver={() => {
				setIsHover(true)
			}}
			onMouseLeave={() => {
				setIsHover(false)
			}}>
			{isHover ?
				<a href={props.url} target={'_blank'}>
					{props.url_text}
				</a>
				:	props.text

			}
		</animated.div>

	)
}

function App() {
	const longFade = useSpring({
		from: {opacity: 0},
		config: {duration: 20000},
		opacity: 1,
	})
	const shortFade = useSpring({
		from: {opacity: 0},
		config: {duration: 2000},
		opacity: 1,
	})

	return (
		<div className="App">
			<div className='days'>
				<animated.div
					className='days_number'
					style={longFade}
				>
					{getNumber()}
				</animated.div>
				<animated.div className='desc'
							  style={longFade}
				>
					روز تا کنکور
				</animated.div>
			</div>
			<div className='big_items_container'>
			<BigItem
				text={new Date().toLocaleDateString('fa-IR')}
				url={emailURL}
				url_text={"نظرت؟"}
			/>
			<BigItem
				text={getDay()}
				url={helpURL}
				url_text={"تنظیم به عنوان پیش فرض"}
			/>

			</div>
			<animated.div className='quote'
						  style={shortFade}
			>
				دووم بیار!
			</animated.div>
		</div>
	);
}

function getDay() {
	let day = new Date().getDay()
	let result = "";
	if (day === 0) {
		result = "یک شنبه"
	}
	if (day === 1) {
		result = "دو شنبه"
	}
	if (day === 2) {
		result = "سه شنبه"
	}
	if (day === 3) {
		result = "چهار شنبه"
	}
	if (day === 4) {
		result = "پنج شنبه"
	}
	if (day === 5) {
		result = "جمعه"
	}
	if (day === 6) {
		result = "شنبه"
	}
	return result;
}

function getNumber() {
	// TODO it's a shitty way to do it. It Should be fixed.
	let konkur_day = new Date('2021-07-01')
	let today = new Date()
	let mounts = konkur_day.getMonth() - today.getMonth()
	let days = konkur_day.getDate() - today.getDate()
	let result = mounts * 31 + days - 8
	result = toPersianNumber(result + "")
	result = toPersianNumber(result + "")
	result = toPersianNumber(result + "")
	return result
}

function toPersianNumber(number) {
	number = number.replace('0', '۰')
	number = number.replace('1', '۱')
	number = number.replace('2', '۲')
	number = number.replace('3', '۳')
	number = number.replace('4', '۴')
	number = number.replace('5', '۵')
	number = number.replace('6', '۶')
	number = number.replace('7', '۷')
	number = number.replace('8', '۸')
	number = number.replace('9', '۹')
	return number
}

export default App;
