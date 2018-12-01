import React from "react";
import { Button, Input, Row } from "react-materialize";
import { Redirect } from "react-router-dom";

class Support extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  submitTicket = () => {
    this.setState({
      redirect: true
    });
  };

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/thanks" />;
    }
    return (
      <div className="userContainer">
        <h3>Support Ticket</h3>
        <div className="supportForm">
          <Input label='Name' type='text' disabled='disabled' value={this.props.firstName + ' ' + this.props.lastName} />

          <Input type='text' label='Email' disabled='disabled' value={this.props.email} />


          <Input type='text' id="subject" placeholder='Subject' />


          <Input id='problem' type='textarea' placeholder='Please describe your problem here.' />


          <Button className='button' waves='light' onClick={this.submitTicket}>Submit</Button>

        </div>
      </div>
    );
  };
}

export default Support;