import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

const CredentialForm = ({ fnSubmit, type }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = () => {
      fnSubmit(email, password).then(data => {
        if (data.message) {
          setMessage(data.message)
        } else {
          setMessage('');
        }
      });
    }

    return (
      <Form>
        { !message ? null : <Alert color="danger"> {message} </Alert> }
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Type email here" value={email} onChange={e => setEmail(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Type password here." value={password} onChange={e => setPassword(e.target.value)}/>
        </FormGroup>
        <Button onClick={handleSubmit}>{type}</Button>
      </Form>
    );
  }
  
  export default CredentialForm;
