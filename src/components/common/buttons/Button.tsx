type ButtonProps = {
	text: string;
	onClick?: () => void;
	className?: string;
	disabled?: boolean;
	type?: "button" | "submit" | "reset";
  };

export default function Button({ text, onClick, className, disabled, type = "button" }: ButtonProps) {
	return (
		<button 
		type={type}
		onClick={onClick}
		disabled={disabled}
		className={`bg-secondary text-white px-4 py-3 rounded-4xl hover:bg-dark-header_c transition-colors mb-10 ${className}`}>
			{text}
		</button>
	);
}