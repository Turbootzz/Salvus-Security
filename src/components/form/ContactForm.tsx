"use client";
import { useState, FormEvent } from "react";
import { Shield, Mail, User, MessageSquare, Send, Check } from "lucide-react";
import Button from "../common/buttons/Button";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  priority: "low" | "medium" | "high";
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormState>({
	name: "",
	email: "",
	subject: "",
	message: "",
	priority: "medium",
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const validate = (): boolean => {
	const newErrors: Partial<FormState> = {};

	if (!formData.name.trim()) newErrors.name = "Name is required";
	if (!formData.email.trim()) newErrors.email = "Email is required";
	else if (!/^\S+@\S+\.\S+$/.test(formData.email))
	  newErrors.email = "Email is invalid";
	if (!formData.subject.trim()) newErrors.subject = "Subject is required";
	if (!formData.message.trim()) newErrors.message = "Message is required";

	setErrors(newErrors);
	return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
	e.preventDefault();

	if (!validate()) return;

	setIsSubmitting(true);

	try {
	  const response = await fetch(
		"https://formsubmit.co/" + process.env.NEXT_PUBLIC_FORMSUBMIT_ID,
		{
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		  },
		  body: JSON.stringify({
			name: formData.name,
			email: formData.email,
			subject: formData.subject,
			message: formData.message,
			priority: formData.priority,
		  }),
		}
	  );

	  if (response.ok) {
		setIsSubmitted(true);
		setFormData({
		  name: "",
		  email: "",
		  subject: "",
		  message: "",
		  priority: "medium",
		});
	  } else {
		throw new Error("Form submission failed");
	  }
	} catch (error) {
	  console.error("Error submitting form:", error);
	} finally {
	  setIsSubmitting(false);
	}
  };

  const handleChange = (
	e: React.ChangeEvent<
	  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
	>
  ) => {
	const { name, value } = e.target;
	setFormData((prev) => ({ ...prev, [name]: value }));

	// Clear error when field is edited
	if (errors[name as keyof FormState]) {
	  setErrors((prev) => ({ ...prev, [name]: undefined }));
	}
  };

  if (isSubmitted) {
	return (
	  <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg border border-gray-100 mt-15">
		<div className="text-center">
		  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
			<Check className="h-6 w-6 text-green-600" />
		  </div>
		  <h2 className="text-2xl font-bold text-gray-900 mb-3">
			Message Received
		  </h2>
		  <p className="text-gray-600 mb-10">
			Thank you for contacting our security team. We&apos;ll respond to your
			inquiry as soon as possible.
		  </p>
		  <Button
			text="Send Another Message"
			onClick={() => setIsSubmitted(false)}
			
		  >
			
		  </Button>
		</div>
	  </div>
	);
  }

  return (
	<div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-100">
	  <div className="flex items-center justify-center mb-6">
		<Shield className="h-8 w-8 text-secondary mr-2" />
		<h2 className="text-2xl font-bold text-gray-900">
			Contact opnemen
		</h2>
	  </div>

	  <form onSubmit={handleSubmit} className="space-y-4">
		<div>
		  <label
			htmlFor="name"
			className="block text-sm font-medium text-gray-700 mb-1"
		  >
			Volledige naam
		  </label>
		  <div className="relative">
			<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
			  <User className="h-5 w-5 text-gray-400" />
			</div>
			<input
			  type="text"
			  id="name"
			  name="name"
			  value={formData.name}
			  onChange={handleChange}
			  className={`pl-10 w-full px-4 py-2 border ${
				errors.name ? "border-red-500" : "border-gray-300"
			  } rounded-lg focus:ring-blue-500 focus:border-blue-500`}
			  placeholder="Your name"
			/>
		  </div>
		  {errors.name && (
			<p className="mt-1 text-sm text-red-600">{errors.name}</p>
		  )}
		</div>

		<div>
		  <label
			htmlFor="email"
			className="block text-sm font-medium text-gray-700 mb-1"
		  >
			Email Adres
		  </label>
		  <div className="relative">
			<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
			  <Mail className="h-5 w-5 text-gray-400" />
			</div>
			<input
			  type="email"
			  id="email"
			  name="email"
			  value={formData.email}
			  onChange={handleChange}
			  className={`pl-10 w-full px-4 py-2 border ${
				errors.email ? "border-red-500" : "border-gray-300"
			  } rounded-lg focus:ring-blue-500 focus:border-blue-500`}
			  placeholder="jouw.email@voorbeeld.nl"
			/>
		  </div>
		  {errors.email && (
			<p className="mt-1 text-sm text-red-600">{errors.email}</p>
		  )}
		</div>

		<div>
		  <label
			htmlFor="subject"
			className="block text-sm font-medium text-gray-700 mb-1"
		  >
			Onderwerp
		  </label>
		  <input
			type="text"
			id="subject"
			name="subject"
			value={formData.subject}
			onChange={handleChange}
			className={`w-full px-4 py-2 border ${
			  errors.subject ? "border-red-500" : "border-gray-300"
			} rounded-lg focus:ring-blue-500 focus:border-blue-500`}
			placeholder="Korte beschrijving van het bericht"
		  />
		  {errors.subject && (
			<p className="mt-1 text-sm text-red-600">{errors.subject}</p>
		  )}
		</div>

		<div>
		  <label
			htmlFor="priority"
			className="block text-sm font-medium text-gray-700 mb-1"
		  >
			Prioriteit van het bericht
		  </label>
		  <select
			id="priority"
			name="priority"
			value={formData.priority}
			onChange={handleChange}
			className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
		  >
			<option value="low">Laag</option>
			<option value="medium">Medium</option>
			<option value="high">Hoog</option>
		  </select>
		</div>

		<div>
		  <label
			htmlFor="message"
			className="block text-sm font-medium text-gray-700 mb-1"
		  >
			Bericht
		  </label>
		  <div className="relative">
			<div className="absolute top-3 left-3 pointer-events-none">
			  <MessageSquare className="h-5 w-5 text-gray-400" />
			</div>
			<textarea
			  id="message"
			  name="message"
			  value={formData.message}
			  onChange={handleChange}
			  rows={4}
			  className={`pl-10 w-full px-4 py-2 border ${
				errors.message ? "border-red-500" : "border-gray-300"
			  } rounded-lg focus:ring-blue-500 focus:border-blue-500`}
			  placeholder="Beschrijf uw bericht"
			/>
		  </div>
		  {errors.message && (
			<p className="mt-1 text-sm text-red-600">{errors.message}</p>
		  )}
		</div>

		<div className="pt-2">
		  <button
			type="submit"
			disabled={isSubmitting}
			className={`w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
			  isSubmitting
				? "bg-blue-400 cursor-not-allowed"
				: "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
			}`}
		  >
			{isSubmitting ? (
			  <>
				<svg
				  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
				  xmlns="http://www.w3.org/2000/svg"
				  fill="none"
				  viewBox="0 0 24 24"
				>
				  <circle
					className="opacity-25"
					cx="12"
					cy="12"
					r="10"
					stroke="currentColor"
					strokeWidth="4"
				  ></circle>
				  <path
					className="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				  ></path>
				</svg>
				Versturen...
			  </>
			) : (
			  <>
				<Send className="h-5 w-5 mr-2" />
				Verzend bericht
			  </>
			)}
		  </button>
		</div>

		<p className="text-xs text-gray-500 text-center mt-4">
		  Salvus Security
		</p>
	  </form>
	</div>
  );
};

export default ContactForm;
