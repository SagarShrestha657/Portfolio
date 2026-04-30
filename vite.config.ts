import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import nodemailer from "nodemailer";

const emailApiPlugin = (env: Record<string, string>) => ({
  name: "vite:email-api",
  configureServer(server: any) {
    server.middlewares.use(async (req: any, res: any, next: any) => {
      if (!req.url?.startsWith("/api/send-email") || req.method?.toUpperCase() !== "POST") {
        return next();
      }

      try {
        const body = await new Promise<any>((resolve, reject) => {
          let data = "";
          req.on("data", (chunk: Buffer) => {
            data += chunk.toString();
          });
          req.on("end", () => {
            try {
              resolve(data ? JSON.parse(data) : {});
            } catch (error) {
              reject(error);
            }
          });
          req.on("error", reject);
        });

        const { name, email, message } = body ?? {};
        if (!name || !email || !message) {
          res.statusCode = 400;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "All fields are required." }));
          return;
        }

        if (!env.EMAIL_USER || !env.EMAIL_PASS) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Email credentials are not configured in environment variables." }));
          return;
        }

        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: env.EMAIL_USER,
            pass: env.EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from: env.EMAIL_USER,
          to: env.EMAIL_USER,
          subject: `Portfolio Contact: ${name}`,
          text: message,
          replyTo: email,
        });

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ success: true, message: "Email sent successfully!" }));
      } catch (error: any) {
        console.error("vite email api error:", error);
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: error?.message || "Failed to send email." }));
      }
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      host: "::",
      port: 5173 ,
    },
    plugins: [
      react(),
      mode === "development" && emailApiPlugin(env),
      // mode === 'development' &&
      // componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
