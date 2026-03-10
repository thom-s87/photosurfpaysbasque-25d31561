import { ReactNode } from "react";

interface WatermarkedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: "lazy" | "eager";
  children?: ReactNode;
}

export const WatermarkedImage = ({ src, alt, className = "", style, loading = "lazy", children }: WatermarkedImageProps) => {
  return (
    <div className="watermark-container relative">
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={className}
        style={style}
        onContextMenu={(e) => e.preventDefault()}
        draggable={false}
      />
      <div className="watermark-overlay" aria-hidden="true">
        PhotoSurfPaysBasque
      </div>
      {children}
    </div>
  );
};
