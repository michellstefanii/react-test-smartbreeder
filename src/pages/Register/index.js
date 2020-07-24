import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { addUser } from '../../store/actions/user'

export default function Register() {
    const history = useHistory()

    const dispatch = useDispatch();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleRegister() {
        try {
            const user = {email, password}
            dispatch(addUser(user))
            history.push('/')
        } catch(err) {
            alert(err)
        }
    }

    return (
        <div className="container">
            <div className="contentt">
            <section className="form">
            <form onSubmit={handleRegister}>
                <h1>Cadastro</h1>
                <input 
                className="input"
                placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
                <input 
                className="input"
                type="password"
                placeholder="Senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
                </section>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#291ce0" /> Faça seu Login
                    </Link>
            </div>
        </div>
    )
}