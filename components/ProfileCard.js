import Image from 'next/image';
const ProfileCard = ({ name, bio, img }) => {
	return (
		<div
			className={
				profile === pr.id ? 'profile-card active-card' : 'profile-card'
			}
		>
			<div className='card-image'>
				<Image src={img} width='60' height='60' alt='avatar profile image' />
			</div>
			<div className='card-title'>{name}</div>
			<div className='card-bio'>{bio}</div>
		</div>
	);
};

export default ProfileCard;
