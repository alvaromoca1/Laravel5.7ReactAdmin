import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Login from '../view/auth/login';

export default class Auth extends Component {
    render() {
        return (
            <>
                <main>
                    <section className="relative w-full h-full py-40 min-h-screen">
                        <Login/>
                    </section>
                </main>
            </>
        );
    }
};
