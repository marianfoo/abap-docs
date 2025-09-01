  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Write Access](javascript:call_link\('abenabap_sql_writing.htm'\)) →  [UPDATE dbtab](javascript:call_link\('abapupdate.htm'\)) →  [UPDATE dbtab, source](javascript:call_link\('abapupdate_source.htm'\)) →  [UPDATE dbtab, set\_expression](javascript:call_link\('abapupdate_set_expression.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20UPDATE%2C%20Use%20of%20SET%2C%20ABENUPDATE_SET_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

UPDATE, Use of SET

The example demonstrates how the addition SET of the statement UPDATE is used.

Source Code   

\* Public class definition
CLASS cl\_demo\_update DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_update IMPLEMENTATION.
  METHOD main.
    CONSTANTS id TYPE demo\_update-id VALUE 'X'.
    DELETE FROM demo\_update WHERE id = @id.
    INSERT demo\_update FROM @( VALUE demo\_update( id = id
                                  col1 = 100
                                  col2 = 100
                                  col3 = 100
                                  col4 = 100 ) ).
    FINAL(num)   = 200.
    FINAL(diff)  = 10.
    FINAL(token) = \`col4 = col4 - demo\_update~col1\`.
    UPDATE demo\_update
           SET col1 = @num,
               col2 = col2 + @diff,
               col3 = col3 - @diff,
              (token)
           WHERE id = @id.
    SELECT SINGLE \*
           FROM demo\_update
           WHERE id = @id
           INTO @FINAL(wa).
    out->write( wa ).
  ENDMETHOD.
ENDCLASS.

Description   

It modifies the content of four columns of a row of the DDIC database table DEMO\_UPDATE:

-   The column COL1 is assigned the value 200.
-   The value of the column COL2 is raised by 10.
-   The value of the column COL3 is reduced by 10.
-   The value of the column COL4 is reduced dynamically by the value of the column COL1 as it was before the execution of the statement.