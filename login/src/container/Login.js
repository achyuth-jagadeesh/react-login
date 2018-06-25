import React, { Component } from 'react';
import Error from "../components/error";
import axios from "axios";
import setAuthorization from "../setAuthorization";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {login, userAuthentication} from "../actions/login/loginAction";


export class Login extends Component {
    constructor(){
        super();
        this.state={
            userID:"",
            pwd:"",
            error:""
        }
    }
    handleChange(evt){
        let change = {}
        change[evt.target.name] = evt.target.value
        this.setState(change)
    }
    login(){
        if((this.state.userID =="" )){
            this.setState({error : <Error  desc={"Error"}  msg={"Please enter user ID"} />} );
            return false;
        }else if((this.state.pwd =="")){
            this.setState({error : <Error  desc={"Error"}  msg={"Please enter password"} />} );
            return false;
        }else{
            this.setState({error : null} );
            let that = this;

            this.props.login({"userId":this.state.userID, "password":this.state.pwd }).then(function(payload){
                that.props.userAuthentication(payload) 
                window.location.hash = '#dashboard'; 
            })
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">   
                        {this.state.error}  
                    </div>
                </div>      
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Login</h3>
                            </div>
                            <div className="panel-body">
                                <form role="form">
                                    <fieldset>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="User ID" name="userID" type="text" autoFocus value={this.state.userID} onChange={(evt)=>{this.handleChange(evt)}}  />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Password" name="pwd" type="password" value={this.state.pwd} onChange={(evt)=>{this.handleChange(evt)}}  />
                                        </div>
                                        <button type="button" className="btn btn-success btn-block" onClick={()=>{this.login()}}   >Login</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">   
                        <table className="table table-bordered table-striped" border="1" >
                           <thead>
                            <tr>
                                <th colSpan="3"  className="text-center"  >
                                    Valid Users
                                </th>
                            </tr>
                           </thead>
                           <tbody>
                            <tr>
                                <th className="text-center"  >
                                   Sl No.
                                </th>  
                                <th className="text-center"  >
                                  User ID 
                                </th>  
                                <th className="text-center"  >
                                  Password
                                </th>  
                            </tr>
                            <tr className="text-center" >
                                <td>1</td>
                                <td>admin</td>
                                <td>admin123</td>
                            </tr>
                            <tr className="text-center" >
                                <td>2</td>
                                <td>admin2</td>
                                <td>superadmin</td>
                            </tr>
                            </tbody>
                       </table>
                    </div>
                </div> 
            </div>
        );
    }
}


function mapStateToProps(state){
    return {
        userAuthReducer : state.userAuthReducer
    }
}

function mapActionToProps(dispatch){
    return bindActionCreators({login, userAuthentication},dispatch);
}

export default connect(mapStateToProps,mapActionToProps)(Login); 


