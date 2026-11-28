
import React, { useState } from 'react'

function Registration() {

    const [formdata, setformdata] = useState({
        username: '',
        email: '',
        number: ''
    })

    const [users, setusers] = useState([])
    const [editIndex, seteditIndex] = useState(null)

    function handleChange(e) {
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (editIndex !== null) {
            const updatedUsers = [...users]
            updatedUsers[editIndex] = { ...formdata }
            setusers(updatedUsers)
            seteditIndex(null)
        } else {
            setusers([...users, { ...formdata }])
        }

        setformdata({
            username: '',
            email: '',
            number: ''
        })
    }

    function handleDelete(index) {
        const updatedUsers = users.filter((user, i) => i !== index)
        setusers(updatedUsers)

        if (editIndex === index) {
            seteditIndex(null)
            setformdata({
                username: '',
                email: '',
                number: ''
            })
        } else if (editIndex !== null && index < editIndex) {
            seteditIndex(editIndex - 1)
        }
    }

    function handleEdit(index) {
        setformdata(users[index])
        seteditIndex(index)
    }

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4">

            <div className="max-w-4xl mx-auto">

                {/* Registration Form */}
                <div className="bg-white p-8 rounded-xl shadow-md mb-10">

                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Registration Form
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Username
                            </label>

                            <input
                                type="text"
                                name="username"
                                value={formdata.username}
                                onChange={handleChange}
                                placeholder="Enter username"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={formdata.email}
                                onChange={handleChange}
                                placeholder="Enter email"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Number
                            </label>

                            <input
                                type="text"
                                name="number"
                                value={formdata.number}
                                onChange={handleChange}
                                placeholder="Enter number"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
                        >
                            {editIndex !== null ? 'Update User' : 'Register'}
                        </button>

                        {editIndex !== null && (
                            <button
                                type="button"
                                onClick={() => {
                                    seteditIndex(null)
                                    setformdata({
                                        username: '',
                                        email: '',
                                        number: ''
                                    })
                                }}
                                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 rounded-lg"
                            >
                                Cancel Edit
                            </button>
                        )}

                    </form>
                </div>

                {/* Registered Users Table */}
                <div className="bg-white p-8 rounded-xl shadow-md">

                    <div className="flex justify-between items-center mb-6">

                        <h2 className="text-2xl font-bold text-gray-800">
                            Registered Users
                        </h2>

                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                            {users.length} Users
                        </span>

                    </div>

                    <div className="overflow-x-auto">

                        <table className="w-full text-left border-collapse">

                            <thead>
                                <tr className="bg-gray-100 text-gray-700">
                                    <th className="p-4 border-b">Username</th>
                                    <th className="p-4 border-b">Email</th>
                                    <th className="p-4 border-b">Number</th>
                                    <th className="p-4 border-b text-center">Actions</th>
                                </tr>
                            </thead>

                            <tbody>

                                {users.length === 0 ? (

                                    <tr>
                                        <td
                                            colSpan="4"
                                            className="text-center p-8 text-gray-500"
                                        >
                                            No users registered yet.
                                        </td>
                                    </tr>

                                ) : (

                                    users.map((user, index) => (

                                        <tr
                                            key={index}
                                            className="hover:bg-gray-50 transition"
                                        >

                                            <td className="p-4 border-b text-gray-800">
                                                {user.username}
                                            </td>

                                            <td className="p-4 border-b text-gray-600">
                                                {user.email}
                                            </td>

                                            <td className="p-4 border-b text-gray-600">
                                                {user.number}
                                            </td>

                                            <td className="p-4 border-b">
                                                <div className="flex justify-center gap-2">

                                                    <button
                                                        onClick={() => handleEdit(index)}
                                                        className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md text-sm transition"
                                                    >
                                                        Edit
                                                    </button>

                                                    <button
                                                        onClick={() => handleDelete(index)}
                                                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm transition"
                                                    >
                                                        Delete
                                                    </button>

                                                </div>
                                            </td>

                                        </tr>

                                    ))

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Registration
