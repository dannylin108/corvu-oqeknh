import type { Component } from 'solid-js';
import Dialog from 'corvu/dialog';
import Drawer from 'corvu/drawer';
import Counter from './Counter';

// Put your reproduction code into here

const App: Component = () => {
  return (
    <Drawer breakPoints={[0.75]}>
      {(props) => (
        <>
          <Drawer.Trigger class="my-auto rounded-lg bg-corvu-100 px-4 py-3 text-lg font-medium transition-all duration-100 hover:bg-corvu-200 active:translate-y-0.5">
            Open Drawer
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay
              class="fixed inset-0 z-50 corvu-transitioning:transition-colors corvu-transitioning:duration-500 corvu-transitioning:ease-[cubic-bezier(0.32,0.72,0,1)]"
              style={{
                'background-color': `rgb(0 0 0 / ${
                  0.5 * props.openPercentage
                })`,
              }}
            />
            <Drawer.Content class="fixed inset-x-0 bottom-0 z-50 flex h-full max-h-[500px] flex-col rounded-t-lg border-t-4 border-corvu-400 bg-white-1 pt-3 after:absolute after:inset-x-0 after:top-full after:h-1/2 after:bg-inherit corvu-transitioning:transition-transform corvu-transitioning:duration-500 corvu-transitioning:ease-[cubic-bezier(0.32,0.72,0,1)] md:select-none">
              <div class="h-1 w-10 self-center rounded-full bg-corvu-400" />
              <Drawer.Label class="mt-2 text-center text-xl font-bold">
                I'm a drawer!
              </Drawer.Label>
              <Drawer.Description class="mt-1 text-center">
                Drag down to close me.
              </Drawer.Description>
              <Dialog>
                <Dialog.Trigger class="rounded-md bg-corvu-300 px-3 py-2 font-bold">
                  Open another dialog!
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Content class="fixed left-1/2 top-1/2 z-50 flex h-[150px] w-[320px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center space-y-4 rounded-lg border-2 border-corvu-400 bg-corvu-100 px-6 py-5 duration-200 corvu-open:animate-in corvu-open:fade-in-0 corvu-open:zoom-in-95 corvu-open:slide-in-from-left-1/2 corvu-open:slide-in-from-top-[60%] corvu-closed:animate-out corvu-closed:fade-out-0 corvu-closed:zoom-out-95 corvu-closed:slide-out-to-left-1/2 corvu-closed:slide-out-to-top-[60%]">
                    <Dialog.Label class="text-lg font-bold">
                      Hey! I'm a nested dialog 🐦‍⬛
                    </Dialog.Label>
                    <Counter />
                    <Dialog.Close class="rounded-md bg-corvu-300 px-3 py-2">
                      Close me
                    </Dialog.Close>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog>
              <p class="absolute inset-x-0 -bottom-5 z-10 text-center">
                🐸 You found froggy!
              </p>
            </Drawer.Content>
          </Drawer.Portal>
        </>
      )}
    </Drawer>
  );
};

export default App;
