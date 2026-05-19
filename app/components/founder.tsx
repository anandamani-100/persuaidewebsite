"use client";
import Image from "next/image";

export default function Founder() {
  const mediaLogos = [
    {
      name: "TIME",
      element: (
        <Image
          src="/founder/Time_perfect.png"
          alt="TIME Logo"
          width={200}
          height={80}
          className="h-6 md:h-9 w-auto object-contain select-none"
        />
      )
    },
    {
      name: "BBC",
      element: (
        <Image
          src="/founder/bbc_clean.png"
          alt="BBC Logo"
          width={180}
          height={80}
          className="h-6 md:h-10 w-auto object-contain select-none"
        />
      )
    },
    {
      name: "Forbes",
      element: (
        <Image
          src="/founder/forbes_clean.png"
          alt="Forbes Logo"
          width={200}
          height={80}
          className="h-6 md:h-9 w-auto object-contain select-none"
        />
      )
    },
    {
      name: "The Economist",
      element: (
        <Image
          src="/founder/economist.png"
          alt="The Economist Logo"
          width={100}
          height={30}
          className="h-6 md:h-18 w-auto object-contain select-none"
        />
      )
    },
    {
      name: "CNBC",
      element: (
        <Image
          src="/founder/cnbc_clean.png"
          alt="CNBC Logo"
          width={200}
          height={80}
          className="h-6 md:h-9 w-auto object-contain select-none"
        />
      )
    },
    {
      name: "The Atlantic",
      element: (
        <Image
          src="/founder/at_perfect.png"
          alt="The Atlantic Logo"
          width={160}
          height={80}
          className="h-6 md:h-11 w-auto object-contain select-none"
        />
      )
    },
    {
      name: "Times of India",
      element: (
        <Image
          src="/founder/toi_perfect.png"
          alt="Times of India Logo"
          width={150}
          height={80}
          className="h-6 md:h-8 w-auto object-contain select-none"
        />
      )
    },
    {
      name: "ET",
      element: (
        <Image
          src="/founder/ecotime_perfect.png"
          alt="Economic Times Logo"
          width={150}
          height={80}
          className="h-6 md:h-11 w-auto object-contain select-none"
        />
      )
    },
    {
      name: "mint",
      element: (
        <Image
          src="/founder/mint_perfect.png"
          alt="Mint Newspaper Logo"
          width={190}
          height={80}
          className="h-4 md:h-10 w-auto object-contain select-none"
        />
      )
    },
    {
      name: "The Hindu",
      element: (
        <Image
          src="/founder/the_hindu.png"
          alt="The Hindu Logo"
          width={250}
          height={80}
          className="h-6 md:h-[34px] w-auto object-contain select-none"
        />
      )
    },
  ];

  // Re-use base array for static rendering
  const staticLogos = mediaLogos;

  return (
    <section id="founder" className="relative py-16 md:py-24 px-6 md:px-8 bg-white overflow-hidden border-t border-slate-100">

      {/* Supreme Centered Section Heading */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center text-center z-10 mb-12 md:mb-20">
        <h2 className="text-[32px] sm:text-4xl md:text-[56px] leading-[1.1] font-bold tracking-tight text-slate-900 select-none">
          Founder <br />
          {/* <span className="text-[#0038FF]">Behavioural Scientist</span> */}
        </h2>
      </div>

      <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-y-12 gap-x-16 items-stretch z-10">

        {/* Left Column: Expanded to balance vertically and house logo block */}
        <div className="lg:col-span-8 flex flex-col justify-start lg:justify-between h-full text-left pb-0 lg:pb-4">

          {/* Cluster text content tightly together at top of column */}
          <div className="flex flex-col items-start">
            {/* Name linked directly, icon removed */}
            <div className="flex flex-col items-center lg:items-start w-full lg:w-auto gap-1 mb-8 text-[#0038FF] font-sans select-none text-center lg:text-left">
              {/* Name and LinkedIn on Row 1 */}
              <div className="flex items-center gap-2.5 text-xl md:text-2xl font-bold tracking-tight">
                <span>Anand Damani</span>
                <a
                  href="https://www.linkedin.com/in/ananddamani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center ml-1 transition-all transform active:scale-95"
                  aria-label="View LinkedIn Profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0 shadow-sm rounded-[4px]">
                    <rect x="0" y="0" width="24" height="24" rx="4" fill="#0038FF" />
                    <path d="M8.42 18.5h-3v-10h3v10zm-1.5-11.5c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm11.5 11.5h-3v-5.5c0-1.3-.5-2-1.5-2s-1.5.7-1.5 2v5.5h-3v-10h3v1.5c.5-.7 1.5-1.5 3-1.5 2.5 0 3 1.8 3 3.5v6.5z" fill="white" />
                  </svg>
                </a>
              </div>
              {/* Title on Row 2 */}
              <div className="text-lg md:text-xl font-semibold tracking-tight opacity-90">
                Behavioural Scientist
              </div>
            </div>

            {/* Biography paragraphs matching exact font details */}
            <div className="flex flex-col gap-6 text-slate-600 text-base md:text-lg leading-[1.8] font-medium mb-6 max-w-3xl">
              <p>
                Anand Damani is one of India's leading behavioural scientists. Since 2013, he
                has been delivering winning campaign results for India's best companies by
                applying behavioural science to acquire, retain and upsell customers. His
                work keeps getting featured in media like TIME, BBC, Forbes, The Economist
                and CNBC.
              </p>
              <p>
                Before practising as a behavioural scientist, Anand worked in advertising,
                sales and marketing — serving clients like Unilever, P&G, Cadbury, Asian
                Paints and L'Oréal. <span className="italic">PERSUAIDE</span> has been developed based on 13 years of
                proven behavioural science results delivered across several projects for
                clients, five decades of empirical research on human behaviour, combined
                with the most powerful AI models in the world.
              </p>
            </div>
          </div>

          {/* Relocated Media Strip: Compressed into wrapping lines */}
          <div className="w-full select-none pt-2 md:pt-5 border-t border-slate-100/50 max-w-3xl ">
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block mb-2 text-left">
              FEATURED IN
            </span>
            <div className="grid grid-cols-4 gap-x-4 gap-y-4.5 items-center justify-items-center w-full md:flex md:flex-row md:flex-nowrap md:justify-start md:gap-x-4 md:gap-y-3">
              {staticLogos.map((logo: any, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center h-8 md:h-9 grayscale contrast-[1.2] opacity-80 hover:opacity-100 transition-all flex-shrink overflow-hidden ${logo.name === "Times of India" || logo.name === "ET" ? "col-span-2" : ""}`}
                >
                  {logo.element}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Profile Image */}
        <div className="lg:col-span-4 w-full flex items-start justify-center lg:justify-end relative select-none">
          {/* Subtle blue background glow - hidden on mobile to avoid render artifacts */}
          <div className="hidden md:block absolute -inset-4 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-[40px] blur-2xl z-0" />

          {/* Main Portrait Card wrapper with shadow and no hover effect */}
          <div className="relative w-full max-w-[430px] rounded-[32px] overflow-hidden  bg-white z-10">
            <Image
              src="/images/founder.jpg"
              alt="Anand Damani - Founder & Behavioural Scientist"
              width={800}
              height={1000}
              priority
              className="w-full h-auto object-cover object-top rounded-2xl scale-[1.5] origin-top transition-transform duration-500 grayscale"
            />
          </div>
        </div>



      </div>
    </section>
  );
}
