import { useEffect, useRef, useState } from 'react';

const Chat = () => {
	const [messages, setMessages] = useState([
		{ id: 1, role: 'system', content: 'sys' },
	]);
	const [input, setInput] = useState('');
	const scrollRef = useRef<HTMLDivElement | null>(null);

	// biome-ignore lint/correctness/useExhaustiveDependencies: メッセージが更新されたら一番下にスクロール
	useEffect(() => {
		scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages.length]);

	const handleSend = () => {
		if (!input.trim()) return;
		const userMessage = { id: Date.now(), role: 'user', content: input };
		const aiReply = {
			id: Date.now() + 1,
			role: 'system',
			content: '（これはシステムの仮応答です）',
		};
		setMessages((prev) => [...prev, userMessage, aiReply]);
		setInput('');
	};

	return (
		<div className="flex flex-col h-screen w-screen bg-gray-100 text-gray-900 p-4">
			<div className="flex-1 overflow-y-auto space-y-2 px-2">
				{messages.map((msg) => (
					<div
						key={msg.id}
						className={`max-w-[70%] px-4 py-2 rounded-xl whitespace-pre-wrap break-words ${
							msg.role === 'user'
								? 'bg-blue-500 text-white text-right ml-auto'
								: 'bg-gray-200 text-left mr-auto'
						}`}
					>
						{msg.content}
					</div>
				))}
				<div ref={scrollRef} />
			</div>

			<div className="flex items-center gap-2 mt-4 p-2 bg-white border-t border-gray-300 rounded-md">
				<textarea
					rows={1}
					className="flex-1 resize-none rounded-md bg-gray-100 text-gray-900 p-2 outline-none focus:ring-2 focus:ring-blue-400"
					placeholder="メッセージを入力..."
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === 'Enter' && !e.shiftKey) {
							e.preventDefault();
							handleSend();
						}
					}}
				/>
				<button
					type="button"
					onClick={handleSend}
					className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md"
				>
					送信
				</button>
			</div>
		</div>
	);
};

export { Chat };
