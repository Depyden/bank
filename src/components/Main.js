import React from 'react';
import './styles/component.css';

var requestOptions = {
	method: 'GET',
	redirect: 'follow',
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
		  .then(res => res.text())
		  .then(result => console.log(result))
		  .catch(error => console.log('error', error));
/* 		  .then(
			(result) => {
			  this.setState({
				isLoaded: true,
				items: result.items
			  });
			},
			// Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
			// чтобы не перехватывать исключения из ошибок в самих компонентах.
			(error) => {
			  this.setState({
				isLoaded: true,
				error
			  });
			}
		  ) */

	  }

  



	render() {
		const { error, isLoaded, items } = this.state;
		if (error) {
		  return <div>Ошибка: {error.message}</div>;
		} else if (!isLoaded) {
		  return <div>Загрузка...</div>;
		} else {
			return (
				<div className="Component">
					<div className="StatusBar"></div>
					<div className="Box"><header>Главная</header></div>
					<div className="Card"></div>
					<img id="Mastercard" src='./img/Groupmastercard.svg' alt="Mastercard"></img>
					<h2>items.card_number</h2>
				</div>
			);
		}
	}
}

export default Main