import Image from "next/image";

type ImageProps = {
  src: string | any;
  alt: string;
  priority?: boolean;
  className?: string;
};

export default function CustomImage({
  src,
  alt,
  priority,
  className,
}: ImageProps) {
  return (
    <Image
      className={`w-full h-auto rounded-lg mx-auto, ${className}`}
      src={src}
      alt={alt}
      sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
      width={650}
      height={366}
      priority={!!priority}
    />
  );
}
