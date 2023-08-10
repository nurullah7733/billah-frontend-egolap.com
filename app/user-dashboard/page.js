const Page = () => {
  return (
    <div>
      <h1 className="w-full md:text-xl dark:bg-gray-700 px-5 py-3.5 text-3xl border-l text-white bg-primary">
        My Dashobard
      </h1>
      <div className="flex justify-between gap-5 px-5 py-8 md:flex-col">
        <div>
          <p className="text-sm">Full Name</p>
          <p className="text-lg">Md Nurullah</p>
        </div>
        <div>
          <p className="text-sm">Email</p>
          <p className="text-lg">nurullah7733@gmail.com</p>
        </div>
        <div>
          <p className="text-sm">Mobile</p>
          <p className="text-lg">017xxxxxxxx</p>
        </div>
        <div>
          <p className="text-sm">Gender</p>
          <p className="text-lg">Male</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
