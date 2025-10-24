import InvalidOrExpiredToken from "@/components/pages/auth/invalid-or-expired-token";
import ResetPasswordForm from "@/components/pages/auth/resetpassword-form";

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const params = await searchParams;
  const token = params.token;

  return (
    <>
      {token ? <ResetPasswordForm token={token} /> : <InvalidOrExpiredToken />}
    </>
  );
}
