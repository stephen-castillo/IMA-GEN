import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { preview } from '../assets';
import { getRandomPrompt } from '../util/index';
import { FormField, Loader } from '../components'
import { useMutation, useQuery } from '@apollo/client';
import { GENERATE_IMAGE } from '../util/mutations';
import { CREATE_POST } from '../util/mutations';


const CreatePost = () => {
    // navigate back to homepage once post is created
    const navigate = useNavigate();
    // useState field
    const [form, setForm] = useState({
        name: '',
        prompt: '',
        photo: '',
    });
    
    const [getImage, {error} ] = useMutation(GENERATE_IMAGE);

    const [createPost, {postError}] = useMutation(CREATE_POST);

    // contact API while waiting for image
    const [generatingImg, setGeneratingImg] = useState(false);
    // Loading
    const [loading, setLoading] = useState(false);

    const generateImage = (evt) => {
        evt.preventDefault();
        setGeneratingImg(true);
        if (!form.name) {
            //TODO: add a toast message
            alert('Please enter your name');
            return;
        }else if (!form.prompt) {
            //TODO: add a toast message
            alert('Please enter a prompt');
            return;
        }
        console.log(form);
        getImage({variables: {name: form.name, prompt: form.prompt }})
        .then((res) => {
            console.log(res);
            console.log(res.data.getImage.photo);
            setForm({...form, photo: res.data.getImage.photo});
            setGeneratingImg(false);
        }).catch((err) => {
            console.log(err);
            setGeneratingImg(false);
        });

        if (error) {
            console.log(error);
        }
    }

    //
    const handleSubmit = (evt) => {
        evt.preventDefault();
        
        if (form.prompt && form.photo) {
            setLoading(true);

            try {
                createPost({variables: {name: form.name, prompt: form.prompt, photo: form.photo}})
                if (postError) {
                    console.log(postError);
                }
            }catch(err) {
                console.log(err);
                setLoading(false);
            }
            setInterval(() => {
                setLoading(false);
              }, 2000);
        }    
    };

    // update the form state when input values change
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value})
    }

    // call utility function to ensure we always get a new prompt
    const handleSurpriseMe = () => {
        const randomPrompt = getRandomPrompt(form.prompt);
        setForm({ ...form, prompt: randomPrompt})
    }

    return (
        <section className='max-w-7x1 mx-auto'>
            <div>
                <h1 className='font-extrabold text-[#ffbe00] text-[32px]'>
                    Create 
                </h1>
                <p className= 'mt-2 text-[#666e75] text-[16px] max-w-[500px]'>
                Browse through a captivating assortment of imaginative and visually striking images created by the community through DALL-E AI
                </p>
            </div>

            <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-5'>
                    <FormField 
                    LabelName='Your name'
                    type='text'
                    name='name'
                    placeholder='Some Name'
                    value={form.name}
                    handleChange={handleChange}
                    required
                    />
                     <FormField 
                    LabelName='Prompt'
                    type='text'
                    name='prompt'
                    placeholder='A close-up of a dew-covered spiderweb glistening in the morning light'
                    value={form.prompt}
                    handleChange={handleChange}
                    isSurpriseMe
                    handleSurpriseMe={handleSurpriseMe}
                    required
                    />

                    <div
                        className='relative bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg
                        focus:ring-blue-500 focus:border-blue-500 w-max p-3 h-max flex justify-center items-center'>
                            {form.photo ? (
                                <img src={form.photo}
                                alt={form.prompt}
                                className='w-full h-full object-contain'
                                />
                            ): (
                                <img 
                                src={preview}
                                alt='preview'
                                className='w-9/12 h-9/12 object-contain w-64 h-64 opacity-40'
                                />
                            )}

                            {generatingImg && (
                                <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]
                                rounded-lg'>
                                  <Loader />
                                </div>
                            )}
                    </div>
                </div>

                <div className='mt-5 flex gap-5'>
                    <button
                        type='button'
                        /* onClick={generateImage} */
                        onClick={generateImage}
                        className='text-white bg-[#4A648C] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
                        >
                           {generatingImg ? 'Generating...' : 'Generate'} 
                    </button>

                </div>

                <div className='mt-10'>
                    <p className='mt-2 text-[#666e75] text-[14px]'>Once the image you created is generated, you can now share the image with others in the community!</p>
                    <button
                    type='submit'
                    className='mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
                    >
                      {loading ? 'Sharing...' : 'Share with Community'}
                    </button>
                </div>
            </form>

        </section>
    )
}

export default CreatePost;
