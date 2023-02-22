import React, { useState } from 'react'

export default function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState('admin');

    let submit = () => {
        console.log("Submitted");

        let data = {

            "email": email,
            "password": password
        }


        fetch('http://65.109.113.62:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header

        }).then((res) => {
            console.log('res', res)
            if (res.status === 404) {
                alert('Invalid Credential')
            }
            else {
                return res.json();
            }

        }).then((data) => {
            try {
                console.log('data', data)
                if (data.code === 200) {
                    // now i will store userdata to local storage
                    localStorage.setItem('setuser', JSON.stringify(data))
                    localStorage.setItem('role', data.data.role)
                    localStorage.setItem('token', data.data.token)
                    console.log('token', data.data.token)
                    if (data.data.role === 'admin') {
                        window.location.href = '/admindashboard';
                    }
                } else {
                    console.log("Inavlid Credential");
                }
            } catch (error) {

            }


        }).catch((err) => {
            console.log('error', err)
        });
    }
    return (
        <div>
            <main>
                <form className='col-6 offset-3 mt-5'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name="email" value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name="password" value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input"

                            id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="button" onClick={submit} className="btn btn-primary">Submit</button>
                </form>
            </main>
        </div>
    )
}

