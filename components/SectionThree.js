import { useState } from 'react';
import data from '../data.json';
import Image from 'next/image';
import { BsRecordCircleFill } from 'react-icons/bs';
import CtaButton from './CtaButton';

const SectionThree = ({}) => {
	const profiles = data.profiles;

	const [profile, setProfile] = useState(1);

	const toggleProfile = (id) => {
		setProfile(id);
	};

	return (
		<section className='section-three'>
			<div className='three-title'>
				<h1>What they&apos;ve said</h1>
			</div>
			<div className='three-profile-tabs'>
				<span
					className={profile === 1 ? 'tab active-tab' : 'tab'}
					onClick={() => toggleProfile(1)}
				>
					<BsRecordCircleFill />
				</span>
				<span
					className={profile === 2 ? 'tab active-tab' : 'tab'}
					onClick={() => toggleProfile(2)}
				>
					<BsRecordCircleFill />
				</span>
				<span
					className={profile === 3 ? 'tab active-tab' : 'tab'}
					onClick={() => toggleProfile(3)}
				>
					<BsRecordCircleFill />
				</span>
				<span
					className={profile === 4 ? 'tab active-tab' : 'tab'}
					onClick={() => toggleProfile(4)}
				>
					<BsRecordCircleFill />
				</span>
			</div>
			<div className='three-profile-card'>
				{profiles.map((file) => (
					<div
						key={file.id}
						className={
							profile === file.id ? 'profile-card active-card' : 'profile-card'
						}
					>
						<div className='card-image'>
							<Image
								src={file.img}
								width='60'
								height='60'
								alt='avatar profile image'
							/>
						</div>
						<div className='card-name'>
							<h4>{file.name}</h4>
						</div>

						<div className='card-bio'>
							<p>{file.bio}</p>
						</div>
					</div>
				))}
			</div>
			<div className='three-cta'>
				<CtaButton text='get started' />
			</div>
		</section>
	);
};

export default SectionThree;
