import { NewModel } from "./new.model"

export interface Jsend {
    status: string,
}

export interface NewsJSend extends Jsend {
    data :{
        news: NewModel[]
    }
}