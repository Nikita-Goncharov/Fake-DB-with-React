import React from 'react'
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'
import AddUser from './AddUser'

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false,
        }
    }
    user = this.props.user
    render() {
        return (
            <div className='user'>
                <IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id)} className='delete-icon' />
                <IoHammerSharp onClick={() => this.setState({ editForm: !this.state.editForm })} className='edit-icon' />
                <h3>{this.user.firstname} {this.user.lastname}</h3>
                <p>{this.user.bio}</p>
                <b>{this.user.isHappy ? 'Happy :)' : 'Sad :('}</b>
                {this.state.editForm && <AddUser isNewUser={false} user={this.user} onAdd={this.props.onEdit} />}
            </div>
        )
    }
}

export default User