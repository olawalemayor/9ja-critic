import React from "react";

export default function NewsSidebar() {
  return (
    <div>
      <h2 className="font-bold text-2xl text-green-800 mx-2 xl:mx-0">
        LATEST NEWS
      </h2>

      <div className="rounded-md">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div
            key={index}
            className="my-4 border-b shadow-md p-2 hover:border-green-900 hover:border-b-4"
          >
            <a href="" className="">
              <div className="font-bold">News Title</div>
              <p className="h-[50px] overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis qui sapiente eligendi modi temporibus odit, magnam
                tempora beatae inventore reprehenderit unde voluptatibus id est
                magni iste placeat? Sint, nostrum veritatis.
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
