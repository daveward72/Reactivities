namespace Application.Core
{
    public class AppException
    {
        public AppException(int statusCode, string exceptionMessage, string details = null)
        {
            StatusCode = statusCode;
            ExceptionMessage = exceptionMessage;
            Details = details;
        }

        public int StatusCode { get; set; } 
        public string ExceptionMessage { get; set; }    
        public string Details { get; set; }         
    }
}