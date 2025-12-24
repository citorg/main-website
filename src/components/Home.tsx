import bgImage from "../images/jordan-griffith-v8QoGa0tibk-unsplash.jpg";
import Button from "./Button";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="h-screen">
      <div
        className="w-full text-center md:text-left md:pl-6 h-1/3"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          padding: "20px 0",
        }}
      >
        <h1 className="text-white">
          <strong>CHRISTIANS</strong> <span className="font-medium">IN</span>{" "}
          <strong>TECH</strong>
        </h1>
        <h2 className="text-white mb-8">
          A community at the intersection of Faith and Technology.
        </h2>
        <Button
          href="https://www.meetup.com/citcbus/"
          width="medium"
          theme="light"
          text="UPCOMING EVENTS"
        />
      </div>
      <div className="bg-white w-full h-fit pb-8 relative">
        <h1 className="text-center py-14" style={{ fontSize: "28px" }}>
          ABOUT US
        </h1>
        <img
          className="px-4"
          src="https://secure.meetupstatic.com/photos/event/4/7/6/c/highres_525918284.webp"
          alt="Christians in Tech - Columbus Meetup #2 at Bethel World Prayer Center."
        />
        <p className="px-4 my-8" style={{ lineHeight: 1.6 }}>
          Christians in Tech is a community at the intersection of faith and
          technology. Our meetups are designed to spark meaningful
          conversations, promote knowledge sharing, and encourage growth—both in
          your career and your spiritual walk with God. Whether you're an
          experienced professional or just starting your tech journey, CIT
          welcomes you.
        </p>
        <div className="flex justify-center py-6">
          <Button
            href="https://www.meetup.com/pro/cit-columbus/"
            width="medium"
            theme="dark"
            text="JOIN A CHAPTER"
          />
        </div>
      </div>
      <div className="bg-gray-100 w-full h-fit pb-8 relative">
        <h1 className="text-center py-14" style={{ fontSize: "28px" }}>
          GET INVOLVED
        </h1>
        <h2>JOIN OUR DISCORD</h2>
        <p className="px-4 my-8" style={{ lineHeight: 1.6 }}></p>
        <div className="flex justify-center py-6">
          <Button
            href="https://www.meetup.com/pro/cit-columbus/"
            width="medium"
            theme="dark"
            text="JOIN A CHAPTER"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
