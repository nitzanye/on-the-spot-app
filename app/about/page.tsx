'use client'

import Link from "next/link";

const About = () => {  
  return (
    <main className="flex justify-center flex-col pt-10 pb-10">
      <h1 className='text-3xl m-auto pb-10 font-semibold '>About Us</h1>
      <h2 className="text-2xl mb-4">Are you tired of being stuck with unused tickets to events you can't attend?</h2>
      <h3 className="text-xl mb-4">Picture this: </h3>
      <p>you've got tickets to a concert next week, but suddenly you can't go.</p>
      <p>Instead of letting those tickets go to waste, you hop on O-T-S and find a buyer in minutes.</p>
      <p> Not only do you get your money back, but someone else gets to enjoy the concert they thought they'd missed out on.</p>
      <p>It's a win-win situation!</p>
      <p>Or maybe you're a last-minute planner who loves scoring deals on tickets. </p>
      <p>With O-T-S, you can find amazing deals on concerts, sporting events, and more. </p>
      <p>It's like having a secret stash of tickets at your fingertips!</p>
      <Link className="mt-10" href="/">To The Home Page</Link>
    </main>
  )
}

export default About;