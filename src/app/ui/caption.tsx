import Image from 'next/image';

const Caption = ({ index, src, alt, height, width, css }) => {
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
