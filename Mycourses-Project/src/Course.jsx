import React from 'react'
import "./css/course.css"

function Course({ course }) {
    const { id, Title, Description, Price, Link, IMG } = course;
    return (

        <div className='course'>
            <img src={IMG}></img>
            <h4>{Title}</h4>
            <p className='description'>{Description}</p>
            <p>{Price} TL </p>
            <a href={Link}>Get Information</a>
        </div>


    )
}

export default Course
