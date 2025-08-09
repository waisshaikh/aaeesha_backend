  // utils/multerCloudinary.js
  import multer from 'multer';
  import { v2 as cloudinary } from 'cloudinary';
  import { CloudinaryStorage } from 'multer-storage-cloudinary';

  const storage = new CloudinaryStorage({
    cloudinary,
    params: {
      folder: 'aaeesha_reels', // or your folder name
      resource_type: 'video',
      allowed_formats: ['mp4', 'mov', 'webm', 'avi'],
      public_id: (req, file) => Date.now() + '-' + file.originalname,
    },
  });

  const upload = multer({ storage });

  export default upload;
