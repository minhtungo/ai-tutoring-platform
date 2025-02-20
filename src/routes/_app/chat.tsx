import { ChatSidebar } from '@/components/chat-sidebar';
import ChatHeader from '@/features/chat/components/chat-header';
import ChatPanel from '@/features/chat/components/chat-panel';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/chat')({
  component: ChatLayoutComponent,
});

function ChatLayoutComponent() {
  return (
    <>
      <ChatSidebar />
      <main className='flex flex-col relative w-full h-svh'>
        <ChatHeader className='p-2' />
        <Outlet />
        <ChatPanel />
      </main>
    </>
  );
}
