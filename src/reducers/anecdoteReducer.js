import anecdoteService from '../services/anecdotes'

const compareFunction = (a, b) => {
  return b.votes - a.votes
}

const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'INIT_ANECDOTES':
      return action.data.sort(compareFunction)
    case 'VOTE':
      const id = action.data.id
      return state.map(anecdote => 
        anecdote.id !== id ? anecdote : action.data  
      ).sort(compareFunction)
    case 'NEW_ANECDOTE':
      return state.concat(action.data)
    default:
      return state
  }
}

export const voteId = (anecdote) => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.update(anecdote)
    dispatch({
      type: 'VOTE',
      data: updatedAnecdote
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export default anecdoteReducer