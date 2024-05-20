import Image from 'next/image';

import { ImagesListModel } from '@/src/models/ProjectPageModel';

export function ImagesListBlock({
  imagesList,
  index,
}: {
  imagesList: ImagesListModel | undefined;
  index: number;
}) {
  const { bgColor, images, flexDirection, gap } = imagesList ?? {};

  return (
    <div
      className={`${index > 0 ? 'mt-10' : ''} w-full px-[51px] py-[46px] rounded-[20px] flex ${flexDirection ?? 'flex-col'}`}
      style={{
        background: bgColor,
        backgroundSize: 'cover',
        gap: gap ?? 40,
      }}
    >
      {images?.map((image, index) => (
        <div
          key={index}
          className="relative grow"
          style={{
            height: image.height,
            // width: image.width ?? '100%',
            // marginTop: index > 0 ? 40 : 0,
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            loading="lazy"
            quality={100}
            sizes={`(max-width: 587px) 100vw, 587px`}
            className={`${image.objectFit ?? 'object-cover'}`}
            // style={{ objectFit: image.objectFit | }}
          />
        </div>
      ))}
    </div>
  );
}
