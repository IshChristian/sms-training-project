import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookie from "js-cookie";

function Teachers() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response =  await axios.get(`http://localhost:8888/auth/login/${email}`)
            console.log(response.data)
            if(response.data.user.length === 0){
                console.log("user not found")
            }
            const user = response.data.user[0];

            if(user.password !== password){
                console.log('invalid password')
            }

            Cookie.set('email', email)
            navigate("/")
        }catch(error){
            console.log(error)
        }
    }

    return (
        <div className="content form-group space-y-5 p-5 h-screen flex justify-center items-center bg-gray-800">
            <div className="table bg-white rounded-lg p-5 w-96">
                <h1 className="text-center font-bold text-xl mb-4">LOGIN TO SMS</h1>

                <form onSubmit={handleSubmit}>
                    <table className="w-full">
                        <tbody>
                            <tr>
                                <td className="py-2">Email</td>
                                <td>
                                    <input
                                        type="email"
                                        className="border w-full p-2 rounded"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2">Password</td>
                                <td>
                                    <input
                                        type="password"
                                        className="border w-full p-2 rounded"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td className="py-2">
                                    <button 
                                        type="submit" 
                                        className="bg-blue-800 hover:bg-blue-900 text-white w-full p-2 rounded"
                                       
                                    >
                                        Login
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
}

export default Teachers;