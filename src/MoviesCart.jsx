import React from 'react'

const MoviesCart = (props) => {
  return (
    <div className='cart'>

    <img src={props.image}/>
    <p>{props.title}</p>
    <p>{props.imbd}</p>
    <p>{props.year}</p>
    </div>
  )
}

export default MoviesCart
