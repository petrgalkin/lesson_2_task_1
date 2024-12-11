import logo from './logo.svg';
import styles from './App.module.css';
import { createElement } from 'react';
import { useState } from 'react';

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');

	const isValueVaild = value.length < 3 ? false : true;

	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение').trim();
		if (promptValue.length < 3) {
			setError('error');
		} else {
			setValue(promptValue);
			setError('');
		}
	};

	const options = {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
	};

	const onAddButtonClick = () => {
		if (isValueVaild) {
			const updatedList = [
				...list,
				{
					id: Date.now(),
					value: value,
					date: new Date().toLocaleTimeString('ru', options),
				},
			];
			setList(updatedList);
			setValue('');
			setError('');
		}
	};

	return (
		<div className={styles.app}>
			<h1 className={styles.pageHeading}>Ввод значения</h1>
			<p className={styles.noMarginText}>
				Текущее значение <code>value</code>: "
				<output className={styles.currentValue}>{value}</output>"
			</p>
			{error !== '' && (
				<div className={styles.error}>
					Введенное значение должно содержать минимум 3 символа
				</div>
			)}
			<div className={styles.buttonsContainer}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={styles.button}
					disabled={!isValueVaild}
					onClick={onAddButtonClick}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles.listContainer}>
				<h2 className={styles.listHeading}>Список:</h2>
				{list.length === 0 && (
					<p className={styles.noMarginText}>Нет добавленных элементов</p>
				)}
				<ul className={styles.list}>
					{list.map((item) => (
						<li className={styles.listItem} key={item.id}>
							{item.value} - {item.date}
						</li>
					))}
				</ul>
			</div>
		</div>
	);

	// (
	// 	createElement('p', { className: 'red' }, 'Hello Petr');
	// 	<div className="App">
	// 		<header className="App-header">
	// 			<img src={logo} className="App-logo" alt="logo" />
	// 			<p>
	// 				Edit <code>src/App.js</code> and save to reload 2.
	// 			</p>
	// 			<a
	// 				className="App-link"
	// 				href="https://reactjs.org"
	// 				target="_blank"
	// 				rel="noopener noreferrer"
	// 			>
	// 				Learn React
	// 			</a>
	// 		</header>
	// 	</div>
	// );

	//

	// <div class="app">
	// <h1 class="page-heading">Ввод значения</h1>
	// <p class="no-margin-text">
	//   Текущее значение <code>value</code>: "<output class="current-value"></output>"
	// </p>
	// <div class="error">Введенное значение должно содержать минимум 3 символа</div>
	// <div class="buttons-container">
	//   <button class="button">Ввести новое</button>
	//   <button class="button" disabled>Добавить в список</button>
	// </div>
	// <div class="list-container">
	//   <h2 class="list-heading">Список:</h2>
	//   <p class="no-margin-text">Нет добавленных элементов</p>
	//   <ul class="list">
	// 	<li class="list-item">Первый элемент</li>
	//   </ul>
	// </div>
	// </div>
};
