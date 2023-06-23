import Astronaut from "../components/Astronaut";
import BlurryBg from "../components/BlurryBg";



export default function Layout(props) {
  return (
    <div>
    <BlurryBg>
      <Astronaut></Astronaut>
      {props.children}
    </BlurryBg>
    </div>
  )
}
