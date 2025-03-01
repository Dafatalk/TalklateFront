import "../Request.css";
import { RequestModel } from "../../../core/models/RequestModel";
import RequestOptions from "../RequestOptions";

interface RequestDataProps {
  request: RequestModel;
}

export const RequestList = ({ request }: RequestDataProps) => {
  console.log(request.translator);

  return (
    <>
      {request ? (
        <div style={{height: '100%'}} key={request.id}>
          <div className="request-header">
            <h4>
              Translation from {request.originLanguage} to{" "}
              {request.targetLanguage}
            </h4>
          </div>
          <div className="request-body">
            <p>{request.description}</p>
          </div>
          <div className="request-footer">
            <span className="link-text">
              {request.startDate
                ? new Date(request.startDate).toLocaleDateString()
                : "Invalid start date"}{" "}
              to{" "}
              {request.finishDate
                ? new Date(request.finishDate).toLocaleDateString()
                : "Invalid finish date"}
            </span>
            <RequestOptions request={request} />
          </div>
        </div>
      ) : (
        <h1>No request data available.</h1>
      )}
    </>
  );
};
