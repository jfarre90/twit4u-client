//Function --> If the user has logged in, allow him to see message list, otherwise not
import React, {Component} from 'react';
import {connect} from 'react-redux'; //it is important to connect to the store to see if the user is authenticated

export default function withAuth(ComponentToBeRendered){
    class Authenticate extends Component{
        componentWillMount(){
            if(!this.props.isAuthenticated) {
                this.props.history.push('/signin');
            }
        }
        componentWillUpdate(nextProps){
            if (!nextProps.isAuthenticated) {
                this.props.history.push('/signin');
            }
        }
        render(){
            return <ComponentToBeRendered {...this.props} />;
        }
    }
    function mapStateToProps(state) {
        return {
            isAuthenticated: state.currentUser.isAuthenticated
        };
    }
    return connect(mapStateToProps,null)(Authenticate);
}



