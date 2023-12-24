import { FaMinusCircle } from 'react-icons/fa'
import GroupForm from './GroupForm'

const GalileoList = ({ galileos, addGroup, removeGalileo, removeGroup }) => {
  return (
    <div className='container'>
      {galileos.map((galileo) => (
        <div className='mb-5' key={galileo.id}>
          <div>
            <div className='d-flex align-items-center mb-3'>
              <FaMinusCircle
                className='me-2 text-danger pointer'
                title='Remove Galileo'
                onClick={() => removeGalileo(galileo.id)}
              />
              <h3 className='h5 text-decoration-underline mb-0'>
                {galileo.galName}
              </h3>
            </div>
            {galileo.galRfCh !== '' && <p>RF Update CH: {galileo.galRfCh}</p>}
            {galileo.galIpCh !== '' && (
              <p>
                Update Multicast IP: : {galileo.galIpCh}
                <br />
                Multicast Port: : {galileo.galIpPort}
              </p>
            )}
            {galileo.groups.map((group) => (
              <ul key={group.id} className='list-group-flush'>
                <li className='list-group-item d-flex align-items-center'>
                  <FaMinusCircle
                    className='me-2 text-danger pointer'
                    title='Remove Group'
                    onClick={() => removeGroup(group.id, galileo.id)}
                  />
                  <span>
                    Group {group.groupNumber}: {group.groupName}{' '}
                    {group.groupDesc === '' ? null : `- ${group.groupDesc}`}
                  </span>
                </li>
              </ul>
            ))}
          </div>

          <GroupForm addGroup={addGroup} galId={galileo.id} />
        </div>
      ))}
    </div>
  )
}
export default GalileoList
