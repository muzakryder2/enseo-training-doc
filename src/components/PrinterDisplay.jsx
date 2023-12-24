import samsung1 from '../images/samsung01.png'
import samsung2 from '../images/samsung02.png'
import samsung3 from '../images/samsung03.png'
import samsung4 from '../images/samsung04.png'

const PrinterDisplay = ({ galileos, propertyName }) => {
  return (
    <div className='container-fluid d-none d-print-block'>
      <h1 className='h4 my-5 text-center'>
        {propertyName} - Training Document
      </h1>
      {galileos.map((galileo) => (
        <div key={galileo.id} className='mb-3'>
          <h3 className='h5 text-decoration-underline'>{galileo.galName}</h3>
          <p className='m-0'>IP Address: {galileo.galIp}</p>
          {galileo.galRfCh !== '' && (
            <p className='m-0'>RF Update CH: {galileo.galRfCh}</p>
          )}
          {galileo.galIpCh !== '' && (
            <>
              <p className='m-0'>Update Multicast IP: {galileo.galIpCh}</p>
              <p className='m-0'>Multicast Port: {galileo.galIpPort}</p>
            </>
          )}

          <ul className='list-group-flush'>
            {galileo.groups.map((group) => (
              <li key={group.id} className='list-group-item'>
                <p className='m-0'>
                  Group {group.groupNumber}: {group.groupName}
                  {group.groupDesc === '' ? null : ` - ${group.groupDesc}`}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <h4 className='h5 text-decoration-underline break-before'>
        LG MPI TV Setup for Enseo SBB
      </h4>
      <p>
        These steps needs to be ensured by the installer or testers for TVs
        before operation.
        <br />
        <br />
        MOST CRUCIAL STEP BEFORE STARTING!!! --&gt; Menu item 118 needs to be
        set to 001. Power savings shuts down MPI port otherwise.
        <br />
        <br />
        Before starting HDMI input for the TV needs to be determined. By
        checking the default profile for the TV, one can determine the
        developers preference for the default HDMI input. Majority of the newer
        ones seem to be set for HDMI2 whereas the older ones are HDMI1.
        <br />
        <br />
        The steps below are ABSOLUTELY crucial (depending on the the models
        these menus might be a little different, follow the spirit). If these
        settings are not set correctly, we have observed the TV coming up on
        Tuner or some other source and failing to switch (thus failing HDMI).
        <br />
        <br />
        004 STRT CHANNEL : 0 This option specifies which channel to tune to.
        However, if it is set to 0 it will switch to AUX input specified in
        option 46.
        <br />
        <br />
        035 HDMI1 ENABLE : 1 1 enables HDMI1. If this is set to 5 it will
        disable hot plug detect, which I am not sure about.
        <br />
        <br />
        091 HDMI2 ENABLE : 1 1 enables HDMI2.
        <br />
        <br />
        092 HDMI3 ENABLE : 1 1 enables HDMI3.
        <br />
        <br />
        046 STRT AUX SRCE : 3 This sets the starting AUX source. Sets the
        starting Aux source. When turned ON, the TV will tune to starting Aux
        source if item 004 STRT CHANNEL is set to 0.
        <br />
        <br />
        <ul className='list-group-flush'>
          <li className='list-group-item'>
            <p>1 = Video 1</p>
          </li>
          <li className='list-group-item'>
            <p>3 = HDMI 1</p>
          </li>
          <li className='list-group-item'>
            <p>4 = RGB</p>
          </li>
          <li className='list-group-item'>
            <p>5 = HDMI 2</p>
          </li>
          <li className='list-group-item'>
            <p>7 = HDMI 3</p>
          </li>
          <li className='list-group-item'>
            <p>255 = Last Aux</p>
          </li>
        </ul>
        119 DATA CHANNEL : 0 If this is left to the default value, the TV will
        turn on once a day looking for a Pro:Centric server. We need to disable
        this function by setting to 0<br />
        <br />
        Note1: Depending on what HDMI start source was decided change the 046
        entry to reflect that. It is crucial that the Default Input here and the
        Profile (Custom or Default) matches.
        <br />
        <br />
        Note2: Above is applicable only if all Aux sources are enabled.
        <br />
        <br />
        Note3: This item is not available in the Installer Menu unless item 004
        STRT CHANNEL is set to 0.
        <br />
        <br />
        Quick test would be to toggle power without the STB control and see if
        it always comes up on the correct HDMI Input. Also, try switching the
        input to something else and then toggle power to confirm it comes up on
        the correct HDMI input. This will ensure that the TV will come up on the
        correct input regardless of the STB control, hopefully, preventing all
        these nebulous HDMI issues with LG MPI TV.
      </p>
      <h4 className='h5 text-decoration-underline'>
        Samsung MPI TV Setup for Enseo SBB
      </h4>
      <ol>
        <li>
          Using the Samsung remote, press MUTE, 1, 1, 9, ENTER to open the
          install menu.
          <br />
          Note: Older models will use the following key sequence; press INFO,
          MENU, 0, 1, EXIT.
          <br />
          <img
            className='d-block mx-auto'
            src={samsung1}
            alt=''
            width={300}
            height={300}
          />
        </li>
        <li>
          Begin by resetting the TV settings. Select the TV Reset option at the
          end of menu.
        </li>
        <li>
          Return to the installer menu by pressing the buttons as noted in Step
          1 above.
        </li>
        <li>
          Set the Hospitality Mode option at the beginning of the menu to
          Interactive.
        </li>
        <li>Set the SI Vendor option to Enseo.</li>
        <li>Navigate to Power On option and change the Source to HDMI 1.</li>
        <li>Change Power On option to Standby.</li>
        <li>Navigate to Menu OSD Home Menu Display to Off.</li>
        <li>
          Navigate to External Source and set USB Pop-up Screen to Disable.
        </li>
        <li>
          Navigate to Eco Solution and set to Off.
          <br />
          <div className='d-flex g-2'>
            <img
              className='d-block mx-auto'
              src={samsung2}
              alt=''
              width={300}
              height={200}
            />
            <img
              className='d-block mx-auto'
              src={samsung3}
              alt=''
              width={300}
              height={200}
            />
          </div>
        </li>
        <li>Set Cloning Setting Auto Initialize to On.</li>
        <li>
          Power cycle the TV and wait 30+ sec then restart power to the TV.
        </li>
        <li>
          To ensure this works properly, you must clone these settings TO a USB,
          and then clone FROM the USB. You can use the resulting USB clone files
          to clone the remaining TVs in the hotel.
        </li>
        <li>Verify that the TV starts up on HDMI 1.</li>
        <li>Proceed to setting up Set-Back Boxes.</li>
      </ol>
      <p className='fw-bold'>Troubleshooting: Reset Samsung Television</p>
      <ol>
        <li>
          Select TV Reset on the menu. All values reset to their factory
          defaults. The Hospital Plug & Play menu opens.
        </li>
        <li>Go to the first Hospitality Plug & Play screen below.</li>
        <li>
          After the hospitality option menu appears, set the parameters on
          previous Step 4 under Setting up a Samsung Television.
          <br />
          <img
            className='d-block mx-auto'
            src={samsung4}
            alt=''
            width={500}
            height={300}
          />
        </li>
      </ol>
    </div>
  )
}
export default PrinterDisplay
