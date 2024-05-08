import {Link} from 'react-router-dom'

function Header(){
    return (
        <>
     <Link to= '/' >Home</Link>
     <h1 className="header">NC News</h1>
        </>
    )
}

export default Header