import './index.css'

function App() {

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
                <p>Subject:</p> <input type="text" name="Subject" />
              </label>

              <label>
                <p>Start Date:</p> <input type="text" name="Start Date" />
              </label>
              
              <label>
                <p>Start Time:</p><input type="text" name="Start Time" />
              </label>
              
              <label>
                <p>End Date:</p><input type="text" name="End Date" />
              </label>
              
              <label>
                <p>End Time:</p><input type="text" name="End Time" />
              </label>
              <hr />

              <button type='button'>Reset</button>
                
              <button type='button'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
