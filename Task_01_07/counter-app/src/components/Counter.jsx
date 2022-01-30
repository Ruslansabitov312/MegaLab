import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  function increase() {
    setCounter(counter + 1)
  }

  function decrease() {
    setCounter(counter - 1)
  }

  function reset() {
    setCounter(0)
  }
  //или же без функции сразу в онклик через эровфанкшн

  return (
    <div style={{ margin: '1em' }}>
      <h1>{counter}</h1>
      <button
        className='btninc'
        onClick={increase}
        style={{ cursor: 'pointer', color: 'green' }}
      >
        Increase
      </button>
      <button
        className='btndec'
        onClick={decrease}
        style={{ cursor: 'pointer', color: 'red', margin: '5px' }}
        disabled={counter === 0}
      >
        Decrease
      </button>
      <button
        className='btnres'
        onClick={reset}
        style={{ cursor: 'pointer', color: 'blue' }}
        disabled={counter === 0}
      >
        Reset
      </button>
    </div>
  )
}

export default Counter
