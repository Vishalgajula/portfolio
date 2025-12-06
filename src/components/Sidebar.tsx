import "./Sidebar.css";

export default function Sidebar(){

  return(
    <>
    <div className="sidebar-container">
      <ul className="sidebar-list">
        <li className="sidebar-list-element"><a href="#main">Main page</a></li>
        <li className="sidebar-list-element"><a href="#about">Letter from the Editor</a></li>
        <li className="sidebar-list-element"><a href="#projects">Features Stories of Code</a></li>
        <li className="sidebar-list-element"><a href="#skills">Classified - Tools of the Trade</a></li>
        <li className="sidebar-list-element"><a href="#experience">Career Chronicles</a></li>
        <li className="sidebar-list-element"><a href="#education">Education Bullletin</a></li>
        <li className="sidebar-list-element"><a href="#contact">Cut Out & Save</a></li>
      </ul>
    </div>
    </>
  )
}