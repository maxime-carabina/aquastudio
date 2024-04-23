import Image from 'next/image';

import { ImagesListModel } from '@/src/models/ProjectPageModel';

export function ImagesListBlock({
  imagesList,
  index,
}: {
  imagesList: ImagesListModel | undefined;
  index: number;
}) {
  const { bgColor, images } = imagesList ?? {};

  return (
    <div
      className={`${index > 0 ? 'mt-10' : ''} w-full px-[51px] py-[46px] rounded-[20px]`}
      style={{ backgroundColor: bgColor }}
    >
      {images?.map((image, index) => (
        <div
          key={index}
          className="relative"
          style={{
            height: image.height,
            marginTop: index > 0 ? 40 : 0,
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            quality={100}
            sizes={`(max-width: 587px) 100vw, 587px`}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
