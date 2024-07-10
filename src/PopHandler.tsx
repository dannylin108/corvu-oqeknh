import Drawer from '@corvu/drawer';
import { onCleanup, onMount } from 'solid-js';

const PopHandler = () => {
    const drawerState = Drawer.useContext();
    const dialogState = Drawer.useDialogContext();
    let backButtonPressed = false;

    const handlePopState = () => {
        console.log('PopHandler popstate, isDragging:', drawerState.isDragging());
        backButtonPressed = true;

        dialogState.setOpen(false);
    };

    onMount(() => {
        backButtonPressed = false;
        window.addEventListener('popstate', handlePopState);
        window.history.pushState({ dialog: 'open' }, '');
    });
 
    onCleanup(() => {
        console.log('PopHandler cleanup', dialogState.dialogId());
        window.removeEventListener('popstate', handlePopState);
        if (!backButtonPressed && !dialogState.open() ) {
            console.log('PopHandler go back');
            window.history.back();
        }
    });

    return null;
};

export default PopHandler;