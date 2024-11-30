import React from 'react';
import AppLayout from './AppLayout';
import { useSelector } from 'react-redux';
import { CREATE_POST, EDIT_PROFILE, MY_PROFILE, PROFILE } from '../utils/ScreenNames';
import ProfileScreen from './ProfileScreen';
import CreatePostScreen from './CreatePostScreen';
import HomeScreen from './HomeScreen';
import EditProfileScreen from './EditProfileScreen';

export default function MainComponent() {
  const activeScreen = useSelector(state => state.application.activeScreen);
  return (
    <AppLayout>
      {activeScreen == MY_PROFILE || activeScreen == PROFILE ? <ProfileScreen />
        : activeScreen == EDIT_PROFILE ? <EditProfileScreen />
          : activeScreen == CREATE_POST ? <CreatePostScreen />
            : <HomeScreen />
      }
    </AppLayout>
  );
}