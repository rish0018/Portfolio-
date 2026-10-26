import { Link, useLocation } from "react-router-dom";
import { PageHeader } from "../components/layout/PageHeader";

const NotFound = () => {
  const location = useLocation();

  return (
    <div>
      <PageHeader
        index="404"
        label="lost"
        title="That page doesn't exist"
        intro={`Nothing lives at ${location.pathname}.`}
      />
      <Link
        to="/"
        className="cursor-target inline-flex rounded-full bg-ember px-6 py-3 font-medium text-ink-950 transition hover:brightness-110"
      >
        Back home
      </Link>
    </div>
  );
};

export default NotFound;
