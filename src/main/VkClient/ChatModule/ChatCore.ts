import {Chat} from './domain/Chat'

export interface ChatCore{
    getDialogs()
    getMessages(chat:Chat)
}