import WhiteBox from "components/Containers/WhiteBox";
import Link from "next/link";

interface PropTypes {
  url: string;
  title: string;
}

export const LinkBox = ({ url, title }: PropTypes) => (
  <WhiteBox key={url} noPadding>
    <Link href={url}>
      <a className="w-full h-[100px] flex justify-center items-center no-underline text-2xl">
        <span>{title}</span>
      </a>
    </Link>
  </WhiteBox>
);
