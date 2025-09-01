  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - CDS View Entity, ROOT, ABENCDS_DEFINE_ROOT_VIEW_V2, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - CDS View Entity, ROOT

Syntax

... ROOT ...

Effect

The addition ROOT defines the [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") view\_entity as the root entity of a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") in the [ABAP RESTful Application Programming Model](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry"). The root entity is the top node of the hierarchical structure of a business object and represents the business object.

The following applies to a root entity:

-   There is exactly one root entity in the structure of a business object.
-   A root entity does not have a [parent entity](javascript:call_link\('abenparent_entity_glosry.htm'\) "Glossary Entry").
-   A root entity can specify [CDS compositions](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry") that define [child entities](javascript:call_link\('abenchild_entity_glosry.htm'\) "Glossary Entry") of the business object using the keyword [COMPOSITION](javascript:call_link\('abencds_composition_v2.htm'\)). This is not mandatory, a root node can also be a [leaf entity](javascript:call_link\('abenleaf_entity_glosry.htm'\) "Glossary Entry").

Hints

-   More information about the ABAP RESTful Application Programming Model can be found under [RAP objects](javascript:call_link\('abencds_rap_objects.htm'\)).
-   The statement [EXTEND VIEW ENTITY](javascript:call_link\('abencds_extend_view_entity.htm'\)) can add to a root entity but cannot turn a regular view entity into a root entity.