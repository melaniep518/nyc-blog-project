import React from 'react'
import {Link} from 'react-router'

import {
  newEntryFormStoreData, 
  addCategoryToStore
} from '../../../actions/blogActions'

const Form = (props) => {

  let handleFormChange = (event) => {
        console.log('bodyText ',props.blogTitle, props.bodyText)
    let name = event.target.name
    let value = event.target.value
    newEntryFormStoreData(name, value)
  }

  let handleCheckboxes = (event) => {
    let newCategory = event.target.value;
    let allCategories;

    //check to see if the category already in the state 
    if(props.categories.length > 0){
      if (props.categories.indexOf(newCategory) === -1){
        allCategories = props.categories.concat(newCategory)
      } else {
        console.log('same', props.categories)
        allCategories = props.categories.filter((category)=>{
          if (category !== newCategory) return category
        })
      }
    } else {
      allCategories = [newCategory]
    }

    //send the previous values and new added value to the store
    addCategoryToStore(allCategories)
  }
  
  let createCheckboxes = () => {

    return props.dropDownCategories.map((category, index) => ( 
      <div key={index}>
        <input 
          type='checkbox' 
          name='category'
          value={category}  
          onChange={handleCheckboxes}
        />
        {category}
      </div>
    ))
  }



  return (
    <div className='formInner'>

      <div className='inputContainer'>
        <label>Title</label>
        <input 
          type="text" 
          name='blogTitle'
          placeholder="Title"
          value={props.fillForm ? props.fillForm.blogTitle : props.blogTitle}
          onChange={handleFormChange}
        />
      </div>

      <div className='author-location'>
        <div className='inputContainer'>
          <label>Author</label>
          <input 
            type="text"
            name='blogAuthor' 
            placeholder="author"
            value={props.fillForm ? props.fillForm.blogAuthor : props.blogAuthor}
            onChange={handleFormChange}
          />
        </div>

        <div className='inputContainer'>
          <label>Location</label>
          <input 
            type="text"
            name='location' 
            placeholder="Location"
            value={props.fillForm ? props.fillForm.location : props.location}
            onChange={handleFormChange}
          />
        </div>
      </div>

      <div className='inputContainer'>
        <label>Enter Description</label>
        <textarea 
          type="textbox"
          name='bodyText' 
          placeholder="Description"
          value={props.fillForm ? props.fillForm.blogText : props.bodyText}
          onChange={handleFormChange}
          //style={{height: '200px'}}
        ></textarea>
      </div>
    <div className='inputContainer'>
      <label>Enter Description</label>
      <input 
        type="text"
        name='images' 
        placeholder="Enter Url of Image (seperate each entry with a comma)"
        value={props.fillForm ? props.fillForm.images : props.images}
        onChange={handleFormChange}
      />
    </div>
    {createCheckboxes()}
  </div>
  )
}

export default Form