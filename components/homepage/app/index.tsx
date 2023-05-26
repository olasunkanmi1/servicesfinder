import SectionLayout from '../section-layout';
import Heading from 'components/heading';
import {app} from '@public'

const App = () => {
  return (
    <div className='space-y-4'>
      <Heading text='Join us' heading='Our app' />
    
      <SectionLayout
          heading="Download our App Now"
          paragraph="Make your to-do list wherever you are with our mobile app."
          paragraph2="Help is an easy way to find qualified and reliable local Helpers for everything from assembling and installing furniture to moving and cleaning"
          image={app}
      />
    </div>
  )
}

export default App