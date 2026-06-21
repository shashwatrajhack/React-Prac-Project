import React from 'react'

export default function Dashboard() {
  return (
    <div className='dashboard'>
        <header>Shopping Dashboard</header>

        <label htmlFor="">Products</label>
        <input placeholder='search products'></input>

        <label htmlFor="">Size</label>
        <input type="text" placeholder='size of product' />

        <label>Color</label>
        <input type='color'/>

        <button>Submit</button>


    </div>
  )
}
