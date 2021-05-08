import React, { Profiler } from 'react'
import {HomepageContainer} from './homepage.styles.jsx'
import Directory from '../../components/directory/directory.component.jsx'
function Homepage(){
  return (
  <HomepageContainer>
    <Profiler id="Directory" onRender={(id,phase,actualDuration)=>{console.log({id,phase,actualDuration})}}>
      <Directory />
    </Profiler>
  </HomepageContainer>
  )
  }
export default Homepage;
