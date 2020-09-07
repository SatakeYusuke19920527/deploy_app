import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
const Main = () => {
	const history = useHistory()
	
	const handleClick = () => {
		console.log('success login');
		history.push('/');
	};
	return (
		<div>
			<h1>Main</h1>
			<Button variant="outlined" onClick={handleClick}>戻る</Button>
		</div>
	);
};

export default Main;
