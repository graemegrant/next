<<<<<<< HEAD
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects } from "../data";

const Projects = () => {
  return (
    <div className="px-5 py-2 overflow-scroll" style={{ height: "65vh" }}>
      <ProjectsNavbar/>
      
      <nav>Navbar</nav>
      <div className="relative grid grid-cols-12 gap-4 my-3">
        
        {projects.map((project) => (
            <div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
              <ProjectCard project={project} key={project.name} />
            </div>
          ))}
      </div>
=======
const projects = () => {
  return (
    <div className="p-4">
      projects page
>>>>>>> parent of 8e70e18 (darkmode & Projects Navbar)
    </div>
  )
}

<<<<<<< HEAD
export default Projects;
=======
export default projects
>>>>>>> parent of 8e70e18 (darkmode & Projects Navbar)
