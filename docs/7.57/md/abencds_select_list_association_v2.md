  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - CDS View Entity, SELECT, select\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_list_v2.htm) →  [CDS DDL - CDS View Entity, SELECT, element](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_list_entry_v2.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - CDS View Entity, SELECT, expose_assoc, ABENCDS_SELECT_LIST_ASSOCIATION_V2,
757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - CDS View Entity, SELECT, expose\_assoc

Syntax

... [path\_expr](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v2.htm) *\[*AS alias*\]*

Effect

Uses a path expression [path\_expr](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v2.htm) to expose a [CDS association](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_association_glosry.htm "Glossary Entry") as an [element](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_list_entry_v2.htm) of the [SELECT list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_list_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry"). A path expression can consist of one or more associations, and the final CDS association is exposed for use in other [CDS views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_glosry.htm "Glossary Entry") or in ABAP SQL:

-   A different CDS view can evaluate the CDS association in its [path expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v2.htm).
-   The CDS association can be used in [ABAP SQL path expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_path.htm).

The current view is the [association source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_source_glosry.htm "Glossary Entry") of the exposed CDS association and any join expression created for a path expression from the CDS association uses the current CDS view entity as its left side.

All fields of the association source that are used in the ON condition must also be specified as elements of the current SELECT list. Such an element must be specified by exactly the same path expression as used for exposing the association. It must contain the same associations in the same sequence and with the same [attributes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expr_attr_v2.htm).

A CDS association can be exposed multiple times with various alternative element names alias defined using the keyword AS (see example below). This makes it possible to use different [filter conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_filter_v2.htm) cds\_cond. However, this is only possible for simple CDS associations and not for compositions and to-parent associations.

An exposed CDS association is part of the SELECT list. It is not, however, part of the result set, nor a component of the type defined in ABAP with respect to the CDS view entity.

The names of the elements of a SELECT list must be unique. This applies in particular also for the publication of a [CDS association](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_association_glosry.htm "Glossary Entry") using a path expression. There must be no other element with this name. If necessary, AS must be used to define an alternative element name alias for the CDS association. If no alternative element name alias is defined, the element name is defined by the name of the CDS association used in the path expression. When a CDS association with a [filter condition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_filter_v2.htm) cds\_cond is exposed, an alternative element name alias using AS is mandatory.

Hints

-   When a CDS association is exposed, the exposing view itself is the [association source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_source_glosry.htm "Glossary Entry") of the exposed CDS association - not the data source of the exposing view. Especially when CDS associations are exposed that were already exposed by the data source of the current view, the current view replaces the original view as the association source. When a join expression is created for the current view, the left side of the join expression is the result set of the current view.
-   When exposing a [CDS association](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_association_glosry.htm "Glossary Entry") using a path expression [path\_expr](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v2.htm) in the SELECT list, it is not possible to pass actual parameters to any [input parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_parameter_list_v2.htm) of the [association target](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_target_glosry.htm "Glossary Entry") to assign start values to the input parameters.
-   Special rules apply to the publication of CDS associations in SELECT statements joined with a [set operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_set_operators.htm).

Example

The following CDS view entity exposes its own CDS association \_spfli and the CDS association \_sflight exposed by its [association target](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_target_glosry.htm "Glossary Entry") demo\_cds\_assoc\_spfli. The fields of the [association source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_source_glosry.htm "Glossary Entry"), which are used in the ON conditions of the CDS associations, are specified in the SELECT list. In the case of the CDS association exposed using \_spfli.\_sflight, path expressions \_spfli.carrid and \_spfli.connid are specified accordingly. The element carrid occurs twice, therefore, an alternative element name must be defined using AS.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_EXPOSE\_ASSOC\_VE
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

Example

The following CDS view entity exposes its own CDS association \_spfli with a filter condition. The fields of the [association source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_source_glosry.htm "Glossary Entry"), which are used in the ON condition of the CDS association, are specified in the SELECT list using the same filter condition. Once this has been done, the same association can be exposed again with different filter conditions. New alias names are required.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_EXPOSE\_ASSOC\_FILTER
  as select from scarr  
  association \[1..\*\] to demo\_cds\_assoc\_spfli as \_spfli  
    on scarr.carrid = \_spfli.carrid  
{  
//Association with filter condition
      \_spfli\[  carrid = ''  \] as airline,  
  key scarr.carrid as scarr\_carrid,  
      \_spfli\[  carrid = ''  \].\_sflight,  
      \_spfli\[  carrid = ''  \].carrid,  
      \_spfli\[  carrid = ''  \].connid,
      
//same association with different filter condition and new alias name
      \_spfli\[ carrid = 'A' \] as airline\_A,
      \_spfli.airpfrom as airport  
}

Executable Example

[Exposing CDS Associations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_expose_assoc_v2_abexa.htm)

Continue
![Example](exa.gif "Example") [CDS DDL - CDS View Entity, Exposing CDS Associations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_expose_assoc_v2_abexa.htm)