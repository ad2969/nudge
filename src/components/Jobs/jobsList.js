import React from 'react'
import { List } from 'antd'

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
      <div className="container--margin">
          <List
            dataSource={this.state.data}
            renderItem={item => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  title={item.componentId}
                  description={item.time}
                />
              </List.Item>
            )}
          >
          </List>
      </div>
    );
  }
}

export default JobList