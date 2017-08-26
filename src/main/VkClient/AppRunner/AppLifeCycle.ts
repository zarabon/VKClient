import {handleRenderProсessEvents}  from '../IPCComunication/index'

/**
 * Entry point for VKClient(main process)
 */
export class AppLifeCycle{
    public start(){

    }

    constructor(){
        //register handling for ipc events from render process
        handleRenderProсessEvents()
    }

}