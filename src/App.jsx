import './index.css'
import { useState } from 'react'

function App() {

  const handleClick = function displayValues () {
    console.log(subject)
    console.log(startDate);
    
  }

  const [subject, setSubject] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  return (
    <>
      <div>
        <h1>Event2Calendar</h1>
        <p>Create multiple events with and import them to Google Calendar</p>

        <div>
          <p>Select the data for your event</p>
          <div>
            <form action="">
              <label>
                <p>Subject:</p> 
                <input 
                value={subject}
                onChange={e => setSubject(e.target.value)}
                type="text" 
                name="Subject" />
              </label>

              <label>
                <p>Start Date:</p> 
                <input 
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
                type="date" 
                name="Start Date" />
              </label>
              
              <label>
                <p>Start Time:</p>
                <input 
                value={startTime}
                onChange={e => setStartTime(e.target.value)}
                type="time" 
                name="Start Time" />
              </label>
              
              <label>
                <p>End Date:</p>
                <input 
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
                type="date" 
                name="End Date" />
              </label>
              
              <label>
                <p>End Time:</p>
                <input 
                value={endTime}
                onChange={e => setEndTime(e.target.value)}
                type="time" 
                name="End Time" />
              </label>

              <button type='button'>Reset</button>
                
              <button 
              onClick={handleClick}
              type='button'>Submit</button>
            </form>
            <hr />
            <div>
              <h2>Your CSV preview</h2>
              <p> Subject: {subject ? subject : "loading" }</p>
              <p> Start Date: {startDate ? startDate : "loading" }</p>
              <p> Start Time: {startTime ? startTime : "loading" }</p>
              <p> End Date: {endDate ? endDate : "loading" }</p>
              <p> Start Date: {endTime ? endTime : "loading" }</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
