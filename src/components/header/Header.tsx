import {
  Link,
  useResolvedPath,
  useMatch
} from "react-router-dom";

type ReactNode_Custom = boolean | null | undefined | React.ReactNode;
type TLinks = {
  to: string,
  children?: ReactNode_Custom
}

const Header = () => {
  return (
    <div className="header">
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/owners">Owners</CustomLink>
    </div>
  );
};

const CustomLink = ({ to, children }: TLinks) => {
  const resolvedPath = useResolvedPath(to);

  const isActive = useMatch({ path: resolvedPath.pathname, end: true });  
  return (
    <span className={isActive ? "active" : ""}>
      <Link to={to}>{children}</Link>
    </span>
  );
};

export default Header;
