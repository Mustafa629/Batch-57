
import React from "react";
import "./style.css";


const page = () => {
  return (
    <div>
      {/* inline styling */}
      <h1>I am header1</h1>
      {/* {external styling} */}
      <h2>Tag Selector styling</h2>
      <h2 className="blue-head">Iam Tag Selector</h2>
      <h2 id="h0" className="blue-head text-purple-900 m-10">
        CSS External Styling w.r.t tagname + class + id
      </h2>
      <h2 className="blue-head">Tag + Class Selector styling</h2>

      {/* {style in a variable} */}
      <p  id="h0">
        This is a paragraph
      </p>
    </div>
  );
};

export default page;
