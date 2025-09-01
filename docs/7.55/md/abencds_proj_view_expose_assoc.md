  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Projection Views](javascript:call_link\('abencds_proj_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY AS PROJECTION](javascript:call_link\('abencds_define_view_as_projection.htm'\)) →  [CDS DDL - projection\_view, element\_list](javascript:call_link\('abencds_proj_view_element_list.htm'\)) → 

CDS DDL - projection\_view, expose\_assoc

Syntax

... *{*association*\[* \[[filter](javascript:call_link\('abencds_pv_assoc_modified.htm'\))\]*\]* *\[*AS alias*\]* *\[*: REDIRECTED TO projection\_view*\]**}*
  *|* *{*composition*\[* \[[filter](javascript:call_link\('abencds_pv_assoc_modified.htm'\))\]*\]* *\[*AS alias*\]* *\[*: REDIRECTED TO COMPOSITION CHILD projection\_view*\]**}*
  *|* *{*to-parent association*\[* \[[filter](javascript:call_link\('abencds_pv_assoc_modified.htm'\))\]*\]* *\[*AS alias*\]* *\[*: REDIRECTED TO PARENT projection\_view*\]* *}*

Effect

You can expose an association from the [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry") in the element list of your [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry"). You can use the association in a [path expressions](javascript:call_link\('abenpath_expression_glosry.htm'\) "Glossary Entry") to expose individual fields from the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry"). And there are several additions you can use with an exposed association:

-   An exposed association in a CDS projection view can be modified. That means that you can add a filter and in this way implicitly change the [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry"). Then you can assign a new [alias name](javascript:call_link\('abenalias_glosry.htm'\) "Glossary Entry") to the modified association. Find details in the topic [CDS DDL - projection\_view, modified association](javascript:call_link\('abencds_pv_assoc_modified.htm'\)) below.

-   If the original [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") is also projected, you can redirect the association to the new target using the keyword REDIRECTED TO. Find details in the topic [CDS DDL - projection\_view, REDIRECTED TO](javascript:call_link\('abencds_pv_assoc_redirected.htm'\)) below.

All elements included in the ON clause of an exposed [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") must also be included in the element list of the CDS projection view.

Hint

-   Projected CDS associations, CDS compositions, and CDS to-parent associations can be specified as values for the CDS annotations [ElementRef](javascript:call_link\('abencds_f1_define_annotation_type.htm'\)) and [AssociationRef](javascript:call_link\('abencds_f1_define_annotation_type.htm'\)).
    

Executable Example

[Exposing Associations](javascript:call_link\('abenwith_associations_abexa.htm'\))

Continue
[CDS DDL - projection\_view, modified association](javascript:call_link\('abencds_pv_assoc_modified.htm'\))
[CDS DDL - projection\_view, REDIRECTED TO](javascript:call_link\('abencds_pv_assoc_redirected.htm'\))
![Example](exa.gif "Example") [CDS DDL - projection\_view, expose associations](javascript:call_link\('abencds_proj_view_assoc_abexa.htm'\))