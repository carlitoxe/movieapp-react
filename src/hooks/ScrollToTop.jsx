import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function ScrollToTop() {
    const { pathname } = useLocation();

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
      window.scrollTo((0, 0), 0);
    }, [pathname]);

    return null;
}

export { ScrollToTop }