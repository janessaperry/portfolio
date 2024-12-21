import { Sparkle } from "@phosphor-icons/react";
import LinkButton from "../components/LinkButton";

function NotFound() {
  return (
    <main className="main-container">
      <section className="flex flex-col gap-8 items-center py-8 md:py-16">
        <div className="flex flex-col gap-4 lg:max-w-screen-lg">
          <h1 className="text-4xl text-center">
            Whoops - nothing to see here!
          </h1>
          <LinkButton
            label="Go Back Home"
            href={"/"}
            size="xl"
            iconLeft={<Sparkle className="text-3xl" />}
          />
        </div>
      </section>
    </main>
  );
}

export default NotFound;
