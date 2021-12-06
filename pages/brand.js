import Image from 'next/image';

const brand = () => {
	return (
		<div className='brand'>
			<h1>Brand Page</h1>
			<Image
				src='/images/bg-simplify-section-desktop.svg'
				width='400'
				height='400'
				alt='something'
			/>
		</div>
	);
};

export default brand;
