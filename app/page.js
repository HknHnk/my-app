'use client'
import Header from "@/Components/Header";
import NoteItem from "@/Components/NoteItem";
import NoteList from "@/Components/NoteList";
import Footer from "@/Components/Footer";
import Timer from "@/Components/timer";

export default function Home() {
  return (
    <>
      <Header/>
      <NoteList/>
      <Footer/>
      <Timer/>
   </>
  )
}
