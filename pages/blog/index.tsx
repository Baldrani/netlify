interface LinkInterface {
    href: string
    label: string
    key?: any
}

const links: LinkInterface[] = [
    { href: '/blog/cat', label: 'Cat' },
    { href: '/blog/cat', label: 'CatBis' }
].map(link => {
    //@ts-ignore
    link.key = `nav-link-${link.href}-${link.label}`
    return link
})

const Blog = () => {
    return (
        <ul>
            {links.map(({key, href, label}) => (
                <li key={key}>
                    <a href={href}>{label}</a>
                </li>
            ))}
        </ul>
    );
}

export default Blog;
