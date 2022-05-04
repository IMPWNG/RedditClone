import React, { useContext, createContext, useState, useEffect } from "react";

import { createClient } from "@supabase/supabase-js";

const SupabaseAPI = createContext();

const client = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);


function SupabaseProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // get session data if there is an active session
    const session = SupabaseProvider.auth.session();

    setUser(session?.user ?? null);
    setLoading(false);

    // listen for changes to auth
    const { data: listener } = SupabaseProvider.auth.onAuthStateChange(
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
    signUp: (data) => SupabaseProvider.auth.signUp(data),
    signIn: (data) => SupabaseProvider.auth.signIn(data),
    signOut: () => SupabaseProvider.auth.signOut(),
    user,
  };

  return (
    <SupabaseAPI.Provider value={[client, value]}>
      {!loading && children}
    </SupabaseAPI.Provider>
  );
  

};

export default SupabaseProvider.reducer;

// export the useAuth hook
export const useAuth = () => {
  return useContext(SupabaseProvider);
};