import React, { useEffect } from 'react';
import { connect } from "react-redux";
import * as courseActions from '../../redux/actions/courseActions';
import { bindActionCreators } from 'redux';

function CoursesPage(props) {

    useEffect(() => {
        props.actions.loadCourses()
    });

    return (
        <>
            <h2>Courses</h2>
            {props.courses.map(course => (
                <div key={course.title}>{course.title}</div>
            ))}
        </>
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