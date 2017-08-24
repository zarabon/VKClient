import {chatCore} from './ChatModule'
import {VkClient} from './ChatModule/domain/VkClient'

import {ErrorService} from "./ErrorsHandling/ErrorService";

/**
 * Main VkClient interface for comunication with logic using this 
 */

let vkClient:VkClient = new VkClient();

vkClient.chat = chatCore

export {vkClient}


