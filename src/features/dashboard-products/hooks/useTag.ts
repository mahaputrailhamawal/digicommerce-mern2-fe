import { useState } from "react";

export const useTag = () => {
    const [tag, setTag] = useState('');
    const [tags, setTags]= useState<string[]>([]);

    function handleChangeTag(event: React.ChangeEvent<HTMLInputElement>) {
        setTag(event.target.value);
    }

    function handleAddTag(event: React.KeyboardEvent<HTMLInputElement>) {
        console.log(event.code);

        if (event.code === 'Enter') {
            setTags([...tags, tag])
            setTag('')
        }
    }

    function handleRemoveTag(index: number) {
        const newTags = tags.filter((_, i) => i !== index);
        setTags(newTags);
        console.log(index);
    }

    return {tag, setTag, tags, setTags, handleAddTag, handleRemoveTag, handleChangeTag}
}