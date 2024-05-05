import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../Context/AuthProvider';
import Swal from 'sweetalert2';

const Nav = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => {
                localStorage.removeItem('token')
                Swal.fire({
                    title: "Logout Successful",
                    icon: "success"
                  });
            }
            )
            .catch((err) => console.log(err))
    }

    return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link className='btn' to='/' >Home</Link></li>
                    {/* <li><Link className='btn' to='/about' >About</Link></li> */}
                    {
                        user ?
                            <>
                                <li><Link className='btn' to= '/bookings'> My Bookings </Link></li>
                               
                            </>
                            : <>
                           
                            <li><Link className='btn' to='/register' >Register</Link></li>
                            </>
                    }
                    {/* <li><Link>Blog</Link></li>
                    <li><Link>Content</Link></li> */}
                    </ul>
                </div>
                <Link to='/' className="text-xl" >
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                <li><Link className='btn bg-gradient-to-r from-blue-400 to-purple-600 text-lg text-white ' to='/' >Home</Link></li>
{/* <li><Link className='btn' to='/about' >About</Link></li> */}
{
    user ?
        <>
            <li><Link className='btn bg-gradient-to-r from-blue-400 to-purple-600 text-lg text-white ' to='/bookings'> My Bookings </Link></li>
          
        </>
        : <>
     
        <li><Link className='btn bg-gradient-to-r from-blue-400 to-purple-600 text-lg text-white ' to='/register' >Register</Link></li>
        </>
}
{/* <li><Link>Blog</Link></li>
<li><Link>Content</Link></li> */}

                </ul>
            </div>
            <div className="navbar-end">
               {
                user ?  <button className='btn bg-gradient-to-r from-blue-400 to-purple-600 text-lg text-white'  onClick={handleLogout} >Logout</button>
                : <Link className='btn bg-gradient-to-r from-blue-400 to-purple-600 text-lg text-white' to='/login' >Login</Link>
               }
            </div>
        </div>
    )
}

export default Nav