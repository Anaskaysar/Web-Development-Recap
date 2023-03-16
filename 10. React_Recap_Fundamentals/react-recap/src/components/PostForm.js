import React, { useState } from 'react'

export default function PostForm() {
    const [userId, setUserID] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const submitHandler = (event) => {
        event.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <input type="text" placeholder='User Id' value={userId} onChange={(e) => setUserID(e.target.value)} />
                </div>
                <div>
                    <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <input type="text" placeholder='Body' value={body} onChange={(e) => setBody(e.target.value)} />
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
