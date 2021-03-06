exports.authorizer = async function(event) {
    const token = event.authorizationToken.toLowerCase();
    const methodArn = event.methodArn;


    switch(token) {
        case 'allow':
            return generateAuthResponse('user', 'Allow', methodArn);
            default:
                return generateAuthResponse('user','Deny', methodArn)
    }
}

function generateAuthResponse(principal, effect, methodArn) {
    const policyDocument = generatePolicyDocument(effect, mathodArn);

    return {
        principalId,
        policyDocument
    }
}

function generatePolicyDocument(effect,methodArn) {
    if(!effect || !methodArn) return null

    const policyDocument = {
        Version: '2012-10-17',
        Statement: [{
            Action: 'execute-api:Invoke',
            Effect: effect,
            Resource: mathodArn
        }]
    };

    return policyDocument;
}