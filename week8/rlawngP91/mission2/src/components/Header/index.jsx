import './index.css';

export default function Header({ title, subtitle }) {
    return (
        <header className="header">
            <h1 className="header-title">{title}</h1>
            {subtitle != null && <p className='header-subtitle'>{subtitle}</p>}
        </header>
    );
}