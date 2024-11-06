import "../Request.css";

import { RequestModel } from "../../../core/models/RequestModel";

interface requestData {
  request: RequestModel;
}

export const RequestList = (data: requestData) => {
  const { request } = data;

  return (
    <>
      {request ? (
        <div key={request.id}>
          <h3>
            Translation from {request.originLanguage} to
            {request.targetLanguage}
          </h3>
          <p>{request.description}</p>
          <span className="link-text">
            {request.startDate.getMonth() / request.startDate.getDay()} to{" "}
            {request.finishDate.getMonth() / request.finishDate.getDay()}
          </span>
        </div>
      ) : (
        <h1>No requests found.</h1>
      )}
    </>
  );
};
