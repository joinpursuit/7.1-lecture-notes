import React from "react";

const skills = ["HTML goddess", "CSS wiz"];

const Skills = () => {
  return (
    <div>
      <h2> My Skills </h2>
      <ul>
        {skills.map((skill) => (
          <li> {skill} </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
