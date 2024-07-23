import "../styles/Header.scss"

const Header = () => {
  return (
    <header className="header">
        <h1>OC Relationship Chart</h1>
        <div className="header__boxes">
          <div className="header__boxes--1"></div>
          <div className="header__boxes--2"></div>
          <div className="header__boxes--3"></div>
        </div>
        <p>Click on any character to see their relationships</p>
    </header>
  )
}

export default Header