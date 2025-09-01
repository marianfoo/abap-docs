  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [Obsolete CDS Language Elements](javascript:call_link\('abencds_obsolete.htm'\)) →  [Obsolete CDS Entities](javascript:call_link\('abencds_entities_obsolete.htm'\)) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views (Obsolete)](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT, data\_source](javascript:call_link\('abencds_data_source_v1.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20SELECT%2C%20JOIN%2C%20ABENCDS_JOINED_DATA_SOURCE_V1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

CDS DDL - DDIC-Based View, SELECT, JOIN

Syntax

... *{* *\[*INNER*\]* JOIN *}**|**{* LEFT*|*RIGHT OUTER *\[*TO ONE*|*MANY*\]* JOIN *}**|**{* CROSS JOIN *}*
      [data\_source](javascript:call_link\('abencds_data_source_v1.htm'\)) *\[*ON [cds\_cond](javascript:call_link\('abencds_conditional_expression_v1.htm'\))*\]* ...

Additions:

[1\. ... ON cds\_cond](#!ABAP_ADDITION_1@1@)
[2\. ... TO ONE*|*MANY](#!ABAP_ADDITION_2@2@)

Effect

Defines a [join](javascript:call_link\('abenjoin_glosry.htm'\) "Glossary Entry") between two data sources of a [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). The code above is part of the syntax of a data source [data\_source](javascript:call_link\('abencds_data_source_v1.htm'\)) and contains the recursive syntax of a data source [data\_source](javascript:call_link\('abencds_data_source_v1.htm'\)). Two joined data sources represent a join expression.

Every join expression for an inner or outer join must contain a join condition [cds\_cond](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) after ON (for details, see Addition 1 below). A join expression for a cross join cannot contain any join condition.

[Inner joins](javascript:call_link\('abeninner_join_glosry.htm'\) "Glossary Entry"), [outer joins](javascript:call_link\('abenouter_join_glosry.htm'\) "Glossary Entry"), and [cross joins](javascript:call_link\('abencross_join_glosry.htm'\) "Glossary Entry") are possible:

-   A join between two data sources using INNER JOIN or just JOIN selects all entries of the data sources whose fields meet the ON condition.
-   A join between two data sources using LEFT OUTER JOIN selects all entries on the left side. A join between two data sources using RIGHT OUTER JOIN selects all entries on the right side. Entries that meet the ON condition have the same content as in the inner join. In entries that do not meet the ON condition, the elements on the right or left side have the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"). When the CDS view is used in ABAP SQL, null values are set to the type-dependent initial value.
-   When two data sources are joined using CROSS JOIN, their cross product is produced. All entries on the left side are combined with all entries on the right side. The number of rows in the result set is the number of rows on the left side multiplied by the number of rows on the right side.

Nested join expressions are evaluated in the following order:

-   In the case of inner and outer joins, by the arrangement of the ON conditions. From left to right, the most adjacent ON conditions are assigned to each JOIN and this expression is parenthesized implicitly. These implicit parentheses can be made explicit using actual parentheses, ( ). This is optional.
-   By default, cross joins are evaluated from left to right. The priority of the evaluation can be affected by parentheses ( ).
    -   If multiple cross joins are combined, the order of the evaluation is irrelevant. The result is always the same and the number of rows is the product of the number of rows of all involved data sources.
    -   If cross joins are combined with inner and outer joins, the result can depend on the order of evaluation or the parentheses.

Hints

-   A WHERE condition for a SELECT statement with joins affects the result set created using the joins.
-   An inner join or a cross join between two individual data sources is commutative. If the left and right side are switched, the result remains the same.
-   [Buffering](javascript:call_link\('abencds_v1_buffering.htm'\)) is not recommended for a CDS view that contains an outer join. The result set can contain [null values](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), which means that ABAP SQL reads can behave differently to direct database reads when the buffer is read, since null values in the buffer are transformed to initial values.
-   The function [coalesce](javascript:call_link\('abencds_coalesce_expression_v1.htm'\)) can be used to prevent null values in the result set.
-   A cross join behaves like an inner or outer join whose ON condition is always true. A cross join with a WHERE condition has the same result as an inner join with an identical ON condition. Unlike the inner join, in a cross join all data is read first before the condition is evaluated. In an inner join only data that meets the ON condition is read.
-   A cross join should only be used with extreme caution. Since it is not possible to specify an ON condition, all data of all involved data sources is read. In the case of very large datasets, the result set (whose number of rows is always the product of the number of all rows of both data sources) can quickly become very large.
-   On the database, a cross join of two client-dependent data sources is defined internally as an inner join, whose ON condition checks whether the client columns of the left and right side are equal. If one side is not client-dependent, the cross join is defined as specified.
-   In nested join expressions, parentheses are recommended for making the code easier to read. In the case of inner and outer joins, the parentheses can be specified wherever the ON conditions specify parentheses implicitly.
-   There is no limit on the number of join expressions in a SELECT statement of a CDS view in the DDL, but there is an [ATC](javascript:call_link\('abenatc_glosry.htm'\) "Glossary Entry") check that produces a message once a specific number of expressions is reached.

Example

The following CDS view works in exactly the same way as the [DDIC database view](javascript:call_link\('abenddic_database_views.htm'\)) DEMO\_SCARR\_SPFLI. The class CL\_DEMO\_CDS\_JOIN uses SELECT to access the view. Unlike when the DDIC view DEMO\_CDS\_SCARR\_SPFLI is accessed, no client column is returned when the CDS entity DEMO\_SCARR\_SPFLI is accessed. The CDS-managed DDIC view DEMO\_CDS\_JOIN returns the client column too.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_JOIN'
@AccessControl.authorizationCheck: #NOT\_ALLOWED
define view demo\_cds\_scarr\_spfli(
    id,
    carrier,
    flight,
    departure,
    destination
  )
  as select from spfli
    join         scarr on scarr.carrid = spfli.carrid
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

The following view contains a cross join of table T000 of all clients of an AS ABAP with the entries for the message class SABAPDEMOS in the table T100. The class CL\_DEMO\_CDS\_CROSS\_JOIN accesses the view. The result set would be very large without this WHERE condition.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_CRSJN'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_cross\_join
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
      t100.arbgb = 'SABAPDEMOS'

Addition 1   

... ON cds\_cond

Effect

Join condition. A join condition must be specified for an inner or outer join. A join condition must not be specified for a cross join.

The syntax of the relational expressions of a join condition [cds\_cond](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) is subject to the following restrictions:

-   General Rules
    -   [Character literals](javascript:call_link\('abencds_literal_v1.htm'\)) cannot be used in comparisons with numeric values.
    -   [Numeric literals](javascript:call_link\('abencds_literal_v1.htm'\)) that represent a value outside the value range of [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)) must be specified as floating point literals with a decimal point.
-   Special Rules:
    -   All [relational operators](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) are allowed. That means all comparison operators are allowed as well as BETWEEN, LIKE, IS \[NOT\] NULL, and IS \[NOT\] INITIAL.
    -   lhs expects a [field](javascript:call_link\('abencds_field_v1.htm'\)) of one of the two [data\_sources](javascript:call_link\('abencds_data_source_v1.htm'\)) of the join.
    -   rhs expects a [field](javascript:call_link\('abencds_field_v1.htm'\)) of one of the two [data\_sources](javascript:call_link\('abencds_data_source_v1.htm'\)) of the join, a [literal](javascript:call_link\('abencds_literal_v1.htm'\)) with optional domain prefix, a [parameter](javascript:call_link\('abencds_parameter_v1.htm'\)), a [session variable](javascript:call_link\('abencds_session_variable_v1.htm'\)), or a [built-in function](javascript:call_link\('abencds_builtin_functions_v1.htm'\)).
    -   [Path expressions](javascript:call_link\('abencds_path_expression_v1.htm'\)) cannot be used.
    -   [CDS DDL expressions](javascript:call_link\('abencds_expressions_v1.htm'\)) cannot be used.

Addition 2   

... TO ONE*|*MANY

Effect

Specifies the [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") of a left outer join. This addition is positioned after LEFT OUTER, but is not possible after RIGHT OUTER. Only certain specific database systems apply this addition.

If the addition TO ONE is specified, any databases that support this addition assume that the result set defined by the left outer join matches this cardinality and the [SQL Optimizer](javascript:call_link\('abenquery_optimizer_glosry.htm'\) "Glossary Entry") attempts to suppress any surplus joins. If the result set does not match the cardinality, the result is undefined and may be dependent on the entries in the [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)). If the addition TO MANY is specified, no optimization takes place as a rule.

Hints

-   More information can be found in the documentation of the current database system. The [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"), for example, supports the additions TO ONE and TO MANY and their description is part of the [HANA-specific SQL documentation](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f).
-   To avoid undefined and platform-dependent behavior, TO ONE or TO MANY can be specified only if the data being read meets the relevant prerequisites.

Example

Incorrect use of TO ONE in CDS views. The data in the DDIC database tables SCARR and SPFLI do not have the cardinality TO ONE and have the cardinality TO MANY instead. On a SAP HANA database, for example, the result is dependent on the [SELECT list](javascript:call_link\('abapselect_list.htm'\)). If the left and right side are specified here, no optimization takes place. If no columns are specified on the right side (and the aggregate function [COUNT(\*)](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)) is used), an optimization takes place. Here, only that data is read that meets the prerequisite cardinality.

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

The class CL\_DEMO\_CDS\_WRONG\_TO\_ONE accesses the CDS views and displays the results.