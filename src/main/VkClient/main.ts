import {chatCore} from './ChatModule'
import {VkClient} from './ChatModule/domain/VkClient'
import {LocalServer} from "./LocalServer/LocalServer";
import {Route} from "./LocalServer/router/Route";
import {RouteMethodsTypes} from "./LocalServer/router/RouteMethodsTypes";
import {ErrorService} from "./ErrorsHandling/ErrorService";

/**
 * Main VkClient interface for comunication with logic using this 
 */

let vkClient:VkClient = new VkClient();

vkClient.chat = chatCore

let localServer:LocalServer = new LocalServer()
localServer['errorService'] = new ErrorService()


vkClient.server = localServer

export {vkClient}


