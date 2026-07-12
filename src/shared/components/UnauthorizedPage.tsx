import { Button } from "@/shared/components/ui/button";
import { ShieldAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function UnauthorizedPage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <div className="mb-6 rounded-full bg-destructive/10 p-4">
        <ShieldAlert className="h-12 w-12 text-destructive" />
      </div>
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Access Denied
      </h1>
      <p className="mb-8 max-w-md text-lg text-muted-foreground">
        You do not have permission to view this page. Please contact the administrator if you
        believe this is a mistake.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => navigate(-1)} variant="outline">
          Go Back
        </Button>
        <Button onClick={() => navigate("/")}>Return Home</Button>
      </div>
    </div>
  );
}
