import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} 
      bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
                className="inline-block w-10 rounded-full"
              />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section
      className="border-2 border-green-500 2xl:max-container 
    relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20"
    >
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Pukut Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Somewhere in the wilderness"
          peopleJoined="50+ Joined"
        />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div
          className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px]
       xl:rounded-5xl xl:px-16 xl:py-20 relative w-full
       overflow-hidden rounded-3xl">
        <h2 className="regular-24 md:regular-32 2xl:regular-64
        capitalize text-white ">
         <strong>Freeling Lost</strong>  And Not Knowing The Way?
          </h2>
<p className="regular-14 xl:regular-16 mt-5 text-white">Certainly! In addition to the genealogy and 
  the miraculous conception of Jesus,
   Matthew chapter 1 underscores the importance of Jesus being called "Immanuel,
   " which means "God with us,
   " fulfilling the prophecy from Isaiah.
    The chapter emphasizes Jesus's role as the promised Messiah and Savior of the world,
     highlighting his significance in fulfilling God's plan of salvation for humanity. Furthermore,
      it portrays Joseph as a righteous man who obediently follows the angel's instructions
       and accepts his role as the earthly father of Jesus, 
  demonstrating faith and trust in God's divine plan.
  </p>
  <Image
   src="/quote.svg"
   alt="camp-2"
   width={186}
   height={219}
   className="cammp-qote"
   />
        </div>
      </div>
    </section>
  );
};

export default Camp;
