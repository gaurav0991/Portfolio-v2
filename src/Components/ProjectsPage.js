import React, { useEffect, useState } from "react";

function ProjectsPage() {
  const [state, setstate] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://api.github.com/users/gaurav0991/repos");
      const d = await data.json();
      console.log(d);
      setstate(d);
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <h1>Projects</h1>
      <div className="lang mt-3">
        {state.map((s) => {
          return (
            s.language != null && (
              <div className="box-lang-left">
                {s.name}
                <br />
                {s.language}
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}

export default ProjectsPage;
