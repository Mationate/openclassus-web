
const PreRegisterLayout = async ({
    children
}: {
    children: React.ReactNode
}) => {

    return ( 
        <div className="h-full">
            <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-40">
                NAVBAR
            </div>
            <main className="min-h-screen">
                {children}
            </main>
            <div className="sm:flex md:pl-56 md:flex w-full z-50">
                FOOTER
            </div>
        </div>
     );
}
 
export default PreRegisterLayout;