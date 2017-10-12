import React, { Component } from 'react';
import axios from 'axios'
class SignUpForm extends Component {
    state = {
        newUser: {
            userName:'',
            password:''
        }
    }
    handleChange =(event)=>{
        const attribute = event.target.name
        const updateUser ={...this.state.newUser}
        updateUser[attribute] = event.target.value
        this.setState({newUser: updateUser})
    }
    createUser = () => {
        axios.post('/api/users', {
          user: this.state.user
        }).then((res) => {
          this.setState({redirectToHome: true, createdUser: res.data})
        })
      }
    handleSubmit = async (event) => {

        event.preventDefault()
        const res = await axios.post('/api/users', {
            'user': this.state.newUser
        
        })
        console.log(res.data)
      }
    //this is what you would write to update only a single event or password
    //handleUserChange =(event)=>{
    //    const updateUser ={...this.state.newUser}
    //    updateUser.userName = event.target.value
    //    console.log("Changed")
    //    this.setState({newUser: updateUser})
   // }
    render() {
        return (
            <div>
                <h1>Sign-Up</h1>
                    <form onSubmit={this.handleSubmit}>
                     <div>
                     <label htmlFor="userName">User Name</label>
                     <input  onChange={this.handleChange} name="userName" type="text" value={this.state.newUser.userName}/>
                    </div>
                     <div>
                    <label htmlFor="password">Password</label>
                     <input onChange={this.handleChange} name="password" type="text" value={this.state.newUser.password}/>
                    </div>
                     <button>Sign Up</button>
                    </form>
            </div>
        );
    }
}

export default SignUpForm;