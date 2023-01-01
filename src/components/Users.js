import React from "react"


class Users extends React.Component {
    users = [
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
    render() {
        if (this.users.length > 0) {
            return (
                <div>
                    {this.users.map((user) => (
                        <div className='user' key={user.id}>
                            <h3>{user.firstname} {user.lastname}</h3>
                            <p>{user.bio}</p>
                            <b>{user.isHappy ? 'Happy :)' : 'Sad :('}</b>
                        </div>
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