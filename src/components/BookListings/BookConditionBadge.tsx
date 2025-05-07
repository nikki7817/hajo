
type Condition = "New" | "Like New" | "Good" | "Fair" | "Poor";

interface BookConditionBadgeProps {
  condition: Condition;
}

const BookConditionBadge = ({ condition }: BookConditionBadgeProps) => {
  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
      condition === "New" ? "bg-green-100 text-green-800" :
      condition === "Like New" ? "bg-blue-100 text-blue-800" :
      condition === "Good" ? "bg-yellow-100 text-yellow-800" :
      condition === "Fair" ? "bg-orange-100 text-orange-800" :
      "bg-red-100 text-red-800"
    }`}>
      {condition}
    </span>
  );
};

export default BookConditionBadge;
