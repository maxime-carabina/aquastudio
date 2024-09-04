import Image from 'next/image';
import { notFound } from 'next/navigation';

import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  ProjectCard,
  Tabs,
} from '@/components';
import projectsData from '@/src/assets/projects/projects.json';
import { FlexBox, ImagesListBlock } from '@/src/features/projectTemplate';
import {
  ProjectModel,
  RightColContentModel,
  InformationModel,
  IconsListModel,
} from '@/src/models';

export async function generateStaticParams() {
  return projectsData.map((p) => ({
    id: p.id.toString(),
    content: p.content,
  }));
}

const PROJECTS = [
  {
    width: 621,
    height: 453,
    img: {
      url: '/images/lpp-baumes.jpg',
      alt: 'lpp-baumes',
      objectFit: 'object-none',
      objectPosition: 'object-[center_85%]',
    },
    contentButton: 'Beauté ✨',
  },
  {
    width: 757,
    height: 453,
    img: {
      url: '/images/projects/MAX/stickers-mockup-2.png',
      alt: 'stickers-mockup-2',
      objectFit: 'object-cover',
      objectPosition: 'object-[center_60%]',
    },
    contentButton: 'Beauté ✨',
  },
  {
    width: 621,
    height: 453,
    img: {
      url: '/images/lpp-baumes.jpg',
      alt: 'lpp-baumes',
      objectFit: 'object-none',
      objectPosition: 'object-[center_85%]',
    },
    contentButton: 'Beauté ✨',
  },
  {
    width: 621,
    height: 453,
    img: {
      url: '/images/lpp-baumes.jpg',
      alt: 'lpp-baumes',
      objectFit: 'object-none',
      objectPosition: 'object-[center_85%]',
    },
    contentButton: 'Beauté ✨',
  },
];

function InformationBlock({
  information,
  index,
}: {
  information: InformationModel | undefined;
  index: number;
}) {
  const { title, description, timeMarker, bgColor, textColor } =
    information || {};

  return (
    <div
      className={`${index > 0 ? 'mt-10' : ''} grow flex justify-between font-Soleil lg:text-[20px] px-11 py-8 rounded-[20px] antialiased`}
      style={{ background: bgColor, color: textColor }}
    >
      <div>
        <p className="uppercase font-normal">{title}</p>
        <p className="font-light italic">{description}</p>
      </div>
      <p className="uppercase font-normal">{timeMarker}</p>
    </div>
  );
}

function TextListBlock({
  textList,
  index,
}: {
  textList: string[] | undefined;
  index: number;
}) {
  return (
    <div
      className={`${index > 0 ? 'mt-10' : ''} grow relative bg-[#445D52] px-9 py-12 rounded-[20px]`}
    >
      <ul className="list-decimal text-white max-w-[619px] m-auto antialiased">
        {textList?.map((text, index) => {
          const newArr = text.split(' : ');

          return (
            <li
              key={index}
              className={`font-Soleil lg:text-[20px] ${index > 0 ? 'mt-8' : ''}`}
            >
              <span className="font-bold lg:text-[22px]">{newArr[0]} : </span>
              {newArr[1]}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function IconsListBlock({
  iconsList,
  index,
}: {
  iconsList: IconsListModel | undefined;
  index: number;
}) {
  const { icons, background, textColor } = iconsList || {};

  return (
    <div
      className={`${index > 0 ? 'mt-10' : ''} grow relative px-9 py-[53px] rounded-[20px]`}
      style={{ background: background }}
    >
      <ul className="list-none flex justify-between">
        {icons?.map((icon, index) => (
          <li key={index} className="flex flex-col items-center gap-5">
            <img src={icon.image.src} alt={icon.image.alt} height={43} />
            <p
              className="font-Poppins lg:text-[10px] max-w-28 text-center antialiased"
              style={{ color: textColor }}
            >
              {icon.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RightColScrollable({
  rightContent,
}: {
  rightContent: RightColContentModel[];
}) {
  return (
    <div className="grow">
      {rightContent.map((content, index) => {
        const type = content.type;

        if (type === 'image') {
          const { image } = content;

          if (image?.priority) {
            return (
              <div
                key={index}
                className={`${index > 0 ? 'mt-10' : ''} w-full relative`}
                style={{ height: image?.height }}
              >
                <Image
                  src={image.src || '/images/lpp-baumes.jpg'}
                  alt={image.alt || 'aqua-studio'}
                  fill
                  priority
                  // quality={100}
                  sizes={`(max-width: 493px) 100vw, 493px`}
                  className={`rounded-[20px] ${image.objectFit ?? 'object-cover'}`}
                  style={{ objectPosition: image.objectPosition }}
                />
              </div>
            );
          }

          return (
            <div
              key={index}
              className={`${index > 0 ? 'mt-10' : ''} w-full relative`}
              style={{ height: content.image?.height }}
            >
              <Image
                src={content.image?.src || '/images/lpp-baumes.jpg'}
                alt={content.image?.alt || 'aqua-studio'}
                fill
                loading="lazy"
                // quality={100}
                sizes={`(max-width: 493px) 100vw, 493px`}
                className={`rounded-[20px] ${image?.objectFit ?? 'object-cover'}`}
                style={{ objectPosition: image?.objectPosition }}
              />
            </div>
          );
        } else if (type === 'flex') {
          return <FlexBox key={index} index={index} content={content} />;
        } else if (type === 'images-list') {
          return (
            <ImagesListBlock
              key={index}
              index={index}
              imagesList={content.imagesList}
            />
          );
        } else if (type === 'information') {
          return (
            <InformationBlock
              key={index}
              index={index}
              information={content.information}
            />
          );
        } else if (type === 'text-list') {
          return (
            <TextListBlock
              key={index}
              index={index}
              textList={content.textList}
            />
          );
        } else if (type === 'icons-list') {
          return (
            <IconsListBlock
              key={index}
              index={index}
              iconsList={content.iconsList}
            />
          );
        }
        return null;
      })}
      <h1 className="mt-16 mb-2 aqua-banner text-f-primary lg:text-[50px] lg:leading-[80px] antialiased">
        C’est canon !
      </h1>
      <h2 className="mb-8 aqua-caption text-f-primary lg:text-[16px] lg:leading-[22px] antialiased">
        Mon travail te plait ? ✨
        <br />
        N’hésites pas à me contacter pour discuter de ton projet !!
      </h2>
      <div className="max-w-96">
        <Button variant="secondary" className="antialiased">
          Je suis intéressé(e) par ton travail !
        </Button>
      </div>
    </div>
  );
}

function LeftColSticky({
  project,
}: {
  project: ProjectModel['content']['project']['left'];
}) {
  return (
    <div className="w-[493px] h-fit sticky top-[51px] max-h-screen">
      <div className="relative mb-10" style={{ height: project.image.height }}>
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          loading="lazy"
          // quality={100}
          sizes={`(max-width: 493px) 100vw, 493px`}
          className="rounded-[20px] object-cover"
          style={{
            objectPosition: project.image.objectPosition,
          }}
        />
      </div>
      <div className="bg-primary rounded-[20px] py-[34px] px-[45px]">
        <div className="font-GothamLight antialiased text-justify text-f-secondary lg:text-[20px] lg:leading-[22px]">
          {project.description.map((desc, index) => {
            const newArr = desc.split(' : ');

            const addMarginTop = index > 0 ? 'mt-8' : '';
            return (
              <div key={index} className={`${addMarginTop}`}>
                <span className="font-Gotham font-bold text-left antialiased">
                  {newArr[0]} :{' '}
                </span>
                {newArr[1]}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const dataProject = projectsData.find((p) => p.id === params.id);

  if (!dataProject) {
    notFound();
  }

  const { content }: ProjectModel = dataProject;
  const { name, tags, description, heroImages, project } = content;

  const tabsConfig = [
    {
      label: 'Direction artistique',
      content: (
        <div className="mt-5 lg:mt-16 text-f-primary">
          <Carousel className="hidden lg:block lg:w-full">
            <CarouselContent className="w-full">
              {PROJECTS.map((project, index) => (
                <CarouselItem
                  key={index}
                  className={index === 0 ? 'pl-[109px]' : ''}
                >
                  <ProjectCard
                    width={project.width}
                    height={project.height}
                    img={project.img}
                    contentButton={project.contentButton}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="lg:hidden flex flex-col gap-4 px-[22px] md:px-16">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={index}
                width={'100%'}
                height={236}
                img={project.img}
                contentButton={project.contentButton}
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      label: 'UXUI Design',
      content: (
        <div className="mt-5 lg:mt-16 text-f-primary">
          <Carousel className="hidden lg:block lg:w-full">
            <CarouselContent className="w-full">
              {PROJECTS.map((project, index) => (
                <CarouselItem
                  key={index}
                  className={index === 0 ? 'pl-[109px]' : ''}
                >
                  <ProjectCard
                    width={project.width}
                    height={project.height}
                    img={project.img}
                    contentButton={project.contentButton}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="lg:hidden flex flex-col gap-4 px-[22px] md:px-16">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={index}
                width={'100%'}
                height={236}
                img={project.img}
                contentButton={project.contentButton}
              />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="text-f-primary">
      <div className="px-[22px] md:px-16 lg:px-28 mt-12 lg:mb-[70px] lg:mt-[74px] text-f-primary">
        <div className="lg:mb-[70px] flex items-start justify-between antialiased">
          <div>
            <h1 className="lg:mb-[30px] aqua-banner text-[20px] leading-[20px] lg:text-[80px] lg:leading-[75px] uppercase max-w-[500px]">
              {name}
            </h1>
            <div className="flex flex-wrap gap-3 max-w-72 lg:max-w-none lg:gap-5">
              {tags.map((tag, index) => (
                <Button key={index} className="w-fit" variant="secondary">
                  {tag}
                </Button>
              ))}
            </div>
          </div>
          <div className="aqua-caption text-justify lg:text-[20px] lg:leading-[21.24px] max-w-[617px]">
            {description.map((desc, index) => {
              return index === 0 ? (
                <p key={index}>{desc}</p>
              ) : (
                <p key={index} className="mt-4">
                  {desc}
                </p>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-[50px]">
          {heroImages?.left && (
            <div
              style={{
                width: heroImages?.left.width,
                height: heroImages?.height,
              }}
              className={`relative`}
            >
              <Image
                src={heroImages.left.src || '/images/lpp-baumes.jpg'}
                alt={heroImages.left.alt || 'aqua-studio'}
                // quality={100}
                fill
                loading="lazy"
                // priority
                sizes={`(max-width: ${heroImages?.left.width}px) 100vw, ${heroImages?.left.width}px`}
                className={`rounded-[20px] ${heroImages?.left.objectFit}`}
                style={{
                  objectPosition: heroImages?.left.objectPosition,
                }}
              />
            </div>
          )}
          <div style={{ height: heroImages?.height }} className="grow relative">
            <Image
              src={heroImages.right.src || '/images/lpp-baumes.jpg'}
              alt={heroImages.right.alt || 'aqua-studio'}
              // quality={100}
              fill
              // loading="lazy"
              priority
              sizes={`(max-width: ${heroImages?.right.width}px) 100vw, ${heroImages.right.width}px`}
              className={`rounded-[20px] ${heroImages?.right.objectFit}`}
              style={{
                objectPosition: heroImages.right.objectPosition,
              }}
            />
          </div>
        </div>
      </div>
      <div className="px-[22px] md:px-16 lg:px-[109px]">
        <div className="lg:pt-[70px] lg:pb-[70px] flex justify-center gap-[50px] border-b border-t border-primary">
          <LeftColSticky project={project.left} />
          <RightColScrollable rightContent={project.right} />
        </div>
      </div>
      <div className="pt-11 pb-[26px] lg:pt-12 lg:pb-[70px] text-f-primary">
        <div className="mb-5 md:mb-0 px-[22px] md:px-16 lg:px-[109px]">
          <h1 className="aqua-banner text-[20px] leading-[20px] lg:text-[80px] lg:leading-[135px] uppercase">
            En voir plus !
          </h1>
        </div>
        <Tabs
          customClass="px-[22px] lg:px-[109px]"
          defaultIndex={0}
          tabsConfig={tabsConfig}
        />
      </div>
    </div>
  );
}
