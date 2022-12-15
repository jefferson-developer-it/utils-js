import React from "react"

export default function InnerHTML({content}){
    return <div dangerouslySetInnerHTML={{__html: content}}></div>
}