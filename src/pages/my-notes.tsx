import { NextPage } from 'next'
import { NoteItem, Layout } from 'src/components'

const MyNotes: NextPage = () => {
  return (
    <Layout>
      <div className="">
        <NoteItem
          item={{ title: 'title', description: 'description', _id: '_id' }}
        />
      </div>
    </Layout>
  )
}
export default MyNotes
