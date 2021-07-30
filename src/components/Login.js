import React from 'react';

const Login = () => {
    return (
        <div className="loginPage">
            <div className="loginForm">
                <form>
                    <input type="text" placeholder="Enter login here"/>
                    <input type="password" placeholder="Enter password here"/>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}
export default Login

