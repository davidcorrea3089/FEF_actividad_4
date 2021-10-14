import React, { useState } from "react"
import { ThreePointsLogin } from "../services/ThreePointsServices"
import { useHistory } from "react-router-dom"


function Login(props) {

    const { replace } = useHistory()
    
    const [error, setError] = useState(false)
    const [status, setStatus] = useState('loaded')

    function Submit(event) {
        event.preventDefault()
        setStatus('loading')
        ThreePointsLogin(event.target.userName.value, event.target.password.value)
            .then(response => {
                setError(false)
                setStatus('loaded')
                localStorage.setItem('userId', response.id)
                props.onLoginComplete(response)
                replace('/')
            })
            .catch(err => {
                setError(true)
                setStatus('loaded')
            })
    }

    const getComponent = () => {
            
        if(status === 'loaded'){
            return(
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div className="fadeIn first mb-3 mt-3">
                            <img className="rounded-circle" src="https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg" id="icon" alt="User Icon" />
                        </div>
                        <form onSubmit={Submit}>
                            
                            {error ? (<div className='error-login'>Error con el login</div>) : ''}
                            <input type="text" id="field-login" className="fadeIn second" name="userName" placeholder="Nombre de usuario"/>
                            <input type="text" id="field-password" className="fadeIn third" name="password" placeholder="Contraseña"/>
                            <input type="submit" className="fadeIn fourth" value="Log In"/>

                        </form>
                    </div>
                </div>
            )    
        }

        if(status === 'loading'){
            return(
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div className="fadeIn first mb-3 mt-3">
                            <img className="rounded-circle" src="https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg" id="icon" alt="User Icon" />
                        </div>
                        <form onSubmit={Submit}>
                            <div className='cargando-login'>
                                Cargando...
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
    }

    return(
        getComponent()
    )

}

export default Login

