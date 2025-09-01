# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, data_source

Included pages: 3


### abencds_f1_data_source.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) → 

ABAP CDS - SELECT, data\_source

Syntax

... entity*\[* [parameters](javascript:call_link\('abencds_f1_select_parameters.htm'\))*\]**|* [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)) *\[**\[*AS*\]* alias*\]* *\[* [join](javascript:call_link\('abencds_f1_joined_data_source.htm'\))*\]* ...

Effect

Defines a data source of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). A data source can be a database table defined in ABAP Dictionary , a [database view](javascript:call_link\('abendatabase_view_glosry.htm'\) "Glossary Entry"), an [external view](javascript:call_link\('abenexternal_view_glosry.htm'\) "Glossary Entry"),
or a non-abstract [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") ( [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") or [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") ).

-   The data source is specified either directly using its name entity or using a path expression [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)) in which [associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") are evaluated. The associations of the path expression cannot have any abstract target data sources.

-   If the data source is a CDS entity with a [list of input parameters](javascript:call_link\('abencds_f1_parameter_list.htm'\)), actual parameters must be passed to these using [parameters](javascript:call_link\('abencds_f1_select_parameters.htm'\)).

-   An alternative name alias for a directly specified data source can be defined after AS. In fact, AS can be left out. An alternative name must be defined if a path expression is used. The name must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)).

-   The syntax [join](javascript:call_link\('abencds_f1_joined_data_source.htm'\)) can be used to join multiple data sources as [joins](javascript:call_link\('abenjoin_glosry.htm'\) "Glossary Entry").

Example

Defines the CDS view business\_partner for the database table snwd\_bpa, for which an alternative name partner is specified. This name is used in the [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)).

@AbapCatalog.sqlViewName: 'BPA\_VW'
define view business\_partner as
  select from snwd\_bpa as partner
         { key partner.bp\_id,
           partner.company\_name,
           partner.bp\_role }

as can also be omitted in front of the alternative name partner. The following example demonstrates another valid spelling that is potentially confusing:

@AbapCatalog.sqlViewName: 'BPA\_VW'
define view business\_partner as
  select from snwd\_bpa
           partner{ key partner.bp\_id,
                    partner.company\_name,
                    partner.bp\_role }

Continue
[ABAP CDS - SELECT, parameters](javascript:call_link\('abencds_f1_select_parameters.htm'\))
[ABAP CDS - SELECT, JOIN](javascript:call_link\('abencds_f1_joined_data_source.htm'\))


### abencds_f1_select_parameters.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) → 

ABAP CDS - SELECT, parameters

Syntax

... ( pname1 : act1, pname2 : act2, ... ) ...

Effect

Passes actual parameters act1, act2, ... to the [input parameters](javascript:call_link\('abencds_f1_param.htm'\)) pname1, pname2, ... of a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry").

The following can be specified for actual parameters:

-   [Literals](javascript:call_link\('abencds_f1_literal.htm'\))

-   [Parameters](javascript:call_link\('abencds_f1_parameter.htm'\))

-   [Session variables](javascript:call_link\('abencds_f1_session_variable.htm'\))

The data types of the actual parameters should match the [typing](javascript:call_link\('abencds_typing.htm'\)) of the input parameters exactly. However the following options are also possible:

-   bind character-like actual parameters to character-like input parameters with a different length.

-   bind numeric actual parameters to numeric input parameters with a greater value range.

Note

Currently, actual parameters can be passed to the input parameters of [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") and [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") used as data sources of the SELECT statement.

Example

The following CDS view uses the CDS view demo\_cds\_parameters in a join. The input parameters of this view are supplied with the input parameters of the current view as actual parameters. The program DEMO\_CDS\_PARAMETERS\_JOIN uses SELECT to access the view. Here the input parameters are supplied with actual parameters.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PARJOIN'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_parameters\_join
  with parameters
    in\_distance\_l :s\_distance,
    in\_distance\_u :s\_distance,
    in\_unit       :s\_distid
  as select from
           demo\_cds\_parameters
      ( p\_distance\_l : $parameters.in\_distance\_l,
        p\_distance\_u : $parameters.in\_distance\_u,
        p\_unit       : $parameters.in\_unit ) as flights
      join scarr on
        scarr.carrid = flights.carrid
    {
      key scarr.carrname,
      key flights.connid,
          flights.cityfrom,
          flights.cityto,
          flights.distance,
          flights.distid
    };


### abencds_f1_joined_data_source.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) → 

ABAP CDS - SELECT, JOIN

Syntax

... *{* *\[*INNER*\]* JOIN *}**|**{* LEFT*|*RIGHT OUTER *\[*TO ONE*|*MANY*\]* JOIN *}**|**{* CROSS JOIN *}*
      [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) *\[*ON [cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\))*\]* ...

Addition:

[... TO ONE*|*MANY](#!ABAP_ONE_ADD@1@)

Effect

Defines a [join](javascript:call_link\('abenjoin_glosry.htm'\) "Glossary Entry") between two data sources of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). The code above is part of the syntax of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) and contains the recursive syntax of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)). Two data sources joined using JOIN create a join expression.

In a join expression using INNER and OUTER, a join condition [cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) must be specified after ON. Special [rules](javascript:call_link\('abencds_cond_expr_on_join.htm'\)) apply when this is specified. A join condition cannot be specified for a join expression using CROSS.

Inner joins, outer joins, and cross joins are all possible:

-   A join between two data sources using INNER JOIN or just JOIN selects all entries of the data sources whose fields meet the ON condition.

-   A join between two data sources using LEFT OUTER JOIN selects all entries on the left side. A join between two data sources using RIGHT OUTER JOIN selects all entries on the right side. Entries that meet the ON condition have the same content as in the inner join. In entries that do not meet the ON condition, the elements on the right or left side have the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") that is set to the type-dependent initial value when the CDS view is used in ABAP SQL.

-   When two data sources are joined using CROSS JOIN, their cross product is produced. All entries on the left side are combined with all entries on the right side. The number of rows in the results set is the number of rows on the left side multiplied by the number of rows on the right side.

Nested join expressions are evaluated in the following order:

-   In the case of inner and outer joins, by the arrangement of the ON conditions. From left to right, the most adjacent ON conditions are assigned to each JOIN and this expression is parenthesized implicitly. These implicit parentheses can be made explicit using actual parentheses, ( ). This is optional.

-   By default, cross joins are evaluated from left to right. The priority of the evaluation can be influenced by parentheses ( ).

-   If several cross joins are combined, the order of the evaluation is irrelevant. The result is always the same and the number of rows is the product of the number of rows of all involved data sources.

-   If cross joins are combined with inner and outer joins, the result can depend on the order of evaluation or the parentheses.

Notes

-   A WHERE condition for a SELECT statement with joins is applied to the results set created using the joins.

-   An inner join or a cross join between two individual data sources is commutative. If the left and right side are switched, the result remains the same.

-   [Buffering](javascript:call_link\('abencds_sap_puffer.htm'\)) is not recommended for a CDS view that contains an outer join. The results set can contain [null values](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), which means that ABAP SQL reads can behave differently to direct database reads when the buffer is read, since null values in the buffer are transformed to initial values.

-   The function [coalesce](javascript:call_link\('abencds_f1_coalesce_expression.htm'\)) can be used to prevent null values in the results set.

-   A cross join behaves like an inner or outer join whose ON condition is always true. A cross join with a WHERE condition has the same result as an inner join with an identical ON condition. Unlike the inner join, in a cross join all data is read first before the condition is evaluated. In an inner join only data that meets the ON condition is read.

-   A cross join should only be used with extreme caution. Since it is not possible to specify an ON condition, all data of all involved data sources is read. In the case of very large datasets, the results set (whose number of rows is always the product of the number of all rows of both data sources) can quickly become very large.

-   On the database, a cross join of two client-specific data sources is defined internally as an inner join, whose ON condition checks whether the client columns of the left and right side are equal. If one side is not client-specific, the cross join is defined as specified.

-   In nested join expressions, parentheses are recommended for making the code easier to read. In the case of inner and outer joins, the parentheses can be specified wherever the ON conditions specify parentheses implicitly.

-   There is no limit on the number of join expressions in a SELECT statement of a CDS view in the DDL, but there is an [ATC](javascript:call_link\('abenatc_glosry.htm'\) "Glossary Entry") check that produces a message once a specific number of expressions is reached.

Example

The following CDS view works in exactly the same way as the classic [database view](javascript:call_link\('abenddic_database_views.htm'\)) DEMO\_SCARR\_SPFLI. The program DEMO\_CDS\_JOIN uses SELECT to access the view. Unlike when the classic database view DEMO\_SCARR\_SPFLI is accessed, no client column is returned when the CDS entity DEMO\_CDS\_SCARR\_SPFLI is accessed. The CDS database view DEMO\_CDS\_JOIN returns the client column too.

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

If the addition TO ONE or TO MANY is specified, any databases that support this addition assume that the results set defined by the left outer join matches this cardinality and SQL Optimizer attempts to suppress any surplus joins. If the results set does not match the cardinality, the result is undefined and may be dependent on the entries in the [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)).

Notes

-   More information can be found in the documentation of the current database system. The [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"), for example, supports the additions TO ONE and TO MANY and their description is part of the [HANA-specific SQL](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.00/en-us) documentation.
    
-   To avoid undefined and platform-specific behavior, TO ONE or TO MANY can be specified only if the data being read meets the relevant prerequisites.
    

Example

Incorrect use of TO ONE in CDS views. The data in the database tables SCARR and SPFLI do not have the cardinality TO ONE and have the cardinality TO MANY instead. On a SAP HANA database, for example, the result is dependent on the [SELECT list](javascript:call_link\('abapselect_list.htm'\)). If the left and right side are specified here, no optimization takes place. If no columns are specified on the right side (and the aggregate function [COUNT(\*)](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)) is used), an optimization takes place. Here, only data is read that meets the prerequisite cardinality.

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
