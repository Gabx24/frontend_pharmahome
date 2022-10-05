import React, {useContext, useState} from 'react';
import Helmet from 'react-helmet';
import Form  from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Store from '../context/StoreContext';

export default function ProfileScreen() {
    // const{state, dispatch: ctxDispatch } = useContext(Store);
    // const { userinfo } = state;
    const[name, setName]= useState("");
    const[email, setEmail]= useState("");
    const[password, setPassword]= useState('');
    const[confirmPassword, setConfirmPassword]= useState('');


    const submitHandler = async () =>{};
    return (
        <div className = "container small-container">
            <Helmet>
                <title> User Profile</title>
            </Helmet>
            <h1 className="my-3">User Profile</h1>
            <form onSubmit={submitHandler}>
                <Form.Group classname= "mb-3" controlId = "name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                    value = {name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />            
                </Form.Group>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email"
                        value={email}
                        onChange= {(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className = "mb-3" controlId = "password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type ="password"
                    onChange = {(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className = "mb-3" controlId = "password">
                    <Form.Label> Confirm Password</Form.Label>
                    <Form.Control
                    type ="password"
                    onChange = {(e) => setConfirmPassword(e.target.value)}
                    />
                </Form.Group>
                <div className="mb-3">
                    <Button type = "submit">Update</Button>
                </div>

            </form>
        </div>
    )
}