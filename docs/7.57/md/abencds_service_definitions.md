  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Services (BS)](javascript:call_link\('abencds_business_services.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - Service Definitions, ABENCDS_SERVICE_DEFINITIONS, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS - Service Definitions

A [CDS service definition](javascript:call_link\('abencds_service_definition_glosry.htm'\) "Glossary Entry") exposes [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") for a [business service](javascript:call_link\('abenbusiness_service_glosry.htm'\) "Glossary Entry"). Service definitions are created in [SDL source code](javascript:call_link\('abensdl_source_code_glosry.htm'\) "Glossary Entry") using [CDS SDL](javascript:call_link\('abencds_sdl_glosry.htm'\) "Glossary Entry").

-   [SDL for Service Definitions](javascript:call_link\('abencds_f1_sdl_syntax.htm'\))

Service definitions can expose regular CDS entities and root entities of [RAP business objects](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"):

-   The publication of a regular CDS entity as a business server enables queries to be made from outside ABAP on the associated data using the protocol from the service binding.
-   The publication of root entities of [RAP business objects](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") also enables transactional writes to be made on the associated data.

Continue
[ABAP CDS - SDL for Service Definitions](javascript:call_link\('abencds_f1_sdl_syntax.htm'\))