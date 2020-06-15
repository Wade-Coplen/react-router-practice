import React from 'react';

export default function ComponentThree() {
    return(
        <div>
            <form>
                <p>Pick one!</p>
                <label htmlFor='alpha'>Alpha</label>
                    <input 
                        type='checkbox'
                        id='alpha' 
                        name='alpha' 
                        />
                <label htmlFor='beta'>Beta</label>
                    <input 
                        type='checkbox' 
                        id='beta' 
                        name='beta' 
                        />
            </form>
        </div>
    )
    
}