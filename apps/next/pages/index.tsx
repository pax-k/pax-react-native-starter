import { HomeScreen } from 'app/src/features/home/HomeScreen'

export const getServerSideProps = async ({ req }: any) => {
  // const { userId } = getAuth(req);
  // const user = userId ? await clerkClient.users.getUser(userId) : undefined;
  // return { props: { ...buildClerkProps(req, { user }) } };
  return { props: {} }
};

export default HomeScreen
