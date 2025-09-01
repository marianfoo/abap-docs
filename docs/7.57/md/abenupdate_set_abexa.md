  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Write Access](javascript:call_link\('abenabap_sql_writing.htm'\)) →  [UPDATE dbtab](javascript:call_link\('abapupdate.htm'\)) →  [UPDATE dbtab, source](javascript:call_link\('abapupdate_source.htm'\)) →  [UPDATE dbtab, set\_expression](javascript:call_link\('abapupdate_set_expression.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: UPDATE, Use of SET, ABENUPDATE_SET_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

UPDATE, Use of SET

The example demonstrates how the addition SET of the statement UPDATE is used.

Source Code   

REPORT demo\_update.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
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
           WHERE ID = @id.
    SELECT SINGLE \*
           FROM demo\_update
           WHERE id = @id
           INTO @FINAL(wa).
    cl\_demo\_output=>display( wa ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

It modifies the content of four columns of a row of the DDIC database table DEMO\_UPDATE:

-   The column COL1 is assigned the value 200.
-   The value of the column COL2 is raised by 10.
-   The value of the column COL3 is reduced by 10.
-   The value of the column COL4 is reduced dynamically by the value of the column COL1 as it was before the execution of the statement.