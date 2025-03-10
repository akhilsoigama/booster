'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Box, Typography } from '@mui/material';
import TitleField from '../common/controller/TitleField';
import AuthorField from '../common/controller/AutherField';
import ContentField from '../common/controller/Content';
import DropzoneField from '../common/controller/DropzoneField';


const PostForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors }
        ,
        reset
    } = useForm();

    const onSubmit = (data) => {
        console.log('Form Data:', data);
        reset({ content: '' })
    };

    return (
        <Box className="max-w-3xl mx-auto p-6 rounded-lg shadow-lg">
            <Typography
                variant="h4"
                className="mb-6 text-center font-bold"
                style={{
                    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
            >
                Create a New Post
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} className=" flex mt-5 flex-col">
                <TitleField control={control} errors={errors} />

                <AuthorField control={control} errors={errors} />

                <ContentField control={control} errors={errors} />

                <DropzoneField control={control} errors={errors} />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    className="py-2"
                >
                    Submit
                </Button>
            </form>
        </Box>
    );
};

export default PostForm;