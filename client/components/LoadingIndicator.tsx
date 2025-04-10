export default function LoadingIndicator() {
  return (
    <div aria-label="Loading..." className="flex items-center flex-col">
      <img
        src={'/hiker-walking.webp'}
        alt="Animation of a Hiker walking"
        aria-label="Animation of hiker walking"
        className="rounded-full w-[40%]"
      />
    </div>
  )
}
