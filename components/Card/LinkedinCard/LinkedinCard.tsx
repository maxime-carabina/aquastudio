import Image from 'next/image';

import LkdIcon from '@/src/assets/camille-bregeaut.jpeg';

export function LinkedinCard() {
  // max-w-[925px]
  return (
    <div className="px-3 py-3.5 max-w-[985px] bg-white rounded-[20px] flex gap-1.5 lg:gap-7 drop-shadow-md">
      <div className="rounded-full">
        <Image
          src={LkdIcon}
          alt="Camille Bregeaut"
          width={81}
          height={81}
          quality={100}
          className="rounded-full"
        />
      </div>
      <div className="text-f-black">
        <p className="font-semibold text-[11px] lg:text-[22px]">
          Camille Brégeaut
        </p>
        <p className="text-[9px] lg:text-[20px]">
          🌿 Co-Fondatrice Le Petits Prödiges 🧼 40 femmes Forbes 2023
        </p>
        <p className="mb-6 text-[8px] lg:text-[20px] opacity-50">
          Le 13 avril 2022, Camille était le/la manager direct(e) de Marine
        </p>
        <p className="text-[10px] lg:text-[20px] max-w-[803px]">
          Marine est la première créa que nous avons accueilli en interne, cela
          nous a conforté dans l’idée que c’est un post très utile.
          <br />
          Elle s’est investie avec un professionnalisme dans l’ensemble des
          missions qui lui ont été confiées. Elle a su s’adapter et être
          autonome sur les différentes missions très variées qui lui ont été
          confiées. Créative, organisée et douce, je vous recommande Marine au
          sein de vos équipes. Elle apportera toute la créativité dont vous avez
          besoin tout en étant professionnelle.
        </p>
      </div>
    </div>
  );
}
