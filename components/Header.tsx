interface HeaderProps {
    title: string
}

const Header: React.FC<HeaderProps> =
    ({ title }) => (
        <header>
            <title>{title}</title>
        </header>
    )

export default Header
