import React from 'react';
import './styles/component.css';

class Cards extends React.Component{
	render () {
		return (
			<div className="Component" style = {{ height: 640}} >
				<div className="StatusBar"></div>
				<div className="box"><header style= {{width: 94, left:133}}>Мои карты</header></div>
			</div>
		);
	}
}

export default Cards