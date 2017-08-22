import {chatCore} from './ChatModule'
import {VkClient} from './ChatModule/domain/VkClient'
import {LocalServer} from "./login/server/LocalServer";

/**
 * Main VkClient interface for comunication with logic using this 
 */

let vkClient:VkClient = new VkClient();

vkClient.chat = chatCore
vkClient.server = new LocalServer()

export {vkClient}


