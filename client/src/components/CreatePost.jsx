import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { preview } from '../assets';
import { getRandomPrompt } from '../util';
import { FormField, Loader } from '../components'

const CreatePost = () => {
    // navigate back to homepage once post is created
    const navigate = useNavigate();
    // useState field
    const [form, setForm] = useState({
        name: '',
        prompt: '',
        photo: '',
    });
    
    // contact API while waiting for image
    const [generatingImg, setGeneratingImg] = useState(false);
    // Loading
    const [loading, setLoading] = useState(false);

    return (
        <section className='max-w-tx1 mx-auto'>
            <div>
                <h1 className='font-extrabold text-black text [32px]'>
                    Create 
                </h1>
                <p className= 'mt-2 text [#666e75] text-[16px] max-w [500px]'>
                Browse through a captivating assortment of imaginative and visually striking images created by the community through DALL-E AI
                </p>
            </div>

            <form className='mt-16 max-w-3xl' onSubmit={handSubmit}>
                
            </form>

        </section>
    )
}

export default CreatePost;