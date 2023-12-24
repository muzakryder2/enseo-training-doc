import { useState } from 'react'

const initialGalileoData = {
  galName: '',
  galIp: '',
  galRfCh: '',
  galIpCh: '',
  galIpPort: '',
}

const GalileoForm = ({ addGalileo }) => {
  const [galileoData, setGalileoData] = useState(initialGalileoData)
  const { galName, galIp, galRfCh, galIpCh, galIpPort } = galileoData

  const handleGalileoFormChange = (e) => {
    setGalileoData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = () => {
    const newGalileo = {
      id: crypto.randomUUID(),
      galName,
      galIp,
      galRfCh,
      galIpCh,
      galIpPort,
      groups: [],
    }

    addGalileo(newGalileo)
    setGalileoData(initialGalileoData)
  }

  return (
    <div className='container mb-5'>
      <div className='row row-cols-lg-6 g-1 align-items-center justify-content-center'>
        <div className='col-12'>
          <div className='input-group'>
            <input
              name='galName'
              type='text'
              className='form-control'
              placeholder='Name'
              value={galName}
              onChange={handleGalileoFormChange}
            />
          </div>
        </div>
        <div className='col-12'>
          <div className='input-group'>
            <input
              name='galIp'
              type='text'
              className='form-control'
              placeholder='IP Address'
              value={galIp}
              onChange={handleGalileoFormChange}
            />
          </div>
        </div>
        <div className='col-12'>
          <div className='input-group'>
            <input
              name='galRfCh'
              type='text'
              className='form-control'
              placeholder='RF CH'
              value={galRfCh}
              onChange={handleGalileoFormChange}
            />
          </div>
        </div>
        <div className='col-12'>
          <div className='input-group'>
            <input
              name='galIpCh'
              type='text'
              className='form-control'
              placeholder='Update IP'
              value={galIpCh}
              onChange={handleGalileoFormChange}
            />
          </div>
        </div>
        <div className='col-12'>
          <div className='input-group'>
            <input
              name='galIpPort'
              type='text'
              className='form-control'
              placeholder='Port'
              value={galIpPort}
              onChange={handleGalileoFormChange}
            />
          </div>
        </div>
        <div className='col-12'>
          <div className='input-group'>
            <button
              className='btn btn-dark w-100'
              type='button'
              onClick={handleSubmit}
              disabled={
                galName === '' ||
                galIp === '' ||
                (galRfCh === '' && galIpCh === '') ||
                (galIpCh !== '' && galIpPort === '')
              }
            >
              + Galileo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default GalileoForm
