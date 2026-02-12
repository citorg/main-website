export default function Button({
  width,
  theme,
  text,
  href,
}: {
  width: string;
  theme: string;
  text: string;
  href: string;
}) {
  return (
    <div className="w-full flex justify-center">
      <a
        target="_blank"
        className="border-2 border-solid p-4 text-center inline-block"
        href={href}
        type="button"
        style={{
          color: theme === "light" ? "white" : "black",
          borderColor: theme === "light" ? "white" : "black",
          width: width === "large" ? "100%" : width === "medium" ? "200px" : "auto",
          maxWidth: "400px",
          fontSize: "1rem",
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        {text}
      </a>
    </div>
  );
}
