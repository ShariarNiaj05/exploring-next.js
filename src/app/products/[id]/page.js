
const DynamicPage = ({ params, searchParams }) => {
    console.log(searchParams);
    return (
        <div>
            <h1>Dynamic page: {params.id}</h1>
        </div>
    );
};

export default DynamicPage;