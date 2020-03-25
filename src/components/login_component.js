import React from 'react'

class LoggedIn extends React.Component {
    render() {
    
        return(
            
            <div className="current-user">WELCOME {this.props.currentUser.name.toUpperCase()}</div>
        )
    }
}

export default LoggedIn