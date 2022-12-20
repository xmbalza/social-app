import { Link } from 'react-router-dom'
import { auth } from '../config/firebase';

const Navbar = () => {
    return ( 
        <div>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>

        <div>
            <p>{auth.currentUser?.displayName}</p>
            <img src={auth.currentUser?.photoURL || ""} alt="user image" width="100" height="100" referrerPolicy="no-referrer" />
        </div>

        </div>
        
     );
}
 
export default Navbar;