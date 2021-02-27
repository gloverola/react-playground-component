import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {allGrocerys, deleteGrocery} from '../../features/grocerySlice'

const GroceryList = ({handleEdit}) => {

    const items = useSelector(allGrocerys);

    const dispatch = useDispatch();

    if(!items.length) {
      return (
        <p>No Item added to List yet</p>
      )
    }

    const handleDelete = (id) => {
      dispatch(deleteGrocery({
        id
      }))
    }
  
  return (
    <div className="items">
      {
        items.map(item => {
          const {id, text} = item;
          return (
            <div key={id} className='item'>
              <p>{text}</p>
              <div className='actions'>
                <button className="edit-btn" onClick={() => handleEdit(id)}>EDIT</button>
                <button className="delete-btn" onClick={() => handleDelete(id)}>DELETE</button>
              </div>
            </div>
          );
        })
      }
    </div>
  )
}

export default GroceryList;
