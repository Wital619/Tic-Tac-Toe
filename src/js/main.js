import Entry from './classes/entry';
import { registerServiceWorker } from '../service-worker/register-service-worker';

import '../scss/main.scss';

registerServiceWorker(process.env.NODE_ENV);
document.addEventListener('DOMContentLoaded', () => new Entry());