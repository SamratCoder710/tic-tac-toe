import React from 'react'

function Log({turns}) {
  return (
    <ol id='log'>
        {turns.map( (turn) =>{
            const {player,position} = turn;
            const {row,col} = position;
            return (<li key={`${row}${col}`}  className='highlighted'>
                {player} selected {row},{col}
            </li>);
        })}
    </ol>
  )
}

export default Log