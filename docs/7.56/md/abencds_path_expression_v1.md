  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) → 

CDS DDL - DDIC-based View, path\_expr

Syntax

... *\[*source.*\]*\_assoc1*\[* [parameters](javascript:call_link\('abencds_select_parameters_v1.htm'\))*\]**\[*[attributes](javascript:call_link\('abencds_path_expr_attr_v1.htm'\))*\]*
           *\[*.\_assoc2*\[* [parameters](javascript:call_link\('abencds_select_parameters_v1.htm'\))*\]**\[* [attributes](javascript:call_link\('abencds_path_expr_attr_v1.htm'\))*\]* ... *\]* ...

Effect

Specifies an [SQL path expression](javascript:call_link\('abensql_path_expression_glosry.htm'\) "Glossary Entry") that can be used in a SELECT statement of a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). A path expression of the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") is a sequence of [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") separated by periods (.) whose names are specified using \_assoc1, \_assoc2, and so on. The name of the CDS entity source in which the first CDS association is defined or exposed can be specified in front of this CDS association. The first CDS association of a path expression must be either:

-   Defined in the current CDS view.
-   Exposed as an element of the SELECT list or of the [element list](javascript:call_link\('abencds_f1_hiera_element_list.htm'\)) in a CDS view or CDS hierarchy that is a data source of the current view.

All further CDS associations must be exposed in the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of the directly prefixed CDS association in the path expression. It is not possible to use a CDS association in a path expression that is defined in a [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") or in a [CDS custom entity](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry").

[attributes](javascript:call_link\('abencds_path_expr_attr_v1.htm'\)) can be used to specify attributes in angle brackets after every CDS association. These attributes define the following further properties of this section of the path expression:

-   [Cardinality](javascript:call_link\('abencds_path_expr_card_v1.htm'\))
-   [Join type](javascript:call_link\('abencds_path_expr_jointype_v1.htm'\)) implemented when used
-   [Filter conditions](javascript:call_link\('abencds_path_expression_filter_v1.htm'\))

If the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of a specified [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") is a CDS entity with [input parameters](javascript:call_link\('abencds_f1_param.htm'\)), then actual parameters must be passed to them, using [parameters](javascript:call_link\('abencds_select_parameters_v1.htm'\)) after the name \_assoc. No parameters can be specified for a CDS association exposed as an [element](javascript:call_link\('abencds_select_list_entry_v1.htm'\)) of a [SELECT](javascript:call_link\('abencds_select_list_v1.htm'\)) list.

Use of Path Expressions

Path expressions can be used as follows in the CDS DDL in ABAP CDS:

-   They can [expose](javascript:call_link\('abencds_select_list_association_v1.htm'\)) their final CDS associations as [elements](javascript:call_link\('abencds_select_list_entry_v1.htm'\)) of [SELECT lists](javascript:call_link\('abencds_select_list_v1.htm'\)) for use in other CDS entities or in ABAP SQL.
-   Path expressions with CDS associations whose [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") is not an [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") or a [CDS custom entity](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry") can be used as follows:
    
    -   To specify the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of the final CDS association as the data source [data\_source](javascript:call_link\('abencds_data_source_v1.htm'\)) after [FROM](javascript:call_link\('abencds_select_statement_v1.htm'\)). The path expression represents an [inner join](javascript:call_link\('abeninner_join_glosry.htm'\) "Glossary Entry") by default.
    -   To specify an element .element of the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of the last CDS association as an [element](javascript:call_link\('abencds_select_list_entry_v1.htm'\)) of a [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)). The path expression represents a [left outer join](javascript:call_link\('abenleft_outer_join_glosry.htm'\) "Glossary Entry") by default.
    -   To specify an element .element of the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of the last CDS association as an operand of [WHERE](javascript:call_link\('abencds_where_clause_v1.htm'\)), [HAVING](javascript:call_link\('abencds_having_clause_v1.htm'\)), or [WHEN](javascript:call_link\('abencds_searched_case_expr_v1.htm'\)) conditions. The path expression represents a [left outer join](javascript:call_link\('abenleft_outer_join_glosry.htm'\) "Glossary Entry") by default.
    -   To specify an element .element of the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of the last CDS association after GROUP BY. The path expression represents a [left outer join](javascript:call_link\('abenleft_outer_join_glosry.htm'\) "Glossary Entry") by default.
    -   To specify an element .element of the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of the last CDS association as an operand of an [aggregate expression](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)), a [built-in function](javascript:call_link\('abencds_builtin_functions_v1.htm'\)), a [case expression](javascript:call_link\('abencds_case_expression_v1.htm'\)), or a [cast expression](javascript:call_link\('abencds_cast_expression_v1.htm'\)). The path expression represents a [left outer join](javascript:call_link\('abenleft_outer_join_glosry.htm'\) "Glossary Entry") by default.
    
    In the case of self associations in which the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") is the same as the [association source](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry"), these usages are not possible in the CDS entity where they are defined.
    

For a non-aggregated element of a SELECT list that contains [aggregate expressions](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)), as well as in a WHERE and HAVING condition, the result of the path expression must be unique. This means that the [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") of all CDS associations used must be either to-one or the path expression can contain only [filter conditions](javascript:call_link\('abencds_path_expr_attr_v1.htm'\)) that are declared as unique using the addition 1:.

The following is evaluated when a CDS entity is accessed using a path expression:

-   The joins defined by the CDS associations, from left to right.
-   All other conditions of the CDS entities involved.

The path expression addresses the full result of this evaluation or a single element .element.

Hints

-   The most simple path expression is the name of a single CDS association.
-   For joins of CDS associations used in path expressions, note that their left side is always the CDS entity that exposes the CDS association. This applies particularly to CDS associations that are exposed in data sources of CDS entities and passed on.
-   CDS DDL path expressions can also be used in the ABAP [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") of ABAP CDS to specify [conditions](javascript:call_link\('abencds_dcl_role_conditions.htm'\)).
-   A CDS association whose [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") does not expose a CDS association cannot be followed by any further associations in a path expression. More specifically, for CDS associations whose association targets are DDIC database tables or DDIC views, no further CDS associations can be specified in a path expression.
-   When the CDS associations of the path expressions of a view are implemented as joins, they are mapped to as few join expressions as possible. The [ABAP annotation](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry") [AbapCatalog.compiler.compareFilter](javascript:call_link\('abencds_view_anno_v1.htm'\)) can serve as support. It this annotation is used with the value true, it guarantees that CDS associations with semantically identical [filter conditions](javascript:call_link\('abencds_path_expr_attr_v1.htm'\)) do not produce differing join expressions.
-   Path expressions with CDS associations whose [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") is a [non-SQL CDS entity](javascript:call_link\('abencds_non_sql_entity_glosry.htm'\) "Glossary Entry") cannot be used anywhere where they could produce instances of join expressions.

Example

The following DDIC-based view contains the simple path expression \_scarr\[inner\].carrname in its SELECT list. The attribute [INNER](javascript:call_link\('abencds_path_expr_attr_v1.htm'\)) controls the [join type](javascript:call_link\('abenjoin_type_glosry.htm'\) "Glossary Entry"). The program DEMO\_FROM\_JOIN\_TO\_ASSOCIATION demonstrates that this view returns the same result as a directly programmed inner join in ABAP CDS or in ABAP SQL.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_JN2'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_join2
  as select from spfli
  association to scarr as \_scarr on
    spfli.carrid = \_scarr.carrid
  {
    \_scarr\[inner\].carrname as carrier,
    spfli.connid           as flight,
    spfli.cityfrom         as departure,
    spfli.cityto           as arrival
  }    

Example

This example shows three CDS views, sales\_order, business\_partner, and invoice. The CDS view invoice uses its own CDS association and CDS associations from the other two views in path expressions:

-   The CDS association sales\_order of the CDS view business\_partner is specified as a data source after FROM. A filter condition guarantees that only certain orders can be used as data sources.
-   The CDS association invoice\_header, which is defined by the view invoice itself, is used in a path expression as an operand in the WHERE condition.
-   The CDS association note\_header of the CDS view sales\_order is addressed using the alternative name bpa in business\_partner and defined as an element of the SELECT list. This means this CDS association can also be used in CDS views that use invoice as a data source.
    
    @AbapCatalog.sqlViewName: 'SALES\_ORDER\_VW'
    define view sales\_order as
      select from snwd\_so
             association \[0..1\] to snwd\_text\_key as \_note\_header
               on snwd\_so.note\_guid = \_note\_header.node\_key
      { \* } // Include all fields from snwd\_text\_key
    
    @AbapCatalog.sqlViewName: 'BPA\_VW'
    define view business\_partner as
      select from snwd\_bpa
             association \[0..\*\] to sales\_order
               on snwd\_bpa.node\_key = sales\_order.buyer\_guid
      { \* }
    
    @AbapCatalog.sqlViewName: 'SALESO\_INV\_VW'
    define view invoice as
      select from
             /\* Association "sales\_order" with filter as data source \*/
             business\_partner.sales\_order\[
               lifecycle\_status <> 'C' and lifecycle\_status <> 'X'\]
               as bpa\_so //alias for data source
             /\* Association only used in this view definition \*/
             association \[0..1\] to snwd\_so\_inv\_head as \_invoice\_header
               on bpa\_so.node\_key = \_invoice\_header.so\_guid
            { key bpa\_so.node\_key, //Field from ON-condition in \_invoice\_header
                  bpa\_so.so\_id,
                  bpa\_so.note\_guid, //Field from ON-condition in note\_header
                  bpa\_so.lifecycle\_status,
                  /\* Association is not exposed, but its element \*/
                  \_invoice\_header.dunning\_level,
                  /\* Association from data source is exposed here \*/
                  bpa\_so.note\_header }
              /\* Path expression in WHERE clause \*/
              where \_invoice\_header.dunning\_level > '0';
    

Executable Example

[Path Expressions, Use in the SELECT List](javascript:call_link\('abenpath_expr_in_colspec_abexa.htm'\))

Continue
[CDS DDL - DDIC-based View, path\_expr, attributes](javascript:call_link\('abencds_path_expr_attr_v1.htm'\))
![Example](exa.gif "Example") [CDS DDL - DDIC-Based View, Joins of Associations](javascript:call_link\('abencds_assoc_join_v1_abexa.htm'\))