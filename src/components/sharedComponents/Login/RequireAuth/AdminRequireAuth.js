import { useState } from "react";
import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth"
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init"
import Loading from "../../Loading/Loading";
import Login from "../Login/Login";
const AdminRequireAuth = ({ children }) => {
    const [admin, setAdmin] = useState('');
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    if (loading) {
        return <Loading/>
    }
    if (!user) {
        navigate('/login');
    }
    try {
        if (user.email !== "suvoislam753@gmail.com") {

            navigate('/login');
            return;
        }
    } catch {
        
    }
    
    if (!user) {
        <Navigate to='/login' state={{ from: location }} replace />
        return;
    }

    
    return children;

}
export default AdminRequireAuth;