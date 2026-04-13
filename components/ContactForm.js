import { useState } from "react";

export default function ContactForm(){

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        let valid = true;

        if(!name || !email){
            valid = false;
        }
        if(email && (!email.includes("@") || !email.includes("."))){
            valid = false;
        }

        if (!valid) return;
        {
        localStorage.setItem("contactFormData", JSON.stringify({ name, email, message }));
        alert("Message sent successfully!");
        }
    }

    return(
        <main>
            <form className="contact-form" onSubmit = {handleSubmit}>
                <h2>Contact Us</h2>

                <div className="form-row">
                    <label>Name:</label>
                    <input id="name" type="text" 
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                    />
                    {!name && <span className="error">Name is required.</span>}
                </div>

                <div className="form-row">
                    <label>Email:</label>
                    <input id="email" type="email" 
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                    />
                    {!email && <span className="error">Email is required.</span>}
                    {email && !email.includes("@") && <span className="error">Please enter a valid email address.</span>}
                </div>

                <div className="form-row">
                    <label>Message:</label>
                    <textarea id="message" rows="5" 
                    value = {message}
                    onChange = {(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>

                <button className="submit-button" type="submit">Send Message</button>
            </form>
        </main>
    )
}