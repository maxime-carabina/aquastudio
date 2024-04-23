import Image from 'next/image';

import { cn } from '@/lib/utils';
import { RightColContentModel, DEFAULT } from '@/src/models';

export function ImageBlock({
  image,
  className,
}: {
  image: RightColContentModel['image'];
  className?: string;
}) {
  return (
    <div
      className={cn('relative', className)}
      style={{
        height: image?.height,
        width: image?.width,
      }}
    >
      <Image
        src={image?.src || DEFAULT.src}
        alt={image?.alt || DEFAULT.alt}
        fill
        quality={100}
        sizes={`(max-width: ${image?.width}px) 100vw, ${image?.width}px`}
        className="rounded-[20px] object-cover"
      />
    </div>
  );
}
