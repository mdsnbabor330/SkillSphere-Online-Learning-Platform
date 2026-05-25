export const getCourseData= async ()=> {
  const data = await fetch('https://skillsphere-courses-data.onrender.com/courses')
  const res = await data.json();
  return res;
}
export const getCourseDetailsData= async (id)=> {
  await new Promise(resolve => setTimeout(resolve, 3000));
  const data = await fetch(`https://skillsphere-courses-data.onrender.com/courses/${id}`)
  const res = await data.json();
  return res;
}