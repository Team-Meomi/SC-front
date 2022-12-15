export interface ConferencesProps {
    title: string,
    content: string,
    date: string,
    startTime: number,
    endTime: number,
    user: {"id": number, "name": string, "gender": string}
}
