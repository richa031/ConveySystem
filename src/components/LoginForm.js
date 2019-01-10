import React from 'react';
import './form.css';
import {Form, Label, FormGroup, Input, Button} from 'reactstrap';

export default function Login(){
    return(
        <div className="container">
            <h1 className="brand"><span>Acme</span> Web Design</h1>
            <div className="wrapper animated bounceInLeft">
                <div className="company-info">
                    <h3>Acme Web Design</h3>
                    <ul>
                        <li><i className="fa fa-road"></i> 44 Something st</li>
                        <li><i className="fa fa-phone"></i> (555) 555-5555</li>
                        <li><i className="fa fa-envelope"></i> test@acme.test</li>
                    </ul>
                </div>
                <div className="contact">
                    <h3>Email Us</h3>
                        
                    <Form>
                        <FormGroup row>
                            <Label>Company</Label>
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

                
            </div>
        </div>
    );
}
