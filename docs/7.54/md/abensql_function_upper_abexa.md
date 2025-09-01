  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Built-In Functions in ABAP Dictionary](javascript:call_link\('abenddic_builtin_functions.htm'\)) →  [SQL Functions](javascript:call_link\('abensql_functions.htm'\)) →  [SQL Functions for Strings](javascript:call_link\('abensql_functions_string.htm'\)) → 

SQL Function UPPER

This example demonstrates the SQL function UPPER in ABAP SQL and ABAP CDS.

Source Code

REPORT demo\_sql\_upper.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA:
      query TYPE string VALUE \`ERROR\`,
      rows  TYPE i      VALUE 100.
    cl\_demo\_input=>add\_field( CHANGING field = query ).
    cl\_demo\_input=>request(   CHANGING field = rows ).
    query = \`%\` && to\_upper( query ) && \`%\`.
    rows  = COND #( WHEN rows <= 0 THEN 100 ELSE rows ).
    "UPPER in CDS view
    SELECT arbgb, msgnr, text
           FROM demo\_cds\_upper
           WHERE sprsl = 'E' AND
                 upper\_text LIKE @query
           ORDER BY arbgb, msgnr, text
           INTO TABLE @DATA(result1)
           UP TO @rows ROWS.
    "UPPER in Open SQL
    SELECT arbgb, msgnr, text
           FROM t100
           WHERE sprsl = 'E' AND
                 upper( text ) LIKE @query
           ORDER BY arbgb, msgnr, text
           INTO TABLE @DATA(result2)
           UP TO @rows ROWS.
    ASSERT result1 = result2.
    cl\_demo\_output=>display( result1 ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

A SELECT statement accesses the following CDS view, which uses the SQL function UPPER:

@AbapCatalog.sqlViewName: 'DEMOCDSUPPER'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view Demo\_Cds\_Upper
  as select from
    t100
    {
      sprsl,
      arbgb,
      msgnr,
      text,
      upper(text) as upper\_text
    }                                                                                                                                

Another SELECT statement uses the SQL function UPPER directly to access the same data source T100.

Since SQL functions cannot yet be used on the left side of LIKE in the DDL of the ABAP CDS, the view returns a help field, which is evaluated in ABAP SQL. The results are the same. The search effected by the examples is not case-sensitive.