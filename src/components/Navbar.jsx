import Logo from "../assets/react.svg";

const Navbar = ({ todos }) => {
  return (
    <nav className="navbar bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="Logo" width="30" height="24" />
        </a>
        <p className="text-light h5">Todos : {todos.length}</p>
      </div>
    </nav>
  );
};

// Navbar.defaultProps = {
//   number: "I am Default Number",
// };

export default Navbar;
