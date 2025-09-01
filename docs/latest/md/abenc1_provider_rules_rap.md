  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for ABAP Cloud](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for ABAP Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C1 Contract Rules](javascript:call_link\('abenc1_contract_rules.htm'\)) →  [C1 Contract Rules for API Providers](javascript:call_link\('abenc1_provider_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C1%20Contract%20Rules%20for%20Providing%20RAP%20Behavior%20Definitions%2C%20ABENC1_PROVIDER_RULES_RAP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion%20for%20improvement:)

C1 Contract Rules for Providing RAP Behavior Definitions

A provider of [RAP behavior definitions](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") must obey the following rules:

-   Behavior definitions must follow strict mode, must not be managed by BOPF and can only be released for language version ABAP for Cloud Development. The release is restricted to interfaces and abstract entities.
-   The underlying CDS entity must be released and CREATE operations are allowed for the root node only.
-   Parameters and results of actions and functions must be DDIC data elements or CDS entities.