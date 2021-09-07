import './App.css';
import React, { useState, useEffect } from 'react';



function App() {
	const [date, setDate] = useState()


	function task1() {
		fetch('http://phpproject.ru/api.php/1', {
			method: 'POST',
			header: {
				'Content-type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify({action: 1})
		})
		.then(response=>response.text())
		.then(date => setDate(date))
	}

	function task2(event) {
		event.preventDefault()
		const formData = Object.fromEntries(new FormData(event.target).entries());
		console.log(formData)
		const num1 = formData.num1;
		const num2 = formData.num2;
		console.log(num1, num2)
	}

	function task3(event) {

	}

	function task4(event) {

	}

	function task5(event) {

	}

	return (
		<div>
			<h1>ItGid.info</h1>
			{/* <p>{text}</p> */}
			<hr />
			<div>
				<h2>Время сервера</h2>
				<button onClick={task1}>GET</button>
				<p>{date}</p>
			</div>
			<hr />
			<div>
				<h2>Случайное число между</h2>
				<form action="" onSubmit={task2}>
					<div><input type="number" name="num1" defaultValue="30" /></div>
					<div><input type="number" name="num2" defaultValue="44" /></div>
					<button type="sumbit">Push</button>
				</form>
				<p></p>
			</div>
			<hr />
			<div>
				<h2>Создание файла</h2>
				<form action="" onSubmit={task3}>
					<div><input type="text" name="filename" /></div>
					<div><input type="text" name="filedata" /></div>
					<button type="sumbit">Push</button>
				</form>
				<p></p>
			</div>
			<hr />
			<div>
				<h2>Получение данных компьютера</h2>
				<form action="" onSubmit={task4}>
					<button type="sumbit">Push</button>
				</form>
				{/* <p>{t4}</p> */}
				<hr/>
				<div>
				<h2>Получение курса валют</h2>
				<form action="" onSubmit = {task5}>
				<button type ="sumbit">Push</button>
				</form>
				<ul></ul>
				</div>
				</div>
			</div>
			);
}

			export default App;
