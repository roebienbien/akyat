import Rating from '@mui/material/Rating';

export default function StarRating({ value }: { value: number }) {
  return (
    // <div className='flex items-center'>
    <Rating name='read-only' value={value} precision={0.1} size='medium' readOnly />
    // </div>
  );
}
