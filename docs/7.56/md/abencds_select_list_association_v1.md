  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT, select\_list](javascript:call_link\('abencds_select_list_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT, element](javascript:call_link\('abencds_select_list_entry_v1.htm'\)) → 

CDS DDL - DDIC-based View, SELECT, expose\_assoc

Syntax

... [path\_expr](javascript:call_link\('abencds_path_expression_v1.htm'\)) *\[*AS alias*\]*

Effect

Uses a path expression [path\_expr](javascript:call_link\('abencds_path_expression_v1.htm'\)) to expose a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry"), a [CDS composition](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry"), or a [CDS to-parent association](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry") as an [element](javascript:call_link\('abencds_select_list_entry_v1.htm'\)) of the [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)) of a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). A path expression can consist of one or more associations, and the final CDS association is exposed for use in other [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") or in ABAP SQL:

-   A different CDS view can evaluate the CDS association in its [path expressions](javascript:call_link\('abencds_path_expression_v1.htm'\)).
-   The CDS association can be used in ABAP SQL [path expressions](javascript:call_link\('abenabap_sql_path.htm'\)).

The current view is the [association source](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry") of the exposed CDS association and any join expressions created for a path expression from the CDS association use the current CDS view as their left side.

All fields of the association source of the CDS association that occur in the ON condition must also be specified as elements of the current SELECT list. Such an element must be specified by exactly the same path expression as used for exposing the association. It must contain the same associations in the same sequence and with the same [attributes](javascript:call_link\('abencds_path_expr_attr_v1.htm'\)).

A CDS association can be exposed multiple times with various alternative element names alias defined using the keyword AS. This makes it possible to use different [filter conditions](javascript:call_link\('abencds_path_expression_filter_v1.htm'\)) cds\_cond. However, this is only possible for simple CDS associations and not for compositions and to-parent associations.

Like every element, a CDS association exposed in this way is part of the SELECT list and must also be specified in a [name list](javascript:call_link\('abencds_name_list_v1.htm'\)). It is not, however, part of the result set, a field of the [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") of a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"), or a component of a type defined in ABAP with respect to the CDS view. If no alternative element name alias is defined, and there is no [name list](javascript:call_link\('abencds_name_list_v1.htm'\)), the element name is defined by the name of the CDS association named by the path expression.

Hints

-   When a CDS association is exposed, the exposing view itself is the [association source](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry") of the exposed CDS association and not the data source of the exposing view. Especially when CDS associations are exposed that were already exposed by the data source of the current view, the current view replaces the original view as the association source. When a join expression is created for the current view, the left side of the join expression is the result set of the current view.
-   When a CDS association with a [filter condition](javascript:call_link\('abencds_path_expression_filter_v1.htm'\)) cds\_cond is exposed, an alternative element name alias using AS must be defined in the SELECT list.
-   When exposing a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") using a path expression [path\_expr](javascript:call_link\('abencds_path_expression_v1.htm'\)) in the SELECT list, it is not possible to pass actual parameters to any [input parameters](javascript:call_link\('abencds_parameter_list_v1.htm'\)) of the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") to assign start values to the input parameters.
-   The name of the elements of a SELECT list must be unique. This applies in particular also for the publication of a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") using a path expression. There must be no other element with this name. If necessary, AS must be used to define an alternative element name alias for the CDS association.
-   Special rules apply to the publication of CDS associations in SELECT statements joined with [UNION](javascript:call_link\('abencds_union_v1.htm'\)).

Example

The following CDS view exposes its own CDS association \_spfli and the CDS association \_sflight exposed by its [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") demo\_cds\_assoc\_spfli. The fields of the [association source](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry"), which are used in the ON conditions of the CDS associations, are specified in the SELECT list. In the case of the CDS association exposed using \_spfli.\_sflight, path expressions \_spfli.carrid and \_spfli.connid are specified accordingly. The element carrid occurs twice, which means that an alternative element name must be defined using AS.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_EXPASC'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view DEMO\_CDS\_EXPOSE\_ASSOC
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

[Exposing CDS Associations](javascript:call_link\('abencds_expose_assoc_v1_abexa.htm'\))

Continue
![Example](exa.gif "Example") [CDS DDL - DDIC-based View, Exposing CDS Associations](javascript:call_link\('abencds_expose_assoc_v1_abexa.htm'\))