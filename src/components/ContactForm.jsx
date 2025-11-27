import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Textarea } from "./ui/textarea.jsx";

export default function ContactForm() {
	const form = useForm({
		resolver: zodResolver(ContactSchema),
		defaultValues: {
			name: "",
			email: "",
            subject: "",
			message: "",
		},
	});

	const onSubmit = async (data) => {
		await sendEmail({
			name: data.name,
			email: data.email,
            subject: data.subject,
			message: data.message,
		});
		form.reset();
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 md:space-y-8">
				<div className="flex flex-col md:flex-row gap-5 md:gap-x-10 md:gap-y-20">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem className="w-full md:w-1/2">
								<FormLabel>الاسم بالكامل</FormLabel>
								<FormControl className="mt-1 rounded-[10px] h-10 border-2 border-secondary">
									<Input placeholder="الاسم بالكامل" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem className="w-full md:w-1/2">
								<FormLabel>البريد الإلكتروني</FormLabel>
								<FormControl className="mt-1 rounded-[10px] h-10 border-2 border-secondary">
									<Input placeholder="البريد الإلكتروني" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

                <FormField
                    contorl={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>الموضوع</FormLabel>
                            <FormControl className="mt-1 rounded-[10px] h-10 border-2 border-secondary">
                                <Input placeholder="الموضوع" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel>الرسالة</FormLabel>
							<FormControl className="mt-1 rounded-[10px] border-2 border-secondary">
								<Textarea placeholder="الرسالة"  {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="group">
                    <button type="submit" className="bg-secondary cursor-pointer rounded-full flex items-center mx-auto py-1 px-5 group-hover:scale-95 transition-all duration-200">
                        <img src="/send.svg" alt="send icon"  className="w-12 h-12"/>
                        <span className="md:text-2xl text-xl text-white font-medium" >إرســـال رســـالة</span>
                    </button>
                </div>
			</form>
		</Form>
	);
}
