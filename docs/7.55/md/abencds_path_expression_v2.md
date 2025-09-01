  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_operands_and_expr_v2.htm) → 

CDS DDL - CDS View Entity, path\_expr

Syntax

... *\[*source.*\]*\_assoc1*\[* [parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_parameters_v2.htm)*\]**\[*[attributes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expr_attr_v2.htm)*\]*
           *\[*.\_assoc2*\[* [parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_parameters_v2.htm)*\]**\[* [attributes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expr_attr_v2.htm)*\]* ... *\]* ...

Effect

Specifies an [SQL path expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_path_expression_glosry.htm "Glossary Entry") that can be used in a SELECT statement of a [CDS view entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_view_glosry.htm "Glossary Entry"). A path expression of the [CDS DDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddl_glosry.htm "Glossary Entry") is a sequence of [CDS associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_glosry.htm "Glossary Entry") separated by periods (.) whose names are specified using \_assoc1, \_assoc2, and so on. If the first CDS association is exposed in another CDS entity, the name of this CDS entity can be specified as source. in front of the path expression.

The first CDS association of a path expression must be either defined in the current CDS view entity, or exposed as an element of the SELECT list or of the [element list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_hiera_element_list.htm) in a CDS view entity or CDS hierarchy that is a data source of the current view.

All further CDS associations must be exposed in the [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") of the directly prefixed CDS association in the path expression. It is not possible to use a CDS association in a path expression that is defined in a [CDS abstract entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry").

[attributes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expr_attr_v2.htm) can be used to specify attributes in angle brackets after every CDS association. These attributes define the following further properties of this section of the path expression:

-   [Cardinality](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expr_card_v2.htm)

-   [Join type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expr_jointype_v2.htm) implemented when used

-   [Filter conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_filter_v2.htm)

If the association target of a specified CDS association is a CDS entity with [input parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_param.htm), then actual parameters must be passed to them, using [parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_parameters_v2.htm) after the name \_assoc. Only in one use case, it is not possible to specify values for the actual parameters, namely when a CDS association is exposed in a path expression as an [element](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_entry_v2.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_v2.htm) list.

Use of Path Expressions

Path expressions can be used as follows in the CDS DDL in ABAP CDS:

-   They can [expose](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_association_v2.htm) their final CDS associations as [elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_entry_v2.htm) of [SELECT lists](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_v2.htm) for use in other CDS entities or in ABAP SQL.

-   Path expressions with CDS associations whose [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") is not an [CDS abstract entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry") can be used as follows:

-   To specify the [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") of the final CDS association as the data source [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v2.htm) after [FROM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v2.htm). The path expression represents an [inner join](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninner_join_glosry.htm "Glossary Entry") by default.

-   To specify an element .element of the [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") of the last CDS association as an [element](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_entry_v2.htm) of a [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_v2.htm). The path expression represents a [left outer join](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenleft_outer_join_glosry.htm "Glossary Entry") by default.

-   To specify an element .element of the [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") of the last CDS association as an operand of [WHERE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_where_clause_v2.htm), [HAVING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_having_clause_v2.htm), or [WHEN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_searched_case_expr_v2.htm) conditions. The path expression represents a [left outer join](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenleft_outer_join_glosry.htm "Glossary Entry") by default.

-   To specify an element .element of the [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") of the last CDS association after GROUP BY. The path expression represents a [left outer join](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenleft_outer_join_glosry.htm "Glossary Entry") by default.

-   To specify an element .element of the [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") of the last CDS association as an operand of an [aggregate expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_aggregate_functions_v2.htm), a [built-in function](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_builtin_functions_v2.htm), a [case expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_case_expression_v2.htm), or a [cast expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cast_expression_v2.htm). The path expression represents a [left outer join](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenleft_outer_join_glosry.htm "Glossary Entry") by default.

In the case of self associations in which the [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") is the same as the [association source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_source_glosry.htm "Glossary Entry"), these usages are not possible in the CDS entity where they are defined.

For a non-aggregated element of a SELECT list that contains [aggregate expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_aggregate_functions_v2.htm), as well as in a WHERE and HAVING condition, the result of the path expression must be unique. This means that the [cardinality](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencardinality_glosry.htm "Glossary Entry") of all CDS associations used must be either to-one or the path expression can contain only [filter conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expr_attr_v2.htm) that are declared as unique using the addition 1:.

When a CDS entity with a path expression is accessed, the following is evaluated:

-   The joins defined by the CDS associations, from left to right.

-   All other conditions of the CDS entities involved.

The path expression addresses the full result of this evaluation or a single element .element.

Hints

-   The most simple path expression is the name of a single CDS association.

-   For joins of CDS associations used in path expressions, note that their left side is always the CDS entity that exposes the CDS association. This applies particularly to CDS associations that are exposed in data sources of CDS entities and passed on.

-   CDS DDL path expressions can also be used in the ABAP [CDS DCL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_glosry.htm "Glossary Entry") of ABAP CDS to specify [conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_role_conditions.htm).

-   A CDS association whose [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") does not expose a CDS association cannot be followed by any further associations in a path expression. More specifically, for CDS associations whose association targets are DDIC database tables or DDIC views, no further CDS associations can be specified in a path expression.

-   When the CDS associations of the path expressions of a view are implemented as joins, they are automatically mapped to as few join expressions as possible. CDS associations with semantically identical filter conditions are automatically summarized into one single join expression.

-   Path expressions with CDS associations whose [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") is an [CDS abstract entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry") cannot be used anywhere where they could produce instances of join expressions.

Example

The following CDS view entity contains the simple path expression \_scarr\[inner\].carrname in its SELECT list. The attribute [INNER](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expr_attr_v2.htm) controls the [join type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenjoin_type_glosry.htm "Glossary Entry"). The program DEMO\_FROM\_JOIN\_TO\_ASSOC\_VE demonstrates that this view returns the same result as a directly programmed inner join in ABAP CDS or in ABAP SQL.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_JOIN2\_VE
  as select from spfli
  association to scarr as \_scarr on spfli.carrid = \_scarr.carrid
{
  key carrid,
      \_scarr\[inner\].carrname as carrier,
      spfli.connid           as flight,
      spfli.cityfrom         as departure,
      spfli.cityto           as arrival
}

Example

The CDS view entity DEMO\_SALES\_CDS\_PATH\_EXPR uses its own association and associations from other CDS entities in path expressions:

-   The CDS association \_SalesOrder of the DDIC-based view DEMO\_SALES\_CDS\_SO\_I is specified as a data source after FROM. A filter condition guarantees that only certain orders can be used as data sources.

-   The CDS association invoice\_header, which is defined by the view DEMO\_SALES\_CDS\_PATH\_EXPR itself, is used in a path expression as an operand in the WHERE condition.

-   The CDS association \_Buyer of the CDS view DEMO\_SALES\_CDS\_SO is exposed via a path expression in the SELECT list. This means that this CDS association can also be used in CDS view entities that use DEMO\_SALES\_CDS\_PATH\_EXPR as a data source.

@AccessControl.authorizationCheck: #CHECK
define view entity DEMO\_SALES\_CDS\_PATH\_EXPR
  as select from DEMO\_SALES\_CDS\_SO\_I.\_SalesOrder\[
                 lifecycle\_status <> 'C' and lifecycle\_status <> 'X'\]
  association \[0..1\] to demo\_so\_inv\_he as \_invoice\_header
    on DEMO\_SALES\_CDS\_SO.id = \_invoice\_header.buyer\_id
  {
    key so\_key as soKey,
        lifecycle\_status,
        \_invoice\_header.dunning\_level,
        demo\_sales\_cds\_so.\_Buyer,
        DEMO\_SALES\_CDS\_SO.buyer\_id,
        DEMO\_SALES\_CDS\_SO.id
  }
  where
    \_invoice\_header.dunning\_level > '0'

Executable Example

[Path Expressions, Use in the SELECT List](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpath_expr_in_colspec_abexa.htm)

Continue
[CDS DDL - CDS View Entity, path\_expr, attributes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expr_attr_v2.htm)
![Example](exa.gif "Example") [CDS DDL - CDS View Entity, Joins of CDS Associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_assoc_join_v2_abexa.htm)