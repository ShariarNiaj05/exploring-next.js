import Counter from '@/components/Counter/Counter';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1 className=' text-4xl font-bold bg-red-400'>Hello World</h1>
      <Counter></Counter>

      <Link href={'/about'}><button>About</button></Link>
    
      
    </div>
  );
};

export default HomePage;