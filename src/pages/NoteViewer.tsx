
import React from 'react';
import { useParams } from 'react-router-dom';
import { 
  SidebarProvider
} from '@/components/ui/sidebar';
import DashboardSidebar from '@/components/DashboardSidebar';
import NoteViewerContent from '@/components/NoteViewerContent';

const NoteViewer = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-900">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <DashboardSidebar />
          <main className="flex-1 flex flex-col">
            <NoteViewerContent noteId={id} />
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default NoteViewer;
