const Cards = ({ title, companyLogo, jobRoles }) => {
  return (
    <div className="m-auto w-[896px] h-[288px] bg-white drop-shadow-2xl rounded-lg mb-12 ">
      <div className="p-8 flex justify-between">
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
        <div>{new Date().toLocaleDateString()}</div>
      </div>
    </div>
  );
};
export default Cards;
