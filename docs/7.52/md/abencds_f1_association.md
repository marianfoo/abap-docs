---
title: "ABAP CDS - SELECT, ASSOCIATION"
description: |
  Syntax ... ASSOCIATION  min..max  TO target AS _assoc ON cond_exp(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conditional_expression.htm)  WITH DEFAULT FILTER cond_exp(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_condi
version: "7.52"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_association.htm"
abapFile: "abencds_f1_association.htm"
keywords: ["select", "do", "while", "if", "case", "try", "class", "data", "abencds", "association"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm) → 

ABAP CDS - SELECT, ASSOCIATION

Syntax

... ASSOCIATION *\[* \[min..max\] *\]* TO target *\[*AS \_assoc*\]* ON [cond\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conditional_expression.htm)
                *\[* WITH DEFAULT FILTER [cond\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conditional_expression.htm) *\]* ...

Extras:

[1\. ... \[min..max\]](#!ABAP_ADDITION_1@1@)
[2\. ... AS \_assoc](#!ABAP_ADDITION_2@2@)
[3\. ... WITH DEFAULT FILTER cond\_exp](#!ABAP_ADDITION_3@3@)

Effect

Defines a [CDS association](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_association_glosry.htm "Glossary Entry") of the name \_assoc in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry"). An association associates the current CDS view as a source data source with the target data source target specified in the definition of the association using an ON condition [cond\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conditional_expression.htm) . A data source target can be a database table defined in ABAP Dictionary, a [classic view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclassical_view_glosry.htm "Glossary Entry"), an [external view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexternal_view_glosry.htm "Glossary Entry"), or a [CDS entity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry").

An association of a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm) in a CDS view can be accessed as follows:

-   By specifying its name in a [path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) in the same statement and in all places where this is documented.

-   If an association is published using a [path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) in the [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list.htm) of the current SELECT statement, the following can use it in their path expressions:

-   Other [CDS views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm)

-   [Open SQL statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_path.htm)

When a CDS view is activated that uses a path expression to access an association or an element, every association of the path expression is transformed to a join expression. Here, the source data source represents the left side and the target data source represents the right side. The ON condition of the association is added to the ON condition of the join. By default, the category of the join is determined by where the [path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) is used:

-   After [FROM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm), it is an inner join (INNER JOIN)

-   In all other locations, it is a left outer join (LEFT OUTER JOIN)

This setting can be overwritten when specifying the association in a path expression using an [attribute](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_path_expression_attr.htm). A path expression in a [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list.htm) that publishes the closing association and is not closed using an element is not defined as a join.

When specifying the ON condition, the following special [rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_on_assoc.htm) apply:

-   The fields of the target data source must be prefixed in the ON condition by the name of the association (prefix \_assoc. separated by a period).

-   If the association in the [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list.htm) of the current SELECT statement is published, the fields of the source data source specified in the ON condition must also be listed in the [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list.htm). This ensures that a join expression can be built from the association (when used in a path expression).

-   To make a reference to an element of the [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list.htm) in the ON condition, the field name can be prefixed with $projection instead of the source data source. In this case, an alternative element name defined using [AS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list_entry.htm) can be specified instead of the field name. If a path expression of the SELECT list is used when the prefix $projection is used in the ON condition, the current association cannot itself be used in the SELECT list, to avoid invalid join expressions.

Notes

-   Associations not listed in the SELECT list can only be used in path expressions of the current SELECT statement.

-   The syntax for defining and using associations is a higher-value wrapping of the syntax for [joins](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_joined_data_source.htm). Using associations instead of directly programming joins makes it easier to read the definition of a CDS view. Associations can be used to model relationships between CDS entities that can be accessed simply using path expressions in [CDS views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) or in [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_path.htm).

-   When a CDS view is activated, a join defined by an association is built for every use in a path expression and not for the definition of the association. No joins are constructed for associations that are not used in their CDS views.

-   If an association is used in a path expression of the SELECT list of the current SELECT statement, a join is defined for the current view. Here, the ON conditions of the association are applied to the join directly. No path expressions are allowed in the ON condition of a join, which means that no reference can be made to a path expression of the SELECT list when using the prefix $projection in the ON condition of an association, if the association is also used here.

-   Associations and [join expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_joined_data_source.htm) can be used in a SELECT statement of a CDS view.

-   Special rules apply to associations in SELECT statements joined with [UNION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_union.htm).

-   [Cyclical dependencies](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_cycle_problems.htm) should be avoided when using associations to prevent problems occurring in mass activations of CDS entities.
    

Addition 1

... \[min..max\]

Effect

Defines the cardinality of the target data source of a CDS view, which is defined with an association ASSOCIATION. The square brackets \[ \] are part of the syntax. For min and max, positive integers (including 0) and asterisks (\*) can be specified:

-   max cannot be 0.

-   An asterisk \* for max means any number of rows.

-   min can be omitted (set to 0 if omitted).

-   min cannot be \*.

-   When an association is used in a [WHERE condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_where_clause.htm), 1 must be specified for max.

If the cardinality is not defined explicitly, the cardinality "to 1" is used implicitly (\[min..1\]).

A cardinality is specified to document the semantics of the data model and, in some database systems, for optimizations. In these database systems, LEFT OUTER JOINs produced by a [path expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) are given the addition TO ONE if an explicit or implicit "to 1" cardinality is used and the addition TO MANY if any other cardinality is used. These additions work in the same way as when they are specified explicitly in [LEFT OUTER JOIN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_joined_data_source.htm). This means that an optimization is attempted and the result can be undefined if the results set does not match the cardinality.

Note

-   To avoid undefined and platform-dependent behavior, the cardinality should always be defined to match the data in question.

-   The specified cardinality is evaluated by the syntax check for paths specified in the CDS DDL of CDS or in Open SQL. A non-matching cardinality usually produces a syntax check warning.

Example

Specifies the cardinality of an association incorrectly. The following CDS view joins the database tables SCARR and SPFLI in an association \_spfli without specifying the cardinality explicitly. The implicitly set cardinality is "to 1". If the association is used in a path specified in the SELECT list, this is instanced in some database systems (for example the [SAP HANA database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhana_database_glosry.htm "Glossary Entry")) as a left outer join using the implicit addition TO ONE. The actual cardinality of the data is, however, TO MANY.

@AbapCatalog.sqlViewName: 'DEMOCDSWRGC'
define view demo\_cds\_wrong\_cardinality
  as select from
    scarr
    association to spfli as \_spfli on
      \_spfli.carrid = scarr.carrid
    {
      scarr.carrid   as carrid,
      scarr.carrname as carrname,
      \_spfli.connid  as connid
    }

The program DEMO\_CDS\_WRONG\_CARDINALITY uses different SELECT statements to access the view. On optimizing database systems, such as the SAP HANA database, the two reads return a different number of rows, potentially an unexpected result.

Example

Specifies the cardinality of an association correctly. The following CDS view joins the database tables SCARR and SPFLI in an association \_spfli while specifying the cardinality explicitly. If the association is used in a path specified in the SELECT list, this is instanced in some database systems (for example the [SAP HANA database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhana_database_glosry.htm "Glossary Entry")) as a left outer join using the implicit addition TO MANY, which matches the actual cardinality of the data.

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

The program DEMO\_CDS\_EXPLICIT\_CARDINALITY uses different SELECT statements to access the view. The two reads return the same number of rows on all database systems.

Addition 2

... AS \_assoc

Effect

Defines the name \_assoc of an association defined using ASSOCIATION of a CDS view. If no name is defined explicitly using AS, \_assoc is set implicitly to the name of the target data source. The name \_assoc must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_general_syntax_rules.htm).

Note

It is advisable to use an underscore \_ as the first character of the association name.

Example

Example of a simple association. The following CDS view provides the same result as the CDS view DEMO\_CDS\_SCARR\_SPFLI in the [joins](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_joined_data_source.htm) example, as shown in the program DEMO\_CDS\_ASSOCIATION using an assertion. Furthermore, the association spfli\_scarr is published to be used from outside in the [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list.htm) by specifying a [path](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) that contains only the name of an association. The program DEMO\_CDS\_ASSOCIATION also shows how the association can be accessed by [specifying a path](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_path.htm) in Open SQL.

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
key \_spfli\_scarr.carrname,
key spfli.connid,
spfli.cityfrom,
spfli.cityto
}    

Example

The following CDS view sales\_order\_invoice\_header returns information about sales invoices and works with the following databases: snwd\_so\_inv\_head, snwd\_so, snwd\_bpa, snwd\_so\_inv\_item.

Two associations are defined:

-   \_buyer stands for a join between the current view and the target data source snwd\_bpa.

-   \_invoice\_items stands for a join between the current view and the target data source snwd\_so\_inv\_item.

The source data source fields used in the ON conditions - node\_key and buyer\_guid - are part of the SELECT list. Here the prefix $projection is used instead of the prefixes snwd\_so\_inv\_head or snwd\_so\_inv\_head.

The association \_buyer is not listed in the SELECT list and can only be used in path expressions of the current SELECT statement. This association can be specified in the WHERE condition due to the cardinality \[1..1\]. The association \_invoice\_items is not accessed in path expressions of the current SELECT statement. However, this association is listed in the SELECT list, which means it can be used in path expressions of other CDS views. This association cannot be specified in a WHERE condition due to the cardinality \[1..\*\].

@AbapCatalog.sqlViewName: 'SALESO\_INVHDR\_VW'
define view sales\_order\_invoice\_header as
  select from snwd\_so\_inv\_head
           inner join snwd\_so
             on snwd\_so\_inv\_head.so\_guid = snwd\_so.node\_key
         association \[1..1\] to snwd\_bpa as \_buyer
           on $projection.buyer\_guid = \_buyer.node\_key
         association \[1..\*\] to snwd\_so\_inv\_item as \_invoice\_items
           on $projection.node\_key = \_invoice\_items.parent\_key
         { key snwd\_so\_inv\_head.node\_key,      //used in assoc \_invoice\_items
               snwd\_so\_inv\_head.buyer\_guid,    //used in assoc \_buyer
               snwd\_so.so\_id as sales\_order\_id,
               \_buyer.bp\_id as buyer\_id,       //from assoc \_buyer
               snwd\_so\_inv\_head.payment\_status,
              @Semantics.currencyCode
               snwd\_so\_inv\_head.currency\_code,
              @Semantics.amount.currencyCode: 'currency\_code'
               snwd\_so\_inv\_head.gross\_amount,
               \_invoice\_items                  //publish assoc \_invoice\_items
         }
          where \_buyer.bp\_role = '001';          //usage of assoc buyer

The CDS view can be accessed in an ABAP program with a simple SELECT statement (Open SQL).

SELECT sales\_order\_id, buyer\_id, payment\_status
       FROM sales\_order\_invoice\_header
       INTO CORRESPONDING FIELDS OF TABLE @itab.

The complexity of the actual query is wrapped transparently in the CDS view for the application programmer. When the view is accessed, the join (defined by the association \_invoice\_items) between snwd\_so\_inv\_head and snwd\_so\_inv\_item is not built, because there are no path expressions that need to access the join.

The CDS view sales\_order\_invoice\_header mentioned above is used as the data source in the definition of the CDS view sales\_order\_invoice\_items. This data source is used to access the published association \_invoice\_items. The elements of the association are accessed in this view. There is no visual indication that it is the result of a join. This join between snwd\_so\_inv\_head and snwd\_so\_inv\_item is created when the CDS view sales\_order\_invoice\_items is activated. The other association \_buyer of the CDS view sales\_order\_invoice\_header cannot be accessed.

@AbapCatalog.sqlViewName: 'SALESO\_INVITM\_VW'
define view sales\_order\_invoice\_items as
  select from sales\_order\_invoice\_header as header
  { header.sales\_order\_id,
    header.\_invoice\_items.inv\_item\_pos as item\_position,
   @Semantics.currencyCode
    header.\_invoice\_items.currency\_code,
   @Semantics.amount.currencyCode: 'currency\_code'
    header.\_invoice\_items.gross\_amount }

Addition 3

... WITH DEFAULT FILTER cond\_exp

Effect

Defines a standard filter condition for a [path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm).

-   If no filter condition is specified when the association is used in an path expression in the attributes [attributes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_path_expression_attr.htm), the condition [cond\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conditional_expression.htm) specified using DEFAULT FILTER is used as the filter condition and applied in an extended condition for the join. The same [rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_filter.htm) apply to the default filter condition as to a filter condition specified as an attribute.

-   If no filter condition is specified when the association is used in a path expression in the attributes [attributes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_path_expression_attr.htm), this condition is used instead of the default filter condition.

Note

When the syntax check evaluates a cardinality specified using \[min..max\], the default filter condition is respected alongside the ON condition.

Continue
[ABAP CDS - path\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm)