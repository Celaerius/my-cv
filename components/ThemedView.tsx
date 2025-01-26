import { View, type ViewProps } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';

export type ThemedViewProps = ViewProps & {
  BackgroundColor: { dark: string; light: string };
};

export function ThemedView({ style, BackgroundColor, ...otherProps }: ThemedViewProps) {
  const colorScheme = useColorScheme() ?? 'light';

  return <View style={[{ backgroundColor : BackgroundColor[colorScheme] }, style]} {...otherProps} />;
}
