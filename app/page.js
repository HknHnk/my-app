'use client'
import Header from "@/Components/Header";
import NoteItem from "@/Components/NoteItem";
import NoteList from "@/Components/NoteList";
import Footer from "@/Components/Footer";
import Timer from "@/Components/timer";
import Timer2 from "@/Components/gcsetimer";

export default function Home() {
  return (
    <>
      <Header />
      <NoteList />
      <div className='flex justify-center items-center gap-4 mt-8'>
        <Timer />
        <Timer2 />
      </div>
      <Footer />
    </>
  )
}
