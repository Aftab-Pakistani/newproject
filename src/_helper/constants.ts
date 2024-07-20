import { BASE_URL } from "@settings";

export const ss = {
  toast: "toast",
  auth: "auth",
  user: "user",
};

const assetUploads = BASE_URL + "uploads/";
export const assets = {
  assetStorage: BASE_URL + "storage/",
  assetPublic: BASE_URL + "public/images/",
  profilePhotos: (fileName: string) =>
    assetUploads + "profile_photos/" + fileName,
  courseFeaturedImages: assetUploads + "course_featured_image/",
  eventFeaturedImages: assetUploads + "event_featured_image/",
  batchFeaturedImages: assetUploads + "batch_featured_image/",
  tutorialFeaturedImages: assetUploads + "tutorial-thumbnails/",
  LIBRARY_FILES: assetUploads + "libraryFiles/",
  tutorialVideosPath: assetUploads + "tutorials/",
  productURL: BASE_URL + "uploads/products/",
  eventCategories: assetUploads + "event-categories/",
  resumeFiles: assetUploads + "resumes/",
};
