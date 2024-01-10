import '../../styles/components/mainContent.sass'
import { About } from "../about"
import { Projects } from "../projects"
import { Technologies } from "../technologies"

export function MainContent(){
  return(
    <main id="main-content">
      <About/>
      <Technologies/>
      <Projects/>
    </main>
  )
}