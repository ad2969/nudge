import React from 'react'
import { List, Spin } from 'antd'

class JobList extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [
          {
              'time': Date(),
              'componentId': 1
          },
          {
              'time':Date(),
              'componentId': 3
          },
          {
              'time': Date(),
              'componentId': 4
          }
      ],
      loading: false,
      hasMore: true,
    };
  }

  render() {
    return (
      <div className="job-list">
          <List
            dataSource={this.state.data}
            renderItem={item => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  title={item.componentId}
                  description={item.time}
                />
                <div>Content</div>
              </List.Item>
            )}
          >
            {this.state.loading && this.state.hasMore && (
              <div className="demo-loading-container">
                <Spin />
              </div>
            )}
          </List>
      </div>
    );
  }
}

export default JobList