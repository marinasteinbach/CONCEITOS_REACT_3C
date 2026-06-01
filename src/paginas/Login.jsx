import { useState } from "react"

export default function Login({navegar}){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const entrar = async () => {
    const resultado = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({email, senha})
    })

    const data = resultado.json()
    console.log(data);
    console.log(resultado.ok);
    if(!resultado.ok){
        alert(data.error)
        navegar('cadastro')
    } else {
        navegar('usuarios')
    }
}
    return (
        <div>
            <input type="text" id="email"
            placeholder="Digite o email"
            value = {email}
            onChange = {(e) => setEmail(e.target.value) }
            />
             <input type="text" id="senha"
            placeholder="Digite a senha"
            value = {senha}
            onChange = {(e) => setSenha(e.target.value) }
            />
            <button onClick={entrar}>Entrar</button>
        </div>
    )
}