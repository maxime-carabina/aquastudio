import { ColorBlockWithText } from './ColorBlockWithText';
import { FontPresentation } from './FontPresentation';
import { ImageBlock } from './ImageBlock';
import { RightColContentModel } from '@/src/models';

export function FlexBox({
  content,
  index,
}: {
  content: RightColContentModel;
  index: number;
}) {
  return (
    <div className={`${index > 0 ? 'mt-10' : ''} flex gap-[34px]`}>
      {content.left && content.left.length > 1 ? (
        <div
          className="grow"
          style={{
            height: content.right?.at(0)?.image?.height
              ? content.right?.at(0)?.image?.height
              : content.left?.at(0)?.image?.height,
          }}
        >
          <div className="flex flex-col justify-between gap-5 h-full">
            {content.left.map((left, index) => {
              return left.type === 'image' ? (
                <ImageBlock key={index} image={left.image} />
              ) : left.type === 'font-presentation' ? (
                <FontPresentation
                  key={index}
                  fontPresentation={left.fontPresentation}
                />
              ) : (
                <ColorBlockWithText key={index} item={left.item} />
              );
            })}
          </div>
        </div>
      ) : content.left && content.left.length === 1 ? (
        content.left.map((left, index) => {
          const addWidth = left.image?.width ?? 'grow';

          return (
            <ImageBlock
              key={index}
              image={left.image}
              className={`${addWidth}`}
            />
          );
        })
      ) : (
        <></>
      )}
      {content.right && content.right.length > 1 ? (
        <div
          className="grow"
          style={{
            height: content.left?.at(0)?.image?.height
              ? content.left?.at(0)?.image?.height
              : content.right?.at(0)?.image?.height,
          }}
        >
          <div className="flex flex-col justify-between gap-8 h-full">
            {content.right.map((right, index) => {
              return right.type === 'image' ? (
                <ImageBlock key={index} image={right.image} />
              ) : right.type === 'font-presentation' ? (
                <FontPresentation
                  key={index}
                  fontPresentation={right.fontPresentation}
                />
              ) : (
                <ColorBlockWithText key={index} item={right.item} />
              );
            })}
          </div>
        </div>
      ) : content.right && content.right.length === 1 ? (
        content.right.map((right, index) => {
          const addWidth = right.image?.width ?? 'grow';

          return (
            <ImageBlock
              key={index}
              image={right.image}
              className={`${addWidth}`}
            />
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}
