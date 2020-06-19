import React, { useState } from "react"

import axios from 'axios'
import cx from 'classnames'

import Layout from "../components/layout"
import SEO from "../components/seo"

import registerStyles from './register.module.scss'

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [messages, setMessages] = useState();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState();

    const submitHandler = event => {
        event.preventDefault();
        setLoading(true);
        axios({
            method: 'post',
            url: 'https://fcgec-events.herokuapp.com/api/register',
            data: {
                name,
                email
            }
        })
            .then(response => {
                // console.log(response);
                setMessages(response.data.message);
                setLoading(false);
                setSuccess(true);
                setName('');
                setEmail('');
            })
            .catch(error => {
                console.error(error);
                setMessages('Something went wrong');
                setLoading(false);
                setSuccess(false);
            });
    }

    return (
        <Layout>
            <SEO title="Register" />

            <section className="pageTitle">
                <h2>Register</h2>
            </section>

            <div className="container">
                <div className={registerStyles.container}>
                    <p className={registerStyles.privacy}>
                        Your data is completely safe with us.
                    </p>
                    {messages ?
                        <span className={cx(registerStyles.message, success ? 'success' : 'failed')}>
                            {`${messages}.`} <br />
                            {(success ? 'We hope to see you soon :)' : 'Please try again :(')}
                        </span>
                        : ""
                    }

                    {loading ? <span className={registerStyles.message}>Loading...</span> : ""}

                    <form onSubmit={submitHandler} className={registerStyles.form}>

                        <div>
                            <p>Name</p>
                            <input type="text"
                                onChange={e => setName(e.target.value)}
                                value={name}
                                required
                                aria-label="input to take name"
                            />
                        </div>
                        <div>
                            <p>Email</p>
                            <input type="email"
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                required
                                aria-label="input to take email"
                            />
                        </div>
                        <div>
                            <input type="Submit"
                                disabled={loading}
                                aria-label="Button to submit form"
                                value={loading ? 'Loading...' : 'Submit'}
                                readOnly
                            />
                        </div>
                    </form>

                </div>
            </div>

        </Layout >
    )
}

export default RegisterPage
