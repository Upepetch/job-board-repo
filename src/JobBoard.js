import React from 'react'


   export const GetJobMessage = (jobCount) => {
        if (jobCount === 0) {
            return "No job schedule for today!!";
        }
        else if (jobCount >= 1 && jobCount < 5) {
          return "There are very few jobs running at the moment.";
        }
        else if (jobCount > 5) {
          return "There are some jobs running today"

        }
        else {
            return `Jobs running today from bot: ${jobCount}`;
        }
      };
   
      
      export const DisplayExpectedJob = ( {jobCount = 0 }) => {
        return (
          <div>
            Expected jobs next week: {(jobCount * 1.5).toFixed(1)}
          </div>
        );
      };
      

const JobBoard = () => {
  const companyName = "AtchenkinTech";
  const jobCount = 69;

  return (
    <div>
        <h1>{companyName}</h1>
         <p>Jobs: {GetJobMessage (jobCount)}</p>

    </div>
  );
};


export default JobBoard;