import React, {useState} from "react";
import QuizForm from "../../features/createQuiz/index";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <QuizForm/>
      </div>
    )
}