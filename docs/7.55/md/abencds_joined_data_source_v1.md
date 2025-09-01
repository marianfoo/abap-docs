---
title: "CDS DDL - DDIC-based View, SELECT, JOIN"
description: |
  Syntax ...  INNER JOIN  LEFTRIGHT OUTER TO ONEMANY JOIN  CROSS JOIN  data_source(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v1.htm) ON cds_cond(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenc
version: "7.55"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_joined_data_source_v1.htm"
abapFile: "abencds_joined_data_source_v1.htm"
keywords: ["select", "do", "if", "case", "try", "class", "data", "types", "abencds", "joined", "source"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - DDIC-Based Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-based View, SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-based View, SELECT, data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v1.htm) → 

CDS DDL - DDIC-based View, SELECT, JOIN

Syntax

... *{* *\[*INNER*\]* JOIN *}**|**{* LEFT*|*RIGHT OUTER *\[*TO ONE*|*MANY*\]* JOIN *}**|**{* CROSS JOIN *}*
      [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v1.htm) *\[*ON [cds\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conditional_expression_v1.htm)*\]* ...

Additions:

[1\. ... ON cds\_cond](#!ABAP_ADDITION_1@1@)
[2\. ... TO ONE*|*MANY](#!ABAP_ADDITION_2@2@)

Effect

Defines a [join](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenjoin_glosry.htm "Glossary Entry") between two data sources of a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). The code above is part of the syntax of a data source [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v1.htm) and contains the recursive syntax of a data source [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v1.htm). Two joined data sources represent a join expression.

Every join expression for an inner or outer join must contain a join condition [cds\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conditional_expression_v1.htm) after ON (for details, see Addition 1 below). A join expression for a cross join cannot contain any join condition.

[Inner joins](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninner_join_glosry.htm "Glossary Entry"), [outer joins](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenouter_join_glosry.htm "Glossary Entry"), and [cross joins](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencross_join_glosry.htm "Glossary Entry") are possible:

-   A join between two data sources using INNER JOIN or just JOIN selects all entries of the data sources whose fields meet the ON condition.

-   A join between two data sources using LEFT OUTER JOIN selects all entries on the left side. A join between two data sources using RIGHT OUTER JOIN selects all entries on the right side. Entries that meet the ON condition have the same content as in the inner join. In entries that do not meet the ON condition, the elements on the right or left side have the [null value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennull_value_glosry.htm "Glossary Entry"). When the CDS view is used in ABAP SQL, null values are set to the type-dependent initial value.

-   When two data sources are joined using CROSS JOIN, their cross product is produced. All entries on the left side are combined with all entries on the right side. The number of rows in the result set is the number of rows on the left side multiplied by the number of rows on the right side.

Nested join expressions are evaluated in the following order:

-   In the case of inner and outer joins, by the arrangement of the ON conditions. From left to right, the most adjacent ON conditions are assigned to each JOIN and this expression is parenthesized implicitly. These implicit parentheses can be made explicit using actual parentheses, ( ). This is optional.

-   By default, cross joins are evaluated from left to right. The priority of the evaluation can be affected by parentheses ( ).

-   If multiple cross joins are combined, the order of the evaluation is irrelevant. The result is always the same and the number of rows is the product of the number of rows of all involved data sources.

-   If cross joins are combined with inner and outer joins, the result can depend on the order of evaluation or the parentheses.

Hints

-   A WHERE condition for a SELECT statement with joins affects the result set created using the joins.

-   An inner join or a cross join between two individual data sources is commutative. If the left and right side are switched, the result remains the same.

-   [Buffering](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_buffering.htm) is not recommended for a CDS view that contains an outer join. The result set can contain [null values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennull_value_glosry.htm "Glossary Entry"), which means that ABAP SQL reads can behave differently to direct database reads when the buffer is read, since null values in the buffer are transformed to initial values.

-   The function [coalesce](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_coalesce_expression_v1.htm) can be used to prevent null values in the result set.

-   A cross join behaves like an inner or outer join whose ON condition is always true. A cross join with a WHERE condition has the same result as an inner join with an identical ON condition. Unlike the inner join, in a cross join all data is read first before the condition is evaluated. In an inner join only data that meets the ON condition is read.

-   A cross join should only be used with extreme caution. Since it is not possible to specify an ON condition, all data of all involved data sources is read. In the case of very large datasets, the result set (whose number of rows is always the product of the number of all rows of both data sources) can quickly become very large.

-   On the database, a cross join of two client-dependent data sources is defined internally as an inner join, whose ON condition checks whether the client columns of the left and right side are equal. If one side is not client-dependent, the cross join is defined as specified.

-   In nested join expressions, parentheses are recommended for making the code easier to read. In the case of inner and outer joins, the parentheses can be specified wherever the ON conditions specify parentheses implicitly.

-   There is no limit on the number of join expressions in a SELECT statement of a CDS view in the DDL, but there is an [ATC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenatc_glosry.htm "Glossary Entry") check that produces a message once a specific number of expressions is reached.

Example

The following CDS view works in exactly the same way as the [DDIC database view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_views.htm) DEMO\_SCARR\_SPFLI. The program DEMO\_CDS\_JOIN uses SELECT to access the view. Unlike when the dictionary view DEMO\_CDS\_SCARR\_SPFLI is accessed, no client column is returned when the CDS entity DEMO\_SCARR\_SPFLI is accessed. The CDS-managed DDIC view DEMO\_CDS\_JOIN returns the client column too.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_JOIN'
@AccessControl.authorizationCheck: #NOT\_ALLOWED
define view demo\_cds\_scarr\_spfli(
    id,
    carrier,
    flight,
    departure,
    destination
  )
  as select from
           spfli
      join scarr on
        scarr.carrid = spfli.carrid
    {
      key spfli.carrid,
      key scarr.carrname,
      key spfli.connid,
          spfli.cityfrom,
          spfli.cityto
    }

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

The following view contains a cross join of table T000 of all clients of an AS ABAP with the entries for the message class SABAPDEMOS in the table T100. The program DEMO\_CDS\_CROSS\_JOIN accesses the view. The result set would be very large without this WHERE condition.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_CRSJN'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_cross\_join
  as select from
                 t000
      cross join t100
    {
      t000.mandt,
      t000.mtext,
      t100.sprsl,
      t100.arbgb,
      t100.msgnr,
      t100.text
    }
    where
      t100.arbgb = 'SABAPDEMOS'

Addition 1

... ON cds\_cond

Effect

Join condition. A join condition must be specified for an inner or outer join. A join condition must not be specified for a cross join.

The syntax of the relational expressions of a join condition [cds\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conditional_expression_v1.htm) is subject to the following restrictions:

-   General Rules

-   [Character literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_literal_v1.htm) cannot be used in comparisons with numeric values.

-   [Numeric literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_literal_v1.htm) that represent a value outside the value range of [INT8](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) must be specified as floating point literals with a decimal point.

-   Special Rules:

-   All [relational operators](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conditional_expression_v1.htm) are allowed. That means all comparison operators are allowed as well as BETWEEN, LIKE, IS \[NOT\] NULL, and IS \[NOT\] INITIAL.

-   lhs expects a [field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_field_v1.htm) of one of the two [data\_sources](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v1.htm) of the join.

-   rhs expects a [field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_field_v1.htm) of one of the two [data\_sources](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v1.htm) of the join, a [literal](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_literal_v1.htm) with optional domain prefix, a [parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_parameter_v1.htm), a [session variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_session_variable_v1.htm), or a [built-in function](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_builtin_functions_v1.htm).

-   [Path expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_v1.htm) cannot be used.

-   [CDS DDL expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_expressions_v1.htm) cannot be used.
    

Addition 2

... TO ONE*|*MANY

Effect

Specifies the [cardinality](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencardinality_glosry.htm "Glossary Entry") of a left outer join. This addition is positioned after LEFT OUTER, but is not possible after RIGHT OUTER. Only certain specific database systems apply this addition.

If the addition TO ONE is specified, any databases that support this addition assume that the result set defined by the left outer join matches this cardinality and SQL Optimizer attempts to suppress any surplus joins. If the result set does not match the cardinality, the result is undefined and may be dependent on the entries in the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_v1.htm). If the addition TO MANY is specified, no optimization takes place as a rule.

Hints

-   More information can be found in the documentation of the current database system. The [SAP HANA database](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_database_glosry.htm "Glossary Entry"), for example, supports the additions TO ONE and TO MANY and their description is part of the [HANA-specific SQL documentation](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.04/en-US/b4b0eec1968f41a099c828a4a6c8ca0f.html).

-   To avoid undefined and platform-specific behavior, TO ONE or TO MANY can be specified only if the data being read meets the relevant prerequisites.

Example

Incorrect use of TO ONE in CDS views. The data in the DDIC database tables SCARR and SPFLI do not have the cardinality TO ONE and have the cardinality TO MANY instead. On a SAP HANA database, for example, the result is dependent on the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm). If the left and right side are specified here, no optimization takes place. If no columns are specified on the right side (and the aggregate function [COUNT(\*)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_aggregate_functions_v1.htm) is used), an optimization takes place. Here, only that data is read that meets the prerequisite cardinality.

@AbapCatalog.sqlViewName: 'DEMOCDSWTO1'
define view demo\_cds\_wrong\_to\_one\_1
  as select from
                             scarr as c
      left outer to one join spfli as p on
        c.carrid = p.carrid
    {
      c.carrid   as carrid,
      c.carrname as carrname,
      p.connid   as connid
    }

@AbapCatalog.sqlViewName: 'DEMOCDSWTO2'
define view demo\_cds\_wrong\_to\_one\_2
  as select from
                             scarr as c
      left outer to one join spfli as p on
        c.carrid = p.carrid
    {
      c.carrid   as carrid,
      c.carrname as carrname
    }

@AbapCatalog.sqlViewName: 'DEMOCDSWTO3'
define view demo\_cds\_wrong\_to\_one\_3
  as select from
                             scarr as c
      left outer to one join spfli as p on
        c.carrid = p.carrid
    {
      count(\*) as cnt
    }

The program DEMO\_CDS\_WRONG\_TO\_ONE accesses the CDS views and represents the results.