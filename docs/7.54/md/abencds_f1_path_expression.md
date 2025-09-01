  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, ASSOCIATION](javascript:call_link\('abencds_f1_association.htm'\)) → 

ABAP CDS - path\_expr

Syntax

... *\[*source.*\]*\_assoc1*\[* [parameters](javascript:call_link\('abencds_f1_select_parameters.htm'\))*\]**\[*[attributes](javascript:call_link\('abencds_path_expression_attr.htm'\))*\]*
           *\[*.\_assoc2*\[* [parameters](javascript:call_link\('abencds_f1_select_parameters.htm'\))*\]**\[* [attributes](javascript:call_link\('abencds_path_expression_attr.htm'\))*\]* ... *\]* ...

Effect

Specifies an [SQL path expression](javascript:call_link\('abencds_path_expression_glosry.htm'\) "Glossary Entry") in a SELECT statement of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). A path expression of the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") is a string of [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") separated by periods (.) whose names are specified using \_assoc1, \_assoc2, and so on. The name of the CDS entity source in which the first CDS association is defined or published can be specified in front of this CDS association. The first CDS association of a path expression must be either:

-   Defined in the current CDS view.

-   Published as an element of the SELECT list or as an [element list](javascript:call_link\('abencds_f1_hiera_element_list.htm'\)) in a CDS view or CDS hierarchy that is a data source of the current view.

All further CDS associations must be published in the target data source of the directly prefixed CDS association in the path expression. No CDS associations can be used in a path expression that are defined in an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

[attributes](javascript:call_link\('abencds_path_expression_attr.htm'\)) can be used to specify attributes in angle brackets after every CDS association. These attributes define the following further properties of this section of the path expression:

-   Declaration of monovalency

-   Type of the join expression defined when used

-   Specified filter conditions

If the data source target of a specified [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") is a CDS entity with [input parameters](javascript:call_link\('abencds_f1_param.htm'\)), [parameters](javascript:call_link\('abencds_f1_select_parameters.htm'\)) must be used after the name \_assoc to pass actual parameters to them. No parameters can be specified for a CDS association published as an [element](javascript:call_link\('abencds_f1_select_list_entry.htm'\)) of a [SELECT](javascript:call_link\('abencds_f1_select_list.htm'\)) list.

Use of Path Expressions

Path expressions can be used as follows in the CDS DDL in ABAP CDS:

-   Path expressions with CDS associations of any target data sources can [publish](javascript:call_link\('abencds_f1_select_list_association.htm'\)) their final CDS associations as [elements](javascript:call_link\('abencds_f1_select_list_entry.htm'\)) of [SELECT lists](javascript:call_link\('abencds_f1_select_list.htm'\)) for use in other CDS entities or in ABAP SQL.

-   Path expressions with CDS associations whose target data source is not an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry") can be used as follows:

-   To specify the target data source of the final CDS association as the data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) after [FROM](javascript:call_link\('abencds_f1_select_statement.htm'\)). The path expression represents an inner join (INNER JOIN) by default.

-   To specify an appended element .element of the target data source of the last CDS association as an [element](javascript:call_link\('abencds_f1_select_list_entry.htm'\)) of a [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)). The path expression represents a right outer join (LEFT OUTER JOIN) by default.

-   To specify an appended element .element of the target data source of the last CDS association as an operand of [WHERE](javascript:call_link\('abencds_f1_where_clause.htm'\)) or [HAVING](javascript:call_link\('abencds_f1_having_clause.htm'\)) conditions, and [WHEN conditions](javascript:call_link\('abencds_f1_searched_case_expr.htm'\)). The path expression represents a right outer join (LEFT OUTER JOIN) by default.

In the case of self associations in which the target data source is the same as the source data source, these usages are not possible in the CDS entity where they are defined.

When a non-aggregated element of a SELECT list is specified with [aggregate expressions](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)) and in a WHERE condition or HAVING condition, the result of the path expression must be monovalent. This means that the cardinality of all CDS associations used is either "to 1" or the path expression can contain only [filter conditions](javascript:call_link\('abencds_path_expression_attr.htm'\)) that are declared as monovalent using the addition 1:.

The following is evaluated when a CDS entity is accessed using a path expression:

-   The joins defined by the CDS associations, from left to right.

-   All other conditions of the CDS entities in question.

The path expression addresses the full result of this evaluation or a single element appended using .element.

Notes

-   The most simple path expression is the name of a single CDS association.

-   When joins in path expressions are defined by CDS associations, note that their left side is always the CDS entity that publishes the CDS association. This applies particularly to CDS associations that are published in data sources of CDS entities and passed.

-   CDS DDL path expressions can also be used in [conditions](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) in the ABAP [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry") of ABAP CDS.

-   A CDS association whose target data source does not publish a CDS association cannot be followed by any further associations in a path expression. More specifically, no further CDS associations can be made into a path expression after CDS associations whose target data sources are database tables or classic views.

-   When the CDS associations of the path expressions of a view are defined as joins, they are mapped to as few join expressions as possible. The [ABAP annotation](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") [AbapCatalog.compiler.compareFilter](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) is used as support here. The value true guarantees that CDS associations with semantically identical [filter conditions](javascript:call_link\('abencds_path_expression_attr.htm'\)) do not produce differing join expressions.

-   Path expressions with CDS associations whose target data source is an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry") cannot be used anywhere where they could produce instances of join expressions.

Example

The following CDS view contains the simple path expression \_scarr\[inner\].carrname in the SELECT list, whereby the attribute [INNER](javascript:call_link\('abencds_path_expression_attr.htm'\)) is specified that controls the type of join. The program DEMO\_FROM\_JOIN\_TO\_ASSOCIATION demonstrates that this view returns the same result as a directly programmed inner join in ABAP CDS or in ABAP SQL.

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

-   The separate CDS association invoice\_header is used in a path expression as an operand in the WHERE condition.

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
              /\* Association is not published, but its element \*/
              \_invoice\_header.dunning\_level,
              /\* Association from data source is published here \*/
              bpa\_so.note\_header }
          /\* Path expression in WHERE clause \*/
          where \_invoice\_header.dunning\_level > '0';

Executable Example

[Path Expressions, Use in the SELECT List](javascript:call_link\('abenpath_expr_in_colspec_abexa.htm'\))

Continue
[ABAP CDS - path\_expr, attributes](javascript:call_link\('abencds_path_expression_attr.htm'\))
![Example](exa.gif "Example") [ABAP CDS - Joins of Associations](javascript:call_link\('abencds_assoc_join_abexa.htm'\))