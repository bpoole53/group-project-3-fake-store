import { useState } from "react";

export default function Signup(){
    const [formData, setFormData] = useState({email: '', password: ''})

    async function signupUser(e){
        e.preventDefault();
        const query = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await query.json()
        // implement logic for success or fail
    }

    return (
        <>
        <h1> Signup </h1>
        </>
    )


}