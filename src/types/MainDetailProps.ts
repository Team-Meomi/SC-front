export interface MainDetailProps {
    id:number,
    title: string,
    content: string,
    category:string,
    date: string,
    type:string,
    isMine:boolean,
    isStatus: boolean,
    writer: {"id": number, "name": string, "gender": string},
    count:{"count":number , "maxCount":number},
    list : DetailListType[]
}

export interface DetailListType {
    id: number, 
    stuNum: number, 
    name: string,
}
