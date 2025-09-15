import * as React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaRegSquareCaretUp } from "react-icons/fa6";
import { FaRegSquare } from "react-icons/fa6";

const DotSquare = () => (
  <div className="relative inline-flex items-center justify-center">
    <FaRegSquare size={20} className="text-green-600" />
    <div className="absolute w-2 h-2 bg-green-600 rounded-full"></div>
  </div>
);

const RestaurantMenu = ({ resMenu }) => {
  return (
    <div>
      {resMenu?.map((category) => (
        <Accordion
          key={category.card.card.categoryId}
          className="mb-4 last:mb-0"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-${category.card.card.categoryId}`}
            id={`panel-${category.card.card.categoryId}`}
          >
            <h2 className="font-bold p-2">
              {category.card.card.title} ({category.card.card.itemCards.length})
            </h2>
          </AccordionSummary>

          <AccordionDetails>
            {category.card.card.itemCards?.map((item) => (
              <div
                key={item.card.info.id}
                className="flex justify-between items-start gap-4 py-4 border-b last:border-b-0 pb-10"
              >
                <div className="flex-1">
                  <div>
                    {item.card.info.itemAttribute.vegClassifier === "NONVEG" ? (
                      <FaRegSquareCaretUp size={22} className="text-red-600" />
                    ) : (
                      <DotSquare />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.card.info.name}
                  </h3>

                  <h4 className="text-gray-700 font-medium mt-1">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                    }).format(
                      (item.card.info.price ?? item.card.info.price) / 100
                    )}
                  </h4>

                  {item.card.info.description && (
                    <p className="text-sm text-gray-500 mt-1 leading-snug">
                      {item.card.info.description}
                    </p>
                  )}
                </div>

                {item.card.info.imageId && (
                  <div className="relative w-38 h-38">
                    <img
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
                      alt={item.card.info.name}
                      className="w-full h-full object-cover rounded-xl border border-gray-200"
                    />
                    <button className="absolute -bottom-6 w-9/12 left-1/2 transform -translate-x-1/2 bg-white text-green-500 text-md font-semibold py-2 px-4 rounded-md shadow-md transition">
                      ADD
                    </button>
                  </div>
                )}
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default RestaurantMenu;
