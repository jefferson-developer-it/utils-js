

export namespace ConfigHttp{
    type ContentType = "text/html"|"text/plain"|"application/json"| "text/css" |"text/csv"|"text/xml"   
    type Method = "GET"|"POST"|"DELETE"|"PUT"|"POP"|"UPDATE"

    export interface Header {
        "content-type"?: ContentType
        "access-control-allow-origin"?: string
        "access-control-allow-method"?: string
    }

    export interface Config{
        query?: object
        baseUri?: string
        body?: object | string
        header?: Header
        method?: Method
    }
}