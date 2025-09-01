  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY AS PROJECTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_as_projection.htm) →  [CDS DDL - projection\_view, element\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_element_list.htm) → 

CDS DDL - projection\_view, expose\_assoc

Syntax

... *{*association*\[* \[[filter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_pv_assoc_modified.htm)\]*\]* *\[*AS alias*\]* *\[*: REDIRECTED TO projection\_view*\]**}*
  *|* *{*composition*\[* \[[filter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_pv_assoc_modified.htm)\]*\]* *\[*AS alias*\]* *\[*: REDIRECTED TO COMPOSITION CHILD projection\_view*\]**}*
  *|* *{*to-parent association*\[* \[[filter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_pv_assoc_modified.htm)\]*\]* *\[*AS alias*\]* *\[*: REDIRECTED TO PARENT projection\_view*\]* *}*

Effect

You can expose an association from the [projected entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry") in the element list of your [CDS projection view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_projection_view_glosry.htm "Glossary Entry"). You can use the association in a [path expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpath_expression_glosry.htm "Glossary Entry") to expose individual fields from the [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry"). And there are several additions you can use with an exposed association:

-   An exposed association in a CDS projection view can be modified. That means that you can add a filter and in this way implicitly change the [cardinality](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencardinality_glosry.htm "Glossary Entry"). Then you can assign a new [alias name](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenalias_glosry.htm "Glossary Entry") to the modified association. Find details in the topic [CDS DDL - projection\_view, modified association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_pv_assoc_modified.htm) below.

-   If the original [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") is also projected, you can redirect the association to the new target using the keyword REDIRECTED TO. Find details in the topic [CDS DDL - projection\_view, REDIRECTED TO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_pv_assoc_redirected.htm) below.

All elements included in the ON clause of an exposed [CDS association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_glosry.htm "Glossary Entry") must also be included in the element list of the CDS projection view.

Hint

-   Projected CDS associations, CDS compositions, and CDS to-parent associations can be specified as values for the CDS annotations [ElementRef](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_annotation_type.htm) and [AssociationRef](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_annotation_type.htm).
    

Executable Example

[Exposing Associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwith_associations_abexa.htm)

Continue
[CDS DDL - projection\_view, modified association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_pv_assoc_modified.htm)
[CDS DDL - projection\_view, REDIRECTED TO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_pv_assoc_redirected.htm)
![Example](exa.gif "Example") [CDS DDL - projection\_view, expose associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_assoc_abexa.htm)