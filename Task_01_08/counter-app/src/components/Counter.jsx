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

  function auto() {
    setTimeout(() => {
      setCounter(counter + 1)
    }, 2000)
  }

  return (
    <div style={{ margin: '1em' }}>
      <h1>{counter}</h1>
      <button
        className='btninc'
        onClick={increase}
        style={{ cursor: 'pointer', color: 'green' }}
      >
        INCREASE
      </button>
      <button
        className='btndec'
        onClick={decrease}
        style={{ cursor: 'pointer', color: 'red', margin: '5px' }}
        disabled={counter === 0}
      >
        DECREASE
      </button>
      <button
        className='btnres'
        onClick={reset}
        style={{ cursor: 'pointer', color: 'blue', marginRight: '5px' }}
        disabled={counter === 0}
      >
        RESET
      </button>
      <button
        className='btnres'
        onClick={auto}
        style={{ cursor: 'pointer', color: 'LightSeaGreen' }}
      >
        AUTOINC
      </button>
      {/* TODO: переписать на редакс и добавить возможность указать время для автоинкремента */}
    </div>
  )
}

export default Counter
