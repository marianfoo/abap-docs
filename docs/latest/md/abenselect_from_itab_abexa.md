  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT, FROM](javascript:call_link\('abapfrom_clause.htm'\)) →  [SELECT, FROM data\_source](javascript:call_link\('abapselect_data_source.htm'\)) →  [SELECT, FROM @itab](javascript:call_link\('abapselect_itab.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20Internal%20Table%20as%20Data%20Source%20of%20a%20Query%2C%20ABENSELECT_FROM_ITAB_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on%20for%20improvement:)

SELECT, Internal Table as Data Source of a Query

This example demonstrates how an internal table is accessed using an ABAP SQL [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_select\_from\_itab DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_select\_from\_itab IMPLEMENTATION.
  METHOD main.
    TYPES:
      BEGIN OF struct,
        key1 TYPE c LENGTH 1,
        key2 TYPE c LENGTH 1,
        num1 TYPE i,
        num2 TYPE i,
      END OF struct,
      itab TYPE SORTED TABLE OF struct
                WITH NON-UNIQUE KEY key1 key2.
    FINAL(rnd) = cl\_abap\_random\_int=>create(
      seed = CONV i(
        cl\_demo\_date\_time=>get\_user\_time( ) ) min = 1 max = 5 ).
    FINAL(abcde) = 'abcdefghijklmnopqrstuvwxyz'.
    FINAL(itab) = VALUE itab(
      FOR i = 1 UNTIL i > 100
        LET off1 = rnd->get\_next( ) - 1
            off2 = rnd->get\_next( ) - 1 IN
            ( key1 = abcde+off1(1)
              key2 = abcde+off2(1)
              num1 = rnd->get\_next( )
              num2 = rnd->get\_next( ) ) ).
    out->write( itab ).
    SELECT FROM @itab AS itab
           FIELDS key1,
                  key2,
                  SUM( num1 ) AS sum1,
                  SUM( num2 ) AS sum2,
                  SUM( num1 + num2 ) AS sum
           GROUP BY key1, key2
           ORDER BY key1, key2
           INTO TABLE @FINAL(result) ##itab\_db\_select.
    out->write( result ).
  ENDMETHOD.
ENDCLASS.

Description   

An internal table is filled with random values and is used as a [data source](javascript:call_link\('abapselect_itab.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement. Aggregate expressions, an SQL expression, GROUP BY, and ORDER BY are all used when doing this. The statement cannot be processed by the [ABAP SQL engine](javascript:call_link\('abenabap_sql_engine_glosry.htm'\) "Glossary Entry") since it does not meet the corresponding [restrictions](javascript:call_link\('abensql_engine_restr.htm'\)). The pragma ##itab\_db\_select is used to hide the associated syntax check warning.