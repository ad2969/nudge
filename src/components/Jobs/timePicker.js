import React from 'react'
import { withRouter } from 'react-router-dom'
import { Layout } from 'antd'

import Header from 'components/Header'

import * as ROUTES from 'constants/routes'

class TimePicker extends React.Component {

    componentDidMount() {
        console.log(this.props.location.state)
    }

    render() {
        return (
            <Layout>
                <Header title='' backRoute={this.props.isUpdate ? ROUTES.JOBS + '/update' : ROUTES.JOBS + '/create'}/>
                <Layout.Content>
                </Layout.Content>
            </Layout>
        )
    }
}

export default withRouter(TimePicker)
