import React, {Component} from 'react'

class UserCardList extends Component {
    state = {
        userdata: [...this.state.userdata]
    }

    render() {
        const {userdata} = this.state
        return(
            <div className='UserCardList'>
                {userdata.map(user => (
                    <p>{user.image}</p> 
                ))}
            </div>
        )
        
    }
}

export default UserCardList;