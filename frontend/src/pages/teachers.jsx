import { useState, useEffect } from "react";
import axios from "axios";

function Teachers() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [level, setLevel] = useState("");
    const [teacher, setTeacher] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);
    const [teacherId, setTeacherId] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post("http://localhost:8888/teacher/create", { name, age, level });
            console.log(result);
            fetachTeacher();
            setName("");
            setAge("");
            setLevel("");
        } catch (error) {
            console.error(error);
        }
    };

    const fetachTeacher = async () => {
        try {
            const response = await axios.get("http://localhost:8888/teacher/");
            setTeacher(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const updateSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.put(`http://localhost:8888/teacher/update/${teacherId}`, { name, age, level });
            console.log(result);
            setIsUpdate(false); // Close the update modal
            fetachTeacher(); // Refresh the teacher list after updating
        } catch (error) {
            console.error(error);
        }
    };

    const openUpdateModal = (data) => {
        setIsUpdate(true);
        setTeacherId(data._id);
        setName(data.name);
        setAge(data.age);
        setLevel(data.level);
    };

    const closemodal = () => {
        setIsUpdate(false);
        setName("");
        setAge("");
        setLevel("");
    };

    useEffect(() => {
        fetachTeacher();
    }, []); // Add an empty dependency array to run only once

    return (
        <div className="content form-group space-y-5 p-5 ">
            <div className="table bg-white rounded-lg p-5">
                <h1 className="text-center font-bold">NEW TEACHER</h1>
                <table className="w-full">
                    <tbody>
                        <tr>
                            <td>name</td>
                            <td>
                                <input
                                    type="text"
                                    className="border"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>age</td>
                            <td>
                                <input
                                    type="text"
                                    className="border"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>level</td>
                            <td>
                                <input
                                    type="text"
                                    className="border"
                                    value={level}
                                    onChange={(e) => setLevel(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input
                                    type="submit"
                                    value="save"
                                    onClick={handleSubmit}
                                    className="bg-blue-800 p-1 text-white w-full"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="view flex flex-row space-x-2">
                <div className="table bg-white rounded-lg p-5 w-full">
                    <h1 className="text-center font-bold">VIEW TEACHER</h1>
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>name</th>
                                <th>age</th>
                                <th>level</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teacher.map((data, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.age}</td>
                                    <td>level {data.level}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="button p-2 bg-blue-800 text-white ml-5"
                                            onClick={() => openUpdateModal(data)}
                                        >
                                            update
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {isUpdate && (
                    <div className="table bg-white rounded-lg p-5">
                        <h1 className="text-center font-bold">UPDATE TEACHER</h1>
                        <table className="w-full">
                            <tbody>
                                <tr>
                                    <td>name</td>
                                    <td>
                                        <input
                                            type="text"
                                            className="border"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>age</td>
                                    <td>
                                        <input
                                            type="text"
                                            className="border"
                                            value={age}
                                            onChange={(e) => setAge(e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>level</td>
                                    <td>
                                        <input
                                            type="text"
                                            className="border"
                                            value={level}
                                            onChange={(e) => setLevel(e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input
                                            type="submit"
                                            value="cancel"
                                            onClick={closemodal}
                                            className="bg-red-800 p-1 text-white w-full"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="submit"
                                            value="save"
                                            onClick={updateSubmit}
                                            className="bg-blue-800 p-1 text-white w-full"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Teachers;