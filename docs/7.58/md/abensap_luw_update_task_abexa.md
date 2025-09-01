  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_consistency.htm) →  [SAP LUW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_luw.htm) →  [SAP LUW, Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_luw_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SAP%20LUW%2C%20UPDATE%20TASK%2C%20ABENSAP_LUW_UPDATE_TASK_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SAP LUW, UPDATE TASK

This example demonstrates how [SAP LUWs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_luw.htm) are bundled using [update function modules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenupdate_function_module_glosry.htm "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_sap\_luw\_update\_task DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_sap\_luw\_update\_task IMPLEMENTATION.
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
    out->write( result ).
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
    out->write( result ).
  ENDMETHOD.
ENDCLASS.

Description   

The example is divided into segments by switching the work process. An implicit [database commit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_commit_glosry.htm "Glossary Entry") is performed at the end of each segment. Here, the work process is switched using the statement [WAIT UP TO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwait_up_to.htm). In real programs, a switch of this kind can have [many different causes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_commit.htm).

This class makes writes on the database that are moved to different [update function modules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenupdate_function_module_glosry.htm "Glossary Entry"). The statement [COMMIT WORK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommit.htm) executes the function modules registered so far using the [CALL FUNCTION IN UPDATE TASK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_function_update.htm). This entails closing an SAP LUW and opening another.

In the first statement, COMMIT WORK, the addition AND WAIT triggers [synchronous updates](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensynchronous_update_glosry.htm "Glossary Entry"), where one update function module must be completed before the next one can start. In the second SAP LUW, the statement [SET UPDATE TASK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_update_task_shortref.htm) switches [local updates](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlocal_update_glosry.htm "Glossary Entry") on, which are always performed synchronously.