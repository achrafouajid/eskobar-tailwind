import React from 'react';

const Newsletter = () => {
  return (
    <section className="tw-bg-black">
      <div className="tw-py-8 tw-px-4 tw-mx-auto tw-max-w-screen-xl tw-lg:py-16 tw-lg:px-6">
        <div className="tw-mx-auto tw-max-w-screen-md tw-sm:text-center">
          <h2 className="tw-mb-4 tw-text-3xl tw-tracking-tight tw-font-extrabold tw-text-gray-900 tw-sm:text-4xl tw-dark:text-white">
            Sign up for our newsletter
          </h2>
          <p className="tw-mx-auto tw-mb-8 tw-max-w-2xl tw-font-light tw-text-gray-500 tw-md:mb-12 tw-sm:text-xl tw-dark:text-gray-400">
            Stay up to date with the roadmap progress, announcements, and
            exclusive discounts feel free to sign up with your email.
          </p>
          <form action="#">
            <div className="tw-items-center tw-mx-auto tw-mb-3 tw-space-y-4 tw-max-w-screen-sm tw-sm:flex tw-sm:space-y-0">
              <div className="tw-relative tw-w-full">
                <label
                  htmlFor="email"
                  className="tw-hidden tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 tw-dark:text-gray-300"
                >
                  Email address
                </label>
                <div className="tw-flex tw-absolute tw-inset-y-0 tw-left-0 tw-items-center tw-pl-3 tw-pointer-events-none">
                  <svg
                    className="tw-w-5 tw-h-5 tw-text-gray-500 tw-dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  className="tw-block tw-p-3 tw-pl-10 tw-w-full tw-text-sm tw-text-gray-900 tw-bg-gray-50 tw-rounded-lg tw-border tw-border-gray-300 tw-sm:rounded-none tw-sm:rounded-l-lg tw-focus:ring-primary-500 tw-focus:border-primary-500 tw-dark:bg-gray-700 tw-dark:border-gray-600 tw-dark:placeholder-gray-400 tw-dark:text-white tw-dark:focus:ring-primary-500 tw-dark:focus:border-primary-500"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="tw-py-3 tw-px-5 tw-w-full tw-text-sm tw-font-medium tw-text-center tw-text-white tw-rounded-lg tw-border tw-cursor-pointer tw-bg-red-700 tw-border-primary-600 tw-sm:rounded-none tw-sm:rounded-r-lg tw-hover:bg-primary-800 tw-focus:ring-4 tw-focus:ring-primary-300 tw-dark:bg-primary-600 tw-dark:hover:bg-primary-700 tw-dark:focus:ring-primary-800"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="tw-mx-auto tw-max-w-screen-sm tw-text-sm tw-text-left tw-text-gray-500 tw-newsletter-form-footer tw-dark:text-gray-300">
              We care about the protection of your data.{' '}
              <a
                href="#"
                className="tw-font-medium tw-text-primary-600 tw-dark:text-primary-500 tw-hover:underline"
              >
                Read our Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
