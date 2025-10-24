import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "./generated/prisma/client";
import { nextCookies } from "better-auth/next-js";
import { getResetPasswordEmailHtml } from "@/components/shared/email-template";
import { FROM_EMAIL, resend } from "./resend";

const prisma = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    sendResetPassword: async ({ user, url }) => {
      // Send reset password email using Resend
      try {
        const emailHtml = getResetPasswordEmailHtml(user.email, url);

        // send the email using Resend
        const { data, error } = await resend.emails.send({
          from: FROM_EMAIL,
          to: "diegomillandev@gmail.com",
          subject: "Reset Your Password",
          html: emailHtml,
        });

        if (error) {
          console.error("Resend error:", error);
          throw new Error("Failed to send reset password email");
        } else {
          console.log(
            "Reset password email sent successfully to: ",
            user.email
          );
          console.log("Resend response data:", data?.id);
        }
      } catch (error) {
        console.error("Error sending reset password email:", error);
      }
    },
  },
  plugins: [nextCookies()],
});
