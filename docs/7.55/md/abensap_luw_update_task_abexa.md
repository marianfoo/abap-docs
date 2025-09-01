  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Data Consistency](javascript:call_link\('abentransaction.htm'\)) →  [SAP LUW](javascript:call_link\('abensap_luw.htm'\)) →  [SAP LUW, Examples](javascript:call_link\('abensap_luw_abexas.htm'\)) → 

SAP LUW, UPDATE TASK

This example demonstrates how [SAP LUWs](javascript:call_link\('abensap_luw.htm'\)) are bundled using [update function modules](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry").

Source Code

REPORT demo\_sap\_luw\_update.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    CALL FUNCTION 'DEMO\_UPDATE\_DELETE' IN UPDATE TASK.
    WAIT UP TO 1 SECONDS. "<--- Roll-out/Roll-in with database commit
    DATA(values) = VALUE demo\_update\_tab(
      ( id = 'X' col1 = 100 col2 = 200 col3 = 300 col4 = 400 )
      ( id = 'Y' col1 = 110 col2 = 210 col3 = 310 col4 = 410 )
      ( id = 'Z' col1 = 120 col2 = 220 col3 = 320 col4 = 420 ) ).
    CALL FUNCTION 'DEMO\_UPDATE\_INSERT' IN UPDATE TASK
      EXPORTING
        values = values.
    COMMIT WORK AND WAIT. "<---- End SAP LUW and start a new one
    SELECT \*
           FROM demo\_update
           INTO TABLE @DATA(result).
    cl\_demo\_output=>write( result ).
    SET UPDATE TASK LOCAL.
    DELETE TABLE values WITH TABLE KEY id = 'X'.
    CALL FUNCTION 'DEMO\_UPDATE\_DELETE' IN UPDATE TASK
      EXPORTING
        values = values.
    WAIT UP TO 1 SECONDS. "<--- Roll-out/Roll-in with database commit
    values = VALUE #(
      ( id = 'Y' col1 = 1100 col2 = 2100 col3 = 3100 col4 = 4100 )
      ( id = 'Z' col1 = 1200 col2 = 2200 col3 = 3200 col4 = 4200 ) ).
    CALL FUNCTION 'DEMO\_UPDATE\_MODIFY' IN UPDATE TASK
      EXPORTING
        values = values.
    WAIT UP TO 1 SECONDS. "<--- Roll-out/Roll-in with database commit
    values = VALUE #(
      ( id = 'Y' col1 = 1111 col2 = 2111 col3 = 3111 col4 = 4111 ) ).
    CALL FUNCTION 'DEMO\_UPDATE\_UPDATE' IN UPDATE TASK
      EXPORTING
        values = values.
    COMMIT WORK. "<---- End SAP LUW and start a new one
    SELECT \*
           FROM demo\_update
           INTO TABLE @result.
    cl\_demo\_output=>write( result ).
    cl\_demo\_output=>display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The example shows a program divided into segments by switching the work process. An implicit [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") is performed at the end of each segment. Here, the work process is switched using the statement [WAIT UP TO](javascript:call_link\('abapwait_up_to.htm'\)). In real programs, a switch of this kind can have [many different causes](javascript:call_link\('abendb_commit.htm'\)).

This program makes writes on the database that are moved to different [update function modules](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry"). The statement [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) executes the function modules registered up until now using the [CALL FUNCTION IN UPDATE TASK](javascript:call_link\('abapcall_function_update.htm'\)). This entails closing one SAP LUW and opening another.

In the first statement, COMMIT WORK, the addition AND WAIT specifies [synchronous updates](javascript:call_link\('abensynchronous_update_glosry.htm'\) "Glossary Entry"), where one update function module must be completed before the next one can start. In the second SAP LUW, the statement [SET UPDATE TASK](javascript:call_link\('abapset_update_task_shortref.htm'\)) switches [local updates](javascript:call_link\('abenlocal_update_glosry.htm'\) "Glossary Entry") on, which are always performed synchronously.