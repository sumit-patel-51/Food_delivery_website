import React from "react";

function Loading() {
  return (
    <div className="flex justify-center items-center bg-yellow-100 w-full h-[100vh]">
      <figure>
        <div class="dot white"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </figure>
    </div>
  );
}

export default Loading;
