import React from "react";
import "./App.css";
import "./components/Card"
import Card from "./components/Card";

function App() {
  let allow = ["", "fas fa-check"];
  let deny = ["text-muted", "fas fa-times"]
  let details = [
    {
      title: "FREE",
      price: 0,
      user: "Single User",
      storage: "50GB Storage",
      publicProjects:"Unlimited Public Projects",
      access: "Community Access",
      privateProjects: ["Unlimited Private Projects", ...deny],
      phoneSupport: ["Dedicated Phone Support", ...deny],
      subdomain: ["Free Subdomain", ...deny],
      statusReports: ["Monthly Status Reports", ...deny],
    },

    {
      title: "PLUS",
      price: 9,
      user: "5 User",
      storage: "50GB Storage",
      publicProjects: "Unlimited Public Projects",
      access: "Community Access",
      privateProjects: ["Unlimited Private Projects", ...allow],
      phoneSupport: ["Dedicated Phone Support", ...allow],
      subdomain: ["Free Subdomain", ...allow],
      statusReports: ["Monthly Status Reports", ...deny],
    },

    {
      title: "PRO",
      price: 49,
      user: "Unlimited User",
      storage: "50GB Storage",
      publicProjects: "Unlimited Public Projects",
      access: "Community Access",
      privateProjects: ["Unlimited Private Projects", ...allow],
      phoneSupport: ["Dedicated Phone Support", ...allow],
      subdomain: ["Free Subdomain", ...allow],
      statusReports: ["Monthly Status Reports", ...allow],
    },
  ];
  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {details.map((e, i)=>{
              return (
              
              <Card futures={e} key={i}/>
              
              )
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
