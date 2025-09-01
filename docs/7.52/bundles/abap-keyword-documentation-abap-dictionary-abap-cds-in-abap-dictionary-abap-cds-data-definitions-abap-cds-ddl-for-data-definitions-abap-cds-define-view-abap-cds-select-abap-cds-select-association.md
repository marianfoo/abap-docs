# ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, ASSOCIATION

Included pages: 5



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.52](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abencds_f1_association.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_association.htm)
- [abencds_f1_path_expression.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm)
- [abencds_path_expression_attr.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_path_expression_attr.htm)
- [abencds_assoc_join_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_assoc_join_abexa.htm)

**Bundle Contains**: 4 documentation pages
**Version**: ABAP 7.52
**Generated**: 2025-09-01T11:25:46.359Z

---

### abencds_f1_association.htm

> **📖 Official SAP Documentation**: [abencds_f1_association.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_association.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

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



**📖 Source**: [abencds_f1_association.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_association.htm)

### abencds_f1_path_expression.htm

> **📖 Official SAP Documentation**: [abencds_f1_path_expression.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

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



**📖 Source**: [abencds_f1_path_expression.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm)

### abencds_path_expression_attr.htm

> **📖 Official SAP Documentation**: [abencds_path_expression_attr.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_path_expression_attr.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm) →  [ABAP CDS - SELECT, ASSOCIATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_association.htm) →  [ABAP CDS - path\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) → 

ABAP CDS - path\_expr, attributes

Syntax

... \[ *\[*1*|*\*:*\]* *\[*INNER*|**{*LEFT OUTER*}* *\[*WHERE*\]**\]* *\[* [cond\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conditional_expression.htm)*\]* \] ...

Extras:

[1\. ... 1*|*\*:](#!ABAP_ADDITION_1@1@)
[2\. ... INNER*|**{*LEFT OUTER*}* *\[*WHERE*\]*](#!ABAP_ADDITION_2@2@)
[3\. ... cond\_expr](#!ABAP_ADDITION_3@3@)

Effect

For every association [\_assoc](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_association.htm) of a [path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry"), attributes for this part of the path expression can be defined in square brackets \[ \]. The following can be done using these attributes:

-   The polyvalence of the section can be declared.

-   The type of the join expression can be specified.

-   A filter condition cond\_expr can be specified.
    

Addition 1

... 1*|*\*:

Effect

Declaration of the polyvalence of the current association:

-   If the attribute 1: is specified, the current association is declared as not polyvalent.

-   If the attribute \*: is specified, the current association is declared as polyvalent.

The addition 1: makes it possible to use filter conditions in path expressions, which are used in [WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_where_clause.htm) clauses or [HAVING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_having_clause.htm) clauses. In a clause like this, it overwrites the cardinality of the [association](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_association.htm). (The variant of the path expression can, however, be affected differently on certain database systems.)

The addition 1: or \*: cannot be specified as the only addition in square brackets.

Note

The addition 1: prevents a syntax error, if a path specified with filter conditions or with a quantity value cardinality is used in a [WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_where_clause.htm) clause or [HAVING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_having_clause.htm) clause. It is not possible at runtime, however, to check whether the required uniqueness is achieved by the condition.

Addition 2

... INNER*|**{*LEFT OUTER*}* *\[*WHERE*\]*

Effect

Defines the type of join expression where the current expression is implemented:

-   INNER is an inner join

-   LEFT OUTER is a left outer join

If the type of join expression is not specified explicitly, the type depends on the place where the path expression is used:

-   After [FROM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm), it is an inner join (INNER JOIN)

-   In all other locations, it is a left outer join (LEFT OUTER JOIN)

If the type of join expression is defined before a filter condition cond\_expr, the addition must be specified before the addition WHERE. If this is not the case, WHERE cannot be specified.

Note

The variants of the joins can be seen in in the display of the SQL DDL statement in the DDL source code editor in [ADT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadt_glosry.htm "Glossary Entry").

Executable Example

[Joins of Associations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_assoc_join_abexa.htm)

Addition 3

... cond\_expr

Effect

[Filter condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfilter_condition_glosry.htm "Glossary Entry") for the current association. A filter condition is a condition [cond\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conditional_expression.htm) implemented as an expanded condition for the join when resolving the association to the join in question. Special [rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_filter.htm) apply when specifying the condition.

If no filter condition is specified in the path expression, any default filter condition specified for the [association](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_association.htm) is used.

Note

In most cases, a filter condition modifies the join expression defined for an association of a path expression on the database. This means that a separate join expression is defined for each association with a filter condition by default. This is not necessary, however, if an association is used more than once and the same filter condition is specified. This is why the [ABAP annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencore_annotation_glosry.htm "Glossary Entry") [AbapCatalog.compiler.compareFilter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm) can be used to configure whether the filter conditions of a multiple association are compared semantically for the path expressions defined as joins when a view is activated . If the filter condition matches, the associated join expression is created only once, which generally improves performance. In most cases, it is best to use the annotation and propose it when creating a CDS view in the ADT. The results sets of the two configurations can, however, differ.

Example

The following three views contain path expressions with filter conditions in their SELECT list that can be defined in join expressions when activated.

@AbapCatalog.sqlViewName: 'DEMOCDSASSFI1'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_assoc\_filter1  
   as select from
    demo\_join1
    association to Demo\_Cds\_Assoc\_Join2 as \_demo\_join2 on
      \_demo\_join2.d = demo\_join1.d
    {
      \_demo\_join2\[  
        inner where d = '1' \].d                         as d\_2,
      \_demo\_join2\[  
        inner where d = '1' \].e                         as e\_2,
      \_demo\_join2\[  
        inner where d = '1' \].\_demo\_join3\[  
                                inner where i = '2' \].i as i\_3,
      \_demo\_join2\[  
        inner where d = '1' \].\_demo\_join3\[  
                                inner where i = '2' \].j as j\_3
    }

@AbapCatalog.sqlViewName: 'DEMOCDSASSFI2'
@AbapCatalog.compiler.compareFilter: false
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_assoc\_filter2  
   as select from
    demo\_join1
    association to Demo\_Cds\_Assoc\_Join2 as \_demo\_join2 on
      \_demo\_join2.d = demo\_join1.d
    {
      \_demo\_join2\[  
        inner where d = '1' \].d                         as d\_2,
      \_demo\_join2\[  
        inner where d = '1' \].e                         as e\_2,
      \_demo\_join2\[  
        inner where d = '1' \].\_demo\_join3\[  
                                inner where i = '2' \].i as i\_3,
      \_demo\_join2\[  
        inner where d = '1' \].\_demo\_join3\[  
                                inner where i = '2' \].j as j\_3
    }

@AbapCatalog.sqlViewName: 'DEMOCDSASSFI3'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_assoc\_filter3  
   as select from
    demo\_join1
    association to Demo\_Cds\_Assoc\_Join2 as \_demo\_join2 on
      \_demo\_join2.d = demo\_join1.d
    {
      \_demo\_join2\[  
        inner where d = '1' \].d                         as d\_2,
      \_demo\_join2\[  
        inner where d = '2' \].e                         as e\_2,
      \_demo\_join2\[  
        inner where d = '3' \].\_demo\_join3\[  
                                inner where i = '5' \].i as i\_3,
      \_demo\_join2\[  
        inner where d = '4' \].\_demo\_join3\[  
                                inner where i = '6' \].j as j\_3
    }

In the first view, the annotation AbapCatalog.compiler.compareFilter has the recommended value true. The conditions are detected as identical and the variants of the path expressions on a SAP HANA database looks something like this:

CREATE VIEW "DEMOCDSASSFI1" AS SELECT
  "=A0"."D" AS "D\_2",
  "=A0"."E" AS "E\_2",
  "=A1"."I" AS "I\_3",
  "=A1"."J" AS "J\_3"
FROM (
  "DEMO\_JOIN1" "DEMO\_JOIN1" INNER JOIN "DEMO\_CDS\_ASJO2" "=A0" ON (
    "=A0"."D" = "DEMO\_JOIN1"."D" AND
    "=A0"."D" = N'1'
  )
) INNER JOIN "DEMO\_JOIN3" "=A1" ON (
  "=A1"."L" = "=A0"."D" AND
  "=A1"."I" = N'2'
)

In the second view, AbapCatalog.compiler.compareFilter has the value false and a join expression is defined for each association of the path expressions regardless of the identical conditions. This means that this variant looks like the variant of the third views (in which all conditions are different):

CREATE VIEW "DEMOCDSASSFI2" AS SELECT
  "=A0"."D" AS "D\_2",
  "=A1"."E" AS "E\_2",
  "=A3"."I" AS "I\_3",
  "=A5"."J" AS "J\_3"
FROM (
  (
    (
      (
        (
          "DEMO\_JOIN1" "DEMO\_JOIN1" INNER JOIN "DEMO\_CDS\_ASJO2" "=A0" ON (
            "=A0"."D" = "DEMO\_JOIN1"."D" AND
            "=A0"."D" = N'1'
          )
        ) INNER JOIN "DEMO\_CDS\_ASJO2" "=A1" ON (
          "=A1"."D" = "DEMO\_JOIN1"."D" AND
          "=A1"."D" = N'1'
        )
      ) INNER JOIN "DEMO\_CDS\_ASJO2" "=A2" ON (
        "=A2"."D" = "DEMO\_JOIN1"."D" AND
        "=A2"."D" = N'1'
      )
    ) INNER JOIN "DEMO\_JOIN3" "=A3" ON (
      "=A3"."L" = "=A2"."D" AND
      "=A3"."I" = N'2'
    )
  ) INNER JOIN "DEMO\_CDS\_ASJO2" "=A4" ON (
    "=A4"."D" = "DEMO\_JOIN1"."D" AND
    "=A4"."D" = N'1'
  )
) INNER JOIN "DEMO\_JOIN3" "=A5" ON (
  "=A5"."L" = "=A4"."D" AND
  "=A5"."I" = N'2'
)
CREATE VIEW "DEMOCDSASSFI3" AS SELECT
  "=A0"."D" AS "D\_2",
  "=A1"."E" AS "E\_2",
  "=A3"."I" AS "I\_3",
  "=A5"."J" AS "J\_3"
FROM (
  (
    (
      (
        (
          "DEMO\_JOIN1" "DEMO\_JOIN1" INNER JOIN "DEMO\_CDS\_ASJO2" "=A0" ON (
            "=A0"."D" = "DEMO\_JOIN1"."D" AND
            "=A0"."D" = N'1'
          )
        ) INNER JOIN "DEMO\_CDS\_ASJO2" "=A1" ON (
          "=A1"."D" = "DEMO\_JOIN1"."D" AND
          "=A1"."D" = N'2'
        )
      ) INNER JOIN "DEMO\_CDS\_ASJO2" "=A2" ON (
        "=A2"."D" = "DEMO\_JOIN1"."D" AND
        "=A2"."D" = N'3'
      )
    ) INNER JOIN "DEMO\_JOIN3" "=A3" ON (
      "=A3"."L" = "=A2"."D" AND
      "=A3"."I" = N'5'
    )
  ) INNER JOIN "DEMO\_CDS\_ASJO2" "=A4" ON (
    "=A4"."D" = "DEMO\_JOIN1"."D" AND
    "=A4"."D" = N'4'
  )
) INNER JOIN "DEMO\_JOIN3" "=A5" ON (
  "=A5"."L" = "=A4"."D" AND
  "=A5"."I" = N'6'
)



**📖 Source**: [abencds_path_expression_attr.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_path_expression_attr.htm)

### abencds_assoc_join_abexa.htm

> **📖 Official SAP Documentation**: [abencds_assoc_join_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_assoc_join_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm) →  [ABAP CDS - SELECT, ASSOCIATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_association.htm) →  [ABAP CDS - path\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) → 

ABAP CDS - Joins of Associations

This example demonstrates how to implement path expressions in joins in ABAP CDS.

Source Code

REPORT demo\_cds\_assoc\_joins.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    TYPES: wa1 TYPE demo\_join1,
           wa2 TYPE demo\_join2,
           wa3 TYPE demo\_join3.
    TYPES BEGIN OF wa.
    INCLUDE TYPE wa1 AS wa1 RENAMING WITH SUFFIX \_1.
    INCLUDE TYPE wa2 AS wa2 RENAMING WITH SUFFIX \_2.
    INCLUDE TYPE wa3 AS wa3 RENAMING WITH SUFFIX \_3.
    TYPES END OF wa.
    CLASS-DATA out TYPE REF TO if\_demo\_output.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA:
      path\_outer TYPE TABLE OF demo\_cds\_assoc\_join1\_o WITH DEFAULT KEY,
      path\_inner TYPE TABLE OF demo\_cds\_assoc\_join1\_i WITH DEFAULT KEY,
      join\_outer TYPE TABLE OF wa WITH DEFAULT KEY,
      join\_inner TYPE TABLE OF wa WITH DEFAULT KEY.
    out->begin\_section( 'CDS Views'
      )->begin\_section( 'Path with \[left outer\]' ).
    SELECT \*
           FROM demo\_cds\_assoc\_join1\_o
           INTO TABLE @path\_outer.
    SORT path\_outer.
    out->write( path\_outer
      )->next\_section( 'Path with \[inner\]' ).
    SELECT \*
           FROM demo\_cds\_assoc\_join1\_i
           INTO TABLE @path\_inner.
    SORT path\_inner.
    out->write( path\_inner
      )->end\_section( )->end\_section(
      )->begin\_section( \`Open SQL Joins\`
      )->begin\_section(
        \`demo1 LEFT OUTER JOIN demo2 LEFT OUTER JOIN demo3\` ).
    SELECT FROM
             demo\_join1 AS t1
               LEFT OUTER JOIN
                 demo\_join2 AS t2 ON t2~d = t1~d
                     LEFT OUTER JOIN
                       demo\_join3 AS t3 ON t3~l = t2~d
           FIELDS t1~a AS a\_1,
                  t1~b AS b\_1,
                  t1~c AS c\_1,
                  t1~d AS d\_1,
                  t2~d AS d\_2,
                  t2~e AS e\_2,
                  t2~f AS f\_2,
                  t2~g AS g\_2,
                  t2~h AS h\_2,
                  t3~i AS i\_3,
                  t3~j AS j\_3,
                  t3~k AS k\_3,
                  t3~l AS l\_3
           INTO CORRESPONDING FIELDS OF TABLE @join\_outer.
    SORT join\_outer.
    out->write( join\_outer
      )->next\_section( \`demo1 INNER JOIN demo2 INNER JOIN demo3\` ).
    SELECT FROM
             demo\_join1 AS t1
               INNER JOIN
                 demo\_join2 AS t2 ON t2~d = t1~d
                     INNER JOIN
                       demo\_join3 AS t3 ON t3~l = t2~d
           FIELDS t1~a AS a\_1,
                  t1~b AS b\_1,
                  t1~c AS c\_1,
                  t1~d AS d\_1,
                  t2~d AS d\_2,
                  t2~e AS e\_2,
                  t2~f AS f\_2,
                  t2~g AS g\_2,
                  t2~h AS h\_2,
                  t3~i AS i\_3,
                  t3~j AS j\_3,
                  t3~k AS k\_3,
                  t3~l AS l\_3
           INTO CORRESPONDING FIELDS OF TABLE @join\_inner.
    SORT join\_inner.
    out->write( join\_inner )->display( ).
    ASSERT path\_inner = join\_inner.
    ASSERT path\_outer = join\_outer.  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( )->begin\_section( \`Database Tables\` ).
    DELETE FROM demo\_join1.
    INSERT demo\_join1 FROM TABLE @( VALUE #(
      ( a = 'a1' b = 'b1' c = 'c1' d = 'uu' )
      ( a = 'a2' b = 'b2' c = 'c2' d = 'uu' )
      ( a = 'a3' b = 'b3' c = 'c3' d = 'vv' )
      ( a = 'a4' b = 'b4' c = 'c4' d = 'ww' ) ) ).
    SELECT \* FROM demo\_join1 INTO TABLE @DATA(itab1).
    DELETE FROM demo\_join2.
    INSERT demo\_join2 FROM TABLE @( VALUE #(
      ( d = 'uu' e = 'e1' f = 'f1' g = 'g1'  h = 'h1' )
      ( d = 'ww' e = 'e2' f = 'f2' g = 'g2'  h = 'h2' )
      ( d = 'xx' e = 'e3' f = 'f3' g = 'g3'  h = 'h3' ) ) ).
    SELECT \* FROM demo\_join2 INTO TABLE @DATA(itab2).
    DELETE FROM demo\_join3.
    INSERT demo\_join3 FROM TABLE @( VALUE #(
      ( i = 'i1' j = 'j1' k = 'k1' l = 'vv' )
      ( i = 'i2' j = 'j2' k = 'k2' l = 'vv' )
      ( i = 'i3' j = 'j3' k = 'k3' l = 'ww' ) ) ).
    SELECT \* FROM demo\_join3 INTO TABLE @DATA(itab3).
    out->begin\_section( \`demo1\`
      )->write( itab1
      )->next\_section( \`demo2\`
      )->write( itab2
      )->next\_section( \`demo3\`
      )->write( itab3
      )->end\_section(
      )->end\_section( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example demonstrates how joins are used for [path expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) with [associations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_association.htm). The following two CDS views - DEMO\_CDS\_ASSOC\_JOIN1\_O and DEMO\_CDS\_ASSOC\_JOIN1\_I - access their own association \_demo\_join2 in path expressions of the SELECT list and the published association \_demo\_join3 of DEMO\_CDS\_ASSOC\_JOIN2.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_ASJO1O'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view Demo\_Cds\_Assoc\_Join1\_o
  as select from demo\_join1
  association to Demo\_Cds\_Assoc\_Join2 as \_demo\_join2 on
    \_demo\_join2.d = demo\_join1.d
{
  demo\_join1.a                                      as a\_1,
  demo\_join1.b                                      as b\_1,
  demo\_join1.c                                      as c\_1,
  demo\_join1.d                                      as d\_1,
  \_demo\_join2\[left outer\].d                         as d\_2,
  \_demo\_join2\[left outer\].e                         as e\_2,
  \_demo\_join2\[left outer\].f                         as f\_2,
  \_demo\_join2\[left outer\].g                         as g\_2,
  \_demo\_join2\[left outer\].h                         as h\_2,
  \_demo\_join2\[left outer\].\_demo\_join3\[left outer\].i as i\_3,
  \_demo\_join2\[left outer\].\_demo\_join3\[left outer\].j as j\_3,
  \_demo\_join2\[left outer\].\_demo\_join3\[left outer\].k as k\_3,
  \_demo\_join2\[left outer\].\_demo\_join3\[left outer\].l as l\_3
}    

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_ASJO1I'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view Demo\_Cds\_Assoc\_Join1\_i
  as select from demo\_join1
  association to Demo\_Cds\_Assoc\_Join2 as \_demo\_join2 on
    \_demo\_join2.d = demo\_join1.d
{
  demo\_join1.a                            as a\_1,
  demo\_join1.b                            as b\_1,
  demo\_join1.c                            as c\_2,
  demo\_join1.d                            as d\_1,
  \_demo\_join2\[inner\].d                    as d\_2,
  \_demo\_join2\[inner\].e                    as e\_2,
  \_demo\_join2\[inner\].f                    as f\_2,
  \_demo\_join2\[inner\].g                    as g\_2,
  \_demo\_join2\[inner\].h                    as h\_2,
  \_demo\_join2\[inner\].\_demo\_join3\[inner\].i as i\_3,
  \_demo\_join2\[inner\].\_demo\_join3\[inner\].j as j\_3,
  \_demo\_join2\[inner\].\_demo\_join3\[inner\].k as k\_3,
  \_demo\_join2\[inner\].\_demo\_join3\[inner\].l as l\_3
}    

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_ASJO2'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view Demo\_Cds\_Assoc\_Join2
  as select from demo\_join2
  association \[\*\] to demo\_join3 as \_demo\_join3 on
    \_demo\_join3.l = demo\_join2.d
{
  \_demo\_join3,
  demo\_join2.d,
  demo\_join2.e,
  demo\_join2.f,
  demo\_join2.g,
  demo\_join2.h
}    

[LEFT OUTER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_path_expression_attr.htm) and [INNER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_path_expression_attr.htm) are explicitly specified in the path expressions.

-   LEFT OUTER affects the implementation of associations in a left outer join, which is the default behavior at these places.

-   INNER affects the implementation of associations in an inner join, which overwrites the default behavior at these places.

In the DDL Source Text Editor of the [ADT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadt_glosry.htm "Glossary Entry"), you can view the relevant configuration of the join in the display of the generated SQL DDL statement.

This example shows that the result sets of the CDS views DEMO\_CDS\_ASSOC\_JOIN1\_O and DEMO\_CDS\_ASSOC\_JOIN1\_I are identical to the result sets of Open-SQL statements [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) with explicitly programmed left outer and inner joins. The system accesses the database tables DEMO\_JOIN1, DEMO\_JOIN2 and DEMO\_JOIN3, which are filled with sample data. With an inner join, unlike a left outer join, only the row is returned for which the join condition t3~l = t2~d is fulfilled.



**📖 Source**: [abencds_assoc_join_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_assoc_join_abexa.htm)

### abencds_f1_path_expression.htm

> **📖 Official SAP Documentation**: [abencds_f1_path_expression.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abencds_f1_path_expression.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm)


  

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
