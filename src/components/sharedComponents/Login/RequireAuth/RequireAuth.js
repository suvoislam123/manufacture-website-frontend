import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth"
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../../firebase.init"
import Login from '../Login/Login';
import SendEmailVerification from "./SendEmailVerification";

const RequireAuth=({ children })=>
{
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    if (loading) {
        return <p>Loading</p>
    }
    if (!user) {
        <Navigate to='/login' state={{from:location}} replace />
    }
    try {
        if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
            return <SendEmailVerification />
        }
    } catch {
        console.log('error occured');
        return <Login />
        
    }
    return children;

}
export default RequireAuth;