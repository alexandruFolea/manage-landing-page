import Image from 'next/image';
import data from '../data.json';
import CtaButton from './CtaButton';
import whiteLogo from '../image-folder/logo.svg';
const Footer = () => {
	const icons = data.socialIcons;
	return (
		<footer className='footer'>
			<div className='footer-wrapper'>
				<div className='footer-search'>
					<input type='text' placeholder='Updates in your inbox...' />
					<CtaButton text='GO' />
				</div>
				<div className='footer-navlist'>
					<div className='navlist-left'>
						<a href='#'>Home</a>
						<a href='#'>Pricing</a>
						<a href='#'>Products</a>
						<a href='#'>About Us</a>
					</div>
					<div className='navlist-right'>
						<a href='#'>Careers</a>
						<a href='#'>Community</a>
						<a href='#'>Privacy Policy</a>
					</div>
				</div>
				<div className='footer-social'>
					{icons.map((icon) => (
						<div key={icon.id}>
							<Image src={icon.img} width='30' height='30' alt='social icon' />
						</div>
					))}
				</div>
				<div className='footer-logo'>
					<Image src={whiteLogo} width='200' height='50' alt='logo' />
				</div>
				<div className='footer-copyright'>
					<span>Copyright 2020. &copy; All rights reserved</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
