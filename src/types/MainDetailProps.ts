export interface MainDetailProps {
    id:number,
    title: string,
    content: string,
    category:string,
    date: string,
    studyType:string,
    isMine:boolean,
    isStatus: boolean,
    writer: {"id": number, "name": string, "stuNum": number},
    count:{"count":number , "maxCount":number},
    list : DetailListType[]
}

export interface DetailListType {
    id: number, 
    stuNum: number, 
    name: string,
}
