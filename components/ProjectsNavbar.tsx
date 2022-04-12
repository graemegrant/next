import { FunctionComponent } from "react";
import { Category } from "../types";

export const NavItem: FunctionComponent<{
  value: Category | "all";
}> = ({ value,}) => {

  return 
    <li> {value}
    </li>
  };

const ProjectsNavbar = () => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all"  />
      <NavItem value="react"  />
      <NavItem value="mongo"  />
      <NavItem value="django"  />
      <NavItem value="node"  />
    </div>
  );
};

export default ProjectsNavbar;