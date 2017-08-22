import {Chat} from './domain/Chat'

export interface ChatCore{
    getChats()
    getMessages(chat:Chat)
}