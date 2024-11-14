import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';
import { zodResolver } from '@hookformresolvers/zod';
import { z } from 'zod';

const formSchema = z.object({
    email: z.string().optional(),
    name: z.string().min(1, "name is required"),
    addressLine1: z.string().min(1, "Address Line 1 is required"),
    city: z.string().min(1, "City is required"),
    country: z.string().min(1, "Country is required"),
})

type UserFormData = z.infer<typeof formSchema>;

type Props = {
    onSave: (userProfileData: UserFormData) => void;
    isLoading: boolean;
}

const UserProfileForm = ({ onSave, isLoading }: Props) => {
    const form = useForm<UserFormData>({
        resolver: zodResolver(formSchema)
    });

    return(
        <Box {...form}>
            <form 
                onSubmit={form.handlesubmit(onSave)} 
                className="space-y-4 bg-gray-50 rounded-lg md:p-10"
            >
                <div>
                    <h2 className="text-2xl font-bold"> User Profile Form</h2>
                </div>

            </form>
        </Box>
    )
};

export default UserProfileForm;