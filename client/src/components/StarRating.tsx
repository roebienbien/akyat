import Rating from '@mui/material/Rating';

type TSize = 'small' | 'medium' | 'large';

export default function StarRating({ value, size }: { value: number; size?: TSize }) {
  return (
    // <Rating name='read-only' value={value} precision={0.1} size='medium' readOnly />
    <Rating name='read-only' value={value} precision={0.1} size={size || 'medium'} readOnly />
  );
}
