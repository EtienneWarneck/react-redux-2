import React, { useState } from 'react';
import TextInput from '../common/TextInput';


function CoursesPage(props) {
    const [course, setCourse] = useState({
        title: ""
    })

    function handleChange({ target }) {
        setCourse({
            ...course,
            [target.name]: target.value
        })
    };

    function handleSubmit(event) {
        event.preventDefault();
        alert(course.title)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Courses</h2>
                <h3>Add course</h3>
                <TextInput
                    id="title"
                    label="Title"
                    onChange={handleChange}
                    name="title"
                />
                <input type="submit" value="save" />

            </form>
        </div>
    );
}

export default CoursesPage;