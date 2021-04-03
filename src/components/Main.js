import React from 'react';
import './styles/component.css';

var requestOptions = {
	method: 'GET',
	mode:'cors',
	headers: ("Access-Control-Allow-Methods: GET, POST, HEAD, OPTIONS, PUT, DELETE, PATCH")
  };

class Main extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
		  error: null,
		  isLoaded: false,
		  items: []
		};
	  }

	componentDidMount() {
		fetch("https://hr.peterpartner.net/test/android/v1/users.json", requestOptions)
			.then(
				(response) => {
					response.text();
					console.log(response);
				},
				(result) => {
					console.log('Готово');
					this.setState({
						isLoaded: true,
						items: result.items
					});
				},
				(error) => {
					console.log('Ошибка', error);
					this.setState({
						isLoaded: true,
						error
					});
				},
			)
	}
	
	render() {
		const { error, isLoaded, items } = this.state;
		if (error) {
		  return <div>Ошибка: {error.message}</div>;
		} else if (!isLoaded) {
		  return <div>Загрузка...</div>;
		} else {

			//document.getElementById("CardNumber").innerHTML = items;
			return (
				<div className="Component">
					<div className="StatusBar"></div>
					<div className="Box"><header>Главная</header></div>
					<div className="Card"></div>
					<img id="Mastercard" src='./img/Groupmastercard.svg' alt="Mastercard"></img>
					<p id = "CardNumber"></p>
				</div>
			);
		}
	}
}

export default Main