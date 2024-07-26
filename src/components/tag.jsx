const Tag = ({ text }) => {
  return (
    <div>
      <span className="bg-gray-200 rounded-xl py-1 px-5 text-gray-600 dark:bg-[#374151] dark:text-white">
        {text}
      </span>
    </div>
  );
};
export default Tag;
