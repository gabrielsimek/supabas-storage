import { client, checkError } from './client';

export const upload = async (file, name) => {
  let res;
  if (name.length > 0) {
    res = await client.storage.from('images').upload(`public/${name}`, file);
  } else {
    res = await client.storage.from('images').upload(`public/${file.name}`, file);
  }
  return checkError(res);
};


export const getImageUrl = (fileName) => {
  console.log(fileName);
  const { publicURL, error } = client.storage
    .from('images')
    .getPublicUrl(`public/${fileName}`);

  console.log(publicURL);
  if (error) throw error;
  else return publicURL;
};
