import { client, checkError } from './client';

export const upload = async (file) => {
  const res = await client.storage.from('images').upload(`public/${file.name}`, file);
  return checkError(res);
};
