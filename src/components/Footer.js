const Footer = () => {
  return (
    <footer className="bg-stone-50 text-black py-6 mt-10 border-t border-gray-200">
      <div className="container mx-auto text-center font-semibold text-2xl">
        <p className="text-3sm">
          &copy; {new Date().getFullYear()} Swiggy Clone. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-swiggy-orange hover:text-orange-500"
          >
            Facebook
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-swiggy-orange hover:text-orange-500"
          >
            X
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-swiggy-orange hover:text-orange-500"
          >
            Instagram
          </a>
        </div>
        <p className="text-sm mt-4">Made with ❤️ by Anand P</p>
      </div>
    </footer>
  );
};

export default Footer;
