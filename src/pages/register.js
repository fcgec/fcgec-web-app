import React, { useState } from "react"

import axios from 'axios'

import Layout from "../components/layout"
import SEO from "../components/seo"

import registerStyles from './register.module.scss'

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [messages, setMessages] = useState();

    const submitHandler = event => {
        event.preventDefault();
        axios({
            method: 'post',
            url: 'https://fcgec-events.herokuapp.com/api/register',
            data: {
                name,
                email
            }
        })
            .then(response => { console.log(response); setMessages(response.data.message) })
            .catch(error => console.error(error));

    }

    return (
        <Layout>
            <SEO title="Register" />

            <section className="pageTitle">
                <h2>Register</h2>
            </section>

            <div className="container">
                <form onSubmit={submitHandler} className={registerStyles.form}>
                    {messages ? <div>{messages}</div> : ""}
                    <div>
                        <p>Enter your name</p>
                        <input type="text"
                            onChange={e => setName(e.target.value)}
                            value={name}
                            required
                            aria-label="input to take name"
                        // minLength={2}
                        />
                    </div>
                    <div>
                        <p>Enter your Email</p>
                        <input type="email"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            required
                            aria-label="input to take email"
                        // minLength={2}
                        />
                    </div>
                    <div>
                        <input type="Submit"
                            aria-label="Button to submit form"
                        />
                    </div>
                </form>
            </div>

        </Layout >
    )
}

export default RegisterPage
