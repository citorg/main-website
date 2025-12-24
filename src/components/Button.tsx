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
    <div>
      <a
        target="_blank"
        className="border-2 border-solid p-4"
        href={href}
        type="button"
        style={{
          color: theme === "light" ? "white" : "black",
          width: width === "medium" ? "2rem" : "2.5rem",
          fontSize: "1rem",
          fontWeight: 700,
        }}
      >
        {text}
      </a>
    </div>
  );
}
