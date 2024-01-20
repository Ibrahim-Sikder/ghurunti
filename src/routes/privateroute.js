// middleware/auth.js

import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie"; // Assuming you are using js-cookie for cookies

const PrivateRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const authToken = Cookies.get("token");

    if (!authToken) {
      const { asPath } = router;
      router.push(`/login?next=${asPath}`);
    }
  }, [router]);

  return children;
};

export default PrivateRoute;
