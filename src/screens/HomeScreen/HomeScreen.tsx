import React from 'react';
import {Image, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Typography, Button, ScreenContainer} from '../../components';
import {RootStackParamList, RouteName} from '../../types';
import {Images} from '../../assets';

import {styles} from './styles';

const {Logo} = Images;

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({navigation}: HomeScreenProps) => {
  const {t} = useTranslation();

  const handleNavigate = (destination: RouteName) => {
    navigation.navigate(destination);
  };

  return (
    <ScreenContainer>
      <View style={styles.alignCenter}>
        <Image source={Logo} style={styles.logo} />
        <Typography
          variation="title"
          text={t('appName')}
          containerStyle={styles.marginBottomLarge}
          textStyle={styles.titleText}
        />
        <View style={styles.alignCenter}>
          <Button
            textProps={{text: t('start')}}
            onPress={() => handleNavigate('Game')}
          />
          <Button
            buttonStyle={styles.marginTopMedium}
            textProps={{text: t('settings')}}
            onPress={() => handleNavigate('Settings')}
          />
          <Button
            buttonStyle={styles.marginTopMedium}
            textProps={{text: t('about')}}
            onPress={() => handleNavigate('About')}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};
