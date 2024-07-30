const Cards = ({ title, companyLogo, jobRoles }) => {
  return (
    <div className="m-auto w-[896px] h-[288px] bg-white  drop-shadow-2xl rounded-lg mb-12 dark:bg-[#1F2937] max-sm:w-[343px] max-sm:h-[372px] max-sm:flex">
      <div className="p-8 flex justify-between ">
        <div>
          <img src={companyLogo} alt="" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">{title}</h1>
          <ul>
            {jobRoles.map((role) => (
              <li>{role}</li>
            ))}
          </ul>
        </div>
        <div>{"2024-7-30"}</div>
      </div>
    </div>
  );
};
export default Cards;
