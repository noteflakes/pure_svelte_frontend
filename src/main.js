import { mount, unmount } from 'svelte';
import App from './App.svelte';

const app = mount(App, {
  target: document.body,
  props: {
    color: 'rebeccapurple',
    strokeWidth: '2px'
  }
});

export default app;
