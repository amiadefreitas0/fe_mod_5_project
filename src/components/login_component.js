import React from 'react'

class LoggedIn extends React.Component {
    render() {
    
        return(
            <div>

                <div className="current-user">WELCOME {this.props.currentUser.name.toUpperCase()}</div>
                <button onClick={this.props.logoutbtn}> Logout</button>


            </div>
        )
    }
}

export default LoggedIn