export default function BaseButton({
  label,
  type,
}: {
  label: string;
  type: "submit" | "button" | "reset";
}) {
  return (
    <button
      className="bg-blue text-white rounded-[30px] py-4 px-16 focus:outline-none font-[500] leading-[24px] lg:text-[24px] text-[16px]"
      type={type}
    >
      {label}
    </button>
  );
}
