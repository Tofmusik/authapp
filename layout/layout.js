import Image from "next/image";
import Logo from "../public/assets/logo.png";

const Layout = ({ children }) => {
    return (
        <div className="flex h-screen bg-blue-400">
            <div className="m-auto bg-gray-50 rounded-md w-3/5 h-auto grid lg:grid-cols-2">
                <div className="h-full flex justify-center items-center bg-gradient-to-t from-slate-900 via-blue-900 to-slate-900 rounded-l-md">
                    <Image src={Logo} width={250} height={250} alt="Logo"/>
                </div>
                <div className="right flex flex-col justify-evenly">
                    <div className="text-center py-10">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout;