  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [EXEC SQL - Embedded Native SQL](javascript:call_link\('abennativesql.htm'\)) →  [EXEC SQL - Examples](javascript:call_link\('abenexec_sql_abexas.htm'\)) → 

EXEC SQL, Accessing a Database Function

This example demonstrates how a database function is accessed using static Native SQL.

Source Code

REPORT demo\_exec\_sql\_db\_function.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TRY.
        EXEC SQL.
          DROP FUNCTION abap\_docu\_demo\_scalar\_function;
        ENDEXEC.
        EXEC SQL.
          CREATE FUNCTION
            abap\_docu\_demo\_scalar\_function
              ( IN p1 NVARCHAR(5), IN p2 NVARCHAR(5) )
              RETURNS r NVARCHAR(10) AS
              BEGIN
                r = concat(p1,p2);
              END;
        ENDEXEC.
      CATCH cx\_sy\_native\_sql\_error INTO DATA(exc).
        cl\_demo\_output=>display( exc->get\_text( ) ).
        RETURN.
    ENDTRY.
    DELETE FROM demo\_expressions.
    INSERT demo\_expressions
      FROM TABLE @( VALUE #( ( id = 'X' char1 = 'xxxxxaaaaa' )
                             ( id = 'Y' char1 = 'yyyyybbbbb' )
                             ( id = 'Z' char1 = 'zzzzzccccc' ) ) ).
    DATA in1 TYPE c LENGTH 5 VALUE 'yyyyy'.
    DATA in2 TYPE c LENGTH 5 VALUE 'bbbbb'.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = in1
      )->add\_field( CHANGING field = in2 )->request( ).
    DATA result TYPE demo\_expressions-id.
    TRY.
        EXEC SQL.
          select id
                 from demo\_expressions
                 where char1 = abap\_docu\_demo\_scalar\_function(:in1,
                                                              :in2)
                 into :result
        ENDEXEC.
      CATCH cx\_sy\_native\_sql\_error INTO exc.
        cl\_demo\_output=>write( exc->get\_text( ) ).
    ENDTRY.
    cl\_demo\_output=>display( result ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

After [EXEC SQL](javascript:call_link\('abapexec.htm'\)), this example creates a scalar [database function](javascript:call_link\('abendatabase_function_glosry.htm'\) "Glossary Entry") with two input parameters and uses this function in the WHERE condition of a SELECT statement.