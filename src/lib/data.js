export const getCourseData= async ()=> {
  const data = await fetch('https://skillsphere-courses-data.onrender.com/courses')
  const res = data.json();
  return res;
}