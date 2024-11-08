import "../Request.css";
import { RequestModel } from "../../../core/models/RequestModel";

interface RequestDataProps {
  request: RequestModel;
}

export const RequestList = ({ request }: RequestDataProps) => {
  console.log(request.creator);

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
            {new Date(request.startDate).toLocaleDateString()} to{" "}
            {new Date(request.finishDate).toLocaleDateString()}
          </span>
        </div>
      ) : (
        <h1>No request data available.</h1>
      )}
    </>
  );
};
