import React, { Component } from 'react';
import './index.css';

class index extends Component {
    render() {
        return (
            <div>
                <head>
                    <title>Mallet Manager Home</title>
                </head>
                <body>
                    <form class="Login">
                        <h1>Login</h1>
                        <input type="text" class="username" placeholder="username"></input>
                        <input type="password" class="password" placeholder="password"></input>
                        <input type="submit" value="Login"></input>
                    </form>
                    <form class="CreateUser">
                        <h1>Create account</h1>
                        <input type="text" class="username" placeholder="username"></input>
                        <input type="password" class="password" placeholder="password"></input>
                        <input type="submit" value="Create"></input>
                    </form>
                    <script src="/app.js"></script>
                </body>
            </div>
        );
    }
}

export default index;