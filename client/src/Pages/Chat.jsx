import React, { useEffect, useRef } from 'react';

function Chat() {

  const endef = useRef(null);

  useEffect(() => {
    endef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="fmin-h-screen bg-gray-800 text-white p-4 h-64  overflow-y-auto">
      <div 
        className="space-y-5 overflow-y-auto overflow-x-hidden hide-scrollbar" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex justify-end">
          <div className="bg-gray-600 rounded-3xl p-3 max-w-md text-left">
            message from AI This design can be expanded by dynamically rendering messages from an array and adding features like sending and receiving messages in real time.
          </div>
        </div>

        <div className="flex justify-start">
          <div className="p-4 max-w-4xl">
            message from user To improve your chat page design, let's structure the messages to better represent a typical chat interface, where messages from the AI are on the left and messages from the user are on the right. We can also add some spacing, padding, and alignment for a cleaner look.
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-gray-600 rounded-3xl p-3 max-w-md text-left">
            message from AI This design can be expanded by dynamically rendering messages from an array and adding features like sending and receiving messages in real time.
          </div>
        </div>

        <div className="flex justify-start">
          <div className="p-3 max-w-4xl text-left">
            message from user To improve your chat page design, let's structure the messages to better represent a typical chat interface, where messages from the AI are on the left and messages from the user are on the right. We can also add some spacing, padding, and alignment for a cleaner look.
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-gray-600 rounded-3xl p-3 max-w-md text-left">
            message from AI This design can be expanded by dynamically rendering messages from an array and adding features like sending and receiving messages in real time.
          </div>
        </div>

        <div className="flex justify-start">
          <div className="p-3 max-w-4xl text-left">
            message from user To improve your chat page design, let's structure the messages to better represent a typical chat interface, where messages from the AI are on the left and messages from the user are on the right. We can also add some spacing, padding, and alignment for a cleaner look.
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-gray-600 rounded-3xl p-3 max-w-md text-left">
            message from AI This design can be expanded by dynamically rendering messages from an array and adding features like sending and receiving messages in real time.
          </div>
        </div>

        <div className="flex justify-start">
          <div className="p-3 max-w-4xl text-left">
            message from user To improve your chat page design, let's structure the messages to better represent a typical chat interface, where messages from the AI are on the left and messages from the user are on the right. We can also add some spacing, padding, and alignment for a cleaner look.
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-gray-600 rounded-3xl p-3 max-w-md text-left">
            message from AI.
          </div>
        </div>

        <div className="flex justify-start">
          <div className="p-3 max-w-4xl text-left">
            message from user These questions cover a range of topics and should give you a good understanding of a candidate's knowledge and experience with React.
          </div>
        </div>
        <div ref={endef} />
      </div>
    </div>
  );
}

export default Chat;
