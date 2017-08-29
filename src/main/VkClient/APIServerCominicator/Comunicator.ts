import {ComunicatorSettings} from "./CommunicatorSettings";

export interface Comunicator{

    setCommunicatorSettings(settings:ComunicatorSettings);
    getCommunicatorSettings():ComunicatorSettings;
}