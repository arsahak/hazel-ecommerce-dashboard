import EditCategory from "@/components/category/EditCategory";

const page = ({params}) => {
    const { id } = params;
    return (
        <div>
            <EditCategory />
        </div>
    );
};

export default page;