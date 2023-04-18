import { AiOutlinePlus } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { GoSignOut } from "react-icons/go";
const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

export default function Home() {
    return (
        <main className="">
            <div className="bg-black text-white w-44 py-4 mt-10 rounded-lg transition-transform hover:bg-black/[0.8] active:scale-90 flex items-center justify-center gap-2 font-medium shadow-md fixed bottom-5 right-5 cursor-pointer">
                <GoSignOut size={18} />
                <span>Logout</span>
            </div>
            <div className="max-w-3xl p-8 mx-auto mt-10">
                <div className="sticky top-0 p-3 -m-6 bg-white">
                    <div className="flex flex-col items-center justify-center">
                        <span className="mb-10 text-7xl">📝</span>
                        <h1 className="text-5xl font-bold md:text-7xl">
                            ToooDooo's
                        </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-10">
                        <input
                            placeholder={`👋 Hello name, What to do Today?`}
                            type="text"
                            className="font-semibold placeholder:text-gray-500 border-[2px] border-black h-[60px] grow shadow-sm rounded-md px-4 focus-visible:outline-yellow-400 text-lg transition-all duration-300"
                            autoFocus
                        />
                        <button className="w-[60px] h-[60px] rounded-md bg-black flex justify-center items-center cursor-pointer transition-all duration-300 hover:bg-black/[0.8]">
                            <AiOutlinePlus size={30} color="#fff" />
                        </button>
                    </div>
                </div>
                <div className="my-10">
                    {arr.map((todo, index) => (
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-3">
                                <input
                                    id={`todo-${index}`}
                                    type="checkbox"
                                    className="w-4 h-4 rounded-lg accent-green-400"
                                />
                                <label
                                    htmlFor={`todo-${index}`}
                                    className="font-medium"
                                >
                                    This is my first todo
                                </label>
                            </div>

                            <div className="flex items-center gap-3">
                                <MdDeleteForever
                                    size={24}
                                    className="text-red-400 cursor-pointer hover:text-red-600"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
