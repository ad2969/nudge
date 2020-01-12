import React from 'react'
import JobList from './jobsList'
import JobsCreateForm from './jobsCreateForm'
import TimePicker from './timePicker'

class Jobs extends React.Component {

    render() {
        return (
            <JobList />
        )
    }
}

export default Jobs

export { JobsCreateForm, TimePicker }