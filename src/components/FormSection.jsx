import ContactForm from "./ContactForm.jsx";
import ContactFormCard from "./ContactFormCard.jsx";

const FormSection = () => {
    return (
      <section className="py-10 md:py-20 container">
          <div className="bg-primary/50 rounded-4xl p-5 md:p-10">
              <div className="w-full h-full bg-white p-5 md:p-10 rounded-2xl text-center">
                  <h1 className="mb-10 flex items-center justify-center gap-1">
                      <img src="/message.svg" alt="Message" className="hidden md:block w-12 h-12" />
                      <span className="text-xl md:text-4xl text-secondary font-medium ">أرســـل لنـــــا رســــالــة...</span>
                  </h1>
                  <ContactForm />
              </div>
                  <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4">
                      <ContactFormCard
                        title="البريد الإلكتروني"
                        content="support@winner-app.com"
                        icon="/alternate-email.svg"
                      />
                      <ContactFormCard
                        title="الهاتف"
                        content="+966 50 123 4567"
                        icon="/phone.svg"
                      />
                      <ContactFormCard
                        title="ساعات العمل"
                        content="الأحد - الخميس  9:00 ص - 6:00 م"
                        icon="/clock.svg"
                      />
                  </div>
          </div>
      </section>
    );
}

export default FormSection;