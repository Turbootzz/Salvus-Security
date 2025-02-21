import Phone from '@/components/common/icons/Phone';
import Navbar from '@/components/navigation/Navbar';

export default function Header() {
  return (
	<header>
	  <div className="bg-dark-header_c p-4 flex justify-center items-center text-center text-white">
		<div className='mx-2'><Phone /></div>
		<p>030 - 123 45 67</p>
	  </div>
	  <Navbar />
	</header>
  );
}