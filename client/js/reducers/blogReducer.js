import {UPDATE_DATA, HANDLE_BLOGFORM_CHANGE} from '../actions/types'

const INTIAL_STATE = {
  data:[],
  categories: ["Things to Do", "OH MY the Subway", "What are Humans", "I just need to leave NYC", "I would not eat that"], 
  newBlogEntry: {
    blogTitle: '',
    blogAuthor: '',
    location: '', 
    bodyText: '', 
    categories: '',
    images: [],
  }
}

export default function(state = INTIAL_STATE, action) {
  switch(action.type){
    case UPDATE_DATA: 
      return Object.assign({}, state, {data: action.data});
    case HANDLE_BLOGFORM_CHANGE: 
      state.newBlogEntry[action.name] = action.value
      return Object.assign({}, state);
  }
  return state
}