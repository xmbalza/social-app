import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface CreateFormData {
    title: string;
    description: string;
}

//defines schema for yup validation
const CreateForm = () => {
    const schema = yup.object().shape({
        title: yup.string().required('You must add a title.'),
        description: yup.string().required('You must add a description.'),
    })

    //bring in useForm from library. *set interface for useForm. 
    const { register, handleSubmit, formState: {errors} } = useForm<CreateFormData>({
        resolver: yupResolver(schema),
    });

    const onCreatePost = (data: any) => {
        console.log(data)
    }

    return ( 
        <form onSubmit={handleSubmit(onCreatePost)}>
            <input placeholder='title...' {...register('title')}/>
            <p style={{color: 'red'}}> {errors.title?.message}</p>
            <textarea placeholder='description...' {...register('description')}/>
            <p style={{color: 'red'}}> {errors.description?.message}</p>
            <input type='submit' />
        </form>
    );
}
 
export default CreateForm;