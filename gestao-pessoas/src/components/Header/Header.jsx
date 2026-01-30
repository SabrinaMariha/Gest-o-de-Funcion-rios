import './Header.css'

function Header({ image, title, label}) {
    return (
        <header className="header">
            <img src={image} alt={label} />
            <div>
                <h1>{title}</h1>
                <p>{label}</p>
            </div>
        </header>
    );
}

export default Header;