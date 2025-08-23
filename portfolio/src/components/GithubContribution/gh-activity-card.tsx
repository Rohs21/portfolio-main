"use client";
import { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { twMerge } from "tailwind-merge";

export default function GhActivityCard({
  username,
  className,
  errorClassName,
  colorTheme,
  colorScheme,
}: {
  username: string;
  className?: string;
  errorClassName?: string;
  colorTheme?: "light" | "dark";
  colorScheme?: {
    light: string[];
    dark: string[];
  };
}) {
  const [data, setData] = useState<null | []>(null);
  const [loading, setLoading] = useState<boolean>(false);
  //eslint-disable-next-line
  const [_, setError] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://github.10xdevlab.in/api/user/${username}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const finalData = await response.json();
        setData(finalData);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div className={twMerge("p-4", className)}>
      {loading ? (
        <div>Loading Data...</div>
      ) : (
        <>
          {data && data.length > 0 ? (
            <ActivityCalendar
              style={{ margin: "auto" }}
              data={data}
              colorScheme={colorTheme || "dark"}
              loading={loading}
              theme={
                colorScheme || {
                  light: [
                    "#EBEDF0",
                    "#9BE9A7",
                    "#6CC565",
                    "#58A250",
                    "#3A6E3A",
                  ],
                  dark: ["#EBEDF0", "#9BE9A7", "#6CC565", "#58A250", "#3A6E3A"],
                }
              }
            />
          ) : (
            <p className={twMerge("text-white", errorClassName)}>
              Error Occured: No User Found
            </p>
          )}
        </>
      )}
    </div>
  );
}
