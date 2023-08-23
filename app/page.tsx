import Header from '@/components/header'
import Chat from '../components/chat'
import Input from '@/components/input'
import MessageContextProvider from '@/contexts/message-context'

export default function Home() {
  return (
    <main className="mx-auto w-[80rem] max-w-full relative">
      <Header />
      <MessageContextProvider >
        <Chat />
        <Input />
      </MessageContextProvider>
    </main>
  )
}
