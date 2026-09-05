import React from "react";
import { Link } from "../router";
import { useLanguage } from "../context/LanguageContext";

interface BreadcrumbItem {
  label: string;
  to?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const { t } = useLanguage();

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link to="/">{t.nav.home}</Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label + index}>
              <span className="breadcrumb-separator" aria-hidden="true">
                /
              </span>
              {isLast || !item.to ? (
                <span aria-current="page" className="breadcrumb-current">
                  {item.label}
                </span>
              ) : (
                <Link to={item.to}>{item.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
