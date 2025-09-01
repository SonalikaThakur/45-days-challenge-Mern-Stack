
const skills=[{name:"HTML",proficiency:"intermediate"},
{name:"CSS",proficiency:"intermediate"},
{name:"javascript",proficiency:"begineer"}];
const newarray=skills.map(skill=>{return `${skill.name} (${skill.proficiency})`;});
console.log(newarray);

