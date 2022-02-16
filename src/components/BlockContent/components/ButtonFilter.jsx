import React from 'react'

export const ButtonFilter = ({searchItem, searchEmpty}) => {
  return (
    <>
        <button onClick={searchItem}  className="buttonFilter">
          Filter
        </button>
        {/* <button onClick={searchEmpty}  className="buttonPrev">
          Reset
        </button> */}
    </>
  )
}

