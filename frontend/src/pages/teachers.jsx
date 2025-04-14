function Teachers(){
    return(
       <div className="content form-group space-y-5 p-5 ">
            <div className="table bg-white rounded-lg p-5">
                <h1 className="text-center font-bold">NEW TEACHER</h1>
                <table className="w-full">
                    <tr>
                        <td>name</td>
                        <td><input type="text" className="border" /></td>
                    </tr>
                    <tr>
                        <td>age</td>
                        <td><input type="text" className="border" /></td>
                    </tr>
                    <tr>
                        <td>level</td>
                        <td><input type="text" className="border" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" value='save' className="bg-blue-800 p-1 text-white w-full" /></td>
                    </tr>
                </table>
            </div>
            <div className="table bg-white rounded-lg p-5 w-full">
                <h1 className="text-center font-bold">VIEW TEACHER</h1>
                <table className="w-full">
                    <tr>
                        <th>No</th>
                        <th>name</th>
                        <th>age</th>
                        <th>level</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>JohnDoe</td>
                        <td>12</td>
                        <td>level 2</td>
                    </tr>
                </table>
            </div>
       </div>
    )
}

export default Teachers