import { useState } from "react";
import LoginForm from "../components/LoginForm";

export default function Login(){
    const [formData, setFormData] = useState({email: '', password: ''})

    async function login(e){
        e.preventDefault();
        const query = await fetch('/api/user/auth', {
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
         <LoginForm/>
        </>
    )


}