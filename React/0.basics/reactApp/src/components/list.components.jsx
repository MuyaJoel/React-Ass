import React from 'react'
import ItemComponents from './item.components'

const ListComponents = (props) => {
    const {list}=props
  return (
    <div>
        {list.map((obj)=>(
            <ItemComponents key={obj.productID} product={obj}/>
        ))}
    </div>
  )
}

export default ListComponents