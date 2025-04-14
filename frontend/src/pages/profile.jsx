function Teachers(){
    return(
       <div className="content form-group space-y-5 p-5 ">
            <div className="table bg-white rounded-lg p-5">
                <h1 className="text-center font-bold">CHANGE PASSWORD</h1>
                <table className="w-full">
                    <tr>
                        <td>Current Password</td>
                        <td><input type="text" className="border" /></td>
                    </tr>
                    <tr>
                        <td>New Password</td>
                        <td><input type="text" className="border" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" value='save' className="bg-blue-800 p-1 text-white w-full" /></td>
                    </tr>
                </table>
            </div>
       </div>
    )
}

export default Teachers