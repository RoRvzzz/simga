import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  avgTimeOnSite: string;
}

export function useAnalytics() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    avgTimeOnSite: '0m 0s',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAnalytics() {
      try {
        // Get total page views
        const { count: pageViews } = await supabase
          .from('page_views')
          .select('*', { count: 'exact' });

        // Get unique visitors (by session)
        const { count: uniqueVisitors } = await supabase
          .from('visitor_sessions')
          .select('*', { count: 'exact' });

        // Calculate average time on site
        const { data: sessions } = await supabase
          .from('visitor_sessions')
          .select('start_time, last_activity');

        let totalTime = 0;
        if (sessions) {
          sessions.forEach(session => {
            const start = new Date(session.start_time);
            const end = new Date(session.last_activity);
            totalTime += end.getTime() - start.getTime();
          });
        }

        const avgTimeMs = sessions?.length ? totalTime / sessions.length : 0;
        const avgTimeMin = Math.floor(avgTimeMs / 60000);
        const avgTimeSec = Math.floor((avgTimeMs % 60000) / 1000);

        setAnalyticsData({
          pageViews: pageViews || 0,
          uniqueVisitors: uniqueVisitors || 0,
          avgTimeOnSite: `${avgTimeMin}m ${avgTimeSec}s`,
        });
      } catch (error) {
        console.error('Error fetching analytics:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchAnalytics();
    const interval = setInterval(fetchAnalytics, 30000); // Refresh every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return { analyticsData, loading };
}