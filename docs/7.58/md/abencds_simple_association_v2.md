---
title: "CDS DDL - CDS View Entity, ASSOCIATION"
description: |
  Syntax ... ASSOCIATION  cardinality(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cardinality_v2.htm) TO target AS _assoc ON cds_cond(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conditional_expression_v2.htm) WITH DEFAULT
version: "7.58"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_association_v2.htm"
abapFile: "abencds_simple_association_v2.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "abencds", "simple", "association"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - CDS View Entity, SELECT, Associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_association_v2.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20ASSOCIATION%2C%20ABENCDS_SIMPLE_ASSOCIATION_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

CDS DDL - CDS View Entity, ASSOCIATION

Syntax

... ASSOCIATION *\[* [cardinality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cardinality_v2.htm)*\]* *\[*TO*\]* target *\[*AS \_assoc*\]* ON [cds\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conditional_expression_v2.htm)
                *\[*WITH DEFAULT FILTER [cds\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conditional_expression_v2.htm)*\]* ...

Additions:

[1\. ... cardinality](#!ABAP_ADDITION_1@1@)
[2\. ... AS \_assoc](#!ABAP_ADDITION_2@2@)
[3\. ... ON cds\_cond](#!ABAP_ADDITION_3@3@)
[4\. ... WITH DEFAULT FILTER cds\_cond](#!ABAP_ADDITION_4@4@)

Effect

Defines a [CDS association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_association_glosry.htm "Glossary Entry") with the name \_assoc in a [SELECT statement](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry"). A CDS association associates the current CDS view entity as [association source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_source_glosry.htm "Glossary Entry") with the [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry") target using an ON condition [cds\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conditional_expression_v2.htm). The association target target can be a [DDIC database table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_db_table_glosry.htm "Glossary Entry"), another [CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), a [CDS projection view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_projection_view_glosry.htm "Glossary Entry"), a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry"), a [table function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_function_glosry.htm "Glossary Entry"), a [hierarchy](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhierarchy_glosry.htm "Glossary Entry"), an [abstract entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry"), or a [custom entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_custom_entity_glosry.htm "Glossary Entry"). If target is a [non-SQL CDS entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_non_sql_entity_glosry.htm "Glossary Entry"), the way the CDS association can be used is restricted.

Usage of associations in the SELECT list: All use cases of a CDS association are described in topic [CDS DDL - CDS associations and joins](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_assoc_join_v2.htm).

Associations and joins: in some cases, a CDS association is internally transformed into a join. All use cases of CDS associations and information about the joins created on the database are described in topic [CDS DDL - CDS associations and joins](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_assoc_join_v2.htm).

The automatically generated join type can be changed by specifying a different join type in the attributes of a path expression, see topic [CDS DDL - CDS View Entity, path\_expr, join\_type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expr_jointype_v2.htm).

Limitations

-   CDS associations whose [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry") is a [non-SQL CDS entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_non_sql_entity_glosry.htm "Glossary Entry") cannot be used anywhere where they could produce instances of join expressions.
-   CDS associations whose association target is a CDS projection view cannot be used in [path expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v2.htm). It is also not possible to add a field from the association target to the element list.

Hints

-   CDS associations and [join expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_joined_data_source_v2.htm) can both be used in a SELECT statement of a CDS view entity. A path expression can even consist of a mix of joins and associations. When accessed, the associations and joins are merged.
-   Special rules apply to CDS associations in SELECT statements with [set operators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_set_operators.htm).
-   [Cyclical dependencies](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cycle_problems.htm) should be avoided when using CDS associations to prevent problems occurring in mass activations of CDS entities.
-   Exposed [self associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenself_association_glosry.htm "Glossary Entry") can be specified as [hierarchy associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhierarchy_association_glosry.htm "Glossary Entry") in [CDS hierarchies](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") or in the ABAP SQL [hierarchy generator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_hierarchy_generator.htm).
-   A self association whose association target is the same as the association source cannot be created as a join in the CDS view entity where it is defined. So it is not allowed to use a self association in a position where a join is generated.

Example

The CDS view entity DEMO\_SALES\_CDS\_INV\_HEADER shown below returns information about sales invoices and works with the DDIC database tables DEMO\_SO\_INV\_HE, DEMO\_SALES\_ORDER, DEMO\_SALES\_BUPA, and DEMO\_SALES\_SO\_I.

Two CDS associations are defined:

-   \_buyer stands for a join between the current view and the [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry") DEMO\_SALES\_BUPA.
-   \_invoice\_items stands for a join between the current view and the [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry") DEMO\_SALES\_SO\_I.

The [association source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_source_glosry.htm "Glossary Entry") fields used in the ON conditions, buyer\_id and so\_key, are part of the SELECT list.

-   The CDS association \_buyer is not exposed in the SELECT list and can only be used in path expressions of the current SELECT statement. This association can be specified in the WHERE condition due to the cardinality to-one.
-   The CDS association \_invoice\_items is not accessed in path expressions of the current SELECT statement. However, this association is exposed in the SELECT list, which means it can be used in path expressions of other CDS views. This association cannot be specified in a WHERE condition due to the cardinality to-many.
    
    @AccessControl.authorizationCheck: #NOT\_REQUIRED
    define view entity demo\_sales\_cds\_inv\_header
      as select from demo\_so\_inv\_he
        inner join   demo\_sales\_order as \_inner
          on demo\_so\_inv\_he.so\_key = \_inner.so\_key
      association of many to one demo\_sales\_bupa as \_buyer
        on demo\_so\_inv\_he.buyer\_id = \_buyer.id
      association of one to one demo\_sales\_so\_i as \_invoice\_items
        on $projection.so\_key = \_invoice\_items.so\_item\_key
      {
            //\_buyer
        key \_buyer.id,
            \_buyer.birth\_name,
            \_buyer.family\_name,
            //\_inner
            \_inner.lifecycle\_status,
            //demo\_so\_inv\_he
            demo\_so\_inv\_he.so\_key,
            demo\_so\_inv\_he.gross\_amount,
            demo\_so\_inv\_he.net\_amount,
            demo\_so\_inv\_he.tax\_amount,
            demo\_so\_inv\_he.currency\_code,
            //\_invoice\_items
            \_invoice\_items
      }
      where \_buyer.title = 'Mr.'
    

The CDS view entity can be accessed in an ABAP program with a simple ABAP SQL SELECT statement.

SELECT id, birth\_name, family\_name
       FROM demo\_sales\_cds\_inv\_header
       INTO TABLE @DATA(itab).

The complexity of the actual query is wrapped transparently in the CDS view entity for the application programmer. When the view is accessed, the join (defined by the CDS association \_invoice\_items) between DEMO\_SO\_INV\_HE and DEMO\_SALES\_SO\_I is not built, because there are no path expressions that need to access the join.

The CDS view entity DEMO\_SALES\_CDS\_INV\_HEADER shown above is used as the data source in the definition of the CDS view entity DEMO\_SALES\_CDS\_SO\_ITEM. This data source is used to access the [exposed](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_association_v2.htm) CDS association \_invoice\_items. The elements of the CDS association are accessed in this view. There is no visual indication that it is the result of a join. This join between DEMO\_SALES\_CDS\_INV\_HEADER and DEMO\_SALES\_SO\_I is created when the CDS view entity DEMO\_SALES\_CDS\_SO\_ITEM is activated. The other CDS association \_buyer of the CDS view entity DEMO\_SALES\_CDS\_INV\_HEADER cannot be accessed.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_SALES\_CDS\_SO\_ITEM
  as select from
    demo\_sales\_cds\_inv\_header
    {
      key id,
          birth\_name,
          family\_name,
          lifecycle\_status,
          so\_key,
          net\_amount,
          tax\_amount,
          currency\_code,
          /\* Associations \*/
          \_invoice\_items.material,
          \_invoice\_items.posnr
    }

Addition 1   

... cardinality

Effect

A [cardinality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencardinality_glosry.htm "Glossary Entry") to express the relation between the rows of the data sources can optionally be specified. The following options are available:

-   The cardinality can be specified in words, for example:
    
    association of many to many AssocTarget as Name on CdsCond
    
    Note that the syntax addition TO is left out in this case.
    
    This is the recommended option.
    
-   The cardinality of the association target can be specified in numbers in square brackets, for example:
    
    association\[0..1\] to AssocTarget as Name on CdsCond
    
    Note that the association target is specified after TO in this case.
    
-   No cardinality can be specified, as in the following example:
    
    association to AssocTarget as Name on CdsCond
    
    Note that the association target is specified after TO in this case.
    
    If the cardinality is not defined explicitly, the cardinality many-to-one is used implicitly.
    

For further details, see topic [CDS DDL - CDS View Entity, cardinality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cardinality_v2.htm).

Addition 2   

... AS \_assoc

Effect

Defines the name \_assoc of a CDS association. If no name is defined explicitly using AS, \_assoc is set implicitly to the name of the [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry"). The name \_assoc must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_general_syntax_rules.htm).

Hint

It is recommended that an underscore \_ is used as the first character of the CDS association name.

Addition 3   

... ON cds\_cond

Effect

When specifying the ON condition, the following rules apply:

-   Fields of the [association source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_source_glosry.htm "Glossary Entry") must be prefixed by the name of the data source. If an alias name was assigned, then the alias name must be used as prefix.
-   The fields of the [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry") must be prefixed by the name of the CDS association (prefix \_assoc. separated by a period).
-   Fields that are listed in the SELECT list of the current view entity must be prefixed with $projection.
-   If the prefix $projection refers to a path expression, a literal, or an [expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_expressions_v2.htm) of the SELECT list, then the current CDS association cannot be exposed in the SELECT list to avoid invalid join expressions.
-   If the CDS association is exposed in the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_v2.htm) of the current SELECT statement, the fields of the [association source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_source_glosry.htm "Glossary Entry") specified in the ON condition must also be listed in the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_v2.htm). This ensures that a join expression can be built from the CDS association (when used in a path expression).

The following rules apply to the operands and syntax of the ON condition:

-   All relational operators are allowed. That means all comparison operators are allowed as well as BETWEEN, LIKE, IS \[NOT\] NULL, and IS \[NOT\] INITIAL.
-   The Boolean operators NOT, AND, and OR are allowed.
-   lhs can be a [field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_field_v2.htm) of one of the two data sources [data\_source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v2.htm) of the CDS association. If a comparison operator is used as operator, then lhs can also be an [untyped literal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_untyped_literal_v2.htm).
    
    Note: [typed literals](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_typed_literal_v2.htm) are currently not supported in this position.
    
-   rhs can be a [field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_field_v2.htm) of both data sources [data\_source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v2.htm) of the CDS association, an [untyped literal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_untyped_literal_v2.htm), a [parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_parameter_v2.htm), or a [session variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_session_variable_v2.htm). Exception: if the operator LIKE is used, then rhs must be a character literal.
    
    Note: [typed literals](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_typed_literal_v2.htm) are currently not supported in this position.
    
-   Path expressions are not allowed.
-   CDS DDL expressions are not allowed.

Special rules apply when the operands of the ON condition are [CDS enumerated elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_element_glosry.htm "Glossary Entry"). These rules are described in the topic [CDS TDL - Using CDS Enumerated Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_use_enum_type.htm).

Addition 4   

... WITH DEFAULT FILTER cds\_cond

Effect

Defines a standard filter condition for a [path expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v2.htm).

-   If no [filter condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_filter_v2.htm) is specified when the CDS association is used in a path expression, the condition [cds\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conditional_expression_v2.htm) specified using DEFAULT FILTER is used as the filter condition and applied in an extended condition for the join. The same [rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_filter_v2.htm) apply to the default filter condition as to a filter condition specified as an attribute.
-   If a [filter condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_filter_v2.htm) is specified when the CDS association is used in a path expression, this condition is used instead of the default filter condition.

Hint

When the syntax check evaluates a cardinality specified using \[min..max\], the default filter condition is respected alongside the ON condition.

Continue
[CDS DDL - CDS View Entity, cardinality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cardinality_v2.htm)