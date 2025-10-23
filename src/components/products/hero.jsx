
function setMobileHeight() {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}



const HeroSection = () => {
  return (
    <div className="hero-section pb-5"style={{  backgroundImage: 'url(/Rattan-House/images/dinning-sets-hero.svg)' }}>
    </div>
  );
};

setMobileHeight();
window.addEventListener('resize', setMobileHeight);

export default HeroSection;
