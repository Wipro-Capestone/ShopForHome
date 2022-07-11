import React, { useState } from 'react'

function Registration() {
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState(0)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleContactChange = (e) => {
        if (e.target.value !== 'e') {
            setContact(e.target.value)
        }
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value)
    }

    const registerUser = () => {
        const userObj = {
            username: username,
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: contact,
            password: password,
            confirmPassword: confirmPassword
        }
        // console.log(userObj)
        fetch(`http://localhost:9000/user/auth/register`, {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObj)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    }

    return (
        // <div className="container">
        //     <h1 className="textHeadStyle">Register as a user </h1>
        //     <form>
        //         <div className="form-floating mb-3">
        //             <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleUsernameChange} value={username}/>
        //             <label htmlFor="floatingInput">Username</label>
        //         </div>

        //         <div className="form-floating mb-3">
        //             <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleFirstNameChange} value={firstName}/>
        //             <label htmlFor="floatingInput">First Name</label>
        //         </div>

        //         <div className="form-floating mb-3">
        //             <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleLastNameChange} value={lastName}/>
        //             <label htmlFor="floatingInput">Last Name</label>
        //         </div>
        //         <div className="form-floating mb-3">
        //             <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleEmailChange} value={email}/>
        //             <label htmlFor="floatingInput">Email</label>
        //         </div>
        //         <div className="form-floating mb-3">
        //             <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleContactChange} value={contact}/>
        //             <label htmlFor="floatingInput">Contact Number</label>
        //         </div>

        //         <div className="form-floating mb-3">
        //             <input type="password" className="form-control" id="floatingPassword" placeholder="Password"onChange={handlePasswordChange} value={password} />
        //             <label htmlFor="floatingPassword">Password</label>
        //         </div>

        //         <div className="form-floating mb-3">
        //             <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handleConfirmPasswordChange} value={confirmPassword}/>
        //             <label htmlFor="floatingPassword">Confirm Password</label>
        //         </div>
        //         <button type="button" className="btn btn-primary btn-lg space bg-btn">Register</button>
        //     </form>
        // </div>
        <div className="container">
            <h1 className="textHeadStyle">Register as a user </h1>
            <form>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="name@example.com" onChange={handleUsernameChange} value={username} />
                    <label htmlFor="floatingInput">Username</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="name@example.com" onChange={handleFirstNameChange} value={firstName} />
                    <label htmlFor="floatingInput">First Name</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="name@example.com" onChange={handleLastNameChange} value={lastName} />
                    <label htmlFor="floatingInput">Last Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" placeholder="name@example.com" onChange={handleEmailChange} value={email} />
                    <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" placeholder="name@example.com" onChange={handleContactChange} value={contact} pattern="^[0-9]*$" />
                    <label htmlFor="floatingInput">Contact Number</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="password" className="form-control" placeholder="Password" onChange={handlePasswordChange} value={password} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="password" className="form-control" placeholder="Password" onChange={handleConfirmPasswordChange} value={confirmPassword} />
                    <label htmlFor="floatingPassword">Confirm Password</label>
                </div>
                <button type="button" className="btn btn-primary btn-lg space bg-btn" onClick={registerUser}>Register</button>
            </form>
        </div>
    )
}

export default Registration
