import "./Header.css";

const Header = () => {
    return (
        <div className="header_wrapper">
            <p>Book Application</p>
            <section>
                <button className="username">Username</button>
                <button className="log_out">Log-out</button>
            </section>
        </div>
    )
}
export default Header;