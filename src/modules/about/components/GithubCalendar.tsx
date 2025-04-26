import React from "react";
import GithubCalendar from "react-github-calendar";

export default function GithubCalendarComponent() {
  const customTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"], // light mode colors
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"], // dark mode colors
  };

  return (
    <section className="flex flex-col items-center py-10 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        My GitHub Contributions
      </h2>

      <div className="w-full flex justify-center">
        <GithubCalendar
          username="madhaa17"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
          theme={customTheme}
        />
      </div>
    </section>
  );
}
