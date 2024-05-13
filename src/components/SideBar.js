import "./style_sidebar.css";
import BasicInput from "./sidebar/basic/BasicInput.js";
import BasicInputSmall from "./sidebar/basic/BasicInputSmall.js";
import ExperienceSlot from "./sidebar/experience/ExperienceSlot.js";
function SideBar(){

    return (<div className="sidebar--component">
          <h1>Basics</h1>
<BasicInput/>
<BasicInput/>
<BasicInput/>
<BasicInput/>
<div className="sidebar-component--row">
    <BasicInputSmall/>
    <BasicInputSmall/>
</div>

<h1>Experiences</h1>
<ExperienceSlot/>

    </div>);

}

export default SideBar;