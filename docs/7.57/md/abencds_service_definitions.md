---
title: "ABAP CDS - Service Definitions"
description: |
  A CDS service definition(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_service_definition_glosry.htm 'Glossary Entry') exposes CDS entities(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm 'Glossary Entry') for a business service(https:/
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_service_definitions.htm"
abapFile: "abencds_service_definitions.htm"
keywords: ["do", "if", "try", "data", "abencds", "service", "definitions"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Services (BS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_business_services.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - Service Definitions, ABENCDS_SERVICE_DEFINITIONS, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS - Service Definitions

A [CDS service definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_service_definition_glosry.htm "Glossary Entry") exposes [CDS entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry") for a [business service](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbusiness_service_glosry.htm "Glossary Entry"). Service definitions are created in [SDL source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensdl_source_code_glosry.htm "Glossary Entry") using [CDS SDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sdl_glosry.htm "Glossary Entry").

-   [SDL for Service Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_sdl_syntax.htm)

Service definitions can expose regular CDS entities and root entities of [RAP business objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_glosry.htm "Glossary Entry"):

-   The publication of a regular CDS entity as a business server enables queries to be made from outside ABAP on the associated data using the protocol from the service binding.
-   The publication of root entities of [RAP business objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_glosry.htm "Glossary Entry") also enables transactional writes to be made on the associated data.

Continue
[ABAP CDS - SDL for Service Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_sdl_syntax.htm)