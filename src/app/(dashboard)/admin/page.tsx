import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* left */}
      <div className="w-full lg:w-2/3">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Stdents" />
          <UserCard type="Teachers" />
          <UserCard type="Parents" />
          <UserCard type="staffs" />
        </div>
      </div>
      {/* right */}
      <div className="w-full lg:w-1/3">RRRRR</div>
    </div>
  );
};

export default AdminPage;
