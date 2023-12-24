import { useState } from 'react'

const initialGroupData = {
  groupNumber: '',
  groupName: '',
  groupDesc: '',
}

const GroupForm = ({ addGroup, galId }) => {
  const [groupData, setGroupData] = useState(initialGroupData)
  const { groupNumber, groupName, groupDesc } = groupData

  const handleGroupFormChange = (e) => {
    setGroupData((prevGroupData) => ({
      ...prevGroupData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = () => {
    const newGroup = {
      id: crypto.randomUUID(),
      groupNumber,
      groupName,
      groupDesc,
    }

    addGroup(newGroup, galId)

    setGroupData(initialGroupData)
  }

  return (
    <div className='row row-cols-lg-4 g-1 align-items-center justify-content-center'>
      <div className='col-12'>
        <div className='input-group'>
          <input
            name='groupNumber'
            type='text'
            className='form-control'
            placeholder='Number'
            value={groupNumber}
            onChange={handleGroupFormChange}
          />
        </div>
      </div>
      <div className='col-12'>
        <div className='input-group'>
          <input
            name='groupName'
            type='text'
            className='form-control'
            placeholder='Name'
            value={groupName}
            onChange={handleGroupFormChange}
          />
        </div>
      </div>
      <div className='col-12'>
        <div className='input-group'>
          <input
            name='groupDesc'
            type='text'
            className='form-control'
            placeholder='Description'
            value={groupDesc}
            onChange={handleGroupFormChange}
          />
        </div>
      </div>

      <div className='col-12'>
        <div className='input-group'>
          <button
            className='btn btn-dark w-100'
            type='button'
            onClick={handleSubmit}
            disabled={groupNumber === '' || groupName === ''}
          >
            + Group
          </button>
        </div>
      </div>
    </div>
  )
}
export default GroupForm
