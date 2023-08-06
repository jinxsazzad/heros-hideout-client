import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section>
      <div
        className="hero h-[70vh]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1599623560574-39d485900c95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">Make Your Kids Happy</h1>
            <p className="mb-5">
              Discover a world of enchanting action figures, delightful dolls,
              and zooming cars that will ignite your child's imagination and
              make playtime an extraordinary adventure. Embrace the magic of
              play and watch your child's dreams come to life.
            </p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
