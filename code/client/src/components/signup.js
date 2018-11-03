import React from 'react';
import {Row, Input} from 'react-materialize';


const Signup = ({active}) => {
        return(
    <div id="sign" className={active ? "active-comp" : "inactive-comp"}>
    <Row className="infowidth">
      <h4>Sign Up</h4>
      <span>Fill out the form to join your company's 3nterprise Catalog</span>
    </Row>
    <Row>
        <Input required placeholder="John" s={12} label="First Name" id="firstname" />
        <Input required placeholder="Smith" s={12} label="Last Name" id="lastname" />
        <Input required placeholder="Password" autoComplete="new-password" type="password" s={12} label="Password" id="pass" />
        <Input required placeholder="example@example.com" type="email" s={12} label="E-mail" id="email" />
    </Row>
    
    </div>
     );
    
}

export default Signup
