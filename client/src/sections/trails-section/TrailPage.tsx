import { useParams } from 'react-router-dom';

export default function TrailPage() {
  const { trailId } = useParams<{ trailId: string }>();

  return (
    <div className='h-screen bg-gray-100'>
      <h2>Trail: {trailId}</h2>
    </div>
  );
}
