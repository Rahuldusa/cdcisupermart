// import React, { useState, useEffect } from 'react'
// import { MessageCircle, X, Send } from 'lucide-react'

// const ChatBot: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [messages, setMessages] = useState([
//     { id: 1, text: "Hello! Welcome to Super Family Mart. ", sender: 'bot' }
//   ])
//   const [inputValue, setInputValue] = useState('')

//   useEffect(() => {
//     // Auto-open after 10 seconds
//     const timer = setTimeout(() => {
//       setIsOpen(true)
//     }, 10000)

//     return () => clearTimeout(timer)
//   }, [])

//   const handleSend = () => {
//     if (inputValue.trim()) {
//       const newMessage = {
//         id: messages.length + 1,
//         text: inputValue,
//         sender: 'user'
//       }
//       setMessages([...messages, newMessage])
//       setInputValue('')

//       // Bot response
//       setTimeout(() => {
//         const botResponse = getBotResponse(inputValue)
//         setMessages(prev => [...prev, {
//           id: prev.length + 1,
//           text: botResponse,
//           sender: 'bot'
//         }])
//       }, 1000)
//     }
//   }

//   const getBotResponse = (message: string): string => {
//     const lower = message.toLowerCase()

//     if (lower.includes("offer") || lower.includes("discount")) {
//       return "We have exciting offers today! What product are you looking for?"
//     }

//     if (lower.includes("products") || lower.includes("items")) {
//       return "We offer groceries, household items, personal care, and more! What would you like help with?"
//     }

//     if (lower.includes("timing") || lower.includes("hours")) {
//       return "Super Family Mart is open from 9 AM to 10 PM every day."
//     }

//     if (lower.includes("location") || lower.includes("address")) {
//       return "We are located at: Super Family Mart, Hyderabad."
//     }

//     return "Thank you for your message! Our support team will get back to you shortly."
//   }

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
      
//       {/* Chat Window */}
//       {isOpen && (
//         <div className="w-80 h-96 bg-white rounded-lg shadow-xl mb-4 flex flex-col overflow-hidden border border-[#850E35]">
          
//           {/* Header */}
//           <div className="bg-[#850E35] text-white p-4 flex justify-between items-center">
//             <h3 className="font-semibold">Super Family Mart Assistant</h3>
//             <button onClick={() => setIsOpen(false)} className="text-white">
//               <X className="w-5 h-5" />
//             </button>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
//             {messages.map((msg) => (
//               <div
//                 key={msg.id}
//                 className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
//               >
//                 <div
//                   className={`max-w-xs px-3 py-2 rounded-lg ${
//                     msg.sender === 'user'
//                       ? 'bg-[#850E35] text-white'
//                       : 'bg-white text-gray-800 border border-[#850E35]'
//                   }`}
//                 >
//                   {msg.text}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Input */}
//           <div className="p-4 border-t border-[#850E35]">
//             <div className="flex space-x-2">
//               <input
//                 type="text"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//                 onKeyPress={(e) => e.key === 'Enter' && handleSend()}
//                 placeholder="Type your message..."
//                 className="flex-1 px-3 py-2 border border-[#850E35] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#850E35]"
//               />
//               <button
//                 onClick={handleSend}
//                 className="bg-[#850E35] text-white px-3 py-2 rounded-lg hover:bg-[#6F0B2C] transition"
//               >
//                 <Send className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Chat Floating Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center justify-center w-14 h-14 bg-[#850E35] hover:bg-[#6F0B2C] rounded-full shadow-xl text-white transition"
//       >
//         <MessageCircle className="w-6 h-6" />
//       </button>
//     </div>
//   )
// }

// export default ChatBot






// import React, { useState, useEffect } from 'react'
// import { MessageCircle, X, Send } from 'lucide-react'

// const ChatBot: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [messages, setMessages] = useState([
//     { id: 1, text: "Hello! 👋 Welcome to Super Family Mart. How can I assist you today?", sender: 'bot' }
//   ])
//   const [inputValue, setInputValue] = useState('')

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsOpen(true)
//     }, 10000)
//     return () => clearTimeout(timer)
//   }, [])

//   const handleSend = () => {
//     if (inputValue.trim()) {
//       const newMessage = {
//         id: messages.length + 1,
//         text: inputValue,
//         sender: 'user'
//       }
//       setMessages([...messages, newMessage])
//       setInputValue('')

//       setTimeout(() => {
//         const botResponse = getBotResponse(inputValue)
//         setMessages(prev => [...prev, {
//           id: prev.length + 1,
//           text: botResponse,
//           sender: 'bot'
//         }])
//       }, 800)
//     }
//   }

//   const getBotResponse = (msg: string): string => {
//     const text = msg.toLowerCase()

//     if (text.includes("offer") || text.includes("discount") || text.includes("sale")) {
//       return "🎉 Today's Offers:\n• Buy 1 Get 1 on selected product items\n•  Big discounts on fashion!\nWhat would you like to explore?"
//     }
//   if (text.includes("men") || text.includes("mens") || text.includes("gents")) {
//   return "🧔 Men's Collection:\n• Shirts\n• T-Shirts\n• Pants\n• Jeans\n• Kurta Sets\n• Blazers\n• Grooming & Perfumes\n• Wallets & Belts\nWould you like to explore offers?";
// }

// if (text.includes("women") || text.includes("ladies") || text.includes("girls")) {
//   return "👗 Women's Collection:\n• Kurtis\n• Gowns\n• Lehenga\n• Sarees\n• Western Wear\n• Beauty & Skincare\n• Bags & Accessories\nWould you like to check offers?";
// }

//     if (text.includes("household") || text.includes("cleaning")) {
//       return "🏠 Household:\n• Cleaning items\n• Kitchen products\n• Storage & plastic items"
//     }
//     if (text.includes("timing") || text.includes("open")) {
//       return "⏰ We are open everyday 9:30 AM to 8:30 PM."
//     }
//     if (text.includes("location") || text.includes("address")) {
//       return "📍 Located at Super Family Mart, Palhana Road Muratganj Kaushambi."
//     }

//     return "Thank you! 😊 How else may I help you?"
//   }

//   return (
//     <div className="fixed bottom-6 right-6 z-50">

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="w-80 h-96 bg-white rounded-lg shadow-xl mb-4 flex flex-col overflow-hidden border border-[#850E35]">
          
//           {/* Header */}
//           <div className="bg-[#850E35] text-white p-4 flex justify-between items-center">
//             <h3 className="font-semibold">Super Family Mart Assistant</h3>
//             <button onClick={() => setIsOpen(false)} className="text-white">
//               <X className="w-5 h-5" />
//             </button>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-100">
//             {messages.map((msg) => (
//               <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
//                 <div
//                   className={`max-w-xs px-3 py-2 rounded-lg ${
//                     msg.sender === 'user'
//                       ? 'bg-[#850E35] text-white'
//                       : 'bg-white text-gray-800 border border-[#850E35]'
//                   }`}
//                 >
//                   {msg.text}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Input */}
//           <div className="p-4 border-t border-[#850E35]">
//             <div className="flex space-x-2">
//               <input
//                 type="text"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//                 onKeyPress={(e) => e.key === 'Enter' && handleSend()}
//                 placeholder="Type your message..."
//                 className="flex-1 px-3 py-2 border border-[#850E35] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#850E35]"
//               />
//               <button
//                 onClick={handleSend}
//                 className="bg-[#850E35] text-white px-3 py-2 rounded-lg hover:bg-[#6F0B2C] transition"
//               >
//                 <Send className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Floating Button */}
//      <button
//   onClick={() => setIsOpen(!isOpen)}
//   className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1EBE59] rounded-full shadow-xl text-white transition"
// >
//   <MessageCircle className="w-7 h-7" />
//     </button>

//     </div>
//   )
// }

// export default ChatBot








// import React, { useState, useEffect } from 'react'
// import { MessageCircle, X, Send } from 'lucide-react'

// const ChatBot: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [messages, setMessages] = useState([
//     { id: 1, text: "Hello! 👋 Welcome to Super Family Mart. How can I assist you today?", sender: 'bot' }
//   ])
//   const [inputValue, setInputValue] = useState('')

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsOpen(true)
//     }, 4000) // FASTER popup
//     return () => clearTimeout(timer)
//   }, [])

//   const handleSend = () => {
//     if (inputValue.trim()) {
//       const newMessage = {
//         id: messages.length + 1,
//         text: inputValue,
//         sender: 'user'
//       }
//       setMessages([...messages, newMessage])
//       setInputValue('')

//       setTimeout(() => {
//         const botResponse = getBotResponse(inputValue)
//         setMessages(prev => [...prev, {
//           id: prev.length + 1,
//           text: botResponse,
//           sender: 'bot'
//         }])
//       }, 400) // faster reply
//     }
//   }

//   const getBotResponse = (msg: string): string => {
//     const text = msg.toLowerCase()

//     // Offer Related
//     if (text.includes("offer") || text.includes("discount") || text.includes("sale")) {
//       return "🎉 Today's Best Offers:\n• Buy 1 Get 1 on selected items\n• Big discounts on fashion & household\nWould you like Men, Women, or Kids offers?"
//     }

//     // MEN Category
//     if (text.includes("men") || text.includes("mens") || text.includes("gents")) {
//       return "🧔 Men's Collection:\n• Shirts\n• T-Shirts\n• Formal Pants\n• Jeans\n• Kurta Sets\n• Winter Wear\n• Perfumes & Grooming\nWould you like to check latest offers?"
//     }

//     // WOMEN Category
//     if (text.includes("women") || text.includes("ladies") || text.includes("girls") || text.includes("female")) {
//       return "👗 Women's Collection:\n• Kurtis\n• Gowns\n• Sarees\n• Lehenga\n• Western Wear\n• Handbags\n• Skincare & Beauty Products\nNeed help finding something?"
//     }

//     // KIDS Category
//     if (
//       text.includes("kid") ||
//       text.includes("kids") ||
//       text.includes("children") ||
//       text.includes("child") ||
//       text.includes("boys") ||
//       text.includes("boy") ||
//       text.includes("girls wear")
//     ) {
//       return "🧒 Kids Collection:\n• Boys Shirts & T-Shirts\n• Girls Frocks & Western Wear\n• School Uniforms\n• Winter Wear for Kids\n• "
//     }

//     // Timing
//     if (text.includes("timing") || text.includes("open")) {
//       return "⏰ We are open everyday 9:30 AM to 8:30 PM."
//     }

//     // Location
//     if (text.includes("location") || text.includes("address") || text.includes("shop") || text.includes("store") || text.includes("visit")) {
//       return "📍 Located at Super Family Mart, Palhana Road Muratganj Kaushambi."
//     }

//     // OTHER QUESTIONS → MOBILE NUMBER
//     if (
//       text.includes("help") ||
//       text.includes("contact") ||
//       text.includes("phone") ||
//       text.includes("number") ||
//       text.includes("call")
//     ) {
//       return "📞 For any other questions, feel free to call us at **9936370892**."
//     }

//     return "Thank you! 😊 If you need further help, you can also contact us at **9936370892**."
//   }

//   return (
//     <div className="fixed bottom-6 right-6 z-50">

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="w-80 h-96 bg-white rounded-lg shadow-xl mb-4 flex flex-col overflow-hidden border border-[#850E35]
//                         animate-[slideLeft_0.3s_ease]">

//           <style>{`
//             @keyframes slideLeft {
//               from { transform: translateX(100%); opacity: 0; }
//               to { transform: translateX(0); opacity: 1; }
//             }
//           `}</style>

//           {/* Header */}
//           <div className="bg-[#850E35] text-white p-4 flex justify-between items-center">
//             <h3 className="font-semibold">Super Family Mart Assistant</h3>
//             <button onClick={() => setIsOpen(false)} className="text-white">
//               <X className="w-5 h-5" />
//             </button>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-100">
//             {messages.map((msg) => (
//               <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
//                 <div
//                   className={`max-w-xs px-3 py-2 rounded-lg ${
//                     msg.sender === 'user'
//                       ? 'bg-[#850E35] text-white'
//                       : 'bg-white text-gray-800 border border-[#850E35]'
//                   }`}
//                 >
//                   {msg.text}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Input */}
//           <div className="p-4 border-t border-[#850E35]">
//             <div className="flex space-x-2">
//               <input
//                 type="text"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//                 onKeyPress={(e) => e.key === 'Enter' && handleSend()}
//                 placeholder="Type your message..."
//                 className="flex-1 px-3 py-2 border border-[#850E35] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#850E35]"
//               />
//               <button
//                 onClick={handleSend}
//                 className="bg-[#850E35] text-white px-3 py-2 rounded-lg hover:bg-[#6F0B2C] transition"
//               >
//                 <Send className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Floating Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1EBE59] rounded-full shadow-xl text-white transition"
//       >
//         <MessageCircle className="w-7 h-7" />
//       </button>

//     </div>
//   )
// }

// export default ChatBot






import React, { useState, useEffect } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! 👋 Welcome to Super Family Mart. How can I assist you today?", sender: 'bot' }
  ])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 4000) // FASTER popup
    return () => clearTimeout(timer)
  }, [])

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        sender: 'user'
      }
      setMessages([...messages, newMessage])
      setInputValue('')

      setTimeout(() => {
        const botResponse = getBotResponse(inputValue)
        setMessages(prev => [...prev, {
          id: prev.length + 1,
          text: botResponse,
          sender: 'bot'
        }])
      }, 400) // faster reply
    }
  }

  const getBotResponse = (msg: string): string => {
  const t = msg.toLowerCase();

  // NEW → Collection / Home Items
  if (
    t.includes("collection") ||
    t.includes("home items") ||
    t.includes("bedsheet") ||
    t.includes("bedsheets") ||
    t.includes("blanket") ||
    t.includes("towel") ||
    t.includes("mat") ||
    t.includes("door mat") ||
    t.includes("pillow") ||
    t.includes("cushion") ||
    t.includes("cushions") ||
    t.includes("sofa cover") ||
    t.includes("sofa covers")
  ) {
    return "🛍️ Home Collection:\n• Bedsheets\n• Blankets\n• Door Mats\n• Towels\n• Pillows\n• Cushions\n• Sofa Covers\nWould you like to see latest offers?";
  }

  if (t.includes("offer") || t.includes("discount")) {
    return "🎉 Today's Offers:\n• Buy 1 Get 1\n• Big fashion sale\nMen / Women / Kids?"
  }

  if (t.includes("men")) {
    return "🧔 Men's Collection:\nShirts, T-Shirts, Jeans, Grooming.\nWant latest offers?"
  }

  if (t.includes("women")) {
    return "👗 Women's Collection:\nKurtis, Sarees, Western, Beauty.\nNeed help?"
  }

  if (t.includes("kid")) {
    return "🧒 Kids Wear:\nBoys & Girls dresses, Uniforms, Winter wear."
  }

  if (t.includes("timing")) {
    return "⏰ We are open daily 9:30 AM to 8:30 PM."
  }

  if (t.includes("location") || t.includes("address")) {
    return "📍 Super Family Mart, Palhana Road Muratganj Kaushambi."
  }

  if (t.includes("call") || t.includes("contact") || t.includes("help")) {
    return "📞 For help call: **9936370892**"
  }

  return "😊 Thank you! For any help call **9936370892**"
}


  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-96 bg-white rounded-lg shadow-xl mb-4 flex flex-col overflow-hidden border border-[#850E35]
                        animate-[slideLeft_0.3s_ease]">

          <style>{`
            @keyframes slideLeft {
              from { transform: translateX(100%); opacity: 0; }
              to { transform: translateX(0); opacity: 1; }
            }
          `}</style>

          {/* Header */}
          <div className="bg-[#850E35] text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold">Super Family Mart Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-100">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-[#850E35] text-white'
                      : 'bg-white text-gray-800 border border-[#850E35]'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-[#850E35]">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-[#850E35] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#850E35]"
              />
              <button
                onClick={handleSend}
                className="bg-[#850E35] text-white px-3 py-2 rounded-lg hover:bg-[#6F0B2C] transition"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1EBE59] rounded-full shadow-xl text-white transition"
      >
        <MessageCircle className="w-7 h-7" />
      </button>

    </div>
  )
}

export default ChatBot
