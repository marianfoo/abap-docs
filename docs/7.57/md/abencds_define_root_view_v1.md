  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_v1.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DDIC-Based View, ROOT, ABENCDS_DEFINE_ROOT_VIEW_V1, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DDIC-Based View, ROOT

Syntax

... ROOT ...

Effect

The addition ROOT defines the CDS view ddic\_based\_view as the root entity of a [RAP business object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_glosry.htm "Glossary Entry") in the [ABAP RESTful Application Programming Model](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarap_glosry.htm "Glossary Entry"). The root entity is the top node of the hierarchical structure of a business object and represents the business object.

The following applies to a root entity:

-   There is exactly one root entity in the structure of a business object.
-   The definition of a root entity can use [COMPOSITION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_composition_v1.htm) to specify [CDS compositions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_composition_glosry.htm "Glossary Entry") that define [child entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenchild_entity_glosry.htm "Glossary Entry") of the business object.
-   A root entity does not have a [parent entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenparent_entity_glosry.htm "Glossary Entry").

Hints

-   More information about the ABAP RESTful Application Programming Model can be found under [RAP objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm).
-   The statement [EXTEND VIEW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_extend_view.htm) can add to a root entity but cannot make a regular view into a root entity.