import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import { app } from "../firebase"
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

function OAuth() {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const handleOAuthLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);
            const user = axios.post('http://localhost:1517/api/auth/auth-google', { name: result.user.displayName, email: result.user.email, photo: result.user.photoURL })
            dispatch(signInSuccess(user));
            nav('/');
        } catch (error) {
            dispatch(signInFaliure(error));
        }
    }
    return (
        <div>
            <button type='button' className='bg-red-500 text-white rounded-lg p-3 hover:opacity-95 disabled:opacity-70 w-full mt-2' onClick={handleOAuthLogin}>Continue with Google</button>
        </div>
    )
}

export default OAuth