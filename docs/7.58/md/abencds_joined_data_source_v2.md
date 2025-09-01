---
title: "CDS DDL - CDS View Entity, SELECT, JOIN"
description: |
  Syntax ...  INNER cardinality JOIN  LEFT OUTER cardinality JOIN  RIGHT OUTER JOIN  CROSS JOIN  data_source(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v2.htm) ON cds_cond(https://help.sap.com/doc/abapdocu_758_index_h
version: "7.58"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_joined_data_source_v2.htm"
abapFile: "abencds_joined_data_source_v2.htm"
keywords: ["select", "do", "if", "case", "try", "class", "data", "types", "abencds", "joined", "source"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - CDS View Entity, SELECT, data\_source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v2.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20SELECT%2C%20JOIN%2C%20ABENCDS_JOINED_DATA_SOURCE_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

CDS DDL - CDS View Entity, SELECT, JOIN

Syntax

... *{* *\[*INNER*\]* *\[*cardinality*\]* JOIN
     *|* LEFT OUTER *\[*cardinality*\]* JOIN
     *|* RIGHT OUTER JOIN
     *|* CROSS JOIN *}*
       [data\_source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v2.htm) *\[*ON [cds\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conditional_expression_v2.htm)*\]* ...

Additions:

[1\. ... ON cds\_cond](#!ABAP_ADDITION_1@1@)
[2\. ... cardinality](#!ABAP_ADDITION_2@2@)

Effect

Defines a [join](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjoin_glosry.htm "Glossary Entry") between two data sources of a [CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry"). The code above is part of the syntax of a data source [data\_source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v2.htm) and recursively contains the syntax of a second data source [data\_source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v2.htm). Two joined data sources represent a join expression.

Every join expression for an inner or outer join must contain a join condition [cds\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conditional_expression_v2.htm) after ON (for details, see Addition 1 below). A join expression for a cross join cannot contain any join condition.

When joining two or more data sources, each element of the SELECT list must have the name of its data source as prefix.
Example: source1.field

[Inner joins](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninner_join_glosry.htm "Glossary Entry"), [outer joins](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenouter_join_glosry.htm "Glossary Entry"), and [cross joins](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencross_join_glosry.htm "Glossary Entry") are possible:

-   A join between two data sources using INNER JOIN or just JOIN selects all entries of the data sources whose fields match the ON condition.
-   A join between two data sources using LEFT OUTER JOIN selects all entries on the left side. A join between two data sources using RIGHT OUTER JOIN selects all entries on the right side. Entries that match the ON condition have the same content as in the inner join. In entries that do not match the ON condition, the elements on the right or left side have the [null value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennull_value_glosry.htm "Glossary Entry"). When the CDS view entity is used in ABAP SQL, null values are set to the type-dependent initial value.
-   When two data sources are joined using CROSS JOIN, the result is their cross product. All entries on the left side are combined with all entries on the right side. The number of rows in the result set is the number of rows on the left side multiplied by the number of rows on the right side.

Nested join expressions are evaluated in the following order:

-   In the case of inner and outer joins, by the arrangement of the ON conditions. From left to right, the most adjacent ON conditions are assigned to each JOIN and this expression is parenthesized implicitly. These implicit parentheses can be made explicit using actual parentheses, ( ). This is optional.
-   By default, cross joins are evaluated from left to right. The priority of the evaluation can be affected by parentheses ( ).
    -   If multiple cross joins are combined, the order of the evaluation is irrelevant. The result is always the same and the number of rows is the product of the number of rows of all involved data sources.
    -   If cross joins are combined with inner and outer joins, the result can depend on the order of evaluation or the parentheses.

Hints

-   A WHERE condition for a SELECT statement with joins affects the result set created using the joins.
-   An inner join or a cross join between two individual data sources is commutative. If the left and right side are switched, the result remains the same.
-   The function [coalesce](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_coalesce_expression_v2.htm) can be used to prevent null values in the result set.
-   A cross join behaves like an inner or outer join whose ON condition is always true. A cross join with a WHERE condition has the same result as an inner join with an identical ON condition. Unlike the inner join, in a cross join all data is read first before the condition is evaluated. In an inner join only data that meets the ON condition is read.
-   Cross joins should be used with caution. Since it is not possible to specify an ON condition, all data of all involved data sources is read. In the case of very large datasets, the result set (whose number of rows is always the product of the number of all rows of both data sources) can quickly become very large.
-   On the database, a cross join of two client-dependent data sources is defined internally as an inner join, whose ON condition checks whether the client columns of the left and right side are equal. If one side is client-independent, the cross join is defined as specified.
-   In nested join expressions, parentheses are recommended for making the code easier to read. In the case of inner and outer joins, the parentheses can be specified exactly where the ON conditions specify parentheses implicitly.
-   There is no limit on the number of join expressions in a SELECT statement of a CDS view entity in the DDL, but there is an [ATC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenatc_glosry.htm "Glossary Entry") check that produces a message once a specific number of expressions is reached.

Example

The following CDS view entity DEMO\_CDS\_CLIENT\_HANDLING defines different kinds of [joins](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjoin_glosry.htm "Glossary Entry") ([left outer join](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenleft_outer_join_glosry.htm "Glossary Entry"), [inner join](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninner_join_glosry.htm "Glossary Entry"), and [right outer join](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenright_outer_join_glosry.htm "Glossary Entry")) between the database table T000 and the database table DEMO\_SALES\_ORDER.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS View entity\_client handling'
define view entity DEMO\_CDS\_CLIENT\_HANDLING
  as select from
                       t000             as client\_independent
      left outer join  demo\_sales\_order as \_LeftOuter
        on \_LeftOuter.id = client\_independent.cccategory
      inner join       demo\_sales\_order as \_Inner
        on \_Inner.id = client\_independent.cccategory
      right outer join demo\_sales\_order as \_RightOuter
        on \_RightOuter.id = client\_independent.cccategory
    association to one demo\_sales\_order as \_Assoc
      on \_Assoc.id = client\_independent.cccategory
    {
      key \_Assoc.so\_key,
          \_Assoc.id,
          \_Inner.id      as id\_inner,
          \_LeftOuter.id  as id\_LeftOuter,
          \_RightOuter.id as id\_RightOuter,
          client\_independent.cccategory
    }
    where client\_independent.mtext = abap.char'SAP AG Konzern'

Example

The following non-parenthesized chaining of join expressions

... from tab1
      join
        tab2
          join
            tab3 on tab2.id = tab3.id
                 on tab1.id = tab2.id ...

is parenthesized implicitly as follows:

... from tab1
      join
        ( tab2
            join
              tab3 on tab2.id = tab3.id ) on tab1.id = tab2.id ...

No elements from tab1 can be specified in the inner ON condition.

Example

The following view entity contains a cross join of table T000 of all clients of an AS ABAP with the entries for the message class SABAPDEMOS in the table T100. The class CL\_DEMO\_CDS\_CROSS\_JOIN\_VE accesses the view entity. Without the WHERE condition, the result set would be very large.

@EndUserText.label: 'CDS view entity with a cross join'
define view entity DEMO\_CDS\_CROSS\_JOIN\_VE
  as select from
                 t000
      cross join t100
    {
      key t000.mandt,
          t000.mtext,
          t100.sprsl,
          t100.arbgb,
          t100.msgnr,
          t100.text
    }
    where
      t100.arbgb = abap.char'SABAPDEMOS'

Addition 1   

... ON cds\_cond

Effect

[Join condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjoin_condition_glosry.htm "Glossary Entry"). A join condition must be specified for an inner or outer join. A join condition must not be specified for a cross join.

The syntax of the relational expressions of a join condition [cds\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conditional_expression_v2.htm) is subject to the following restrictions:

-   All [relational operators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conditional_expression_v2.htm) are allowed. That means all comparison operators are allowed as well as BETWEEN, LIKE, IS \[NOT\] NULL, and IS \[NOT\] INITIAL.
-   The Boolean operators NOT, AND, and OR are allowed.
-   lhs expects a [field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_field_v2.htm) of one of the two [data\_sources](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v2.htm) of the join. If a comparison operator is used as operator, then lhs can also be a literal.
-   rhs expects a [field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_field_v2.htm) of one of the two [data\_sources](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v2.htm) of the join, a [literal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_literal_v2.htm), a [parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_parameter_v2.htm), a [session variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_session_variable_v2.htm), a [built-in function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_builtin_functions_v2.htm), or a [CDS scalar function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_scalar_function_glosry.htm "Glossary Entry"). Exception: when using the operator LIKE, then rhs must be a character literal.
-   Path expressions are not allowed
-   Other CDS DDL expressions are not allowed.

Special rules apply when the operands of the ON condition are [CDS enumerated elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_element_glosry.htm "Glossary Entry"). These rules are described in the topic [CDS TDL - Using CDS Enumerated Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_use_enum_type.htm).

Addition 2   

... cardinality

Effect

For an inner join or a left outer join, a [cardinality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencardinality_glosry.htm "Glossary Entry") can optionally be specified. A [source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensource_cardinality_glosry.htm "Glossary Entry") and [target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentarget_cardinality_glosry.htm "Glossary Entry") cardinality can be specified, or only a target cardinality. The following cardinality specifications are possible:

-   EXACT ONE TO EXACT ONE
-   EXACT ONE TO MANY
-   EXACT ONE TO ONE
-   MANY TO EXACT ONE
-   MANY TO MANY
-   MANY TO ONE
-   ONE TO EXACT ONE
-   ONE TO MANY
-   ONE TO ONE
-   TO ONE
-   TO EXACT ONE
-   TO MANY

The [SQL Optimizer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenquery_optimizer_glosry.htm "Glossary Entry") uses the cardinality specification for performance optimization. It attempts to suppress surplus joins. To avoid undefined behavior, the cardinality should always be defined to match the data in question.

Example

Incorrect use of TO ONE in CDS view entities. The data in the DDIC database tables SCARR and SPFLI do not have the cardinality TO ONE, but TO MANY. On a SAP HANA database, the result is dependent on the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm). If the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm) contains columns from both the left and right side of the join expression, no optimization takes place. If the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm) does not contain any columns from the right side of the join expression, an optimization takes place. If the aggregate function COUNT(\*) is used, an optimization takes place. When an optimization takes place, only that data is read that meets the specified cardinality.

@EndUserText.label: 'CDS view entity with join expression'
define view entity DEMO\_CDS\_WRONG\_TO\_ONE\_1\_VE
  as select from
                             scarr as c
      left outer many to one join spfli as p
        on c.carrid = p.carrid
    {
      c.carrid   as carrid,
      c.carrname as carrname,
      p.connid   as connid
    }

@EndUserText.label: 'CDS view entity with join expression'
define view entity DEMO\_CDS\_WRONG\_TO\_ONE\_2\_VE
  as select from           scarr as c
    left outer many to one join spfli as p on c.carrid = p.carrid
{
  c.carrid   as carrid,
  c.carrname as carrname
}

@EndUserText.label: 'CDS view entity with join expression'
define view entity DEMO\_CDS\_WRONG\_TO\_ONE\_3\_VE
  as select from           scarr as c
    left outer many to one join spfli as p on c.carrid = p.carrid
{
  count(\*) as cnt
}

The class CL\_DEMO\_CDS\_WRONG\_TO\_ONE\_VE accesses the CDS view entities and displays the results.