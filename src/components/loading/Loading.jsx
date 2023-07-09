import React from "react";

function  Loading(Component) {
  return function Loading({ isLoading, ...props}) {
    if(!isLoading) return <Component {...props}/>
    return (
      <p className="text-white">We are wating for the data to load...</p>
    )
  }
}

export default Loading;