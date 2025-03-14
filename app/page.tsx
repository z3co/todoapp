import Image from "next/image";
import { Link } from "next/navigation";
import { lusitana } from "@/app/ui/fonts";

export default function Home() {
	return (
		<main>
			<div className={`${lusitana.className} flex flex-col items-center justify-center h-screen `}>
        <div className="relative bg-blue-500 border-t-[15px] border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-transparent border-t-transparent mb-80 rounded-3xl gap-6" >
					<p className="text-center text-6xl text-gray-200">TodoApp</p>
					<p className="text-4xl text-gray-300 mt-4 ">
						The best way to manage your day
					</p>
        </div>
			</div>
		</main>
	);
}
