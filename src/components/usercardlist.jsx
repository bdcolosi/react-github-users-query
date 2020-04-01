import React, {Component} from 'react'
import UserCard from './userCard'

function UserCardList() {
    const user = this.state.userdata;

    return (
        <div className='UserCardList'>
        {user.map(user => (
            <p>{user.image}</p> 
        ))}
    </div>
    )
        
        }

export default UserCardList;