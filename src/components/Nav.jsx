import CustomButton from "./CustomButton";

const Nav = () => {
    return (
        <div className='container mx-auto flex items-center justify-between gap-x-6'>
            <div>
                <img className="h-[40px]" src="lws.svg" alt="logo?" />
            </div>
            <div>
                <CustomButton name='Get admission' bgColor='bg-black'/>
            </div>
        </div>
    );
};

export default Nav;