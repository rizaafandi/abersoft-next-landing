export default function BaseInput({
  type,
  placeholder,
}: {
  type: "text" | "email";
  placeholder: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="bg-[#F6F6F9] rounded-[30px] p-5 focus:outline-none font-[500] leading-[24px] lg:text-[16px] text-[12px] text-gray"
    />
  );
}
