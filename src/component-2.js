import React from 'react'


export default function ComponentTwo() {
    return(
        <div>
            <form>
                <label htmlFor='alphaBeta'><p>Which are you?</p></label>
                <select id= 'alphaBeta' name='Thanos'>
                    <option value= '1'>Alpha</option>
                    <option value= '2'>Beta</option>
                </select>
            </form>
        </div>
    )
}