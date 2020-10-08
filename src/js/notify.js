import { error } from '@pnotify/core';
import { success } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export default error;

export const successNotify = () => {
  success({
    title: 'Sucсess!',
    text: 'Sucсess',
    hide: true,
    delay: 700,
  });
};
