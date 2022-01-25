import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center w-screen h-full min-h-screen pt-40 bg-stone-300 -z-20">
      <Head>
        <title>Cedar Brown</title>
        <meta name="description" content="Gender and linguistics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative max-w-xs overflow-x-clip sm:max-w-sm md:max-w-screen-sm shrink-0 grow">
        <div className="absolute top-0 left-0 h-full">
          <div className="content-grid-container">
            <div className="cedar">
              <h1>Cedar Brown</h1>
            </div>
            <div className="empty-row"></div>
            <div className="empty-row"></div>
            <div className="empty-row"></div>
            <div className="empty-row"></div>
            <div className="sub-cedar">
              <p className="font-semibold md:text-2xl">
                A short paragraph describing who I am and what I do. Potentially
                a second sentence.
              </p>
            </div>
            <div className="bio">
              <p className="">
                I love language! My lived experiences have honed my appreciation
                of the beauty present in language, and Linguistics has provided
                some tools through which I can glean and describe the depths of
                that beauty. To date, much of my time has been spent
                investigating the following areas of research:
              </p>
            </div>
          </div>
        </div>
        <div className="grid-container grid-heading">
          {Array(15)
            .fill(1)
            .map((_, i) => (
              <div className="grid-box" key={i}></div>
            ))}
          <div className="floating-circle"></div>
        </div>
        <div className="grid-container grid-about">
          {Array(20)
            .fill(1)
            .map((_, i) => (
              <div className="grid-box" key={i}></div>
            ))}
        </div>
        <div className="grid-container grid-research">
          {Array(20)
            .fill(1)
            .map((_, i) => (
              <div className="grid-box" key={i}></div>
            ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
