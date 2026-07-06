import Image from "next/image";

export default function SectionBackgroundImage({
  src,
  alt,
  overlayClassName = "bg-lord-cream/55",
}: {
  src: string;
  alt: string;
  overlayClassName?: string;
}) {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="scale-110 object-cover object-center opacity-90 blur-sm"
      />
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  );
}
