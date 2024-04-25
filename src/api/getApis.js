import {APIClient} from './axios';
import {GET_ALL_POSTS, GET_POST_DETAILS_BY_ID} from './endPoints';
import {ERROR_MESSAGES} from '../constants/string';

export async function getAllPosts() {
  const response = await APIClient().get(GET_ALL_POSTS);
  if (response?.status == 200) {
    return response?.data;
  } else {
    throw ERROR_MESSAGES.SOMETHING_WENT_WRONG;
  }
}

export async function getPostById(id) {
  const response = await APIClient().get(GET_POST_DETAILS_BY_ID + id);
  if (response?.status == 200) {
    return response?.data;
  } else {
    throw ERROR_MESSAGES.SOMETHING_WENT_WRONG;
  }
}
