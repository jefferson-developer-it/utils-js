

export function toJSON(d: any){
    try {
        return JSON.stringify(d)
    } catch (error) {
        return d
    }
}


export function fromJSON(d: any){
    try {
        return JSON.parse(d)
    } catch (error) {
        return d
    }
}