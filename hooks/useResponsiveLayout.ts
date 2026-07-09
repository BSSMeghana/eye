import { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';

export function useResponsiveLayout() {
  const { width, height } = useWindowDimensions();
  const shortestSide = Math.min(width, height);
  const isTiny = shortestSide < 360;
  const isCompact = shortestSide < 390;
  const isLargePhone = shortestSide >= 428;
  const isFoldable = shortestSide >= 600;
  const screenPadding = isTiny ? 14 : isCompact ? 16 : 20;
  const contentMaxWidth = isFoldable ? 560 : 460;
  const contentWidth = Math.min(width - screenPadding * 2, contentMaxWidth);

  return useMemo(
    () => ({
      contentMaxWidth,
      contentWidth,
      height,
      isCompact,
      isFoldable,
      isLargePhone,
      isTiny,
      screenPadding,
      shortestSide,
      width,
    }),
    [
      contentMaxWidth,
      contentWidth,
      height,
      isCompact,
      isFoldable,
      isLargePhone,
      isTiny,
      screenPadding,
      shortestSide,
      width,
    ]
  );
}
