import { useRouter } from 'next/router';

const Print = () => {
    const router = useRouter();
    const { data } = router.query;

    if (!data) {
        return <p>No data to print.</p>;
    }

    const buildData = JSON.parse(data);

    // Render the build data for printing, you can format it as needed
    return (
        <div>
            {/* Render the selected category, product, and complete build data */}
            <p>Selected Category: {buildData.selectedCategory}</p>
            <p>Selected Product: {buildData.selectedProduct}</p>
            <p>Complete Build: {JSON.stringify(buildData.completeBuild)}</p>
            {/* Add more formatting and styling for printing */}
        </div>
    );
};

export default Print;
