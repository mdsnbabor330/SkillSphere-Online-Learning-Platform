import Course from "@/components/top3Course/Course";
import Banner from "../../components/banner/Banner";
import LearningTips from "@/components/learningTips/LearningTips";
import TrendingCourse from "@/components/trendingCourse/TrendingCourse"
import Mentors from "@/components/mentors/Mentors";
export default function Home() {
  return (
    <>
      <Banner />
      <Course/>
      <LearningTips/>
      <TrendingCourse/>
      <Mentors/>
    </>
  );
}
