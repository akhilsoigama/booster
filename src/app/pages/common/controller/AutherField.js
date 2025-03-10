'use client'
import React from 'react';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const AuthorField = ({ control, errors }) => {
    return (
        <div className="mb-6">
            <Controller
                name="author"
                control={control}
                defaultValue=""
                rules={{ required: 'Author is required' }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Author"
                        variant="outlined"
                        fullWidth
                        error={!!errors.author}
                        helperText={errors.author ? errors.author.message : ''}
                        className="bg-white rounded-lg"
                    />
                )}
            />
        </div>
    );
};

export default AuthorField;