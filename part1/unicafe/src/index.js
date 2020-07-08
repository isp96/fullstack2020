import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistics = (props) => {
  const totalFeedback = props.good + props.neutral + props.bad
  const average = (props.good - props.bad) / totalFeedback
  const positive = props.good / totalFeedback

  if(totalFeedback === 0) {
      return (
          <div>
              <p>No feedback given</p>
          </div>
      )
  }

  return (
      <div>
          <StatisticLine  text="good" value={props.good}/>
          <StatisticLine  text="neutral" value={props.neutral}/>
          <StatisticLine  text="bad" value={props.bad}/>
          <StatisticLine  text="all feedback" value={totalFeedback}/>
          <StatisticLine  text="average" value={average}/>
          <StatisticLine  text="positive" value={positive + "%"}/>
      </div>
  )
}

const StatisticLine = (props) => {      
  return (
      <p>{props.text} {props.value}</p>
  )
}


const Button = (props) => {      
    return (
        <button onClick={props.onClick}> {props.text} </button>
    )
}

const Feedback = (props) => {
    return (
        <div>
            <Button onClick={props.handleGoodClick} text="Good" />
            <Button onClick={props.handleNeutClick} text="Neutral" />
            <Button onClick={props.handleBadClick} text="Bad" />
        </div>
    )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allFeedback, setAll] = useState([])

  const handleGoodClick = () => {
    setAll(allFeedback.concat('good'))
    setGood(good + 1)
  }

  const handleNeutClick = () => {
    setAll(allFeedback.concat('neutral'))
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(allFeedback.concat('bad'))
    setBad(bad + 1)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Feedback handleGoodClick={handleGoodClick} handleNeutClick={handleNeutClick} handleBadClick={handleBadClick}/> 
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
