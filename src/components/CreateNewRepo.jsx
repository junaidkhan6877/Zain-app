import React from 'react'

const CreateNewRepo = () => {
  return (
    <div>
      <h1>Repo Commmands</h1>
      git init<hr></hr>
      git status <hr></hr>
      git add .<hr></hr> 
      git commit -m "aney text" <hr></hr>
      git remote add origin https://github.com/junaidkhan6877/Zain-app.git<hr></hr>
      git push origin master " branch name"<hr></hr>
      <div style={{backgroundColor:"red"}}>Good Work</div>
    </div>
  )
}

export default CreateNewRepo
