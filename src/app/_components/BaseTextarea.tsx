export default function BaseInput({
  rows,
  placeholder,
}: {
  rows: number;
  placeholder: string;
}) {
  return (
    <textarea
      rows={rows}
      placeholder={placeholder}
      className="bg-[#F6F6F9] rounded-[30px] p-5 focus:outline-none font-[500] leading-[24px] lg:text-[16px] text-[12px] text-gray"
    ></textarea>
  );
}
