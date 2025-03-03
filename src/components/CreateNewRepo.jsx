import React from 'react'

const CreateNewRepo = () => {
  return (
    <div>
      <h1>Repo Commmands</h1>
      git init
      git status 
      git add . 
      git commit -m "aney text" 
      git remote add origin https://github.com/junaidkhan6877/Zain-app.git
      git push origin master " branch name"
    </div>
  )
}

export default CreateNewRepo
