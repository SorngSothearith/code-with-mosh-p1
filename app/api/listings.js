import client from "./client";

const endPoint = "listings";
const getListings = () => client.get(endPoint);

const addListing = (listing,onUploadProgress) => {
  
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("description", listing.description);
  data.append(
    "categoryId",
    listing.category ? listing.category.value : listing.category
  );
  listing.images.map((item, key) => {
    data.append('images',{
      name: "koko_" + key,
      type: "image/jpeg",
      uri: item,
    });
  });
  console.log(data)
  if (listing.location) data.append("location", JSON.stringify(listing.location));
  return  client.post(endPoint,data,{
      onUploadProgress:progress => onUploadProgress(progress.loaded / progress.total)
  })
};
export default {
    getListings,
    addListing
  };