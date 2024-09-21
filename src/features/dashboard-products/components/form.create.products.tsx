import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Select } from "../../../components/ui/select"
import { Textarea } from "../../../components/ui/textarea"
import { LayoutDashboard } from "../../dashboard/components/layout"
import { useTag } from "../hooks/useTag"

const CATEGORIES = [
    { value: "1", label: "Category 1" },
    { value: "2", label: "Category 2" },
    { value: "3", label: "Category 3" },
];

export const FormCreateProduct = () => {
    const { tag, tags, handleAddTag, handleRemoveTag, handleChangeTag} = useTag();
  return (
    <LayoutDashboard isCentered>
        <main>
            <section className="space-y-4">
                <div>
                    <h3>Create Product</h3>
                    <section className="space-y-2">
                        <Input placeholder="Product name"/>
                        <Textarea placeholder="Product description" rows={6}/>
                        <Select caption="Category" options={CATEGORIES}/>
                        <Button variant="outline">Add Image</Button>
                        <Button variant="outline">Add Downloadable Files</Button>
                        <Input name="tag" placeholder="Tags" value={tag} onChange={handleChangeTag} onKeyUp={handleAddTag}/>
                        <ProductTagsRenderer tags={tags} handleRemoveTag={handleRemoveTag}/>
                        <Button>Submit Product</Button>
                    </section>
                </div>
            </section>
        </main>
    </LayoutDashboard>
  )
}

const ProductTagsRenderer = ({tags, handleRemoveTag}: {tags: string[], handleRemoveTag: (index: number) => void}) => {
    return (
        <div role="product-tags" className="flex flex-wrap gap-2">
            {tags.map((tag,index) => (
                <div 
                    onClick={() => handleRemoveTag(index)}
                    key={index}
                    className="text-sm px-2 py-1 rounded-full cursor-pointer hover:bg-rose-500 bg-slate-200 text-slate-700">{tag}</div>
                    ))}
                </div>
    )
}
