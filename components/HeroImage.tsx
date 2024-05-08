import Image from 'next/image';
import React from 'react'

export default function HeroImage() {
  return (
    <Image
      src="/images/star.gif"
      alt=""
      width={1000}
      height={1000}
      className="brightness-50"
      priority
    />
  );
}
