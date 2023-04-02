import { TOP_RATED, TRENDING_WEEK } from "../constants/apiConstants"

import HeroSlider from '../components/HeroSlider';
import Slider from '../components/Slider';

const HomePage = () => {

  return (
    <>
      <HeroSlider />
      <Slider title="Trending this week" url={TRENDING_WEEK} />
      <Slider title="Top Rated" url={TOP_RATED} />
    </>
  )
}

export default HomePage