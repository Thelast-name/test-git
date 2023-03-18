import { Editor } from '@tinymce/tinymce-react';
import clientPromise from '../pages/mongodb';


async function InsertData(){
    const client = await clientPromise;
    const db = client.db('DATABASE_NAME');
    const collection = db.collection('COLLECTION_NAME');
    const data = await collection.find({}).toArray();
    return {
        props: { data: JSON.parse(JSON.stringify(data)) },
    };
}


const Richtext = () => (
    <>
    <div className='flex justify-between items-center'>
        <h2 className='text-2xl px-2'>BlogforME</h2>
        <button className='bg-sky-400 px-4 py-3 text-base text-white' onClick={content}>Save</button>
    </div>
        <Editor
           id='textblog' 
           init={{
            selector: 'textblog',
            content_style: 'div {padding: 10px; }',
            height: 720,
           }}
        />

    
    </>
)

export default Richtext