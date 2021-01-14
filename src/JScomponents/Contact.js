import React, { useState } from 'react'
import styles from "../CSScomponents/Contact.module.scss"
import { GoMail } from 'react-icons/go';
import { FaUserAlt, FaTelegramPlane, FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';
import { BiPencil } from 'react-icons/bi';
import Loader from "./Loader"
import Title from './Title';




function Contact() {

    const [state, setState] = useState(()=> ({
        name: "",
        email: "",
        messageInput: {
            value: "",
            height: "50px"
        },
        height: "100%",
        serverMessage: {
            message: "",
            spanStyle: {
                height: "100%"
            }
        },
        loading: false
    }))

    const valueChange = (e) => {
        const {name, value, scrollHeight} = e.target

        if (name === "message"){
            console.log(scrollHeight)

            if (value.length < 301){
                setState(ps => ({
                    ...ps,
                    messageInput: {
                        value: value,
                        height: `${scrollHeight}px`
                    }
                }))
            }

            
        }

        else{

            setState(ps => ({
                ...ps,
                [name]: value
            }))
        }
    }




    const submit = (e) => {
        e.preventDefault()

        setState(ps => ({
            ...ps,
            loading: true
        }))

        fetch(`${process.env.REACT_APP_API}/ContactForm`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: state.name,
                email: state.email,
                message: state.messageInput.value
            })
        }).then(res => {
            console.log(res)
            console.log("res")
    
            if (res.status === 200){
                return res.json()
            }

            else{

                setState(ps => ({
                    ...ps,
                    name: "",
                    email: "",
                    messageInput: {
                        value: "",
                        height: "50px"
                    },
                    serverMessage: {
                        message: "There Has Been An Unexpected Error",
                        spanStyle: {
                            height: "0%"
                        }
                        
                    },
                    loading: false
                }))
    
                setTimeout(()=> {
                    setState(ps => ({
                        ...ps,
                        serverMessage: {
                            ...ps.serverMessage,
                            spanStyle: {
                                height: "100%"
                            }
                        }
                    }))
                }, 4000)
                


            }
    
            
    
            
        }).then(data => {
            

                setState(ps => ({
                    ...ps,
                    name: "",
                    email: "",
                    messageInput: {
                        value: "",
                        height: "50px"
                    },
                    serverMessage: {
                        message: data.message,
                        spanStyle: {
                            height: "0%"
                        }
                        
                    },
                    loading: false
                }))
    
                setTimeout(()=> {
                    setState(ps => ({
                        ...ps,
                        serverMessage: {
                            ...ps.serverMessage,
                            spanStyle: {
                                height: "100%"
                            }
                        }
                    }))
                }, 4000)
    
    
        }).catch(err => {
            console.log(err.message)

            setState(ps => ({
                ...ps,
                name: "",
                email: "",
                messageInput: {
                    value: "",
                    height: "50px"
                },
                serverMessage: {
                    message: "There Has Been An Unexpected Error",
                    spanStyle: {
                        height: "0%"
                    }
                    
                },
                loading: false
            }))

            setTimeout(()=> {
                setState(ps => ({
                    ...ps,
                    serverMessage: {
                        ...ps.serverMessage,
                        spanStyle: {
                            height: "100%"
                        }
                    }
                }))
            }, 4000)

        })
    }

    return (
        <div className={styles.container}>

        {state.loading ? <Loader fullScreen={true} /> : false}

        <Title title="CONTACT ME" margin="50px 0" />


        <form onSubmit={submit}>

            <div className={styles.inputContainer}>

                <FaUserAlt />
                <input type="text" name="name" placeholder="Name" onChange={valueChange} value={state.name} required/>
            </div>

            <div className={styles.inputContainer}>
                <GoMail />
                <input type="email" name="email" placeholder="Email" onChange={valueChange} value={state.email} required/>
            </div>

            <div className={styles.inputContainer}>
                <BiPencil />
                <textarea name="message" placeholder="Your Message" onChange={valueChange} required value={state.messageInput.value} style={{height: state.messageInput.height}}></textarea>
                <p>{state.messageInput.value.length}/300</p>
            </div>

                <p><span style={state.serverMessage.spanStyle}></span>{state.serverMessage.message}</p>


            <button type="submit" className={styles.submitBtn}><span>SEND MESSAGE</span><FaTelegramPlane size="20"/> </button>


        </form>


        <div className={styles.otherWays}>
            <h1>Other Ways To Contact Me</h1>
            <p>If you'd like to contact me in a different way, please feel free to use the platforms shown below</p>
            <div className={styles.socials}>
                <a href="https://www.instagram.com/code_with_henock/" target="_b;ank" rel="noreferrer"><FaInstagram size="40"/></a> 
                <a href="https://www.linkedin.com/in/henock-adane-1ab49219b" target="_blank" rel="noreferrer"><FaLinkedin size="40"/></a> 
                <a href="https://github.com/HenockAdane" target="_blank" rel="noreferrer"><FaGithub size="40"/></a>
            </div>
            <p>Or you can email me directly at <a href="mailto:adanehenock@gmail.com" target="_blank" rel="noreferrer">adanehenock@gmail.com</a></p>
        </div>


            
        </div>
    )
}

export default Contact
