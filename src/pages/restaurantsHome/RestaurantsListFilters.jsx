import React from "react";

const RestaurantsListFilters = ({ resListHeader, resListFilters }) => {
  if (!resListFilters || !resListHeader) return;
  console.log(resListFilters?.facetList);
  return (
    <div>
      <div className="font-bold text-xl my-4 flex justify-between items-center">
        <h1>{resListHeader?.title}</h1>
      </div>
      <div className="flex gap-6 mx-2 my-6 ">
        <button className="border border-gray-300 rounded-xl p-2">
          Filter
        </button>
        <button className="border border-gray-300 rounded-xl p-2">
          Sort By
        </button>
        {resListFilters?.facetList?.map((fList) =>
          !fList?.canSearch
            ? fList?.facetInfo?.map(
                (fInfo) =>
                  fInfo?.openFilter && (
                    <button
                      key={fInfo?.id || fInfo?.label}
                      className="border border-gray-300 rounded-xl p-2"
                    >
                      {fInfo?.label}
                    </button>
                  )
              )
            : null
        )}

        {/* <button>{resListFilters?.facetList?.[0]?.facetInfo?.[0]?.label}</button>
        <button>{resListFilters?.facetList?.[2]?.facetInfo?.[0]?.label}</button>
        <button>{resListFilters?.facetList?.[3]?.facetInfo?.[0]?.label}</button>
        <button>{resListFilters?.facetList?.[4]?.facetInfo?.[0]?.label}</button>
        <button>{resListFilters?.facetList?.[5]?.facetInfo?.[0]?.label}</button>
        {resListFilters?.facetList?.[6]?.facetInfo?.map((item) => (
          <button>{item?.openFilter && item?.label}</button>
        ))} */}
      </div>
    </div>
  );
};

export default RestaurantsListFilters;
