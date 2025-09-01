  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Service%20Definitions%2C%20ABENCDS_SERVICE_DEFINITIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS - Service Definitions

A [CDS service definition](javascript:call_link\('abencds_service_definition_glosry.htm'\) "Glossary Entry") exposes [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") for a [RAP business service](javascript:call_link\('abenbusiness_service_glosry.htm'\) "Glossary Entry"). Service definitions are created in [SDL source code](javascript:call_link\('abensdl_source_code_glosry.htm'\) "Glossary Entry") using [CDS SDL](javascript:call_link\('abencds_sdl_glosry.htm'\) "Glossary Entry").

-   [SDL for Service Definitions](javascript:call_link\('abencds_f1_sdl_syntax.htm'\))

Service definitions can expose regular CDS entities and root entities of [RAP business objects](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"):

-   The publication of a regular CDS entity as a business service enables queries to be made from outside AS ABAP on the associated data using the protocol from the service binding.
-   The publication of root entities of [RAP business objects](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") also enables transactional writes to be made on the associated data.

Continue
[ABAP CDS - SDL for Service Definitions](javascript:call_link\('abencds_f1_sdl_syntax.htm'\))
[ABAP CDS - Consuming Business Services](javascript:call_link\('abenservice_bindings_abexas.htm'\))