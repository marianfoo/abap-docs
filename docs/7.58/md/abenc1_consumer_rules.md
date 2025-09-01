  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for ABAP Cloud](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for ABAP Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C1 Contract Rules](javascript:call_link\('abenc1_contract_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C1%20Contract%20Rules%20for%20API%20Consumers%2C%20ABENC1_CONSUMER_RULES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

C1 Contract Rules for API Consumers

The [provider rules](javascript:call_link\('abenc1_provider_rules.htm'\)) for objects with a C1 contract ensure that released objects are changed only in a very restricted way and help to avoid errors and interruptions after an SAP upgrade. Nevertheless, the rules do not prescribe full downward compatibility and leave some room for necessary enhancements to released APIs. Therefore, users of released APIs still have to consider the allowed compatible changes and access the APIs in such a way that the following errors and interruptions are avoided:

-   Problems during the upgrade.
-   Syntax errors after the upgrade.
-   Runtime errors after an upgrade.
-   Wrong behavior after an upgrade.

The following sections list allowed changes to released APIs that must be considered when the APIs are accessed.

-   [C1 Contract Rules for Consuming Elementary Types](javascript:call_link\('abenc1_consumer_rules_elem.htm'\))
-   [C1 Contract Rules for Consuming Structures](javascript:call_link\('abenc1_consumer_rules_struct.htm'\))
-   [Example: Consumption of APIs with C1 Contract](javascript:call_link\('abenc1_demo_1.htm'\))

Continue
[C1 Contract Rules for Consuming Elementary Types](javascript:call_link\('abenc1_consumer_rules_elem.htm'\))
[C1 Contract Rules for Consuming Structures](javascript:call_link\('abenc1_consumer_rules_struct.htm'\))
[Example: Consumption of APIs with C1 Contract](javascript:call_link\('abenc1_demo_1.htm'\))