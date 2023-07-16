const Header = (props) => {
    return (
        <div>
            <div className="container bg-info">
                <h1 className="Header">{props.title}</h1>
            </div>

        </div>
    );
};

export default Header;