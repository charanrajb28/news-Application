import React from 'react';

export default function Headcards({ article }) {
  const image = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";
  const articleData = article || {}; // Fallback to an empty object if `article` is undefined

  return (
    // <div className=Name="card mb-3" style={{ maxWidth: "540px" }}>
    //   <div className=Name="row g-0">
    //     <div className=Name="col-md-4">
    //       <img 
    //         src={articleData.urlToImage || image} 
    //         className=Name="img-fluid rounded-start" 
    //         alt={articleData.title || "No image available"} 
    //       />
    //     </div>
    //     <div className=Name="col-md-8">
    //       <div className=Name="card-body">
    //         <h5 className=Name="card-title" style={{fontSize:"16px"}}>{articleData.title}</h5>
    //         {/* <p className=Name="card-text">{articleData.description}</p> */}
    //         <a 
    //           href={articleData.url} 
    //           target="_blank" 
    //           rel="noopener noreferrer" 
    //           className=Name="btn btn-dark mt-auto" 
    //           style={{ width: "75%" }}
    //         >
    //           Go to site
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="card mb-3 p-2" style={{width:"20rem"}}>
      <img src={articleData.urlToImage || image} 
       className="card-img-top" 
       alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{articleData.title}</h5>
        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <a href={articleData.url}  className="btn btn-danger mt-auto" >Go somewhere</a>
      </div>
    </div>
  );
}
