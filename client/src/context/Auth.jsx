import React, { useContext, createContext, useState, useEffect } from "react";

import { supabase } from "../supabaseConfig";

const AuthContext = createContext();

export const SupabaseProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // get session data if there is an active session
    const session = supabase.auth.session();

    setUser(session?.user ?? null);
    setLoading(false);

    // listen for changes to auth
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    // cleanup the useEffect hook
    return () => {
      listener?.unsubscribe();
    };
  }, []);

  // create signUp, signIn, signOut functions
  const value = {
    signUp: (data) => supabase.auth.signUp(data),
    signIn: (data) => supabase.auth.signIn(data),
    signOut: () => supabase.auth.signOut(),
    user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// export the useAuth hook
export const useAuth = () => {
  return useContext(AuthContext);
};