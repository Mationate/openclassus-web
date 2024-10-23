export const Footer = () => {
  return (
    <footer className="bg-zinc-900">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        {/* Back to top button */}
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <a
            className="inline-block rounded-full bg-amber-400 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4"
            href="#inicio"
            aria-label="Back to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        {/* Footer main content */}
        <div className="lg:flex lg:items-end lg:justify-between">
          {/* Logo or Title */}
          <div className="text-center lg:text-left">
            <div className="flex justify-center text-white lg:justify-start">
              <svg className="h-8" viewBox="0 0 118 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Aquí iría el contenido de tu logo SVG */}
              </svg>
              <p>Logo</p>
            </div>
            <p className="mt-4 text-sm text-white">
              © 2024 Company Name. All rights reserved.
            </p>
          </div>

          {/* Links section */}
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <ul className="flex justify-center space-x-6 text-sm text-white lg:justify-start">
              <li>
                <a className="hover:text-color3bs transition" href="/about">About Us</a>
              </li>
              <li>
                <a className="hover:text-color3bs transition" href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a className="hover:text-color3bs transition" href="/terms">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
