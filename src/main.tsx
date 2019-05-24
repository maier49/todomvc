import renderer from '@dojo/framework/widget-core/vdom';
import { tsx } from '@dojo/framework/widget-core/tsx';

import App from './App';

const r = renderer(() => <App />);
r.mount({ domNode: document.getElementById('app')! });
