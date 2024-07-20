import {getStorage} from '@storage';
import {StorageKeyTypes} from '@ts';
import {Platform} from 'react-native';

export const wait = async (s: number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, s);
  });
};
export const IS_APPLE = Platform.OS === 'ios';

export function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const uploadFile = async (
  type: any,
  CVname: any,
  blobFile: any,
  setModal3: any,
  is_featured: any,
  onCloseModal: any,
  loadResumeList: any,
  setIs_featured: any,
  setBlobFile: any,
  setCVname: any,
  setType: any,
) => {
  const token: any = await getStorage<StorageKeyTypes>('auth');
  var data = new FormData();
  const filename = blobFile?.uri.replace(/^.*[\\\/]/, '');
  const fileURI =
    Platform.OS === 'android'
      ? blobFile?.uri
      : blobFile?.uri.replace('file://', '');
  data.append('resume', {
    name: filename,
    type: type,
    uri: fileURI,
  });
  data.append('title', CVname);
  data.append('is_featured', is_featured ? 1 : 0);
  return fetch('https://sdds.com/api/user/resume', {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token?.token,
    },
  })
    .then(res => {
      if (res) {
        loadResumeList();
        setModal3('open');
        onCloseModal();
        setType(null);
        setCVname(null);
        setBlobFile(null);
        setIs_featured(false);
      }
    })
    .catch();
};
