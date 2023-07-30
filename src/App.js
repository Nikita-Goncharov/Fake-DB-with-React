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
                    firstname: 'John',
                    lastname: 'Sparrow',
                    age: 20,
                    bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nunc quis dapibus odio, at venenatis sapien. 
                    Mauris vel nunc dapibus purus venenatis facilisis ac eget neque. 
                    Nulla est urna, sodales in justo sit amet, ultricies venenatis eros. 
                    Donec vel nisl sit amet magna volutpat cursus ac suscipit ipsum.  
                    Ut quis hendrerit ipsum. 
                    Mauris eget lobortis quam. Ut in pulvinar nibh. 
                    Quisque id nulla sed metus porttitor rutrum eu et urna. 
                    Mauris lorem leo, dictum vitae ex eget, hendrerit semper urna. 
                    Duis id est vitae nisi scelerisque rutrum in at tortor.`,
                    isHappy: true
                },
                {
                    id: 2,
                    firstname: 'Bob',
                    lastname: 'Smith',
                    age: 44,
                    bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nunc quis dapibus odio, at venenatis sapien. 
                    Mauris vel nunc dapibus purus venenatis facilisis ac eget neque. 
                    Nulla est urna, sodales in justo sit amet, ultricies venenatis eros. 
                    Donec vel nisl sit amet magna volutpat cursus ac suscipit ipsum.  
                    Ut quis hendrerit ipsum. 
                    Mauris eget lobortis quam. Ut in pulvinar nibh. 
                    Quisque id nulla sed metus porttitor rutrum eu et urna. 
                    Mauris lorem leo, dictum vitae ex eget, hendrerit semper urna. 
                    Duis id est vitae nisi scelerisque rutrum in at tortor.`,
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
                <aside><AddUser isNewUser={true} onAdd={this.addUser} /></aside>
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