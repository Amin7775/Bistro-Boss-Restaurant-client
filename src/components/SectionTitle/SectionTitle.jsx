
const SectionTitle = ({heading,subHeading}) => {

    return (
        <div className="text-center my-8">
            <p className="text-yellow-600 text-lg mb-1">---{subHeading}---</p>
            <h3 className="text-4xl uppercase border-y-4 inline-block py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;