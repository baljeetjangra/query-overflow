import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  imgUrl: string;
  alt: string;
  value: number | string;
  title: string;
  textStyles?: string;
  isAuthor?: boolean;
  href?: string;
}

const Metric = ({
  alt,
  imgUrl,
  value,
  href,
  isAuthor,
  textStyles,
  title,
}: Props) => {
  const MetricContent = (
    <>
      <Image
        src={imgUrl}
        alt={alt}
        width={16}
        height={16}
        className={`object-contain ${href ? "rounded-full" : ""}`}
      />
      <p className={`${textStyles} flex items-center gap-1`}>
        {value}
        <span
          className={`small-regular line-clamp-1 ${
            isAuthor ? "max-sm:hidden" : ""
          }`}
        >
          {title}
        </span>
      </p>
    </>
  );

  if (href) {
    return <Link href={href}>{MetricContent}</Link>;
  }

  return <div className="flex-center flex-wrap gap-1">{MetricContent}</div>;
};

export default Metric;
