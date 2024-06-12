import {Link} from 'react-router-dom'

function Header(){
    return (
    <>
    <h3>Logged in as cooljmessy</h3>
    <Link to='https://github.com/rocrawfd/nc-news'>View the code on GitHub</Link>
    <h1 className="header">NC News</h1>
    </>
    )
}

export default Header