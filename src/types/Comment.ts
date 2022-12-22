export interface CommentProps {
		id: number,
		comment: string,
		isMine: string,
		writer: {id: number, name: string, stuNum: number}
}