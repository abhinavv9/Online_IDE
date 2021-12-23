import React, { useState } from 'react'
import './generator.css'
import axios from 'axios'
import Button from '@material-ui/core/Button';

const Generator = () => {

    //Setting states for openai comment generator
    const [comment, setComment] = useState()
    const [out, setOut] = useState()

    //make an api call
    const submitTask = async () => {
        const payload = {
            task: comment
        };
        try {
            const { data } = await axios.post('http://localhost:5000/api  ', payload)
            setOut(String(data.output))
            console.log(out)
        } catch (err) {
            console.log(err.respose)
        }
    }

    return (
        <span className="generator-div">
            {/* <label for="openai">Write what you want to do:</label> */}
            <textarea id="openai" className="generator-area" value={comment} onChange={(e) => {setComment(e.target.value)}} rows="20" cols="80" />
            <Button className='api-btn' aria-controls="simple-menu" aria-haspopup="true" onClick={submitTask}>
                Boom!
            </Button>
        </span>
    )
}

export default Generator
