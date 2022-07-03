import { Link } from "@remix-run/react";

const Header = () => {

  return (
    <div className="header-container">
      <Link to="/todolists" className="link">
        <p className="header-title">Todo lists</p>
      </Link>
    </div>
  )
}

export { Header };