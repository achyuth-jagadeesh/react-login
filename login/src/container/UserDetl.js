import React, { Component } from 'react';
import {connect} from "react-redux";


export class UserDetl extends Component {
    constructor(){
        super();
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">   
                      <h1>Dash Board</h1>
                    </div>
                </div>      
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        User Name : {this.props.userDetl.name}
                    </div>
                    <div className="col-md-4 col-md-offset-4">
                        User Email :{this.props.userDetl.email}
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state){

    return {
        userDetl : state.userAuthReducer.authData
    }
}

export default connect(mapStateToProps)(UserDetl); 


