import React from 'react'
import Header from './components/Header'
import Users from './components/Users'
import AddUser from './components/AddUser'

class App extends React.Component {
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
        this.addUser = this.addUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.editUser = this.editUser.bind(this)
    }
    render() {
        return (
            <div>
                <Header title='List of users' />
                <main>
                    <Users onEdit={this.editUser} onDelete={this.deleteUser} users={this.state.users} />
                </main>
                <aside><AddUser onAdd={this.addUser} /></aside>
            </div>
        )
    }
    addUser(user) {
        const id = this.state.users.length + 1
        this.setState({
            users: [...this.state.users, { id, ...user }]
        })
    }

    editUser(user) {
        let allUsers = this.state.users
        allUsers[user.id - 1] = user
        this.setState({ users: [] }, () => {
            this.setState({ users: [...allUsers] })
        })
    }

    deleteUser(id) {
        this.setState({
            users: this.state.users.filter((user) => id !== user.id)
        })
    }
}


export default App