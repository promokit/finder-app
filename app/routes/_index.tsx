import type { MetaFunction } from '@remix-run/node';

import { Content, Toolbar } from '~/components';

export const meta: MetaFunction = () => {
    return [{ title: 'Virtual Finder' }, { name: 'description', content: 'Finder simulator' }];
};

export default function Index() {
    return (
        <div className="window window-view">
            <div className="window-wrapper">
                <Toolbar />
                <Content />
            </div>
        </div>
    );
}
