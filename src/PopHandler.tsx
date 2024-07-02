import Dialog from 'corvu/dialog';
import { onCleanup, onMount } from 'solid-js';

const PopHandler = () => {
    const drawerState = Dialog.useContext();
    let backButtonPressed = false;

    const handlePopState = () => {
        console.log('PopHandler popstate', drawerState.dialogId());
        backButtonPressed = true;
        drawerState.setOpen(false);
    };

    onMount(() => {
        backButtonPressed = false;
        window.addEventListener('popstate', handlePopState);
        window.history.pushState({ dialog: 'open' }, '');
    });
 
    onCleanup(() => {
        console.log('PopHandler cleanup', drawerState.dialogId());
        window.removeEventListener('popstate', handlePopState);
        if (!backButtonPressed && !drawerState.open() ) {
            console.log('PopHandler go back');
            window.history.back();
        }
    });

    return null;
};

export default PopHandler;