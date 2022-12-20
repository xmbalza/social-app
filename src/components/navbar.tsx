import { Link } from 'react-router-dom'
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    //firebase hooks lib functionality manages state of current logged in user. If user changes, this function keep track and updates accordingly. Pass "auth" from config to reference user.
    const [user] = useAuthState(auth);

    const signUserOut = async () => {
        await signOut(auth);
    };

    return (
        <div className="navbar">
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
            </div>
            <div className='user'>
                {/* If user is loggin in, display name & image. */}
                {user && (
                    <>
                        <p>{user?.displayName}</p>
                        <img src={user?.photoURL || ""} alt="user image" width="20" height="20" referrerPolicy="no-referrer" />
                        <button onClick={signUserOut}>Log Out</button>
                    </>
                )}
            </div>
        </div>
    );
}
 
export default Navbar;