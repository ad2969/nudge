import React from 'react'
import { Link } from 'react-router-dom'

import { Card, Avatar, Layout, PageHeader, Timeline } from 'antd'

import { withAuthorization } from 'Session'

import * as moment from 'moment'

import Footer from 'components/Footer'
import PillOne from 'components/small/pillOne'
import PillTwo from 'components/small/pillTwo'
import PillThree from 'components/small/pillThree'

import t from 'assets/languages'
import * as ROUTES from 'constants/routes'

class HomePage extends React.Component {

    render() {
        return(
            <Layout>
                <Layout.Header subtitle="x">
                    <PageHeader className="t--capitalize t--bold" title={t('my home')}>{moment().format('MMM Do, YYYY')}</PageHeader>
                </Layout.Header>
                <Layout.Content>
                    <br />
                    <div className="container--margin" style={{overflowY: "scroll"}}>
                        <Card bordered={false} style={{height: "25vh"}} >
                            <Card.Meta
                            avatar={<Avatar src="https://images.unsplash.com/photo-1565481454267-290bf20575a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" />}
                            title="Grace Smith"
                            />
                            <hr />
                            <br />
                          <Timeline>
                            <Timeline.Item style={{display: "flex"}}>12:00pm<PillOne /><PillTwo /></Timeline.Item>
                            <Timeline.Item style={{display: "flex"}}>6:00pm<PillOne /><PillThree /></Timeline.Item>
                          </Timeline>,
                        </Card>
                        <Card bordered={false} style={{paddingTop: "2rem"}} >
                            <Card.Meta
                            avatar={<Avatar src="https://images.unsplash.com/photo-1535320601059-04936fd8a307?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />}
                            title="Steven Smith"
                            />
                            <hr />
                            <br />
                          <Timeline>
                            <Timeline.Item style={{display: "flex"}}>8:30am<PillOne /><PillTwo /></Timeline.Item>
                            <Timeline.Item style={{display: "flex"}}>5:00pm<PillOne /><PillThree /></Timeline.Item>
                            <Timeline.Item style={{display: "flex"}}>7:30pm<PillOne /><PillTwo /><PillThree /></Timeline.Item>
                          </Timeline>,
                        </Card>
                    </div>

                <Link to={ROUTES.JOBS + '/create'} style={{position: "absolute", right: "5vw", bottom: "10vh"}}>
                <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d)">
                    <circle cx="37.5" cy="33.5" r="22.5" fill="white"/>
                    </g>
                    <line x1="25.4464" y1="32.8036" x2="50.3571" y2="32.8036" stroke="#FF8780" strokeWidth="3"/>
                    <line x1="37.6072" y1="45.5536" x2="37.6072" y2="20.6429" stroke="#FF8780" strokeWidth="3" strokeLinejoin="round"/>
                    <defs>
                    <filter id="filter0_d" x="0" y="0" width="75" height="75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="7.5"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    </defs>
                </svg>
                </Link>
                </Layout.Content>
                <Footer index={0} />
            </Layout>
        )
    }

}
const condition = authUser => !!authUser

export default withAuthorization(condition)(HomePage)