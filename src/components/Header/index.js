import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, PageHeader } from 'antd'

class Header extends React.Component {
    render() {
        return (
            <Layout.Header subtitle="x">
                <PageHeader className="t--capitalize t--bold"
                    title={this.props.title}
                    extra={[
                        <span key={this.props.title}>
                        <Link to={this.props.backRoute}>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.8634 0.184426L8.45902 6.18853C8.19672 6.43443 7.78142 6.43443 7.54098 6.18853L1.13661 0.184426C0.874317 -0.0614754 0.459016 -0.0614754 0.218579 0.184426C-0.043716 0.430328 -0.043716 0.819672 0.218579 1.04508L6.62295 7.04918C6.88525 7.29508 6.88525 7.68443 6.62295 7.90984L0.196721 13.9344C-0.0655738 14.1803 -0.0655738 14.5697 0.196721 14.7951C0.459016 15.041 0.874317 15.041 1.11475 14.7951L7.51913 8.79098C7.78142 8.54508 8.19672 8.54508 8.43716 8.79098L14.8634 14.8156C15.1257 15.0615 15.541 15.0615 15.7814 14.8156C16.0437 14.5697 16.0437 14.1803 15.7814 13.9549L9.39891 7.93033C9.13661 7.68443 9.13661 7.29508 9.39891 7.06967L15.8033 1.06557C16.0656 0.819672 16.0656 0.430328 15.8033 0.204918C15.541 -0.0409837 15.1257 -0.0409836 14.8634 0.184426Z" fill="black"/>
                            </svg>
                        </Link>
                        </span>
                      ]}>
                    </PageHeader>
            </Layout.Header>
        )
    }
}

export default Header