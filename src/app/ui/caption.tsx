import Image from 'next/image';

const Caption = ({ index, src, alt, height, width, css }: { index: number, src: string, alt: string, height: any, width: any, css: string }) => {
  return (
      <div>
        <Image
          src={src}
          alt={alt}
          height={height}
          width={width}
          className={css}
        />
        <div className="text-gray p-2 italic text-sm text-center mb-8">
          Figure {index}: {alt}
        </div>
      </div>
  );
}

export default Caption;
