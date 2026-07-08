type ImagePlaceholderProps = {
  label: string;
  className?: string;
  tall?: boolean;
  src?: string;
  alt?: string;
  imageFit?: "cover" | "contain";
};

export function ImagePlaceholder({
  label,
  className = "",
  tall = false,
  src,
  alt = "",
  imageFit = "cover",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`image-field grain relative flex ${
        tall ? "min-h-[30rem]" : "min-h-[20rem]"
      } items-end overflow-hidden ${className}`}
    >
      {src ? (
        <>
          <img
            src={src}
            alt={alt}
            className={`absolute inset-0 h-full w-full ${
              imageFit === "contain" ? "object-contain" : "object-cover"
            }`}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,7,0.1),rgba(8,8,7,0.46)),linear-gradient(90deg,rgba(8,8,7,0.22),transparent_48%,rgba(8,8,7,0.18))]" />
        </>
      ) : null}
      <div className="relative z-10 w-full border-t border-white/10 bg-black/20 p-5">
        <p className="text-xs uppercase tracking-[0.24em] text-[#d8c69c]">
          {label}
        </p>
      </div>
    </div>
  );
}
