import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../../actions/index'

class Userlist  extends Component{
    createitemslist(){
        return this.props.users.map((user)=> {
             return (
             <li key={user.id}
                onClick = {()=> this.props.selectUser(user)}>
                {user.firstname} {user.lastname}
                </li>
                )
        })
    }
    
    render(){
        return (
            <ul>
                {this.createitemslist()}
            </ul>
        )
    }
}
function mapStateToProps(state){
    return {
        users: state.users
    }

}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser : selectUser},dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(Userlist);    