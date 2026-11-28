import React from 'react'

function Score() {
  const [runs, setRuns] = React.useState(0)
  const [wickets, setWickets] = React.useState(0)

  const isMatchOver = wickets >= 10

  function addRuns(run) {
    if (!isMatchOver) {
      setRuns(runs + run)
    }
  }

  function addWicket() {
    if (!isMatchOver) {
      setWickets(wickets + 1)
    }
  }

  function reset() {        
    setRuns(0)
    setWickets(0)
  }

  return (
    <div style={{ backgroundColor: "#000000", textAlign: "center", padding: "20px" }}>
      <h2>Score: {runs} / {wickets}</h2>        

      {isMatchOver && (
        <h3 style={{ color: "red" }}>Match Over! (All Out)</h3>
      )}

      <div >
        {[0, 1, 2, 3, 4, 6].map((run) => (
          <button
            key={run}
            onClick={() => addRuns(run)}
            disabled={isMatchOver}
          >
            {run}
          </button>
        ))}

        <button
          onClick={addWicket}
          disabled={isMatchOver}
          style={{
            backgroundColor: isMatchOver ? "#00ffb3" : "#d10000",
            color: "#fff",
          }}
        >
          W
        </button>
      </div>

      <div>
        <button onClick={reset}>New Match</button>
      </div>
    </div>
  )
}

export default Score