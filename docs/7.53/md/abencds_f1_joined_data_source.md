  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_statement.htm) →  [ABAP CDS - SELECT, data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_data_source.htm) → 

ABAP CDS - SELECT, JOIN

Syntax

... *{* *\[*INNER*\]* JOIN *}**|**{* LEFT*|*RIGHT OUTER *\[*TO ONE*|*MANY*\]* JOIN *}**|**{* CROSS JOIN *}*
      [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_data_source.htm) *\[*ON [cond\_expr](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_conditional_expression.htm)*\]* ...

Addition:

[... TO ONE*|*MANY](#!ABAP_ONE_ADD@1@)

Effect

Defines a [join](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenjoin_glosry.htm "Glossary Entry") between two data sources of a [CDS view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_view_glosry.htm "Glossary Entry"). The code above is part of the syntax of a data source [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_data_source.htm) and contains the recursive syntax of a data source [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_data_source.htm). Two data sources joined using JOIN create a join expression.

In a join expression using INNER and OUTER, a join condition [cond\_expr](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_conditional_expression.htm) must be specified after ON. Special [rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_cond_expr_on_join.htm) apply when this is specified. A join condition cannot be specified for a join expression using CROSS.

Inner joins, outer joins, and cross joins are all possible:

-   A join between two data sources using INNER JOIN or just JOIN selects all entries of the data sources whose fields meet the ON condition.

-   A join between two data sources using LEFT OUTER JOIN selects all entries on the left side. A join between two data sources using RIGHT OUTER JOIN selects all entries on the right side. Entries that meet the ON condition have the same content as in the inner join. In entries that do not meet the ON condition, the elements on the right or left side have the [null value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennull_value_glosry.htm "Glossary Entry") that is set to the type-dependent initial value when the CDS view is used in ABAP SQL.

-   When two data sources are joined using CROSS JOIN, their cross product is produced. All entries on the left side are combined with all entries on the right side. The number of rows in the results set is the number of rows on the left side multiplied by the number of rows on the right side.

Nested join expressions are evaluated in the following order:

-   In the case of inner and outer joins, by the arrangement of the ON conditions. From left to right, the most adjacent ON conditions are assigned to each JOIN and this expression is parenthesized implicitly. These implicit parentheses can be made explicit using actual parentheses, ( ). This is optional.

-   By default, cross joins are evaluated from left to right. The priority of the evaluation can be influenced by parentheses ( ).

-   If several cross joins are combined, the order of the evaluation is irrelevant. The result is always the same and the number of rows is the product of the number of rows of all involved data sources.

-   If cross joins are combined with inner and outer joins, the result can depend on the order of evaluation or the parentheses.

Notes

-   A WHERE condition for a SELECT statement with joins is applied to the results set created using the joins.

-   An inner join or a cross join between two individual data sources is commutative. If the left and right side are switched, the result remains the same.

-   [Buffering](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_sap_puffer.htm) is not recommended for a CDS view that contains an outer join. The results set can contain [null values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennull_value_glosry.htm "Glossary Entry"), which means that ABAP SQL reads can behave differently to direct database reads when the buffer is read, since null values in the buffer are transformed to initial values.

-   The function [coalesce](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_coalesce_expression.htm) can be used to prevent null values in the results set.

-   A cross join behaves like an inner or outer join whose ON condition is always true. A cross join with a WHERE condition has the same result as an inner join with an identical ON condition. Unlike the inner join, in a cross join all data is read first before the condition is evaluated. In an inner join only data that meets the ON condition is read.

-   A cross join should only be used with extreme caution. Since it is not possible to specify an ON condition, all data of all involved data sources is read. In the case of very large datasets, the results set (whose number of rows is always the product of the number of all rows of both data sources) can quickly become very large.

-   On the database, a cross join of two client-specific data sources is defined internally as an inner join, whose ON condition checks whether the client columns of the left and right side are equal. If one side is not client-specific, the cross join is defined as specified.

-   In nested join expressions, parentheses are recommended for making the code easier to read. In the case of inner and outer joins, the parentheses can be specified wherever the ON conditions specify parentheses implicitly.

-   There is no limit on the number of join expressions in a SELECT statement of a CDS view in the DDL, but there is an [ATC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenatc_glosry.htm "Glossary Entry") check that produces a message once a specific number of expressions is reached.

Example

The following CDS view works in exactly the same way as the classic [database view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_views.htm) DEMO\_SCARR\_SPFLI. The program DEMO\_CDS\_JOIN uses SELECT to access the view. Unlike when the classic database view DEMO\_SCARR\_SPFLI is accessed, no client column is returned when the CDS entity DEMO\_CDS\_SCARR\_SPFLI is accessed. The CDS database view DEMO\_CDS\_JOIN returns the client column too.

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

The following view contains a cross join of table T000 of all clients of an AS ABAP with the entries for the message class SABAPDEMOS in the table T100. The program DEMO\_CDS\_CROSS\_JOIN accesses the view. Without the WHERE condition, the results set would be very large.

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

Addition

... TO ONE*|*MANY

Effect

Specification of the cardinality of a left outer join. This addition is positioned after LEFT OUTER, but is not possible after RIGHT OUTER. Only certain specific database systems apply this addition.

If the addition TO ONE or TO MANY is specified, any databases that support this addition assume that the results set defined by the left outer join matches this cardinality and SQL Optimizer attempts to suppress any surplus joins. If the results set does not match the cardinality, the result is undefined and may be dependent on the entries in the [SELECT list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_list.htm).

Notes

-   More information can be found in the documentation of the current database system. The [SAP HANA database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhana_database_glosry.htm "Glossary Entry"), for example, supports the additions TO ONE and TO MANY and their description is part of the [HANA-specific SQL](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.00/en-us) documentation.
    
-   To avoid undefined and platform-specific behavior, TO ONE or TO MANY can be specified only if the data being read meets the relevant prerequisites.
    

Example

Incorrect use of TO ONE in CDS views. The data in the database tables SCARR and SPFLI do not have the cardinality TO ONE and have the cardinality TO MANY instead. On a SAP HANA database, for example, the result is dependent on the [SELECT list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_list.htm). If the left and right side are specified here, no optimization takes place. If no columns are specified on the right side (and the aggregate function [COUNT(\*)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_aggregate_functions.htm) is used), an optimization takes place. Here, only data is read that meets the prerequisite cardinality.

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