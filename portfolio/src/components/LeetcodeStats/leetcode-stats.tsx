"use client"
import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import { ActivityCalendar } from "react-activity-calendar"
import { FaCode, FaCheckCircle, FaClock, FaExternalLinkAlt } from "react-icons/fa"
import { Target, TrendingUp, RefreshCw } from "lucide-react"

interface LeetCodeStats {
  totalSolved: number
  totalQuestions: number
  easySolved: number
  totalEasy: number
  mediumSolved: number
  totalMedium: number
  hardSolved: number
  totalHard: number
  acceptanceRate: number
  ranking: number
  contributionPoints: number
  reputation: number
}

interface ActivityData {
  date: string
  count: number
  level: number
}

type LeetCodeStatsProps = {
  username: string
  className?: string
  errorClassName?: string
  colorTheme?: "light" | "dark"
  colorScheme?: {
    light: string[]
    dark: string[]
  }
  viewMode?: "calendar" | "full"
}

export default function LeetCodeStats({
  username,
  className,
  errorClassName,
  colorTheme,
  colorScheme,
  viewMode = "full",
}: LeetCodeStatsProps) {
  const [stats, setStats] = useState<LeetCodeStats | null>(null)
  const [activityData, setActivityData] = useState<ActivityData[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  const fetchLeetCodeData = async () => {
    try {
      setLoading(true)
      setError("")
      setStats(null)
      setActivityData([])

      const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
      const data = await response.json()

      if (data && data.status === "success") {
        setStats({
          totalSolved: data.totalSolved || 0,
          totalQuestions: data.totalQuestions || 0,
          easySolved: data.easySolved || 0,
          totalEasy: data.totalEasy || 0,
          mediumSolved: data.mediumSolved || 0,
          totalMedium: data.totalMedium || 0,
          hardSolved: data.hardSolved || 0,
          totalHard: data.totalHard || 0,
          acceptanceRate: data.acceptanceRate || 0,
          ranking: data.ranking || 0,
          contributionPoints: data.contributionPoints || 0,
          reputation: data.reputation || 0,
        })

        // Activity Calendar data
        if (data.submissionCalendar) {
          const activityArray: ActivityData[] = []
          const submissionEntries = Object.entries(data.submissionCalendar)
          const submissionMap = new Map<string, number>()
          submissionEntries.forEach(([timestamp, count]) => {
            const date = new Date(Number.parseInt(timestamp) * 1000)
            const dateString = date.toISOString().split("T")[0]
            submissionMap.set(dateString, count as number)
          })
          // Past 365 days
          const today = new Date()
          const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate())
          for (let i = 0; i < 365; i++) {
            const date = new Date(oneYearAgo)
            date.setDate(date.getDate() + i)
            const dateString = date.toISOString().split("T")[0]
            const count = submissionMap.get(dateString) || 0
            let level = 0
            if (count > 0) {
              if (count >= 10) level = 4
              else if (count >= 7) level = 3
              else if (count >= 4) level = 2
              else level = 1
            }
            activityArray.push({
              date: dateString,
              count,
              level,
            })
          }
          setActivityData(activityArray)
        }
      } else {
        setError("Failed to fetch LeetCode data. Please check the username or try again later.")
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e){      // eslint-disable-line @typescript-eslint/no-unused-vars
      console.log("Error fetching LeetCode data:", e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (username) {
      fetchLeetCodeData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username])

  const getProgressPercentage = (solved: number, total: number) => {
    return total > 0 ? Math.round((solved / total) * 100) : 0
  }

  // Loading state
  if (loading) {
    return (
      <div className={twMerge(viewMode === "calendar" ? "p-6 rounded-md" : "p-6 border dark:border-neutral-800 rounded-md", className)}>
        <div className="flex items-center gap-3 mb-4">
          <RefreshCw className="animate-spin text-2xl text-orange-500" />
          <p className={`text-xl text-black dark:text-white`}>Loading LeetCode Statistics...</p>
        </div>
        <div className="animate-pulse space-y-4">
          {viewMode === "full" && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
              ))}
            </div>
          )}
          <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    )
  }

  // Error state
  if (error || !stats) {
    return (
      <div className={twMerge(viewMode === "calendar" ? "p-6 rounded-md" : "p-6 border dark:border-neutral-800 rounded-md", className)}>
        <div className="text-center space-y-4">
          <p className={twMerge("text-red-500 dark:text-red-400", errorClassName)}>
            {error || "Failed to load LeetCode statistics"}
          </p>
          <div className="space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">This could be due to:</p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1">
              <li>LeetCode API is currently down</li>
              <li>Username not found</li>
              <li>Network connectivity problems</li>
              <li>API rate limiting</li>
            </ul>
          </div>
          <div className="flex gap-4 justify-center">
            <button
              onClick={fetchLeetCodeData}
              className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Retry
            </button>
            <a
              href={`https://leetcode.com/u/${username}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              View Profile
            </a>
          </div>
        </div>
      </div>
    )
  }

  // CALENDAR-ONLY MODE
  if (viewMode === "calendar") {
    return (
      <div className={twMerge("p-6 rounded-md space-y-6", className)}>
        {activityData.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className={`text-lg text-black dark:text-white`}>
                {activityData.reduce((sum, day) => sum + day.count, 0)} submissions in the past year
              </p>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Total active days: {activityData.filter((day) => day.count > 0).length}
              </div>
            </div>
            <div className="p-4">
              <ActivityCalendar
                style={{ margin: "auto" }}
                data={activityData}
                colorScheme={colorTheme || "dark"}
                loading={loading}
                theme={
                  colorScheme || {
                    light: ["#EBEDF0", "#9BE9A7", "#6CC565", "#58A250", "#3A6E3A"],
                    dark: ["#EBEDF0", "#9BE9A7", "#6CC565", "#58A250", "#3A6E3A"],
                  }
                }
              />
            </div>
          </div>
        )}
      </div>
    )
  }

  // FULL STATS MODE
  return (
    <div className={twMerge("p-6 border dark:border-neutral-800 rounded-md space-y-6", className)}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FaCode className="text-2xl text-orange-500" />
          <p className={`text-xl text-black dark:text-white`}>LeetCode Statistics</p>
        </div>
        <button
          onClick={fetchLeetCodeData}
          className="flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          <RefreshCw className="w-3 h-3" />
          Refresh
        </button>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <FaCheckCircle className="text-green-600" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Solved</span>
          </div>
          <p className="text-2xl font-bold text-black dark:text-white">{stats.totalSolved}</p>
          <p className="text-xs text-gray-500">of {stats.totalQuestions}</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Target className="text-blue-600 w-4 h-4" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Acceptance</span>
          </div>
          <p className="text-2xl font-bold text-black dark:text-white">{stats.acceptanceRate}%</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="text-purple-600 w-4 h-4" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Ranking</span>
          </div>
          <p className="text-2xl font-bold text-black dark:text-white">
            {stats.ranking ? stats.ranking.toLocaleString() : "N/A"}
          </p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <FaClock className="text-yellow-600" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Points</span>
          </div>
          <p className="text-2xl font-bold text-black dark:text-white">{stats.contributionPoints}</p>
        </div>
      </div>

      {/* Difficulty Breakdown */}
      <div className="space-y-4">
        <p className={`text-lg text-black dark:text-white`}>Problem Difficulty</p>
        <div className="space-y-3">
          {/* Easy */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Easy</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-black dark:text-white">
                {stats.easySolved}/{stats.totalEasy}
              </span>
              <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 transition-all duration-300"
                  style={{ width: `${getProgressPercentage(stats.easySolved, stats.totalEasy)}%` }}
                ></div>
              </div>
            </div>
          </div>
          {/* Medium */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Medium</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-black dark:text-white">
                {stats.mediumSolved}/{stats.totalMedium}
              </span>
              <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-yellow-500 transition-all duration-300"
                  style={{ width: `${getProgressPercentage(stats.mediumSolved, stats.totalMedium)}%` }}
                ></div>
              </div>
            </div>
          </div>
          {/* Hard */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Hard</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-black dark:text-white">
                {stats.hardSolved}/{stats.totalHard}
              </span>
              <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-red-500 transition-all duration-300"
                  style={{ width: `${getProgressPercentage(stats.hardSolved, stats.totalHard)}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submission Calendar */}
      {activityData.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className={`text-lg text-black dark:text-white`}>
              {activityData.reduce((sum, day) => sum + day.count, 0)} submissions in the past year
            </p>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Total active days: {activityData.filter((day) => day.count > 0).length}
            </div>
          </div>
          <div className="p-4">
            <ActivityCalendar
              style={{ margin: "auto" }}
              data={activityData}
              colorScheme={colorTheme || "dark"}
              loading={loading}
              theme={
                colorScheme || {
                  light: ["#EBEDF0", "#9BE9A7", "#6CC565", "#58A250", "#3A6E3A"],
                  dark: ["#EBEDF0", "#9BE9A7", "#6CC565", "#58A250", "#3A6E3A"],
                }
              }
            />
          </div>
        </div>
      )}
    </div>
  )
}