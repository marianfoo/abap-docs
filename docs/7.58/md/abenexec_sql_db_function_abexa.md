  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennative_sql.htm) →  [Embedded Native SQL (EXEC SQL)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennativesql.htm) →  [EXEC SQL - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexec_sql_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20EXEC%20SQL%20-%20Access%20to%20Database%20Functions%2C%20ABENEXEC_SQL_DB_FUNCTION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

EXEC SQL - Access to Database Functions

This example demonstrates how a database function is accessed using static Native SQL.

Source Code   

\* Public class definition
CLASS cl\_demo\_exec\_sql\_db\_function DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_exec\_sql\_db\_function IMPLEMENTATION.
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
        out->write( exc->get\_text( ) ).
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
        out->write( exc->get\_text( ) ).
    ENDTRY.
    out->write( result ).
  ENDMETHOD.
ENDCLASS.

Description   

After [EXEC SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexec.htm), this example creates a scalar [database function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_function_glosry.htm "Glossary Entry") with two input parameters and uses this function in the WHERE condition of a SELECT statement.