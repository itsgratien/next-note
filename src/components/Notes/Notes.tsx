import { NextPage } from 'next'
import styles from './Notes.module.scss'
import classNames from 'classnames'
import { NoteItem, Layout } from 'src/components'

const Notes: NextPage = () => {
  return (
    <Layout>
      <div className={classNames(styles.notes)}>
        <NoteItem
          item={{
            title: `When did you start 
          learning how to code`,
            description: `Lorem Ipsum is simply 
          dummy text of the printing 
          and typesetting industry. 
          Lorem Ipsum has been the 
          industry's standard dummy 
          text ever since the 1500s, 
          when an unknown printer 
          took a galley of type and 
          scrambled it to make a type 
          specimen book. It has 
          survived not only five 
          centuries, but also the leap
           into electronic typesetting.`,
            _id: '_id',
          }}
        />
      </div>
    </Layout>
  )
}
export default Notes
