---
title: "Syntax"
description: |
  ... association filter(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_assoc_modified.htm) AS alias : redirection(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_assoc_redirected.htm)  Effect CDS associations from
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_view_expose_assoc.htm"
abapFile: "abencds_proj_view_expose_assoc.htm"
keywords: ["select", "do", "if", "try", "data", "abencds", "proj", "view", "expose", "assoc"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_views.htm) →  [CDS DDL - CDS Projection View, Transactional Queries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_transactional_query.htm) →  [CDS DDL - projection\_list, Transactional Query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_view_element_list.htm) →  [CDS DDL - proj\_element, Transactional Query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_view_element.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20expose_assoc%2C%20Transactional%20Query%2C%20ABENCDS_PROJ_VIEW_EXPOSE_ASSOC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20fo
r%20improvement:)

CDS DDL - expose\_assoc, Transactional Query

Syntax

... association*\[* \[[filter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_assoc_modified.htm)\]*\]* *\[*AS alias*\]* *\[*: [redirection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_assoc_redirected.htm) *\]*

Effect

CDS associations from the [projected entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry") can be exposed in the projection list of a CDS projection view. Note that only an association from the projected entity can be exposed, path expressions are not valid to expose an association.

All elements included in the ON clause of an exposed [CDS association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_association_glosry.htm "Glossary Entry") must also be included in the projection list of the CDS projection view.

The following additions are possible:

-   [filter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_assoc_modified.htm)
    
    An exposed association in a CDS projection view can be modified. That means that you can add a filter condition and in this way implicitly change the [cardinality](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencardinality_glosry.htm "Glossary Entry").
    
-   AS alias
    
    The names of the elements of a SELECT list must be unique. There must be no other element with this name. If necessary, AS must be used to define an alternative element name alias for the CDS association. If no alternative element name alias is defined, the element name is defined by the name of the CDS association used in the path expression. When a CDS association with a [filter condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_assoc_modified.htm) cds\_cond is exposed, an alternative element name alias using AS is mandatory.
    
-   [redirection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_assoc_redirected.htm)
    
    If the original [association target](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassociation_target_glosry.htm "Glossary Entry") is also projected, you can redirect the association to the new target using the keyword REDIRECTED TO. Find details in the topic [CDS DDL - projection\_view, REDIRECTED TO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_assoc_redirected.htm) below.
    

A CDS association can be exposed multiple times with various alternative element names. This makes it possible to use different filter conditions.

An exposed CDS association is part of the projection list. It is not, however, part of the result set, nor a component of the type defined in ABAP with respect to the CDS projection view.

Hints

-   As alternative to exposing an association with a filter and redirection described in this topic, it is also possible to redefine an association on header level using the keyword [REDEFINE ASSOCIATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_view_redefined_assoc.htm). The filter and redirection is then automatically applied to all fields exposed via path expression.
-   Projected CDS associations, to-child, and to-parent associations can be specified as values for the CDS annotations [ElementRef](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_annotation_type.htm) and [AssociationRef](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_annotation_type.htm).

Continue
[CDS DDL - filter, Transactional Query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_assoc_modified.htm)
[CDS DDL - redirected, Transactional Query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_assoc_redirected.htm)