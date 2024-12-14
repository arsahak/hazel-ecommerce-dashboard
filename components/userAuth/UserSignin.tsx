import UserSignInForm from "./SignInForm";

const UserSignin = () => {
  return (
    <section className="flex justify-center items-center min-h-screen w-full">
      <div className="flex justify-center items-stretch">
        <div className="bg-white p-16 rounded-lg flex items-center justify-center">
          <UserSignInForm />
        </div>
      </div>
    </section>
  );
};

export default UserSignin;
