
import { AiOutlineLogin } from "react-icons/ai";
// import exampleImage from '../../assets/chicken-teriyaki.jpg'
const Header = () => {
    return (
        <div>
            <div className="mx-auto pt-10 flex justify-around items-center">
                <h1 className="font-bold text-sm
                 lg:text-2xl text-[#02b76c]">Recipe Calories</h1>
                <ul className="hidden lg:flex gap-7 font-bold text-[#35f3a3]">
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
                <div className="gap-7">
                    <input className="bg-gray-200 hidden lg:inline-block pl-4 pr-4 pt-3 pb-3 rounded-3xl font-bold text-gray-500" type="text" placeholder="Search" />
                    <button className="bg-green-400 p-3 rounded-full text-2xl ml-4"><AiOutlineLogin></AiOutlineLogin></button>
                </div>
            </div>

            <div className=" m-24 ">
                <div
                    className="relative h-screen flex items-center justify-center"
                    style={{
                        backgroundImage: `url('https://i.ibb.co/fptCJZZ/chicken-teriyaki.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '20px'
                    }}
                >
                    <div className="absolute inset-0  opacity-50"></div> {/* Overlay */}
                    <div className="relative z-10 text-center text-white p-8 max-w-2xl mx-auto">
                        <h1 className="text-sm lg:text-4xl font-bold mb-4">
                            Discover an exceptional cooking class tailored for you!
                        </h1>
                        <p className="mb-6 text-xs lg:text-lg">
                        Let's find the perfect cooking class for you! Whether you're a complete beginner or a seasoned chef looking to expand your repertoire, there's a class out there to help you take your culinary skills to the next level.
                        </p>
                        <div className="hidden lg:flex justify-center space-x-4">
                            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-xl hover:bg-green-600">
                                Explore Now
                            </button>
                            <button className="bg-transparent border-2 border-white text-white font-bold py-2 px-4 rounded-xl hover:bg-white hover:text-black">
                                Our Feedback
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center space-y-4 pb-14">
                <h1 className="text-4xl font-bold">Our Recipes</h1>
                <p className="text-gray-400">Let's explore the world of recipes together! We can find something delicious to cook <br /> no matter your experience level or taste preferences.</p>
            </div>
        </div>

    );
};

export default Header;