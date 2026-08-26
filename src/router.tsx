import React from "react";

export function BrowserRouter({children}:{children:React.ReactNode}){return <>{children}</>}
export function Link({to,className,children}:{to:string,className?:string,children:React.ReactNode}){return <a href={to} className={className}>{children}</a>}
export function NavLink({to,children}:{to:string,children:React.ReactNode}){const active=typeof window!=="undefined"&&window.location.pathname===to;return <a href={to} className={active?"active":undefined}>{children}</a>}
export function Route(_: {path:string;element:React.ReactNode}){return null}
export function Routes({children}:{children:React.ReactNode}){
  const path=typeof window!=="undefined"?window.location.pathname:"/";
  const routes=React.Children.toArray(children) as React.ReactElement<{path:string;element:React.ReactNode}>[];
  const match=routes.find(r=>r.props.path===path)??routes.find(r=>r.props.path==="*");
  return <>{match?.props.element}</>;
}
