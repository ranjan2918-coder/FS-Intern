import React, { useState, useEffect } from 'react';

function User() {
    const [userdata, setuserdata] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(response => response.json())
            .then(data => {
                setuserdata(data.users);
                setLoading(false);
            })
            .catch(error => {
                console.log("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    console.log(userdata);

    return (
        <>
            <h2>Fetch API - Users</h2>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <table border="1" cellPadding="10">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>

                    <tbody>
                        {userdata.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}

export default User;