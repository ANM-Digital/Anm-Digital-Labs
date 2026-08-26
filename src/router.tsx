import React from "react";\n\n// App Hosting compatibility wrapper for the existing application entry point.

export function BrowserRouter({children}:{children:React.ReactNode}){return <>{children}</>}

export function Link({to,className,children,onClick}:{to:string,className?:string,children:React.ReactNode,onClick?:()=>void}){
  return <a href={to} className={className} onClick={onClick}>{children}</a>
}

export function NavLink({to,children,onClick}:{to:string,children:React.ReactNode,onClick?:()=>void}){
  const active=typeof window!=="undefined"&&window.location.pathname===to;
  return <a href={to} onClick={onClick} className={active?"active":undefined}>{children}</a>
}

export function Route(_: {path:string;element:React.ReactNode}){return null}

export function Routes({children}:{children:React.ReactNode}){
  const path=typeof window!=="undefined"?window.location.pathname:"/";
  const routes=React.Children.toArray(children) as React.ReactElement<{path:string;element:React.ReactNode}>[];
  const match=routes.find(r=>r.props.path===path)??routes.find(r=>r.props.path==="*");
  return <>{match?.props.element}</>
}
