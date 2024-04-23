import { FontPresentationModel } from '@/src/models';

export function FontPresentation({
  fontPresentation,
}: {
  fontPresentation: FontPresentationModel | undefined;
}) {
  const { letterOverview, fontFamily, textColor, bgColor, fonts } =
    fontPresentation ?? {};

  const isHeightExist = fontPresentation?.height ? true : false;
  const addDefaultHeight = isHeightExist ? '' : 'grow';

  return (
    <div
      className={`${addDefaultHeight} rounded-[20px] px-[26px] py-[31px] flex flex-col justify-end`}
      style={{
        height: fontPresentation?.height,
        backgroundColor: bgColor,
        color: textColor,
        fontFamily: fontFamily,
      }}
    >
      <p
        className="mb-2 leading-none tracking-wider lg:text-[80px] antialiased"
        style={{
          fontWeight: letterOverview?.fontWeight,
        }}
      >
        {letterOverview?.text}
      </p>
      {fonts?.map((font, index) => (
        <p
          key={index}
          className="leading-none tracking-wider lg:text-[15px] antialiased"
          style={{
            fontStyle: font.fontStyle,
            fontWeight: font.fontWeight,
            marginTop: index > 0 ? 10 : 0,
          }}
        >
          {font.text}
        </p>
      ))}
    </div>
  );
}
