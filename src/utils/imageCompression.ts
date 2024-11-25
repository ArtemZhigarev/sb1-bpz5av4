import imageCompression from 'browser-image-compression';

export const compressImage = async (file: File): Promise<File> => {
  const options = {
    maxSizeMB: 4.9, // Slightly under 5MB to ensure we're safely under the limit
    maxWidthOrHeight: 2048,
    useWebWorker: true,
  };

  try {
    return await imageCompression(file, options);
  } catch (error) {
    console.error('Error compressing image:', error);
    throw error;
  }
};