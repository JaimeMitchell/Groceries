const NavBar = (props) => {
    return (
        <nav className="nav">
            <h1> {props.text} </h1>
            <ul>
                <li>Home</li>
                <li>Products</li>
            </ul>
        </nav>
    );
};

export default NavBar