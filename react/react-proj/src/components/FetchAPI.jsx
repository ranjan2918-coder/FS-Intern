
import React, { useEffect, useState } from "react";

function FetchAPI() {

    const [userdata, setuserdata] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(data => {
                setuserdata(data.posts);
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
            <h2>Fetch API - Posts</h2>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <table border="1" cellPadding="10">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th>User ID</th>
                            <th>Likes</th>
                        </tr>
                    </thead>

                    <tbody>
                        {userdata.map((post) => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                <td>{post.userId}</td>
                                <td>{post.reactions.likes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}

export default FetchAPI;
