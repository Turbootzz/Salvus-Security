import { X } from "lucide-react";
import { ReactNode } from "react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  icon: ReactNode;
}

export default function ServiceModal({
  isOpen,
  onClose,
  title,
  description,
  icon,
}: ServiceModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/30 z-50 flex items-center justify-center p-4">
      <div className="bg-white/95 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-4">
              <div className="bg-gray-300 p-4 rounded-2xl">
                {icon}
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          <div className="prose max-w-none">
            <p className="text-gray-800 whitespace-pre-line">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 