import React, { useState } from 'react';
import { connect } from "react-redux";
import TextInput from '../common/TextInput';
import * as courseActions from '../../redux/actions/courseActions';
import { bindActionCreators } from 'redux';

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
        props.actions.createCourse(course)
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
                {props.courses.map(course => (
                    <div key={course.title}>{course.title}</div>
                ))}
            </form>
        </div>
    );
}


function mapStateToProps(state) {
    return {
        courses: state.courses
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);