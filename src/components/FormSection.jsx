import ContactForm from "./ContactForm.jsx";
import ContactFormCard from "./ContactFormCard.jsx";
import {Link} from "react-router-dom";

const FormSection = () => {
    return (
      <section className="py-10 md:py-20 container">
          <div className="bg-primary/50 rounded-4xl p-10 md:p-20">
              <div className="w-full h-full bg-white p-5 md:p-10 rounded-2xl text-center">
                  <h1 className="mb-10 flex items-center justify-center gap-1">
                      <img src="/message.svg" alt="Message" className="hidden md:block w-12 h-12" />
                      <span className="text-2xl md:text-4xl text-secondary font-medium ">أرســـل لنـــــا رســــالــة...</span>
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
              <div className="flex flex-col items-center justify-center gap-4 mt-10">
                  <h2 className="text-primary text-3xl font-medium">تـــابعنا</h2>
                  <div className="flex items-center gap-4">
                      <Link to="/support">
                          <img src="/facebook.svg" alt="facebook" />
                      </Link>
                      <Link to="/support">
                          <img src="/twitter.svg" alt="twitter" />
                      </Link>
                      <Link to="/support">
                          <img src="/instagram.svg" alt="instagram" />
                      </Link>
                      <Link to="/support">
                          <img src="/youtube.svg" alt="youtube" />
                      </Link>
                  </div>
              </div>

          </div>
      </section>
    );
}

export default FormSection;