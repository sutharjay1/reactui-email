import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const router = useRouter();
  const [session, setSession] = useState<{
    user: {
      id: string;
      name: string;
      email: string;
      emailVerified: boolean;
      createdAt: Date;
      updatedAt: Date;
      image?: string | null | undefined;
    };
    session: {
      id: string;
      createdAt: Date;
      updatedAt: Date;
      expiresAt: Date;
      token: string;
      userId: string;
      ipAddress?: string | null | undefined;
      userAgent?: string | null | undefined;
    };
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await authClient.getSession();
      setSession(data);
      setLoading(false);
    };

    fetchSession();
  }, []);

  const signOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
    setSession(null);
  };

  return { session, loading, signOut };
};
