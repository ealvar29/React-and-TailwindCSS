import React from "react";
const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <div className="max-w-sm py-4 overflow-hidden rounded shadow-lg">
      <img className="w-full" alt="" src={image.webformatURL} />
      <div className="px-6 py-4">
        <div className="text-xl font-bold text-purple-500">{image.user}</div>
        <ul>
          <li>
            <strong>Views: {image.views}</strong>
          </li>
          <li>
            <strong>Downloads: {image.downloads}</strong>
          </li>
          <li>
            <strong>Likes: {image.likes}</strong>
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
