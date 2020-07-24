import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logIn } from '../../store/actions/user'
import { FiLogIn } from 'react-icons/fi'

export default function Logon() {
    const history = useHistory()

    const dispatch = useDispatch();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogon(e) {
        e.preventDefault()
        try {
            const user = { email, password }
                dispatch(logIn(user))
                history.push('/home')
        } catch(err) {
            alert(err)
        }
    }

    return (
        <div className="container">
        <div className="contentt">
            <section className="form">
            <form onSubmit={handleLogon}>
                <h1>Login</h1>

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
                <button className="button" type="submit">Entrar</button>
                <Link className="back-link" to="/register">
                <FiLogIn size={16} color="#291ce0" /> Não tenho Cadastro
                </Link>
            </form>
            </section>

        </div>
        </div>
    )
} 