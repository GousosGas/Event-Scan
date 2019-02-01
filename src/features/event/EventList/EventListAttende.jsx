import React, { Component } from 'react'
import {List,Image} from 'semantic-ui-react';

class EventListAttende extends Component {
  render() {

    const {attendee} = this.props;
    return (
      <List.Item>
          <Image as='a' size='mini' circular 
          src={attendee.photoURL}></Image>
      </List.Item>
    )
  }
}

export default EventListAttende;
