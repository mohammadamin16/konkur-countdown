import './App.css';

function App() {
	return (
		<div className="App">
			<div className='days'>
				<div className='days_number'>
					{getNumber()}
				</div>
				<div className='desc'>
					روز تا کنکور
				</div>
			</div>
			<div className='big_items_container'>
				<div className='big-item'>
					{new Date().toLocaleDateString('fa-IR')}
				</div>
				<div className='big-item'>
					شنبه
				</div>
			</div>
			<div className='quote'>
				دووم بیار!
			</div>
		</div>
	);
}


function getNumber() {
	// TODO it's a shitty way to do it. It Should be fixed.
	let konkur_day = new Date('2021-07-01')
	let today  = new Date()
	console.log(today)
	console.log(konkur_day)
	let mounts = konkur_day.getMonth() - today.getMonth()
	console.log(mounts)
	let days   = konkur_day.getDate() - today.getDate()
	console.log(days)
	let result = mounts * 31 + days - 8
	console.log(result)
	result = toPersianNumber(result + "")
	result = toPersianNumber(result + "")
	result = toPersianNumber(result + "")
	return result
}

function toPersianNumber(number){
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
