import React, { useEffect } from 'react';
import { connect } from "react-redux";
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from "prop-types"
import { bindActionCreators } from 'redux';

function CoursesPage(props) {
    console.log("props", props)
    console.log("props.actions", props.actions)
    console.log("props.courses", props.courses)

    useEffect(() => {

        props.actions.loadCourses().catch(error => {
            alert("Loading courses failed" + error);
        });
    })

    return (
        <>
            <h2>Courses</h2>
            {props.courses.map(course => (
                <div key={course.title}>{course.title}</div>
            ))}
        </>
    );
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
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