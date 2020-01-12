import React from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, Form, Input, Button } from 'antd'
import t from 'assets/languages'
import * as moment from 'moment'

import data from 'assets/sampleData'

import { convertToReadable, convertToSendable } from 'functions/converts'

import Header from 'components/Header'

import * as ROUTES from 'constants/routes'

class JobsCustomizedCreateForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            med: '',
            dose: '',
            editTime: false,
            reminders: []
        }
    }

    componentDidMount() {
        // get
        this.setState({
            reminders: convertToReadable(data)
        }, () => {console.log('recieved', this.state.reminders)})
    }

    setName = e => {
        e.preventDefault()
        this.setState({ name: e.target.value })
    }
    setMed = e => {
        e.preventDefault()
        this.setState({ med: e.target.value })
    }
    setDose = e => {
        e.preventDefault()
        this.setState({ dose: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newData = convertToSendable(this.state.reminders)
        console.log('sending', newData)
        this.props.history.push(ROUTES.JOBS)
    }

    handleUpdates = update => {
        this.setState(prevState => {
            const reminders = prevState.reminders.map((item, j) => {
              if (j === update.id) {
                return  {
                            days: update.days,
                            timestamp: update.timestamp
                        }
              } else {
                return item;
              }
            });
            return {
              reminders,
            };
          });
    }
    
    render() {
        const { getFieldDecorator } = this.props.form

        return (
            <Layout>
                <Header title={t('create reminder')} backRoute={ROUTES.JOBS}/>
                <Layout.Content>
                <div className="container--margin forms">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item>
                            {getFieldDecorator('name', {
                                rules: [{ required: true, message: t('Name is required!') }],
                            })( <div className="forms__line">
                                    <span className="t--capitalize t--bold">{t('name')}</span>
                                    <Input style={{height: "auto"}} onChange={this.setName} placeholder="Enter patient name"/>
                                </div>)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('med', {
                                rules: [{ required: true, message: t('Medication is required!') }],
                            })( <div className="forms__line">
                            <span className="t--capitalize t--bold">{t('medication')}</span>
                            <Input style={{height: "auto"}} onChange={this.setMed} placeholder="Enter medication"/>
                        </div>)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('dose', {
                                rules: [{ required: true, message: t('Dosage is required!') }],
                            })( <div className="forms__line">
                            <span className="t--capitalize t--bold">{t('dose')}</span>
                            <Input style={{height: "auto"}} onChange={this.setName} placeholder="Enter dosage"/>
                        </div>)}
                        </Form.Item>
                        <Form.Item style={{marginBottom: 0}} className="forms__time">
                            <div className="forms__line forms__line--space">
                                <span className="t--capitalize t--bold">{t('time')}</span>
                                    <span className="forms__line__button" >
                                        <span><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            onClick={() => {
                                                this.props.history.push({
                                                    pathname: ROUTES.JOBS + '/create/timecreate',
                                                    state: { new: true, all: this.state.reminders, id: this.state.reminders.length }
                                                })
                                            }}>
                                        <circle cx="10.5" cy="10.5" r="10.5" fill="#E5E5E5"/>
                                        <path d="M11.384 11.16V14.504H9.304V11.16H5.896V9.144H9.288V5.8H11.368V9.144H14.776V11.16H11.384Z" fill="black"/>
                                        </svg></span>
                                    </span>
                            </div>
                            {this.state.reminders.map((reminder, index) => (
                                <div key={reminder.timestamp} className="forms__line forms__line--narrow t--grey"
                                onClick={() => {
                                    this.props.history.push({
                                        pathname: ROUTES.JOBS + '/create/timeupdate',
                                        state: {
                                            new: false,
                                            id: index,
                                            days: reminder.days,
                                            timestamp: reminder.timestamp,
                                            all: this.state.reminders
                                        }
                                    })
                                }}>
                                <span key={reminder.timestamp + '0'} className={reminder.days[0] ? "forms__line__day t--bold" : "forms__line__day t--lightgrey"}>S</span>
                                <span key={reminder.timestamp + '1'} className={reminder.days[1] ? "forms__line__day t--bold" : "forms__line__day t--lightgrey"}>M</span>
                                <span key={reminder.timestamp + '2'} className={reminder.days[2] ? "forms__line__day t--bold" : "forms__line__day t--lightgrey"}>T</span>
                                <span key={reminder.timestamp + '3'} className={reminder.days[3] ? "forms__line__day t--bold" : "forms__line__day t--lightgrey"}>W</span>
                                <span key={reminder.timestamp + '4'} className={reminder.days[4] ? "forms__line__day t--bold" : "forms__line__day t--lightgrey"}>T</span>
                                <span key={reminder.timestamp + '5'} className={reminder.days[5] ? "forms__line__day t--bold" : "forms__line__day t--lightgrey"}>F</span>
                                <span key={reminder.timestamp + '6'} className={reminder.days[6] ? "forms__line__day t--bold" : "forms__line__day t--lightgrey"}>S</span>
                                <span className="forms__line__time">{moment(reminder.timestamp).format('h:mm A')}</span>
                            </div>
                            ))}
                        </Form.Item>
                            <Button type="primary" htmlType="submit" size="large" className="t--uppercase b--done">{t('add')}</Button>
                    </Form>
                </div>
                </Layout.Content>
            </Layout>
        )
    }
}

const JobsCreateForm = Form.create({ name: 'jobs_form' })(JobsCustomizedCreateForm)

export default withRouter(JobsCreateForm)