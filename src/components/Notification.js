import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const notification = props.notification.content

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={notification !== '' ? style : {display: 'none'}}>
      {notification}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
    filter: state.filter,
    anecdotes: state.anecdotes
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)

export default ConnectedNotification