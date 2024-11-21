import "../Request.css";
import { RequestModel } from "../../../core/models/RequestModel";

interface RequestDataProps {
  request: RequestModel;
}

export const RequestList = ({ request }: RequestDataProps) => {
  console.log(request.translator);

  return (
    <>
      {request ? (
        <div key={request.id}>
          <h3>
            Translation from {request.originLanguage} to{" "}
            {request.targetLanguage}
          </h3>
          <p>{request.description}</p>
          <span className="link-text">
            {request.startDate
              ? new Date(request.startDate).toLocaleDateString()
              : "Invalid start date"}{" "}
            to{" "}
            {request.finishDate
              ? new Date(request.finishDate).toLocaleDateString()
              : "Invalid finish date"}
          </span>
        </div>
      ) : (
        <h1>No request data available.</h1>
      )}
    </>
  );
};
