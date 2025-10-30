import AboutContent from './AboutContent';
import { getAcademic, getProfile } from '@/lib/content';

export default async function AboutPage() {
  const academic = await getAcademic();
  const profile = await getProfile();

  return <AboutContent profile={profile} academic={academic} />;
}