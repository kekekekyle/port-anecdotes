const notificationReducer = (state = { content: '', timer: null }, action) => {
  switch(action.type) {
    case 'SET_NOTIFICATION':
      if (state.timer) {
        clearTimeout(state.timer)
      }
      return {
        content: action.data.content,
        timer: action.data.timer
      }
    case 'REMOVE_NOTIFICATION':
      return { content: '', timer: null }
    default:
      return state
  }
}

export const setNotification = (content) => {
  return {
    type: 'SET_NOTIFICATION',
    data: content
  }
}

export const removeNotification = () => {
  return {
    type: 'REMOVE_NOTIFICATION'
  }
}

export const notification = (content, timeout) => {
  return async dispatch => {
    const timeoutID = setTimeout(() => dispatch(removeNotification()), timeout * 1000)
    dispatch(setNotification({
        content: content,
        timer: timeoutID
      }
    ))
  }
}

export default notificationReducer