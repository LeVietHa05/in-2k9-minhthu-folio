'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageMaskHoverProps {
  image1Src: string; // Đường dẫn ảnh 1 (PNG tách nền)
  image2Src: string; // Đường dẫn ảnh 2 (PNG hoặc JPG)
  alt?: string;
  width?: number;
  height?: number;
}

export default function ImageMaskHover({
  image1Src,
  image2Src,
  alt = 'Image hover effect',
  width = 500,
  height = 500,
}: ImageMaskHoverProps) {
  const [isHovered, setIsHovered] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Vẽ Ảnh 1 lên canvas ngầm để đọc Alpha channel (độ trong suốt của Pixel)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const img = new window.Image();
    img.crossOrigin = 'anonymous';
    img.src = image1Src;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
  }, [image1Src]);

  // Kiểm tra điểm ảnh dưới vị trí con trỏ chuột
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Quy đổi tọa độ hiển thị sang tọa độ gốc của Canvas
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const canvasX = Math.floor(x * scaleX);
    const canvasY = Math.floor(y * scaleY);

    try {
      // Lấy thông tin màu RGBA của pixel đó
      const pixel = ctx.getImageData(canvasX, canvasY, 1, 1).data;
      const alpha = pixel[3]; // Alpha channel (0 -> 255)

      // Nếu Alpha > 10 (không trong suốt) => Tính là hover vào vật thể
      if (alpha > 10) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    } catch {
      setIsHovered(false);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative cursor-pointer overflow-hidden inline-block"
      style={{ width: `${width}px`, height: `${height}px` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Canvas ẩn dùng để đọc thông tin điểm ảnh */}
      <canvas ref={canvasRef} className="hidden" />

      {/* 1. BỨC CẢNH 1 (Nằm ở trên) */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Image
          src={image1Src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain"
        />
      </div>

      {/* 2. BỨC CẢNH 2 (Nằm ở dưới - Được Mask theo khuôn dạng vật thể của Ảnh 1) */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          WebkitMaskImage: `url(${image1Src})`,
          maskImage: `url(${image1Src})`,
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
        }}
      >
        <Image
          src={image2Src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}