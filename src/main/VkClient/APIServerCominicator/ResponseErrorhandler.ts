import {LoginingService} from "../LoginModule/LoginingService";

const USER_AUTHORIZATION_FAILED_CODE = 5

//TODO rework throwng errors to the error module
/**
 * @desc determinate what error has occurred during request to the API and then handle this error
 * @desc in case if user token not valid for any reason it call method from LoginModule to invalidate token and user logged
 * @param respBody json answer from  VK API
 */
export function handleRespError(respBody){
    if (!('error' in respBody))
        return

    let error = respBody.error

    switch (error.error_code) {
        case USER_AUTHORIZATION_FAILED_CODE : {
            LoginingService.invalidateUserLogged()
            //todo add logging error to the logger
        }
    }

}