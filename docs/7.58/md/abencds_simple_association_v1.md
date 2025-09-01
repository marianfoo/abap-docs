---
title: "CDS DDL - DDIC-Based View, ASSOCIATION"
description: |
  Syntax ... ASSOCIATION  min..max  TO target AS _assoc ON cds_cond(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conditional_expression_v1.htm)  WITH DEFAULT FILTER cds_cond(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conditio
version: "7.58"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_association_v1.htm"
abapFile: "abencds_simple_association_v1.htm"
keywords: ["select", "do", "while", "if", "case", "try", "class", "data", "abencds", "simple", "association"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT, Associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_association_v1.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20ASSOCIATION%2C%20ABENCDS_SIMPLE_ASSOCIATION_V1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

CDS DDL - DDIC-Based View, ASSOCIATION

Syntax

... ASSOCIATION *\[* \[min..max\] *\]* TO target *\[*AS \_assoc*\]* ON [cds\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conditional_expression_v1.htm)
                *\[* WITH DEFAULT FILTER [cds\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conditional_expression_v1.htm) *\]* ...

Additions:

[1\. ... \[min..max\]](#!ABAP_ADDITION_1@1@)
[2\. ... AS \_assoc](#!ABAP_ADDITION_2@2@)
[3\. ... WITH DEFAULT FILTER cds\_cond](#!ABAP_ADDITION_3@3@)

Effect

Defines a [CDS association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_association_glosry.htm "Glossary Entry") with the name \_assoc in a [SELECT statement](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v1.htm) of a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). A CDS association associates the current CDS view as [association source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_source_glosry.htm "Glossary Entry") with the [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry") target using an ON condition [cds\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conditional_expression_v1.htm). The association target can be a [CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), a [CDS table function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_table_function_glosry.htm "Glossary Entry"), a [CDS hierarchy](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_hierarchy_glosry.htm "Glossary Entry"), another CDS custom entity, a [CDS abstract entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry"), a [DDIC database table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_db_table_glosry.htm "Glossary Entry"), a [DDIC view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_view_glosry.htm "Glossary Entry"), or a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). If target is a [non-SQL CDS entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_non_sql_entity_glosry.htm "Glossary Entry"), the way the CDS association can be used is restricted.

A CDS association of a [SELECT statement](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v1.htm) in a CDS view can be accessed as follows:

-   By specifying its name in a [path expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v1.htm) in the same statement and in all places where this is documented. A CDS association whose [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry") is a [non-SQL CDS entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_non_sql_entity_glosry.htm "Glossary Entry") can only be [exposed](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_association_v1.htm) in the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_v1.htm).
-   If a CDS association whose [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry") is not a CDS abstract entity or a CDS custom entity is exposed using a [path expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v1.htm) in the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_v1.htm) of the current SELECT statement, the following can use it in their path expressions:
    -   Other [CDS views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v1.htm)
    -   [ABAP SQL statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_path.htm)
-   Exposed [self associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenself_association_glosry.htm "Glossary Entry") can be specified as [hierarchy associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhierarchy_association_glosry.htm "Glossary Entry") in [CDS hierarchies](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") or in the ABAP SQL [hierarchy generator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_hierarchy_generator.htm).

When a CDS view is activated that uses a path expression to access a CDS association or an element, or when a path expression is used for access in ABAP SQL, every CDS association of the path expression is transformed to a [join expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjoin_expression_glosry.htm "Glossary Entry"). Here, the [association source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_source_glosry.htm "Glossary Entry") represents the left side and the [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry") represents the right side. The ON condition of the association is added to the ON condition of the join. By default, the [join type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjoin_type_glosry.htm "Glossary Entry") is determined by where the [path expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v1.htm) is used:

-   After [FROM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v1.htm), it is an [inner join](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninner_join_glosry.htm "Glossary Entry") inner join (INNER JOIN)
-   In all other locations, it is a [left outer join](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenleft_outer_join_glosry.htm "Glossary Entry") (LEFT OUTER JOIN)

This setting can be overwritten by specifying the [join type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expr_jointype_v1.htm) when using the CDS association in a path expression. A path expression in a [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_v1.htm) that [exposes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_association_v1.htm) its closing CDS association is not defined as a join. A self association whose [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry") is the same as the [association source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_source_glosry.htm "Glossary Entry") cannot be created as a join in the CDS view where it is defined.

When specifying the ON condition, for the operands, [general](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cond_expr_operands_v1.htm) and the following [special rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cond_expr_on_assoc_v1.htm) apply:

-   The fields of the [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry") must be prefixed in the ON condition by the name of the CDS association (prefix \_assoc. separated by a period).
-   If the CDS association in the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_v1.htm) of the current SELECT statement is exposed, the fields of the [association source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_source_glosry.htm "Glossary Entry") specified in the ON condition must also be listed in the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_v1.htm). This ensures that a join expression can be built from the CDS association (when used in a path expression).
-   To make a reference to an element of the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_v1.htm) in the ON condition, the field name can be prefixed with $projection instead of the [association source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_source_glosry.htm "Glossary Entry"). In this case, an alternative element name defined using [AS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_entry_v1.htm) can be specified instead of the field name. If a path expression of the SELECT list is used when the prefix $projection is used in the ON condition, the current CDS association cannot itself be used in the SELECT list, to avoid invalid join expressions.

Hints

-   CDS associations not listed in the SELECT list can only be used in path expressions of the current SELECT statement.
-   When a CDS view is activated, a join defined by a CDS association is built for every use in a path expression and not for the definition of the CDS association. No joins are constructed for CDS associations that are not used in their CDS views.
-   If a CDS association is used in a path expression of the SELECT list of the current SELECT statement, a join is defined for the current view. Here, the ON conditions of the CDS association are applied to the join directly. No path expressions are allowed in the ON condition of a join, which means that no reference can be made to a path expression of the SELECT list when using the prefix $projection in the ON condition of a CDS association, if CDS the association is also used here.
-   CDS associations and [join expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_joined_data_source_v1.htm) can be used in a SELECT statement of a CDS view. When the join expressions defined by the CDS associations are used in path expressions, all joins are joined.
-   Special rules apply to CDS associations in SELECT statements joined with [UNION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_union_v1.htm).
-   [Cyclical dependencies](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cycle_problems.htm) should be avoided when using CDS associations to prevent problems occurring in mass activations of CDS entities.
-   CDS associations whose [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry") is a [non-SQL CDS entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_non_sql_entity_glosry.htm "Glossary Entry") cannot be used anywhere where they could produce instances of join expressions.
-   The syntax for defining and using CDS associations is a higher-value wrapping of the syntax for [joins](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_joined_data_source_v1.htm). Using CDS associations instead of directly programming joins makes it easier to read the definition of a CDS view. CDS associations can be used to model relationships between CDS entities that can be accessed simply using path expressions in [CDS views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v1.htm) or in [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_path.htm).

Addition 1   

... \[min..max\]

Effect

Defines the [cardinality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencardinality_glosry.htm "Glossary Entry") of the [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry") of a CDS view, which is defined with a CDS association ASSOCIATION. The square brackets \[ \] are part of the syntax. For min and max, positive integers (including 0) and asterisks (\*) can be specified:

-   max cannot be 0.
-   An asterisk \* for max means any number of rows.
-   min can be omitted (set to 0 if omitted).
-   min cannot be \*.
-   When a CDS association is used in a [WHERE condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_where_clause_v1.htm), 1 must be specified for max.

If the cardinality is not defined explicitly, the cardinality to-one is used implicitly (\[min..1\]).

A cardinality is specified to document the semantics of the data model and, in some database systems, for optimizations. In these database systems, left outer joins (LEFT OUTER JOIN) produced by [path expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v1.htm) are given the addition TO ONE if an explicit or implicit to 1 cardinality is used and the addition TO MANY if any other cardinality is used. These additions work in the same way as when they are specified explicitly in [LEFT OUTER JOIN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_joined_data_source_v1.htm). This means that an optimization is attempted and the result can be undefined if the result set does not match the cardinality.

Hints

-   To avoid undefined and platform-dependent behavior, the cardinality should always be defined to match the data in question.
-   The specified cardinality is evaluated by the syntax check for paths specified in the CDS DDL of CDS or in ABAP SQL. A non-matching cardinality usually produces a syntax check warning.

Example

Specifies the cardinality of a CDS association incorrectly. The following CDS view joins the DDIC database tables SCARR and SPFLI in a CDS association \_spfli without specifying the cardinality explicitly. The implicitly set cardinality is to 1. If the CDS association is used in a path specified in the SELECT list, this is implemented in some database systems (for example the [SAP HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry")) as a left outer join using the implicit addition TO ONE. The actual cardinality of the data is, however, TO MANY.

@AbapCatalog.sqlViewName: 'DEMOCDSWRGC'
define view demo\_cds\_wrong\_cardinality
  as select from scarr
  association to spfli as \_spfli on \_spfli.carrid = scarr.carrid
{
  key scarr.carrid   as carrid,
      scarr.carrname as carrname,
      \_spfli.connid  as connid
}

The class CL\_DEMO\_CDS\_WRONG\_CARDINALITY uses different SELECT statements to access the view. On optimizing database systems, such as the SAP HANA database, the two reads return a different number of rows, potentially an unexpected result.

Example

Specifies the cardinality of a CDS association correctly. The following CDS view joins the DDIC database tables SCARR and SPFLI in a CDS association \_spfli while specifying the cardinality explicitly. If the CDS association is used in a path specified in the SELECT list, this is implemented in some database systems (for example the [SAP HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry")) as a left outer join using the implicit addition TO MANY, which matches the actual cardinality of the data.

@AbapCatalog.sqlViewName: 'DEMOCDSEXPC'
define view demo\_cds\_explicit\_cardinality
  as select from
    scarr
    association \[1..\*\] to spfli as \_spfli on
      \_spfli.carrid = scarr.carrid
    {
      scarr.carrid   as carrid,
      scarr.carrname as carrname,
      \_spfli.connid  as connid
    }

The class CL\_DEMO\_CDS\_EXPLICIT\_CRDNLTY uses different SELECT statements to access the view. The two reads return the same number of rows on all database systems.

Addition 2   

... AS \_assoc

Effect

Defines the name \_assoc of a CDS association of a CDS view defined using ASSOCIATION. If no name is defined explicitly using AS, \_assoc is set implicitly to the name of the [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry"). The name \_assoc must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_general_syntax_rules.htm).

Hint

It is advisable to use an underscore \_ as the first character of the CTE CDS association name.

Example

Example of a simple CDS association. The following CDS view provides the same result as the CDS view DEMO\_CDS\_SCARR\_SPFLI in the [joins](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_joined_data_source_v1.htm) example, as shown in the class CL\_DEMO\_CDS\_ASSOCIATION using an assertion. Furthermore, the CDS association spfli\_scarr is [exposed](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_association_v1.htm) to be used from outside in the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_v1.htm) by specifying a [path](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v1.htm) that contains only the name of a CDS association. The class CL\_DEMO\_CDS\_ASSOCIATION also shows how the CDS association can be accessed by [specifying a path](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_path.htm) in ABAP SQL.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_ASSOC'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_association(
    \_spfli\_scarr,
    id,
    carrier,
    flight,
    departure,
    destination
  )
  as select from
    spfli
    association \[1..1\] to scarr as \_spfli\_scarr on
      $projection.carrid = \_spfli\_scarr.carrid
    {
          \_spfli\_scarr,
      key spfli.carrid,
      key \_spfli\_scarr\[inner\].carrname,
      key spfli.connid,
          spfli.cityfrom,
          spfli.cityto
    }

Addition 3   

... WITH DEFAULT FILTER cds\_cond

Effect

Defines a standard filter condition for a [path expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v1.htm).

-   If no [filter condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_filter_v1.htm) is specified when the CDS association is used in an path expression, the condition [cds\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conditional_expression_v1.htm) specified using DEFAULT FILTER is used as the filter condition and applied in an extended condition for the join. The same [rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cond_expr_filter_v1.htm) apply to the default filter condition as to a filter condition specified as an attribute.
-   If a [filter condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_filter_v1.htm) is specified when the CDS association is used in a path expression, this condition is used instead of the default filter condition.

Hint

When the syntax check evaluates a cardinality specified using \[min..max\], the default filter condition is respected alongside the ON condition.