import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ScreenLayout from '@screens/ScreenLayout';
import UserSettingsHeader from '@screens/UserSettings/components/UserSettingsHeader';
import SettingsItem from '@screens/UserSettings/components/SettingsItem';
import useNavigate from '@hooks/useNavigate';
import { Alert, ScrollView } from 'react-native';

const UserSettings = () => {
  const { navigateTo } = useNavigate();

  const handleLogout = () => {
    Alert.alert('bloom', '이 기기에서 로그아웃하시겠습니까?', [
      { text: '취소', style: 'cancel' },
      {
        text: '로그아웃',
        onPress: async () => {
          await AsyncStorage.multiRemove(['accessToken', 'refreshToken']);
          navigateTo('Login');
        },
      },
    ]);
  };

  return (
    <ScreenLayout>
      <UserSettingsHeader title="설정" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SettingsItem title="로그아웃" onPress={handleLogout} isLast={true} />
      </ScrollView>
    </ScreenLayout>
  );
};

export default UserSettings;
