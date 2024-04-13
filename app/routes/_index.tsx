import type { MetaFunction } from '@remix-run/node';

import { Content, Sidebar, Toolbar } from '~/components';

import '../styles/general.css';

export const meta: MetaFunction = () => {
    return [{ title: 'Virtual Finder' }, { name: 'description', content: 'Finder simulator' }];
};

export default function Index() {
    return (
        <div className="window window-view">
            <div className="window-wrapper">
                <Sidebar />

                <Toolbar />
                <Content />
            </div>
        </div>
    );
}
