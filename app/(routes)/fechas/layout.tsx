
const PreRegisterLayout = async ({
    children
}: {
    children: React.ReactNode
}) => {

    return ( 
        <div className="h-full">
        
            <main className="min-h-screen">
                {children}
            </main>
            <div className="sm:flex md:pl-56 md:flex w-full z-50">

            </div>
        </div>
     );
}
 
export default PreRegisterLayout;