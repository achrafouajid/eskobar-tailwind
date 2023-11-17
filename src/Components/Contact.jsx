import { MailIcon, PhoneIcon } from '@heroicons/react/outline';

export default function Contact() {
  return (
    <div className="tw-relative tw-bg-black">
      <div className="tw-absolute tw-inset-0">
        <div className="tw-absolute tw-inset-y-0 tw-left-0 tw-w-1/2 tw-g-gray-50 tw-bg-black" />
      </div>
      <div className="tw-relative tw-max-w-7xl tw-mx-auto tw-lg:grid tw-lg:grid-cols-5">
        <div className="tw-bg-gray-50 tw-py-16 tw-px-4 tw-sm:px-6 tw-lg:col-span-2 tw-lg:px-8 tw-lg:py-24 tw-xl:pr-12 tw-bg-black">
          <div className="tw-max-w-lg tw-mx-auto">
            <h2 className="tw-text-2xl tw-font-extrabold tw-tracking-tight tw-text-gray-900 tw-sm:text-3xl">
              Get in touch
            </h2>
            <p className="tw-mt-3 tw-text-lg tw-leading-6 tw-text-gray-500">
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
              massa dictumst amet. Sapien tortor lacus arcu.
            </p>
            <dl className="tw-mt-8 tw-text-base tw-text-gray-500">
              <div>
                <dt className="tw-sr-only">Postal address</dt>
                <dd>
                  <p>742 Evergreen Terrace</p>
                  <p>Springfield, OR 12345</p>
                </dd>
              </div>
              <div className="tw-mt-6">
                <dt className="tw-sr-only">Phone number</dt>
                <dd className="tw-flex">
                  <PhoneIcon
                    className="tw-flex-shrink-0 tw-h-6 tw-w-6 tw-text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="tw-ml-3">+1 (555) 123-4567</span>
                </dd>
              </div>
              <div className="tw-mt-3">
                <dt className="tw-sr-only">Email</dt>
                <dd className="tw-flex">
                  <MailIcon
                    className="tw-flex-shrink-0 tw-h-6 tw-w-6 tw-text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="tw-ml-3">support@example.com</span>
                </dd>
              </div>
            </dl>
            <p className="tw-mt-6 tw-text-base tw-text-gray-500">
              Looking for careers?{' '}
              <a
                href="#"
                className="tw-font-medium tw-text-gray-700 tw-underline"
              >
                View all job openings
              </a>
              .
            </p>
          </div>
        </div>
        <div className="tw-bg-black tw-py-16 tw-px-4 tw-sm:px-6 tw-lg:col-span-3 tw-lg:py-24 tw-lg:px-8 tw-xl:pl-12">
          <div className="tw-max-w-lg tw-mx-auto tw-lg:max-w-none">
            <form
              action="#"
              method="POST"
              className="tw-grid tw-grid-cols-1 tw-gap-y-6"
            >
              <div>
                <label htmlFor="full-name" className="tw-sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  className="tw-block tw-w-full tw-shadow-sm tw-py-3 tw-px-4 tw-placeholder-gray-500 tw-focus:ring-indigo-500 tw-focus:border-indigo-500 tw-border-gray-300 tw-rounded-md"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="tw-sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="tw-block tw-w-full tw-shadow-sm tw-py-3 tw-px-4 tw-placeholder-gray-500 tw-focus:ring-indigo-500 tw-focus:border-indigo-500 tw-border-gray-300 tw-rounded-md"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="tw-sr-only">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="tw-block tw-w-full tw-shadow-sm tw-py-3 tw-px-4 tw-placeholder-gray-500 tw-focus:ring-indigo-500 tw-focus:border-indigo-500 tw-border-gray-300 rounded-md"
                  placeholder="Phone"
                  tw-
                />
              </div>
              <div>
                <label htmlFor="message" className="tw-sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="tw-bg-black tw-block tw-w-full tw-shadow-sm tw-py-3 tw-px-4 tw-placeholder-gray-500 tw-focus:ring-indigo-500 tw-focus:border-indigo-500 tw-border tw-border-gray-300 tw-rounded-md"
                  placeholder="Message"
                  defaultValue={''}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="tw-inline-flex tw-justify-center tw-py-3 tw-px-6 tw-border tw-border-red tw-shadow-sm tw-text-base tw-font-medium tw-rounded-md tw-text-white tw-bg-red-600 tw-hover:bg-black tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-offset-2 tw-focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
