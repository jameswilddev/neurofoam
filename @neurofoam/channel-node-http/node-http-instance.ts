import GetBubbleUuidInstance from "./get-bubble-uuid-instance"
import GetSessionUuidInstance from "./get-session-uuid-instance"
import GetRequestLengthInstance from "./get-request-length-instance"
import GetRequestInstance from "./get-request-instance"
import RespondWithErrorInstance from "./respond-with-error-instance"
import RespondInstance from "./respond-instance"

type NodeHttpInstance =
  & GetBubbleUuidInstance
  & GetSessionUuidInstance
  & GetRequestLengthInstance
  & GetRequestInstance
  & RespondWithErrorInstance
  & RespondInstance

export default NodeHttpInstance
