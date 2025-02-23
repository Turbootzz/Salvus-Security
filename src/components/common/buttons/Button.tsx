type ButtonProps = {
	text: string;
	onClick?: () => void;
	className?: string;
  };

export default function Button({ text, onClick, className }: ButtonProps) {
	return (
		<button 
		onClick={onClick}
		className={`bg-secondary text-white px-4 py-3 rounded-4xl hover:bg-dark-header_c transition-colors mb-10 ${className}`}>
			{text}
		</button>
	);
}