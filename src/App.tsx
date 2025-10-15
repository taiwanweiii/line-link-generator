import { useState } from 'react'

export default function App() {
  const [lineId, setLineId] = useState('')
  const [message, setMessage] = useState('')
  const [generatedUrl, setGeneratedUrl] = useState('')

  const generateUrl = () => {
    if (!lineId || !message) {
      alert('請輸入 Line ID 與訊息內容')
      return
    }
    const encodedMessage = encodeURIComponent(message)
    const encodedLineId = encodeURIComponent(lineId)

    const url = `https://line.me/R/oaMessage/${encodedLineId}/?${encodedMessage}`
    setGeneratedUrl(url)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">
          LINE 訊息連結產生器
        </h1>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-2">Line ID</label>
          <input
            type="text"
            placeholder="輸入 Line 官方帳號 ID (例如：@abcd1234)"
            value={lineId}
            onChange={(e) => setLineId(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-2">訊息內容</label>
          <textarea
            placeholder="輸入要發送的文字內容"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          onClick={generateUrl}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          產生連結
        </button>

        {generatedUrl && (
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-2 font-semibold">產生的連結：</p>
            <button
              onClick={() => {
                navigator.clipboard.writeText(generatedUrl)
                alert("連結已複製到剪貼簿！")
              }}
              className="text-blue-600 break-all underline hover:text-blue-800 transition"
            >
              {generatedUrl}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
