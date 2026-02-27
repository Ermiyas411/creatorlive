import Navbar from "@/components/custom/Navbar";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="px-4 py-4">
      <Navbar />
      <section className="py-4 space-y-6 h-[70vh] flex flex-col items-center justify-center max-w-4xl mx-auto">
        <h1 className="sm:text-7xl text-5xl font-bold text-center">
          Go <span className="text-violet-500">Live</span>. Grow Faster. Build
          Your <span className="text-violet-500">Creator Business</span>.
        </h1>
        <p className="text-center text-slate-600">
          CreatorLive gives you everything you need to stream, engage your
          audience, and monetize your content — all in one powerful platform
          built for modern creators.
        </p>
        <Button className="bg-violet-500 cursor-pointer px-4 w-[200] h-[50] py-2 text-md">
          Start Streaming Free
        </Button>
      </section>
    </div>
  );
};

export default Home;
