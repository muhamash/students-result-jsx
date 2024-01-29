import CustomButton from "./CustomButton";
import Nav from "./Nav";

const Header = () =>
{
    return (
        <div className='bg-[radial-gradient(50%_50%_at_50%_50%,#17956D_0%,#0F684C_100%)] pt-32 pb-20 -mt-[92px] md:-mt-[118px]'>
            <div>
                <div className='py-6 px-3 cursor-pointer'>
                    <Nav />
                </div>
                <div className="grid md:grid-cols-2 items-center w-10/12 mx-auto py-10">
                    <img
                        className="md:order-2 object-cover ml-auto animate-updown"
                        src="hero.svg"
                        width="500px"
                        height="500px"
                        alt="Banner"
                    />
                    <div>
                        <h1
                            className="text-4xl lg:text-[56px] font-bold leading-[1.1] mb-8 text-white"
                        >
                            The Future of Learning starts with students at the
                            center
                        </h1>
                        <CustomButton name='Learn more' bgColor='bg-[#038C61]' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;