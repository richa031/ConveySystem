import React from 'react';
import './form.css';
import {Form, Label, FormGroup, Input, Button} from 'reactstrap';

export default function Login(){
    return(
        <div className="container">
           
                    <Form>
                        <FormGroup row>
                            <Label>Compa</Label>
                            <Input type="text" name="name" />
                        </FormGroup>
                        <FormGroup row>
                            <Label>Email Address</Label>
                            <Input type="text" name="email" />
                        </FormGroup>
                        <FormGroup row>
                            <Label>Company</Label>
                            <Input type="text" name="name" />
                        </FormGroup>
                        <FormGroup row>
                            <Label>Company</Label>
                            <Input type="text" name="name" />
                        </FormGroup>
                        <FormGroup row className="full">
                            <Label>Message</Label>
                            <Input type="textarea" name="name" />
                        </FormGroup>
                        <FormGroup row className="full">
                            <Button type="submit">Submit</Button>
                        </FormGroup>
                    </Form>
                

                
            </div>
       
    );
}
