import React, { createContext, useContext, useState, useEffect } from "react";

export interface MemberUser {
  id: string;
  name: string;
  email: string;
  company?: string;
  role: "Client" | "Partner" | "Developer";
  joinedDate: string;
  activeLicenses: {
    productId: string;
    productName: string;
    status: "Active" | "Provisioning" | "Trial";
    tier: string;
    renewalDate: string;
  }[];
}

interface AuthContextType {
  user: MemberUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  register: (name: string, email: string, pass: string, company?: string) => Promise<{ success: boolean; error?: string }>;
  resetPassword: (email: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  updateProfile: (data: Partial<MemberUser>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = "anm_member_session";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<MemberUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(AUTH_STORAGE_KEY);
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch {
      // storage error
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = async (email: string, pass: string): Promise<{ success: boolean; error?: string }> => {
    if (!email || !pass) {
      return { success: false, error: "Please enter your email and password." };
    }
    if (pass.length < 6) {
      return { success: false, error: "Password must be at least 6 characters." };
    }

    // Interactive authenticated member session
    const member: MemberUser = {
      id: "usr_" + Math.random().toString(36).substring(2, 9),
      name: email.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      email,
      role: "Client",
      joinedDate: new Date().toLocaleDateString("en-GB", { month: "short", year: "numeric" }),
      activeLicenses: [
        {
          productId: "orion-hq",
          productName: "Orion HQ",
          status: "Active",
          tier: "Enterprise Operations",
          renewalDate: "Dec 2026",
        },
        {
          productId: "textspeeder",
          productName: "TextSpeeder",
          status: "Active",
          tier: "Pro Team License",
          renewalDate: "Aug 2027",
        },
      ],
    };

    setUser(member);
    try {
      window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(member));
    } catch {
      // storage disabled
    }
    return { success: true };
  };

  const register = async (
    name: string,
    email: string,
    pass: string,
    company?: string
  ): Promise<{ success: boolean; error?: string }> => {
    if (!name || !email || !pass) {
      return { success: false, error: "Please fill in all required fields." };
    }
    if (pass.length < 6) {
      return { success: false, error: "Password must be at least 6 characters." };
    }

    const member: MemberUser = {
      id: "usr_" + Math.random().toString(36).substring(2, 9),
      name,
      email,
      company: company || "Independent",
      role: "Client",
      joinedDate: new Date().toLocaleDateString("en-GB", { month: "short", year: "numeric" }),
      activeLicenses: [
        {
          productId: "orion-hq",
          productName: "Orion HQ",
          status: "Trial",
          tier: "Evaluation License",
          renewalDate: "30 Days Remaining",
        },
      ],
    };

    setUser(member);
    try {
      window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(member));
    } catch {
      // storage disabled
    }
    return { success: true };
  };

  const resetPassword = async (email: string): Promise<{ success: boolean; error?: string }> => {
    if (!email || !email.includes("@")) {
      return { success: false, error: "Please enter a valid email address." };
    }
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    try {
      window.localStorage.removeItem(AUTH_STORAGE_KEY);
    } catch {
      // storage disabled
    }
  };

  const updateProfile = (data: Partial<MemberUser>) => {
    if (!user) return;
    const updated = { ...user, ...data };
    setUser(updated);
    try {
      window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // storage disabled
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        resetPassword,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
