import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export function usePageView() {
  const location = useLocation();

  useEffect(() => {
    const trackPageView = async () => {
      try {
        // Record page view
        await supabase.from('page_views').insert({
          page: location.pathname,
          user_agent: navigator.userAgent,
        });

        // Update or create session
        const sessionId = localStorage.getItem('session_id') || crypto.randomUUID();
        if (!localStorage.getItem('session_id')) {
          localStorage.setItem('session_id', sessionId);
          await supabase.from('visitor_sessions').insert({
            session_id: sessionId,
          });
        } else {
          await supabase.from('visitor_sessions')
            .update({
              last_activity: new Date().toISOString(),
              pages_viewed: supabase.sql`pages_viewed + 1`,
            })
            .eq('session_id', sessionId);
        }
      } catch (error) {
        console.error('Error tracking page view:', error);
      }
    };

    trackPageView();
  }, [location]);
}