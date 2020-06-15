import React from 'react'



export default function ComponentOne() {
    return(
        <div>
              <form>
        <label htmlFor='cName' name='componentOne'>Component-</label>
          <input 
            placeholder= 'Component One'
            id='cName'
            type='text'
            maxLength= '20'
            name='componentOne'
             />
        </form>
            
        </div>
    )
}