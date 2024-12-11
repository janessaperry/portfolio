import { GithubLogo, LinkedinLogo, Envelope } from "@phosphor-icons/react";

function Footer() {
  return (
    <footer className="w-full md:container py-4 px-4 sm:px-6 flex items-center justify-between ">
      <div className="flex flex-col gap-y-2 basis-1/2">
        <h2>Let's Connect</h2>
        <ul className="flex gap-x-4 list-none">
          <li>
            <a href="https://github.com/janessaperry" target="_blank">
              <GithubLogo className="text-pink-700 text-3xl" />
            </a>
          </li>

          <li>
            <a href="https://github.com/janessaperry" target="_blank">
              <LinkedinLogo className="text-pink-700 text-3xl" />
            </a>
          </li>

          <li>
            <a href="https://github.com/janessaperry" target="_blank">
              <Envelope className="text-pink-700 text-3xl" />
            </a>
          </li>
        </ul>
      </div>

      <div className="basis-1/2">
        <p className="text-base text-blue-50 text-right">
          Designed and developed by Janessa Perry
        </p>
      </div>
    </footer>
  );
}

export default Footer;
