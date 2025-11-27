import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { sendEmail } from "../utils/EmailService";
import { ContactSchema } from "../utils/ContactSchema";
import PrimaryButton from "./PrimaryButton.jsx";
import { Textarea } from "./ui/textarea.jsx";

export default function ContactForm() {
	const form = useForm({
		resolver: zodResolver(ContactSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	const onSubmit = async (data) => {
		await sendEmail({
			name: data.name,
			email: data.email,
			message: data.message,
		});
		form.reset();
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<div className="flex flex-col md:flex-row gap-5 md:gap-10">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem className="w-full md:w-1/2">
								<FormLabel>Name</FormLabel>
								<FormControl className="mt-1 rounded-[10px] h-10 border border-border">
									<Input placeholder="Name" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl className="mt-1 rounded-[10px] h-10 border border-border">
									<Input placeholder="Email" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Message</FormLabel>
							<FormControl className="mt-1 rounded-[10px] border border-border">
								<Textarea placeholder="Message" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<button type="submit" className="w-full bg-primary text-black">
					ارسال
				</button>
			</form>
		</Form>
	);
}
