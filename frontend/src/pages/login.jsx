import { useState } from "react"
import Cookie from "js-cookie"
import { useNavigate } from "react-router-dom"
function Teachers(){
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault 
        console.log(email)
        Cookie.set('userEmail', email)
        navigate("/")
    }
    return(
       <div className="content form-group space-y-5 p-5 h-screen flex justify-center items-center bg-gray-800">
            <div className="table bg-white rounded-lg p-5">
                <h1 className="text-center font-bold">LOGIN TO SMS</h1>
                <table className="w-full">
                    <tr>
                        <td>Email</td>
                        <td><input type="text" className="border" value={email} onChange={(e) => setEmail(e.target.value)} required/></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="text" className="border" value={password} onChange={(e) => setPassword(e.target.value)} required/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" value='Login' onClick={handleSubmit} className="bg-blue-800 p-1 text-white w-full" /></td>
                    </tr>
                </table>
            </div>
       </div>
    )
}

export default Teachers