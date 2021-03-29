import React from 'react';
import InputField from './InputField';
import Select from './InputSelect';

export default {
    title : "Inputs",
    component : InputField
}

export const Email = () => <InputField label="Email"/>
export const Password = () => <InputField label="Password"/>
export const InputSelect = () => <Select label="Category" />