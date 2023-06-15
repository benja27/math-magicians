import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-success py-4 d-flex justify-content-between px-5 align-items-center">
      <h1 className="display-1 fw-bold">Math magicians</h1>
      <nav className="d-flex gap-5 justify-content-center">
        <Link to="/math-magicians">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </nav>
    </header>
  );
}
export default Navbar;
