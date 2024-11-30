import axios from 'axios';
import { isLocalhost } from '../utils/Utils';
import * as accountServiceMock from './mock/AccountServiceMock';

export function getAccount() {
  if (isLocalhost()) {
    return new Promise(function (resolve, reject) {
      let account = accountServiceMock.getCurrentAccount();
      resolve({ data: account });
    });
  }
  return axios.get('/api/account');
}

export function follow(userId) {
  if (isLocalhost()) {
    return new Promise(function (resolve, reject) {
      accountServiceMock.follow(userId);
      resolve();
    });
  }

  let params = new URLSearchParams();
  params.append('userId', userId);

  return axios.post('/api/account/follow', params);
}

export function unfollow(userId) {
  if (isLocalhost()) {
    return new Promise(function (resolve, reject) {
      accountServiceMock.unfollow(userId);
      resolve();
    });
  }

  let params = new URLSearchParams();
  params.append('userId', userId);

  return axios.post('/api/account/unfollow', params);
}

export function getProfile(userId) {
  if (isLocalhost()) {
    return new Promise(function (resolve, reject) {
      let profile = accountServiceMock.getProfile(userId);
      resolve({ data: profile });
    });
  }

  let params = new URLSearchParams();
  params.append('userId', userId);

  return axios.post('/api/profile', params);
}

export function getSuggestedAccounts() {
  return new Promise(function (resolve, reject) {
    let suggestedAccounts = accountServiceMock.getSuggestedAccounts();
    resolve({ data: suggestedAccounts });
  });
}

export function updateProfile(profile) {
  return new Promise(function (resolve, reject) {
    accountServiceMock.updateProfile(profile);
    resolve();
  });
}

export function updateProfileAvatar(src) {
  return new Promise(function (resolve, reject) {
    accountServiceMock.updateProfileAvatar(src);
    resolve();
  });
}

export function searchAccounts(username) {
  return new Promise(function (resolve, reject) {
    let accounts = accountServiceMock.searchAccounts(username);
    resolve({ data: accounts });
  });
}