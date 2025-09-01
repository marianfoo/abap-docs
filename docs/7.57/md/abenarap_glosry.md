---
title: "ABAP RESTful Application Programming Model"
description: |
  Also ABAP RESTful Programming Model, ABAP RAP, or RAP for short. ABAP programming model that is RESTful(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrestful_glosry.htm 'Glossary Entry') or that meets the requirements of a REST(https://help.sap.com/doc/abapdocu_757_index_htm/7.5
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarap_glosry.htm"
abapFile: "abenarap_glosry.htm"
keywords: ["do", "if", "try", "data", "abenarap", "glosry"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP RESTful Application Programming Model, ABENARAP_GLOSRY, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP RESTful Application Programming Model

Also ABAP RESTful Programming Model, ABAP RAP, or RAP for short. ABAP programming model that is [RESTful](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrestful_glosry.htm "Glossary Entry") or that meets the requirements of a [REST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrest_glosry.htm "Glossary Entry") architecture. In ABAP RAP, [AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry") plays the role of a stateless Web server. [OData](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenodata_glosry.htm "Glossary Entry") serves as the RESTful protocol for requests from Web clients and the state of a session can be saved to the [standard database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_db_glosry.htm "Glossary Entry"). The modeling is based on [CDS entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry") and special [CDS RAP objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_object_glosry.htm "Glossary Entry").

For queries, CDS entities can be directly exposed by [business services](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbusiness_service_glosry.htm "Glossary Entry") and all data can be retrieved by the [RAP query engine](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_query_engine_glosry.htm "Glossary Entry"). For transactional access to data, the model offers [RAP business objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_glosry.htm "Glossary Entry"), whose behavior is provided by the [managed RAP BO provider](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmanaged_rap_bo_prov_glosry.htm "Glossary Entry"), or is implemented in [ABAP behavior implementations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_implement_glosry.htm "Glossary Entry").