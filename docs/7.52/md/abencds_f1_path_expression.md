  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm) →  [ABAP CDS - SELECT, ASSOCIATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_association.htm) → 

ABAP CDS - path\_expr

Syntax

... *\[*viewEntity.*\]*\_assoc1*\[* [parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_parameters.htm)*\]**\[*[attributes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_path_expression_attr.htm)*\]*
               *\[*.\_assoc2*\[* [parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_parameters.htm)*\]**\[* [attributes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_path_expression_attr.htm)*\]* ... *\]**\[*.element*\]* ...

Effect

Specifies a [CDS path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_path_expression_glosry.htm "Glossary Entry") in a SELECT selection of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry"). A path expression is a string of [associations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_association.htm) separated by periods (.) whose names are specified using \_assoc1, \_assoc2, and so on.

Path expressions can be used as follows in the CDS DDL in ABAP CDS:

-   As data sources [data\_source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_data_source.htm)

-   As [elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list_entry.htm) of [SELECT lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list.htm)

-   As operands of [WHERE conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_where_clause.htm) or [HAVING conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_having_clause.htm)

Path expressions specified as operands of a condition must be closed using an element. As a non-aggregated element of a SELECT list of [aggregate expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_aggregate_functions.htm) and in a WHERE condition or HAVING condition, the result of the path expression must be monovalent. This means that the cardinality of all associations used is either to 1 or the path expression can contain only [filter conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_path_expression_attr.htm) declared as monovalent using the addition 1:.

The following is evaluated when a CDS view is accessed using a path expression:

-   The joins defined by the associations, from left to right.

-   All other conditions of the CDS views in question.

The path expression addresses the full result of this evaluation or a single element appended using .element.

-   If the path expression is closed using an element, this must be an element of the target data source of the final association in the path.

-   If the path expression is closed using an association, this is interpreted as follows depending on the position of the path expression:

-   After [FROM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm), the association is a data source [data\_source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_data_source.htm).

-   As an [element](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list_entry.htm) of a [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list.htm), the association is published for use in other CDS views or in Open SQL.

In a [WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_where_clause.htm) clause or [HAVING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_having_clause.htm) clause, the path expression must be closed using an element.

The name of the CDS view in which the first association is defined can be specified in front of this association. The first association in a path expression must either be defined in the current CDS view or published as an element in a data source of the current view. All further associations must be published in the target data source of the directly prefixed association in the path expression.

-   [attributes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_path_expression_attr.htm) can be used to specify attributes in angle brackets after every association. These attributes define the following further properties of this section of the path expression:

-   Declaration of monovalency

-   Category of the join expression

-   Specified filter conditions

-   If the data source target of a specified [association](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_association.htm) is a CDS entity with [input parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm), [parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_parameters.htm) must be used after the name \_assoc to pass actual parameters to them. No parameters can be specified for an association published as an [element](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list_entry.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list.htm) list.

Notes

-   The most simple path expression is the name of a single association.

-   CDS DDL path expressions can also be used in [conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_conditions.htm) in the ABAP [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry") of ABAP CDS.

-   An association whose target data source does not publish an association cannot be followed by any further associations in a path expression. More specifically, no further associations can be made into a path expression after associations whose target data sources are database tables or classic views.

-   When the associations of the path expressions of a view are defined as joins, they are mapped to as few join expressions as possible. The [ABAP annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencore_annotation_glosry.htm "Glossary Entry") [AbapCatalog.compiler.compareFilter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm) is used as support here. The value true guarantees that associations with semantically identical [filter conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_path_expression_attr.htm) do not produce differing join expressions.

Example

The following CDS view contains the simple path expression \_scarr\[inner\].carrname in the SELECT list, whereby the attribute [INNER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_path_expression_attr.htm) is specified that controls the type of join. The program DEMO\_FROM\_JOIN\_TO\_ASSOCIATION demonstrates that this view returns the same result as a directly programmed inner join in ABAP CDS or in Open SQL.

Example

This example shows three CDS views, sales\_order, business\_partner, and invoice. The CDS view invoice uses its own association and associations from the other two views in path expressions:

-   The association sales\_order of the CDS view business\_partner is specified as a data source after FROM. A filter condition guarantees that only certain orders can be used as data sources.

-   The separate association invoice\_header is used in a path expression as an operand in the WHERE condition.

-   The association note\_header of the CDS view sales\_order is addressed using the alternative name bpa in business\_partner and defined as an element of the SELECT list. This means this association can also be used in CDS views that use invoice as a data source.

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

[Path Expressions, Use in the SELECT List](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpath_expr_in_colspec_abexa.htm) .

Continue
[ABAP CDS - path\_expr, attributes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_path_expression_attr.htm)
![Example](exa.gif "Example") [ABAP CDS - Joins of Associations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_assoc_join_abexa.htm)