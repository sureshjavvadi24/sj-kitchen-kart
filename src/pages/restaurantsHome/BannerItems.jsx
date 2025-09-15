const BannerItems = ({ bannerCards }) => {
  if (!bannerCards) return;

  return (
    <div>
      <div className="font-bold text-xl my-4 flex justify-between items-center">
        <h1>{bannerCards?.header?.title}</h1>
        <div className="flex gap-2">
          <button className="px-2 py-1 border rounded">⬅️</button>
          <button className="px-2 py-1 border rounded">➡️</button>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto">
        {bannerCards?.imageGridCards?.info?.map((item) => (
          <div key={item?.id} className="flex-shrink-0 text-center w-44">
            <img
              src={
                item?.imageId
                  ? `https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`
                  : ""
              }
              alt={item?.action?.text || "img"}
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerItems;
