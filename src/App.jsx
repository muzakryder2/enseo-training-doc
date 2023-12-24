import { useState } from 'react'
import Navbar from './components/Navbar'
import GalileoForm from './components/GalileoForm'
import GalileoList from './components/GalileoList'
import PrinterDisplay from './components/PrinterDisplay'

const App = () => {
  const [galileos, setGalileos] = useState([])
  const [propertyName, setPropertyName] = useState('')

  const addGalileo = (data) => {
    setGalileos((prevGalileos) => [...prevGalileos, data])
  }

  const removeGalileo = (id) => {
    setGalileos((prevGalileos) =>
      prevGalileos.filter((galileo) => galileo.id !== id)
    )
  }

  const addGroup = (data, id) => {
    setGalileos((prevGalileos) =>
      prevGalileos.map((galileo) => {
        if (galileo.id === id) {
          return {
            ...galileo,
            groups: [...galileo.groups, data],
          }
        } else {
          return galileo
        }
      })
    )
  }

  const removeGroup = (groupId, galId) => {
    setGalileos((prevGalileos) =>
      prevGalileos.map((galileo) => {
        if (galileo.id === galId) {
          return {
            ...galileo,
            groups: galileo.groups.filter((group) => group.id !== groupId),
          }
        } else {
          return galileo
        }
      })
    )
  }

  return (
    <>
      <div className='w-vw-100 min-vh-100 d-print-none'>
        <Navbar />
        <div className='container'>
          <p className='h4 text-center my-5'>
            Use this tool to generate an E3 Training Document for a property.
          </p>

          <div className='container'>
            <div className='row row-cols-lg-2 justify-content-center align-items-center'>
              <div className='col-12'>
                <div className='input-group mb-5'>
                  <span className='input-group-text'>Property Name</span>
                  <input
                    type='text'
                    className='form-control'
                    value={propertyName}
                    onChange={(e) => setPropertyName(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <GalileoForm addGalileo={addGalileo} />

          <GalileoList
            galileos={galileos}
            addGroup={addGroup}
            removeGalileo={removeGalileo}
            removeGroup={removeGroup}
          />
        </div>
      </div>
      <PrinterDisplay galileos={galileos} propertyName={propertyName} />
    </>
  )
}
export default App
