import React from "react";
import logo from "../assets/templatelogo.png";
import ZoomImage from "../ZoomImage/ZoomImage";

interface ProductFrameProps {
  image: string;
  storeName?: string;
}

const ProductFrame: React.FC<ProductFrameProps> = ({
  image,
  storeName = "Super Family Mart",
}) => {
  return (
    <div className="relative p-4 rounded-2xl bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400 shadow-lg">
      {/* White Frame */}
      <div className="absolute inset-1 rounded-xl bg-white"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 pb-3 px-2">
          <img src={logo} alt="Logo" className="w-22 h-20 object-contain rounded-lg" />

          <h2
            className="
              font-['Cinzel_Decorative']
              text-2xl
              font-bold
              tracking-widest
              leading-snug
              bg-gradient-to-r
              from-red-700 via-orange-500 to-yellow-400
              bg-clip-text
              text-transparent
            "
          >
            {storeName.split(" ").map((word, i) => (
              <div key={i}>{word}</div>
            ))}
          </h2>
        </div>

        {/* Product Zoomable Image */}
        <div className="w-full h-80 rounded-xl overflow-hidden">
          <ZoomImage src={image} alt="Product" />
        </div>
      </div>
    </div>
  );
};

export default ProductFrame;
