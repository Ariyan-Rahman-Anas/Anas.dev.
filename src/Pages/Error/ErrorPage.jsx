import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-2 text-center">
            <div className="max-wmd p-4 space-y4">
                <div>
                    <p className="text6xl font-bold">Oops..</p>
                    <h1 className="text-6xl font-bold">404</h1>
                </div>
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold">
                        Page not found
                    </h2>
                    <p className=" text-gray-500"> {`The page you're looking for doesn't exist or has been moved.`}</p>
                </div>
                <div className="flex items-center justify-center gap-8 ">
                    <button onClick={() => navigate(-1)} className="px-6 py-1.5 font-semibold rounded-lg border-2 border-black hover:bg-black hover:text-white duration-500" >Go Back</button>
                    <Link to="/">
                        <button className="px-6 py-1.5 font-semibold rounded-lg border-2 bg-black text-white border-black hover:bg-gray-700 duration-500" >Back to Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default ErrorPage;