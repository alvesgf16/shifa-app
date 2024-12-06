import {
  GoogleSignin,
  User,
} from '@react-native-google-signin/google-signin';
import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react';

type AuthContextType = {
  user: User | null;
  onGoogleButtonPress: () => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthContextProviderProps = { children: ReactNode };

GoogleSignin.configure({
  webClientId: process.env.GOOGLE_WEB_CLIENT_ID,
  scopes: ['profile', 'email'],
});

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const onGoogleButtonPress = async () => {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const signInResult = await GoogleSignin.signIn();
    const loggedUser = signInResult.data;
    setUser(loggedUser);
  };

  const signOut = async () => {
    setUser(null);
    await GoogleSignin.signOut();
  };

  const value = {
    user,
    onGoogleButtonPress,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useUserAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useUserAuth must be used within a AuthContextProvider');
  }

  return context;
};

export default AuthContextProvider;
