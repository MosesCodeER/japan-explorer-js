import Header from '../components/Header';
import Footer from '../components/Footer';
import ActivityCard from '../components/activities/ActivityCard';
import FlightSearchForm from '../components/flights/FlightSearchForm';

export default function HomePage() {
  return (
    <div>
      <Header />
      <h1>Welcome to Japan Explorer</h1>
      <FlightSearchForm />
      <ActivityCard />
      <Footer />
    </div>
  );
}