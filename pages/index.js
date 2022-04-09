import Intro from '../component/Intro'
import Services from '../component/Services'
import { data } from "../data";
import Testimonials from "../component/Testimonials"
export default function Home({services}) {
  return (
    <div>
      <Intro />
      <Services services={services} />
      <Testimonials />
    </div>
  )
}

export const getStaticProps = () => {
  const services = data;
  return {
    props: { services },
  };
};
