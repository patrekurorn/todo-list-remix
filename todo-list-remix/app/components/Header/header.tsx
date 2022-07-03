import { Link } from "@remix-run/react";

const Header = () => {

  return (
    <div className="header-container">
      <Link to="/todolists" style={{textDecoration:"none", color:"black"}}>
        <p className="header-title">Todo lists</p>
      </Link>
    </div>
  )
}

export { Header };