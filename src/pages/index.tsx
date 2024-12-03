import Image from "next/image";
import localFont from "next/font/local";
import VideoCard from "@/components/VideoCard";



export default function Home() {
  return (
       <div>
        <VideoCard title={"Reality of India's R&AW"} image={"one.jpg"} author={"Nitish Rajput"} views={"11M views "} timestamp={"6 months ago"}/>
       </div>
  );
}
