import { GitHubCalendar } from "react-github-calendar";
import { useState, useEffect } from "react";

export default function GithubActivity() {
  const [scheme, setScheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const update = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setScheme(isDark ? "dark" : "light");
    };

    update();

    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-center p-6 grayscale-[20%] ">
      <GitHubCalendar
        username="JatinMehta007"
        colorScheme={scheme}
        blockSize={12}
        blockMargin={4}
        fontSize={14}
      />
    </div>
  );
}