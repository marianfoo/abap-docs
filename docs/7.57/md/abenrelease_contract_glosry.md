  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: release contract, ABENRELEASE_CONTRACT_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

release contract

Classification of a [repository object](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") that is a prerequisite for its usability as an [released API](javascript:call_link\('abenreleased_api_glosry.htm'\) "Glossary Entry"). A release contract ensures a certain stability regarding consistency and compatibility of released APIs.

There are currently the following release contracts:

-   [C0 contract, release](javascript:call_link\('abenc0_contract_glosry.htm'\) "Glossary Entry"), which allows enhancement fields to be added at specified extension options.
-   [C1 contract, use system-internally](javascript:call_link\('abenc1_contract_glosry.htm'\) "Glossary Entry"), which guarantees a stable interface for use within the [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry")
-   [C2 contract, use as remote API](javascript:call_link\('abenc2_contract_glosry.htm'\) "Glossary Entry"), which also guarantees a stable interface for use outside the AS ABAP.
-   [C3 contract, manage configuration content](javascript:call_link\('abenc3_contract_glosry.htm'\) "Glossary Entry"), which ensures a stable persistence for configuration content.

Objects are classified in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") or using special transactions such as SCFD\_REGISTRY.

[→ More about](javascript:call_link\('abenabap_versions_and_apis.htm'\))