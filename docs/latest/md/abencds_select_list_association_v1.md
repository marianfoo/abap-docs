---
title: "Syntax"
description: |
  ... path_expr(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v1.htm) AS alias Effect Uses a path expression path_expr(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v1.htm) to expose a CDS association(h
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_association_v1.htm"
abapFile: "abencds_select_list_association_v1.htm"
keywords: ["select", "do", "if", "case", "try", "data", "abencds", "list", "association"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT, select\_list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT, element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_entry_v1.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20SELECT%2C%20expose_assoc%2C%20ABENCDS_SELECT_LIST_ASSOCIATION_V1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASug
gestion%20for%20improvement:)

CDS DDL - DDIC-Based View, SELECT, expose\_assoc

Syntax

... [path\_expr](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v1.htm) *\[*AS alias*\]*

Effect

Uses a path expression [path\_expr](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v1.htm) to expose a [CDS association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_association_glosry.htm "Glossary Entry"), a [to-child association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abento_child_association_glosry.htm "Glossary Entry"), or a [CDS to-parent association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abento_parent_association_glosry.htm "Glossary Entry") as an [element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_entry_v1.htm) of the [SELECT list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_v1.htm) of a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). A path expression can consist of one or more associations, and the final CDS association is exposed for use in other [CDS views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_glosry.htm "Glossary Entry") or in ABAP SQL:

-   A different CDS view can evaluate the CDS association in its [path expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v1.htm).
-   The CDS association can be used in ABAP SQL [path expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_path.htm).

The current view is the [association source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassociation_source_glosry.htm "Glossary Entry") of the exposed CDS association and any join expressions created for a path expression from the CDS association use the current CDS view as their left side.

All fields of the association source of the CDS association that occur in the ON condition must also be specified as elements of the current SELECT list. Such an element must be specified by exactly the same path expression as used for exposing the association. It must contain the same associations in the same sequence and with the same [attributes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expr_attr_v1.htm).

A CDS association can be exposed multiple times with various alternative element names alias defined using the keyword AS. This makes it possible to use different [filter conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_filter_v1.htm) cds\_cond. However, this is only possible for simple CDS associations and not for to-child and to-parent associations.

Like every element, a CDS association exposed in this way is part of the SELECT list and must also be specified in a [name list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_name_list_v1.htm). It is not, however, part of the result set, a field of the [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") of a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry"), or a component of a type defined in ABAP with respect to the CDS view. If no alternative element name alias is defined, and there is no [name list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_name_list_v1.htm), the element name is defined by the name of the CDS association named by the path expression.

Hints

-   When a CDS association is exposed, the exposing view itself is the [association source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassociation_source_glosry.htm "Glossary Entry") of the exposed CDS association and not the data source of the exposing view. Especially when CDS associations are exposed that were already exposed by the data source of the current view, the current view replaces the original view as the association source. When a join expression is created for the current view, the left side of the join expression is the result set of the current view.
-   When a CDS association with a [filter condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_filter_v1.htm) cds\_cond is exposed, an alternative element name alias using AS must be defined in the SELECT list.
-   When exposing a [CDS association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_association_glosry.htm "Glossary Entry") using a path expression [path\_expr](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v1.htm) in the SELECT list, it is not possible to pass actual parameters to any [input parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_list_v1.htm) of the [association target](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassociation_target_glosry.htm "Glossary Entry") to assign start values to the input parameters.
-   The name of the elements of a SELECT list must be unique. This applies in particular also for the publication of a [CDS association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_association_glosry.htm "Glossary Entry") using a path expression. There must be no other element with this name. If necessary, AS must be used to define an alternative element name alias for the CDS association.
-   Special rules apply to the publication of CDS associations in SELECT statements joined with [UNION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_union_v1.htm).

Example

The following CDS view exposes its own CDS association \_spfli and the CDS association \_sflight exposed by its [association target](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassociation_target_glosry.htm "Glossary Entry") demo\_cds\_assoc\_spfli. The fields of the [association source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassociation_source_glosry.htm "Glossary Entry"), which are used in the ON conditions of the CDS associations, are specified in the SELECT list. In the case of the CDS association exposed using \_spfli.\_sflight, path expressions \_spfli.carrid and \_spfli.connid are specified accordingly. The element carrid occurs twice, which means that an alternative element name must be defined using AS.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_EXPOSE\_ASSOC
  as select from scarr
  association \[1..\*\] to demo\_cds\_assoc\_spfli as \_spfli  
    on scarr.carrid = \_spfli.carrid
{
      \_spfli,
  key scarr.carrid as scarr\_carrid,
      \_spfli.\_sflight,
      \_spfli.carrid,
      \_spfli.connid  
}

Executable Example

[Exposing CDS Associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_expose_assoc_v1_abexa.htm)

Continue
![Example](exa.gif "Example") [CDS DDL - DDIC-Based View, Exposing CDS Associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_expose_assoc_v1_abexa.htm)