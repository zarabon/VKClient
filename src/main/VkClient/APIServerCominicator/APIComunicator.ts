import {MessagesComunicator} from "./MessagesComunicator/MessagesComunicator";
import {TokenRightsCominicator} from "./AccountComunicator/TokenRightsComunicator";
import {Comunicator} from "./Comunicator";
import {ComunicatorSettings} from "./CommunicatorSettings";

export class APIComunicator implements Comunicator{
    private communicatorSettings: ComunicatorSettings = new ComunicatorSettings;

    private _messages:MessagesComunicator = new MessagesComunicator;
    private _account:TokenRightsCominicator = new TokenRightsCominicator

    get messages(): MessagesComunicator {
        return this._messages;
    }

    get account(): TokenRightsCominicator {
        return this._account;
    }

    setCommunicatorSettings(settings: ComunicatorSettings) {
        this._messages.setCommunicatorSettings(this.communicatorSettings)
        this._account.setCommunicatorSettings(this.communicatorSettings)
        this.communicatorSettings = settings
    }

    getCommunicatorSettings(): ComunicatorSettings {
        return this.communicatorSettings
    }
}