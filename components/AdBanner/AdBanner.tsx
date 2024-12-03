import Image from "next/image";
import Link from "next/link";

interface AdBannerProps {
  imageSrc: string;
  altText: string;
  linkUrl: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ imageSrc, altText, linkUrl }) => {
  return (
    <Link href={linkUrl} target="_blank" rel="noopener noreferrer">
      <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={imageSrc}
          alt={altText}
          layout="fill"
          fill
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
    </Link>
  );
};

export default AdBanner;