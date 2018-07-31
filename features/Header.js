import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const UrlLink = (props) => (
    <Link as={`/p/${props.id}`} href={`${props.href}?title=${props.title}`}>
      <a style={linkStyle}>{props.title}</a>
    </Link>
)

const Header = () => (
    <div>
        <UrlLink id="sobre-nos" title="Sobre nós" href="/about" />
        <UrlLink id="home" title="Home" href="/index" />
    </div>
)

export default Header