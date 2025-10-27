import React from 'react';
import JobBoard from './JobBoard';
import { DisplayExpectedJob } from './JobBoard';
function App() {
  return (
    <div className="App">
     <JobBoard />
     <DisplayExpectedJob jobCount={10} />
    </div>
  );
}

export default App;
