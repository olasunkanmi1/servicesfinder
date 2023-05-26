import SectionLayout from '../section-layout';
import {hero} from '@public'

const Hero = () => {
  return (
    <SectionLayout
        heading="Revolutionizing Everyday Work"
        paragraph="Everyday work is important, but it’s also time consuming. We can help."
        image={hero}
        forHero
    />
  )
}

export default Hero