import {TokenRights} from "./TokenRights";
import {Token} from "./domain/Token";
import {NotEnoughRightsExeption} from "./exeprions/NotEnoughRightsExeption";
import {MessagesRequester} from "../../APIServerCominicator/MessagesRequester";


//TODO rework checking with https://vk.com/dev/account.getAppPermissions method
export class TokenRightsChecker {
    //using require cause http_request have no definitions
    private  messagesRequester:MessagesRequester = new MessagesRequester


    public async checkTokenRights(token:Token, rights:Array<TokenRights>):Promise<boolean>{
        let retValue = false;

        for(let value of rights) {
            if (value === TokenRights.MESSAGES) {
                let test = await this.messagesRequester.testMessagesRights(token)
                if (!test) {
                    retValue = false
                    throw new NotEnoughRightsExeption('No message rights')
                }
            }
            retValue = true
        }
        return retValue
    }
}