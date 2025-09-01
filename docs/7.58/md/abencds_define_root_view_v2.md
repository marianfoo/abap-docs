  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20ROOT%2C%20ABENCDS_DEFINE_ROOT_VIEW_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

CDS DDL - CDS View Entity, ROOT

Syntax

... ROOT ...

Effect

The addition ROOT defines the [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") view\_entity as the root entity of a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") in the [ABAP RESTful Application Programming Model](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry"). The [RAP BO root entity](javascript:call_link\('abenrap_bo_root_entity_glosry.htm'\) "Glossary Entry") is the top node of the hierarchical structure of a business object and represents the business object.

The following applies to a root entity:

-   There is exactly one root entity in the structure of a business object.
-   A root entity does not have a [parent entity](javascript:call_link\('abenparent_entity_glosry.htm'\) "Glossary Entry").
-   A root entity can specify [to-child associations](javascript:call_link\('abento_child_association_glosry.htm'\) "Glossary Entry") to [child entities](javascript:call_link\('abenchild_entity_glosry.htm'\) "Glossary Entry") of the business object using the keyword [COMPOSITION](javascript:call_link\('abencds_composition_v2.htm'\)). This is not mandatory, a root node can also be a [leaf entity](javascript:call_link\('abenleaf_entity_glosry.htm'\) "Glossary Entry").

Hints

-   For more information about the ABAP RESTful Application Programming Model, see [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)).
-   The statement [EXTEND VIEW ENTITY](javascript:call_link\('abencds_extend_view_entity.htm'\)) can add to a root entity but cannot turn a regular view entity into a root entity.