export function EmailInput() {
  return (
    <div className="flex items-center justify-between border-b aqua-caption text-[12px] lg:text-[22px]">
      <input
        type="email"
        placeholder="J’ai un projet et j’ai besoin d’aide.."
        className="w-full h-10 lg:h-14 bg-transparent text-f-secondary placeholder-white/35 outline-0 focus:border-0"
      />
      <button
        type="submit"
        className="ml-5 h-10 lg:h-14 bg-transparent text-f-secondary"
      >
        Ok
      </button>
    </div>
  );
}
