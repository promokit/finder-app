import '@preact/signals-react/auto';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';

import './styles/general.css';

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}

export function HydrateFallback() {
    return (
        <div className="spinner">
            <img src="/spinner.svg" width="60" height="38" alt="Loading..." />
        </div>
    );
}
