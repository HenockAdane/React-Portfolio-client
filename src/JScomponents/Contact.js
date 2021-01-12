import React, { useState } from 'react'
import styles from "../CSScomponents/Contact.module.scss"
import { GoMail } from 'react-icons/go';
import { FaUserAlt} from 'react-icons/fa';
import { BiPencil } from 'react-icons/bi';




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
        }
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

        fetch(`http://localhost:3001/ContactForm`, {
            method: "POST",
            mode: "cors",
            headers: {"Content-Type": "application/json"},
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
                        
                    }
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
            

            if (data){
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
                        
                    }
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
                    
                }
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

        <h1 className={styles.title}>CONTACT ME</h1>


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


            <button type="submit" className={styles.submitBtn}><span>SEND MESSAGE</span></button>


        </form>


            
        </div>
    )
}

export default Contact
