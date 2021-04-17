import {StyleSheet} from 'react-native';
import colors from '../../../colors/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.primary_background,
  },
  icon: {
    marginRight: 16,
    width: 50,
    height: 50,
  },
  text: {
    color: colors.white,
    fontSize: 12,
  },
  appListItem: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
