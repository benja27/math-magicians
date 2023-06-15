function Navbar() {
  return (
    <header className="bg-success py-4 d-flex justify-content-between px-5 align-items-center">
      <h1 className="display-1 fw-bold">Math magicians</h1>
      <nav className="d-flex gap-5 justify-content-center">
        <a href="/">Home</a>
        <a href="./calculator">Calculator</a>
        <a href="./quote">Quote</a>
      </nav>
    </header>
  );
}
export default Navbar;
