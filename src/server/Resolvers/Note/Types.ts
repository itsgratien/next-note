export interface AddNoteType {
  title: string
  description: string
  owner?: string
}

export interface GetSingleNoteArgs {
  noteId: string
}
