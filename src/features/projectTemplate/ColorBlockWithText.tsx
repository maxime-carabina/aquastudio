import { Item } from '@/src/models';

export function ColorBlockWithText({ item }: { item?: Item }) {
  const isHeightExist = item?.height ? true : false;
  const addDefaultHeight = isHeightExist ? '' : 'grow';

  return (
    item && (
      <div
        className={`${addDefaultHeight} relative rounded-[20px] flex flex-col justify-between px-[25px] py-[9px] text-black antialiased`}
        style={{
          height: item.height,
          backgroundColor: item.colorHex,
          color: item.textColor,
          fontFamily: item.fontFamily,
        }}
      >
        <p className="text-[15px] font-normal tracking-[5%] lg:leading-[30px]">
          {item.colorName}
        </p>
        <p className="text-[12px] font-normal tracking-[5%] lg:leading-[30px]">
          {item.colorHex}
        </p>
      </div>
    )
  );
}
