import Events from "./_components/event-registration";

const PreRegisterPage = ({}: {
}) => {

    return ( 
        <div className=" mx-auto flex md:items-center md:justify-center h-full p-6">
            <div>
                <div className="flex items-center gap-x-2 mt-4">
                    <Events/>
                </div>
            </div>
        </div>
    );
}

export default PreRegisterPage;
