import intro from '../../assets/videos/intro.mp4'
import { ScrollToTopButton } from '../../components/ScrollTopButton';

export function Home() {
    return (
        <>
            <div>
                <video className="w-full" controls muted autoPlay loop>
                    <source src={intro} type="video/mp4" />
                </video>
            </div>
            <div className='flex flex-row justify-center items-center my-10'>
                <blockquote className="text-lg sm:text-2xl italic text-green-400 text-center p-4 border-l-4 border-green-400">
                    "Your sign to rewatch Star Wars this is."
                    <footer className="mt-2 text-sm sm:text-lg text-green-300">- Master Yoda</footer>
                </blockquote>
                <ScrollToTopButton />
            </div>
        </>
    );
};