import React from 'react'



class AddUser extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            age: 0,
            bio: '',
            isHappy: false,
        }
    }
    render() {
        return (
            <form ref={(form) => this.myForm = form}>
                <input placeholder='Firstname' onChange={event => this.setState({ firstname: event.target.value })} />
                <input placeholder='Lastname' onChange={event => this.setState({ lastname: event.target.value })} />
                <input placeholder='Age' onChange={event => this.setState({ age: event.target.value })} />
                <textarea placeholder='Bio' onChange={event => this.setState({ bio: event.target.value })}></textarea>
                <label htmlFor='isHappy'>Are you happy ?</label>
                <input type='checkbox' id='isHappy' onChange={event => this.setState({ isHappy: event.target.checked })} />
                <button type='button' onClick={() => {
                    this.myForm.reset()
                    this.userAdd = {
                        firstname: this.state.firstname,
                        lastname: this.state.lastname,
                        age: this.state.age,
                        bio: this.state.bio,
                        isHappy: this.state.isHappy,
                    }
                    if (this.props.user) {
                        this.userAdd.id = this.props.user.id
                    }
                    this.props.onAdd(this.userAdd
                    )
                }
                }>Add</button>
            </form>
        )
    }
}


export default AddUser