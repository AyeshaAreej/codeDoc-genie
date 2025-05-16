Project: Code Doc Generator via Titan
AWS Region: us-west-2
Services Used: Lambda, API Gateway, Bedrock
IAM Roles:
  - LambdaBedrockExecutionRole (AmazonBedrockInvokeFullAccess, AWSLambdaBasicExecutionRole)
API Gateway:
  - Endpoint:https://8q855mjd36.execute-api.us-west-2.amazonaws.com/dev/generate-text
  - Method: POST
Model: Amazon Titan (titan-tg1-light)
Free Tier Consideration:
  - Lambda: 1M free invocations/month
  - API Gateway: 1M free calls/month
  - Bedrock: Limit requests (some usage might be billable — use with care)
