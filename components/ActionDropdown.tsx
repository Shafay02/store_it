import { Models } from 'node-appwrite'
import React from 'react'

const ActionDropdown = ({ file }: { file: Models.Document }) => {
  return (
      <div>
          <p className="body-1">{file.name}</p>
    </div>
  )
}

export default ActionDropdown