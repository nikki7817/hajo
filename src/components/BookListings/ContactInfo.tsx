
import { Phone, Mail } from "lucide-react";

interface ContactInfoProps {
  email: string;
  contactNumber: string;
}

const ContactInfo = ({ email, contactNumber }: ContactInfoProps) => {
  return (
    <div className="mt-2 text-sm flex flex-col space-y-1">
      <div className="flex items-center">
        <Phone className="h-3 w-3 mr-1" />
        <span>{contactNumber}</span>
      </div>
      <div className="flex items-center">
        <Mail className="h-3 w-3 mr-1" />
        <span>{email}</span>
      </div>
    </div>
  );
};

export default ContactInfo;
