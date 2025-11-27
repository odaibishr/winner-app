import ContactForm from "./ContactForm.jsx";

const FormSection = () => {
    return (
      <section className="py-10 md:py-20 container">
          <div className="bg-primary/50 rounded-4xl p-10">
              <div className="w-full h-full bg-white p-10 rounded-2xl text-center">
                  <h1 className="text-2xl md:text-4xl text-secondary font-medium mb-10">ارسل لنا رسالة</h1>
                  <ContactForm />
              </div>
          </div>
      </section>
    );
}

export default FormSection;