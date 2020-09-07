import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import firebase from '../config/firebase';

const Main = () => {
	const history = useHistory();
	const handleClick = () => {
		firebase
			.auth()
			.signOut()
			.then(function() {
				// Sign-out successful.
				console.log('logout');
				history.push('/');
			})
			.catch(function(error) {
				// An error happened.
				console.log(error);
			});
	};
	return (
		<div>
			<h1>Main</h1>
			<Button variant="outlined" onClick={handleClick}>
				ログアウト
			</Button>
		</div>
	);
};

export default Main;
