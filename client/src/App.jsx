import { Header, Content } from "./components";
import { SupabaseProvider } from "./context/Auth";

export default function App() {
  return (
    <SupabaseProvider>
      <Header />
      <Content />
    </SupabaseProvider>
  );
}
