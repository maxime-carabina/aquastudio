import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/src/assets/test.png';

type HeaderProps = {
  color?: 'primary' | 'secondary';
};

export function Header(props: HeaderProps) {
  const { color = 'primary' } = props;

  const textColor = color === 'primary' ? 'text-f-primary' : 'text-f-secondary';
  const borderColor =
    color === 'primary' ? 'border-b-primary' : 'border-b-secondary';

  return (
    <header
      className={`pb-6 flex justify-between items-end border-b ${borderColor}`}
    >
      <Link href="/">
        <Image src={Logo} alt="Aqua Studio Logo" width={86.7} height={86.7} />
      </Link>
      <p className={`aqua-caption text-[14px] lg:text-[20px] ${textColor}`}>
        Aqua studio - Marine Perraud
      </p>
    </header>
  );
}
