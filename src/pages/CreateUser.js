import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import firebase from '../config/firebase'
const CreateUser = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
  const history = useHistory();
  const [error,setError] = useState('')
	const handleClick = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('success login');
        history.push('/main');
      })
			.catch(function (error) {
			// Handle Errors here.
			var errorCode = error.code;
				var errorMessage = error.message;
				console.log(errorCode + '/ login failed /' + errorMessage );
      // ...
        setError(errorMessage)
		});
	};
	return (
    <div>
      <h2>CreateUser</h2>
			<TextField id="email" label="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
			<TextField id="password" label="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
      <Button variant="outlined" onClick={handleClick}>Create</Button>
      {error}
      <Link to='/' >戻る</Link>
		</div>
	);
};

export default CreateUser;
