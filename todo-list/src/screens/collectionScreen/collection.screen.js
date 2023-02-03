import React from "react";
import { Link } from "react-router-dom";
// import PercentageCircle from "reactjs-percentage-circle";

import { FiMoreVertical, FiBookOpen, FiPlus } from "react-icons/fi";

const data = [
  { id: 1, title: "School", color: "bg-pink2" },
  { id: 2, title: "Personal", color: "bg-green2" },
  { id: 3, title: "Design", color: "bg-purple2" },
  { id: 4, title: "Groceries", color: "bg-yellow2" },
];

function CollectionScreen() {
  return (
    <div className="flex flex-col w-full items-center pt-5 lg:pt-16 pb-20">
      <div className="flex flex-col w-full px-3 md:w-5/6 lg:w-3/5 text-white">
        <div className="flex flex-row justify-between items-center mb-10">
          <div className="font-bold text-xl">Collections</div>
          <FiMoreVertical size={20} />
        </div>
        <div className="flex flex-row gap-2 text-sm mb-5">
          <div className="px-5 py-1 border-2 border-slate-800 rounded-xl">
            Favorites
          </div>
          <div className="px-5 py-1 border-2 border-slate-800 bg-slate-800 rounded-xl">
            All Collections
          </div>
        </div>

        <div className="flex flex-row flex-wrap">
          {data.map((d) => {
            return (
              <Link to={`/todo/${d.id}`} key={d.id} className="w-1/2 lg:w-1/3 p-1.5">
                <div className="bg-secondary rounded-2xl p-4 flex flex-col gap-4">
                  <div
                    className={`w-8 h-8 flex flex-row justify-center items-center ${d.color} rounded-lg mb-4`}
                  >
                    <FiBookOpen />
                  </div>
                  <div className="text-xl font-bold">{d.title}</div>
                  <div className="flex flex-row justify-between">
                    <div className="text-sm text-slate-400">4/8 done</div>
                    {/* <PercentageCircle percent={80}></PercentageCircle> */}
                  </div>
                </div>
              </Link>
            );
          })}

          <div className="w-1/2 lg:w-1/3 p-1.5">
            <div className="border-2 border-secondary rounded-2xl px-4 py-8 flex flex-col gap-4 flex flex-col justify-center items-center">
              <FiPlus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionScreen;
