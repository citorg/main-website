// import { Link } from "@tanstack/react-router";
import bgImage from "../images/jordan-griffith-v8QoGa0tibk-unsplash.jpg";

export default function Home() {
  return (
    <>
      <div
        className="w-full text-center py-36"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-white">
          <strong>CHRISTIANS</strong> <span className="font-medium">IN</span>{" "}
          <strong>TECH</strong>
        </h1>
        <h2 className="text-white mb-8">
          A community at the intersection of Faith and Technology.
        </h2>
        <a
          href="https://www.meetup.com/citcbus/"
          className="border-2 border-solid border-white p-4"
        >
          Upcoming Events
        </a>
      </div>
    </>
  );
}
