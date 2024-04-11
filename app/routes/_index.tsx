import type { MetaFunction } from '@remix-run/node';

import { Content, Sidebar, Toolbar } from '~/components';

import '../general.css';

export const meta: MetaFunction = () => {
    return [{ title: 'Virtual Finder' }, { name: 'description', content: 'Finder simulator' }];
};

export default function Index() {
    return (
        <div className="window">
            <Sidebar />
            <main>
                <Toolbar />
                <Content />
            </main>
        </div>
    );
}
