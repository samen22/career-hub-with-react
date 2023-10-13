

const Footer = () => {
  return (
    <footer className="p-10 bg-[#1A1919] text-white">
      <div className="footer max-w-5xl mx-auto">
        <aside>
          <h2 className="text-white text-3xl font-extrabold">CareerHub</h2>
          <div className="w-1/2 mt-3">
            <p className="text-[16px] text-[#757575] ">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
          </div>
          <div className="mt-4">
            <img src={`../../../public/assets/icons/social.png`} alt="" />
          </div>

        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;