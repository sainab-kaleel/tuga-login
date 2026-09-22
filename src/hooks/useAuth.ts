import { signInWithPopup, signOut, type User } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/config';

interface AuthResult {
  user: User;
  accessToken: string;
}

export function useAuth() {
  
    async function signInWithGoogle(): Promise<AuthResult> {
        try{
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            const accessToken = await user.getIdToken();
            return { user, accessToken};
        }
        catch (error) {
            console.error('Goole sign in failed:' , error);
            throw error;
        }

    }

async function logout() {
            await signOut(auth);
}
      return {signInWithGoogle, logout};
}
