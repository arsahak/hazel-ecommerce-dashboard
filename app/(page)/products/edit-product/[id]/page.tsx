import EditProduct from "@/components/products/EditProduct";

const page = ({params}) => {
    const { id } = params;
    return (
        <div>
            <EditProduct />
        </div>
    );
};

export default page;