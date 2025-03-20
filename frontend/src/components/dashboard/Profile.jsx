const Profile = () => {
  const { user } = useAuthContext();

  return (
    <div>
      <h1>Profile</h1>
      <p>{user.email}</p>
    </div>
  );
};
export default Profile;
