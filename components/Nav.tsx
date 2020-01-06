import Link from 'next/link'

interface LinkInterface {
    href: string
    label: string
    key?: any
}

const links: LinkInterface[] = [
    { href: '/blog', label: 'Blog' },
    { href: '/gists', label: 'Gists' }
].map(link => {
    //@ts-ignore
    link.key = `nav-link-${link.href}-${link.label}`
    return link
})

const Nav:React.FC = () => (
    <nav>
        <ul>
            <li>
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </li>
            {links.map(({ key, href, label }) => (
                <li key={key}>
                    <a href={href}>{label}</a>
                </li>
            ))}
        </ul>

        <style jsx>{`
          :global(body) {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
              Helvetica, sans-serif;
          }
          nav {
            text-align: center;
          }
          ul {
            display: flex;
            justify-content: space-between;
          }
          nav > ul {
            padding: 4px 16px;
          }
          li {
            display: flex;
            padding: 6px 8px;
          }
          a {
            color: #067df7;
            text-decoration: none;
            font-size: 13px;
          }
        `}</style>
    </nav>
)

export default Nav