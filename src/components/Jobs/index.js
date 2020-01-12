import React from 'react'
import { Link } from 'react-router-dom'

import { Card, Avatar, Collapse, Layout, PageHeader } from 'antd'

import { withAuthorization } from 'Session'

import JobsCreateForm from './jobsCreateForm'
import TimePicker from './timePicker'
import Footer from 'components/Footer'

import t from 'assets/languages'
import * as ROUTES from 'constants/routes'

class Jobs extends React.Component {

    componentDidMount() {
        document.getElementsByClassName('anticon anticon-right ant-collapse-arrow')[0].click()
    }

    render() {
        return(
            <Layout>
                <Layout.Header subtitle="x">
                    <PageHeader className="t--capitalize t--bold" title={t('schedules')}></PageHeader>
                </Layout.Header>
                <Layout.Content>
                    <div className="container--margin">
                        <Card bordered={false} >
                            <Card.Meta
                            avatar={<Avatar src="https://images.unsplash.com/photo-1565481454267-290bf20575a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" />}
                            title="Grace Smith"
                            />
                            <hr />
                            <Collapse expandIconPosition='right'>
                                <Collapse.Panel header={<span>Namenda &nbsp;<span className="t--small t--grey">10 grams</span></span>} key="1">
                                    <div style={{display: "flex"}}>
                                        <span>
                                        <svg width="66" height="49" viewBox="0 0 66 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M44.9841 42.8686C42.7415 41.2768 40.4568 39.355 38.2495 37.1454C37.7432 36.6392 37.2573 36.1282 36.7817 35.6151C31.0563 29.4415 27.5677 22.9104 27.3323 18.4946C26.9454 18.4866 26.562 18.4707 26.1694 18.4707C13.6013 18.4707 0 22.5828 0 27.5732V37.8134C0 42.8038 10.1879 46.9158 22.7561 46.9158C30.5795 46.9158 40.8915 45.2955 44.9841 42.8686Z" fill="#C13110"/>
                                            <path d="M55.0504 16.9097C46.1198 7.96889 35.9569 3.64522 32.4104 7.19631L25.1331 14.4817C21.5865 18.0316 25.9045 28.2058 34.8363 37.1467C43.7271 46.0477 53.8797 50.3179 57.4706 46.8545L57.4763 46.8601L64.7536 39.5748C68.2989 36.0236 63.981 25.8505 55.0504 16.9097Z" fill="#C6A620"/>
                                            <path d="M23.9189 18.4947C23.531 18.4867 23.1487 18.4709 22.7561 18.4709C10.1879 18.4707 0 22.5828 0 27.5732C0 32.5636 10.1879 36.6756 22.7561 36.6756C26.5905 36.6756 30.1984 36.2888 33.3684 35.6153C27.6429 29.4415 24.1544 22.9104 23.9189 18.4947Z" fill="#E24E2A"/>
                                            <path d="M34.8361 37.1455C34.3298 36.6392 33.8439 36.1282 33.3682 35.6151C30.1983 36.2887 26.5903 36.6755 22.7559 36.6755C10.1879 36.6756 0 32.5636 0 27.5732V37.8134C0 42.8038 10.1879 46.9158 22.7561 46.9158C30.5795 46.9158 37.4781 45.2957 41.5708 42.8686C39.3282 41.278 37.0435 39.355 34.8361 37.1455Z" fill="#C13110"/>
                                            <path d="M32.4133 7.19217C28.8384 10.762 33.1788 20.9046 42.1078 29.8462C51.0368 38.7879 61.1733 43.1426 64.7482 39.5728C68.323 36.0029 63.9827 25.8604 55.0536 16.9187C46.1246 7.97705 35.9882 3.62233 32.4133 7.19217Z" fill="#E6C82B"/>
                                            <path d="M42.1133 29.8601C33.1827 20.9193 28.8648 10.7461 32.4101 7.19504L25.1327 14.4804C21.5861 18.0303 25.9041 28.2045 34.8359 37.1455C43.7268 46.0465 53.8793 50.3167 57.4702 46.8532L57.4759 46.8589L64.7532 39.5735C61.2068 43.1235 51.0439 38.801 42.1133 29.8601Z" fill="#C6A620"/>
                                            <path d="M33.3511 6.53176C33.0052 6.71273 32.6821 6.92321 32.4102 7.19504C32.1371 7.46919 31.9266 7.7958 31.7446 8.14394L63.8113 40.2368C64.1573 40.0558 64.4804 39.8454 64.7534 39.5724C65.0265 39.2992 65.237 38.9739 65.419 38.6246L33.3511 6.53176Z" fill="#C6A620"/>
                                            <path d="M27.8477 28.5232C27.3994 27.8178 26.9841 27.1204 26.6087 26.4353H0.199138C0.0808151 26.8098 0 27.1874 0 27.5732C0 27.959 0.0808151 28.3366 0.199138 28.711H27.2584C27.4791 28.7109 27.6725 28.6324 27.8477 28.5232Z" fill="#C13110"/>
                                        </svg>
                                        </span>
                                        <span style={{paddingLeft: "2rem"}}>
                                            <h3 className="t--capitalize t--bold">{t('repeats')}</h3>
                                            <p className="t--small">Weekly</p>
                                            <h3 className="t--capitalize t--bold">{t('dates')}</h3>
                                            <p className="t--small">Monday, Wednesday, Friday</p>
                                            <h3 className="t--capitalize t--bold">{t('time')}</h3>
                                            <p className="t--small">10am, 6pm</p>
                                        </span>
                                    </div>
                                </Collapse.Panel>
                                <Collapse.Panel header={<span>Aricept &nbsp;<span className="t--small t--grey">15 grams</span></span>} key="2">
                                    <div>Hello</div>
                                </Collapse.Panel>
                                <Collapse.Panel header={<span>Drug 3 &nbsp;<span className="t--small t--grey">10 grams</span></span>} key="3">
                                    <div>Hello</div>
                                </Collapse.Panel>
                            </Collapse>
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
                <Footer index={1} />
            </Layout>
        )
    }

}
const condition = authUser => !!authUser

export default withAuthorization(condition)(Jobs)


export { JobsCreateForm, TimePicker }