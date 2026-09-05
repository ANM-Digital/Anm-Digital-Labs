import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

interface RouterContextType {
  pathname: string;
  navigate: (to: string, options?: { replace?: boolean }) => void;
  params: Record<string, string>;
}

const RouterContext = createContext<RouterContextType>({
  pathname: typeof window !== "undefined" ? window.location.pathname : "/",
  navigate: () => {},
  params: {},
});

export function BrowserRouter({ children }: { children: React.ReactNode }) {
  const [pathname, setPathname] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return window.location.pathname || "/";
    }
    return "/";
  });
  const [params, setParams] = useState<Record<string, string>>({});

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname || "/");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = useCallback((to: string, options?: { replace?: boolean }) => {
    if (typeof window !== "undefined") {
      if (options?.replace) {
        window.history.replaceState({}, "", to);
      } else {
        window.history.pushState({}, "", to);
      }
      setPathname(to.split("?")[0].split("#")[0] || "/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <RouterContext.Provider value={{ pathname, navigate, params }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useNavigate() {
  const context = useContext(RouterContext);
  return context.navigate;
}

export function useLocation() {
  const context = useContext(RouterContext);
  return { pathname: context.pathname };
}

export function useParams<T extends Record<string, string> = Record<string, string>>(): T {
  const context = useContext(RouterContext);
  return context.params as T;
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  className?: string;
  children: React.ReactNode;
  replace?: boolean;
}

export function Link({ to, className, children, replace, onClick, ...rest }: LinkProps) {
  const { navigate } = useContext(RouterContext);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);

    // If external link, let browser handle normally
    if (to.startsWith("http://") || to.startsWith("https://") || to.startsWith("mailto:") || to.startsWith("tel:")) {
      return;
    }

    // Allow ctrl/cmd/shift clicks to open in new tab
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) {
      return;
    }

    e.preventDefault();
    navigate(to, { replace });
  };

  return (
    <a href={to} className={className} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}

interface NavLinkProps extends LinkProps {
  activeClassName?: string;
  end?: boolean;
}

export function NavLink({ to, className = "", activeClassName = "active", end = false, children, ...rest }: NavLinkProps) {
  const { pathname } = useContext(RouterContext);
  const isActive = end ? pathname === to : pathname === to || (to !== "/" && pathname.startsWith(to));

  const combinedClass = `${className} ${isActive ? activeClassName : ""}`.trim();

  return (
    <Link to={to} className={combinedClass} aria-current={isActive ? "page" : undefined} {...rest}>
      {children}
    </Link>
  );
}

export function Route(_: { path: string; element: React.ReactNode }) {
  return null;
}

function matchRoute(routePath: string, currentPath: string): { match: boolean; params: Record<string, string> } {
  if (routePath === "*") {
    return { match: true, params: {} };
  }

  const routeSegments = routePath.split("/").filter(Boolean);
  const currentSegments = currentPath.split("/").filter(Boolean);

  if (routeSegments.length !== currentSegments.length) {
    return { match: false, params: {} };
  }

  const params: Record<string, string> = {};

  for (let i = 0; i < routeSegments.length; i++) {
    const routeSeg = routeSegments[i];
    const currentSeg = currentSegments[i];

    if (routeSeg.startsWith(":")) {
      const paramName = routeSeg.slice(1);
      params[paramName] = decodeURIComponent(currentSeg);
    } else if (routeSeg !== currentSeg) {
      return { match: false, params: {} };
    }
  }

  return { match: true, params };
}

export function Routes({ children }: { children: React.ReactNode }) {
  const { pathname, navigate } = useContext(RouterContext);
  const routes = React.Children.toArray(children) as React.ReactElement<{ path: string; element: React.ReactNode }>[];

  let matchedElement: React.ReactNode = null;
  let matchedParams: Record<string, string> = {};

  for (const route of routes) {
    const { match, params } = matchRoute(route.props.path, pathname);
    if (match) {
      matchedElement = route.props.element;
      matchedParams = params;
      break;
    }
  }

  return (
    <RouterContext.Provider value={{ pathname, navigate, params: matchedParams }}>
      {matchedElement}
    </RouterContext.Provider>
  );
}
