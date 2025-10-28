import UserAnalytics from './@user-analytics/page';
import RevenueMaterials from './@revenue-metricals/page';
import Notifications from './@notifications/page';

export default function ComplexDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <UserAnalytics />
      <RevenueMaterials />
      <Notifications />
    </>
  );
}
