import React from 'react';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const TitleField = ({ control, errors }) => {
    return (
        <div className="mb-6">
            <Controller
                name="title"
                control={control}
                defaultValue=""
                rules={{ required: 'Title is required' }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Title"
                        variant="outlined"
                        fullWidth
                        error={!!errors.title}
                        helperText={errors.title ? errors.title.message : ''}
                        className="bg-white rounded-lg"
                    />
                )}
            />
        </div>
    );
};

export default TitleField;