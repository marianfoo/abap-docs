  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) → 

CDS DDL - DDIC-based View, ROOT

Syntax

... ROOT ...

Effect

The addition ROOT defines the CDS view ddic\_based\_view as the root entity of a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") in the [ABAP RESTful Application Programming Model](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry"). The root entity is the top node of the hierarchical structure of a business object and represents the business object.

The following applies to a root entity:

-   There is exactly one root entity in the structure of a business object.
-   The definition of a root entity can use [COMPOSITION](javascript:call_link\('abencds_composition_v1.htm'\)) to specify [CDS compositions](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry") that define [child entities](javascript:call_link\('abenchild_entity_glosry.htm'\) "Glossary Entry") of the business object.
-   A root entity does not have a [parent entity](javascript:call_link\('abenparent_entity_glosry.htm'\) "Glossary Entry").

Hints

-   More information about the ABAP RESTful Application Programming Model can be found under [RAP objects](javascript:call_link\('abencds_rap_objects.htm'\)).
-   The statement [EXTEND VIEW](javascript:call_link\('abencds_extend_view.htm'\)) can add to a root entity but cannot make a regular view into a root entity.