import React from 'react';
import Userlist from './containers/newlist'
class Details extends React.Component{
    render(){
        return (
            <div>
        <h2>username list</h2>
        <Userlist/>
        <hr/>
        <h2> UserDetails </h2>
    </div>
        )
    }
}

    


export default Details;