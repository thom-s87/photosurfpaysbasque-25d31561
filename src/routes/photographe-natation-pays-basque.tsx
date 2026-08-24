import { createFileRoute } from "@tanstack/react-router";
import PhotographeNatationPaysBasque from "@/pages/PhotographeNatationPaysBasque";

export const Route = createFileRoute("/photographe-natation-pays-basque")({
  component: PhotographeNatationPaysBasque,
});
