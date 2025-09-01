  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Write Accesses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_writing.htm) →  [UPDATE dbtab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapupdate.htm) →  [UPDATE dbtab - source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapupdate_source.htm) →  [UPDATE dbtab - set\_expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapupdate_set_expression.htm) → 

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
    DATA(num)   = 200.
    DATA(diff)  = 10.
    DATA(token) = \`col4 = col4 - demo\_update~col1\`.
    UPDATE demo\_update
           SET col1 = @num,
               col2 = col2 + @diff,
               col3 = col3 - @diff,
              (token)
           WHERE ID = @id.
    SELECT SINGLE \*
           FROM demo\_update
           INTO @DATA(wa).
    cl\_demo\_output=>display( wa ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

It modifies the content of four columns of a row of the database table DEMO\_UPDATE:

-   The column COL1 is assigned the value 200.

-   The value of the column COL2 is raised by 10.

-   The value of the column COL3 is reduced by 10.

-   The value of the column COL4 is reduced dynamically by the value of the column COL1 before the statement is executed.