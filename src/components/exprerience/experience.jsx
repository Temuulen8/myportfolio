const { default: Tag } = require("../tag");

const Experience = () => {
  return (
    <div className="bg-gray-50 flex flex-col gap-y-4 pt-4">
      <Tag text="Experience" />
      <div className="flex justify-center pb-12">
        <p>Here is a quick summary of my most recent experiences:</p>
      </div>
    </div>
  );
};

export default Experience;