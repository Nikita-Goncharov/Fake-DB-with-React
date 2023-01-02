import React from "react"
import User from "./User"

class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [
                {
                    id: 1,
                    firstname: 'Nik',
                    lastname: 'Goncharov',
                    age: 16,
                    bio: 'ojnafbeaiubet;ibeoub',
                    isHappy: true
                },
                {
                    id: 2,
                    firstname: 'Bob',
                    lastname: 'Smith',
                    age: 44,
                    bio: 'ojnafbeaiuaffdbdbbet;ibeoub',
                    isHappy: false
                }
            ]
        }
    }
    render() {
        if (this.state.users.length > 0) {
            return (
                <div>
                    {this.state.users.map((user) => (
                        <User key={user.id} user={user} />
                    ))}
                </div>
            )
        } else {
            return (
                <div className='user'>
                    <h3>Users not found</h3>
                </div>
            )
        }

    }
}

export default Users