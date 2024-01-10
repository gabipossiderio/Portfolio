import Avatar from '../../img/profile.jpg'

import '../../styles/components/sidebar.sass'
import { InformationContainer } from "../informationContainer"
import { SocialNetworks } from "../socialNetworks"

export function Sidebar(){
  return(
    <aside id="sidebar">
      <img src={Avatar} alt="Users Photo" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href="#" className="btn">Download Currículo</a>
    </aside>
  )
}