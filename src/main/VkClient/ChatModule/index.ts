import {ChatCoreImpl} from './ChatCoreImpl'
import {ChatCore} from "./ChatCore";

//replace with DI later
let chatCore:ChatCore = new ChatCoreImpl()

export  {chatCore}
