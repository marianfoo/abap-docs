---
title: "Demonstrating the SAP LUW"
description: |
  This example demonstrates the SAP LUW using the bundling techniques with update function modules(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenupdate_function_module_glosry.htm 'Glossary Entry') and subroutines(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_luw_bundl_tech_abexa.htm"
abapFile: "abensap_luw_bundl_tech_abexa.htm"
keywords: ["select", "insert", "update", "delete", "loop", "do", "if", "case", "try", "method", "class", "data", "types", "abensap", "luw", "bundl", "tech", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_consistency.htm) →  [SAP LUW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_luw.htm) →  [SAP LUW, Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_luw_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Demonstrating%20the%20SAP%20LUW%2C%20ABENSAP_LUW_BUNDL_TECH_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Demonstrating the SAP LUW

This example demonstrates the SAP LUW using the bundling techniques with [update function modules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") and [subroutines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensubroutine_glosry.htm "Glossary Entry"). It covers the following aspects:

-   Demonstrating [synchronous update](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensynchronous_update_glosry.htm "Glossary Entry"), [asynchronous update](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenasynchronous_update_glosry.htm "Glossary Entry"), and [local update](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlocal_update_glosry.htm "Glossary Entry") triggered by [COMMIT WORK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit.htm), [COMMIT WORK AND WAIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit.htm), and [SET UPDATE TASK LOCAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_update_task_local.htm) using update function modules.
-   Demonstrating the statements [PERFORM ... ON COMMIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapperform_on_commit.htm) and [PERFORM ... ON ROLLBACK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapperform_on_commit.htm) using subroutines.

Source Code   

REPORT demo\_sap\_luw\_bt.
DATA: tab\_struc    TYPE demo\_luw\_tab,
      ok\_code      TYPE sy-ucomm,
      del\_insert   TYPE abap\_bool,
      perform      TYPE abap\_bool,
      commit       TYPE abap\_bool,
      commit\_wait  TYPE abap\_bool,
      local\_update TYPE abap\_bool,
      err          TYPE abap\_bool,
      rollback     TYPE abap\_bool,
      terminate    TYPE abap\_bool,
      dynnr        TYPE sy-dynnr,
      counter      TYPE i,
      log\_itab     TYPE cl\_demo\_sap\_luw\_helper=>log\_type.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    TYPES: BEGIN OF request4log,
             log      TYPE demo\_luw\_logt,
             called   TYPE abap\_bool,
             wp\_info  TYPE abap\_bool,
             luw\_key  TYPE abap\_bool,
             tx\_state TYPE abap\_bool,
           END OF request4log.
    CLASS-METHODS: prep,
      create\_log\_entries IMPORTING req TYPE request4log.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD prep.
    DELETE FROM demo\_luw\_tab.
    INSERT demo\_luw\_tab FROM TABLE @( VALUE #(
    ( key\_field  = 1
      ch         = 'DEMO DATA'
      num        = 11
      time\_stamp = utclong\_current( ) )
    ( key\_field  = 2
      ch         = 'THAT WAS'
      num        = 22
      time\_stamp = utclong\_current( ) )
    ( key\_field  = 3
      ch         = 'CREATED'
      num        = 33
      time\_stamp = utclong\_current( ) )
    ( key\_field  = 4
      ch         = 'IN ADVANCE'
      num        = 44
      time\_stamp = utclong\_current( ) ) ) ).
    DELETE FROM demo\_luw\_logt.
  ENDMETHOD.
  METHOD create\_log\_entries.
    IF req-called = abap\_true.
      counter += 1.
      INSERT VALUE #( id        = counter
                      context   = req-log-context
                      name      = req-log-name
                      details   = \`Called!\`
                      timestamp = utclong\_current( )
                    ) INTO TABLE log\_itab.
    ENDIF.
    IF req-luw\_key = abap\_true.
      counter += 1.
      INSERT VALUE #( id        = counter
                      context   = req-log-context
                      name      = req-log-name
                      details   = \`SAP LUW key: \` &&
                      cl\_system\_transaction\_state=>get\_sap\_luw\_key( )
                      timestamp = utclong\_current( )
                    ) INTO TABLE log\_itab.
    ENDIF.
    IF req-wp\_info = abap\_true.
      counter += 1.
      INSERT VALUE #( id        = counter
                      context   = req-log-context
                      name      = req-log-name
                      details   =
                      cl\_demo\_sap\_luw\_helper=>get\_work\_process\_info( )
                      timestamp = utclong\_current( )
                    ) INTO TABLE log\_itab.
    ENDIF.
    IF req-tx\_state = abap\_true.
      counter += 1.
      INSERT VALUE #(
        id        = counter
        context   = req-log-context
        name      = req-log-name
        details   =
        cl\_demo\_sap\_luw\_helper=>checking\_transaction\_state( )
        timestamp = utclong\_current( )
      ) INTO TABLE log\_itab.
    ENDIF.
  ENDMETHOD.
ENDCLASS.
FORM delete.
  cl\_demo\_sap\_luw\_helper=>subr\_delete( ).
  demo=>create\_log\_entries(
  VALUE #( log      = VALUE #( context = 'Subroutine'
                               name    = 'delete' )
           called   = abap\_true
           luw\_key  = abap\_true
           tx\_state = abap\_true
           wp\_info  = abap\_true ) ).
ENDFORM.
FORM insert.
  DATA values TYPE demo\_luw\_tab.
  IMPORT values = values FROM MEMORY ID 'DEMO\_INSERT'.
  IF sy-subrc = 0.
    values-time\_stamp = utclong\_current( ).
    cl\_demo\_sap\_luw\_helper=>subr\_insert( values ).
  ENDIF.
  demo=>create\_log\_entries(
  VALUE #( log      = VALUE #( context = 'Subroutine'
                               name    = 'insert' )
           called   = abap\_true
           luw\_key  = abap\_true
           tx\_state = abap\_true
           wp\_info  = abap\_true ) ).
ENDFORM.
FORM update\_log.
  demo=>create\_log\_entries(
  VALUE #( log      = VALUE #( context = 'Subroutine'
                               name    = 'update\_log' )
           called   = abap\_true
           luw\_key  = abap\_true
           tx\_state = abap\_true
           wp\_info  = abap\_true ) ).
  cl\_demo\_sap\_luw\_helper=>subr\_update\_log( log\_itab ).
ENDFORM.
FORM call\_on\_rollback.
  "No implementation here. Only to demonstrate that the
  "subroutine is called in the event of triggering a
  "rollback.
  demo=>create\_log\_entries(
    VALUE #( log      = VALUE #( context = 'Subroutine'
                                 name    = 'call\_on\_rollback' )
             called   = abap\_true
             luw\_key  = abap\_true
             tx\_state = abap\_true ) ).
ENDFORM.
END-OF-SELECTION.
  demo=>prep( ).
  counter += 1.
  INSERT VALUE #(
    id        = counter
    context   = '-'
    name      = '-'
    details   = |Program { sy-repid } has been started.| &&
    \`The first dynpro is about to be called.\`
    timestamp = utclong\_current( )
  ) INTO TABLE log\_itab.
  counter += 1.
  INSERT VALUE #( id        = counter
                  context   = '-'
                  name      = '-'
                  details   = \`SAP LUW Key: \` &&
                  cl\_system\_transaction\_state=>get\_sap\_luw\_key( )
                  timestamp = utclong\_current( )
                ) INTO TABLE log\_itab.
  CALL SCREEN 0100.
\*&---------------------------------------------------------------------\*
\*& Module STATUS\_0100 OUTPUT
\*&---------------------------------------------------------------------\*
\*&
\*&---------------------------------------------------------------------\*
MODULE status\_0100 OUTPUT.
  SET PF-STATUS 'STATUS0100'.
  SET TITLEBAR 'TITLE0100'.
  demo=>create\_log\_entries(
   VALUE #( log      = VALUE #( context = 'PBO'
                                name    = 'status\_0100' )
            called   = abap\_true
            luw\_key  = abap\_true
            tx\_state = abap\_true
            wp\_info  = abap\_true ) ).
  cl\_demo\_sap\_luw\_helper=>cc\_alv\_display( 'DBENTRIES' ).
  dynnr = sy-dynnr.
ENDMODULE.
\*&---------------------------------------------------------------------\*
\*&      Module  USER\_COMMAND\_0100  INPUT
\*&---------------------------------------------------------------------\*
\*       text
\*----------------------------------------------------------------------\*
MODULE user\_command\_0100 INPUT.
  demo=>create\_log\_entries(
      VALUE #( log      = VALUE #( context = 'PAI'
                                   name    = 'user\_command\_0100' )
               called   = abap\_true
               luw\_key  = abap\_true
               tx\_state = abap\_true
               wp\_info  = abap\_true ) ).
  FINAL(ok0100) = ok\_code.
  CLEAR ok\_code.
  CASE ok0100.
    WHEN 'GO' OR 'ENTER'.
      IF del\_insert = abap\_true.
        CALL FUNCTION 'DEMO\_LUW\_DELETE\_FU' IN UPDATE TASK.
        MESSAGE \`A function module has been registered \` &&
        \`that clears the database table.\` TYPE 'I'.
      ELSEIF local\_update = abap\_true.
        SET UPDATE TASK LOCAL.
        demo=>create\_log\_entries(
          VALUE #( log      = VALUE #( context = 'PAI'
                                       name    = 'user\_command\_0100' )
                   luw\_key  = abap\_true
                   tx\_state = abap\_true
                   wp\_info  = abap\_true ) ).
        CALL FUNCTION 'DEMO\_LUW\_DELETE\_FU' IN UPDATE TASK.
        MESSAGE \`Local update has been activated. A function \` &&
        \`module has been registered that clears the database table.\` &&
        \` No matter if you choose COMMIT WORK or COMMIT WORK AND \` &&
        \`WAIT in the next step, it will be a synchronous update.\`
        TYPE 'I'.
      ELSEIF perform = abap\_true.
        PERFORM delete ON COMMIT.
        PERFORM call\_on\_rollback ON ROLLBACK.
        demo=>create\_log\_entries(
          VALUE #( log      = VALUE #( context = 'PAI'
                                       name    = 'user\_command\_0100' )
                   luw\_key  = abap\_true
                   tx\_state = abap\_true
                   wp\_info  = abap\_true ) ).
        MESSAGE \`Subroutines have been registered for commit \` &&
        \`and rollback.\` TYPE 'I'.
      ENDIF.
    WHEN OTHERS.
      LEAVE PROGRAM.
  ENDCASE.
ENDMODULE.
\*&---------------------------------------------------------------------\*
\*& Module STATUS\_0200 OUTPUT
\*&---------------------------------------------------------------------\*
\*&
\*&---------------------------------------------------------------------\*
MODULE status\_0200 OUTPUT.
  SET PF-STATUS 'STATUS0200'.
  SET TITLEBAR 'TITLE0200'.
  demo=>create\_log\_entries(
      VALUE #( log      = VALUE #( context = 'PBO'
                                   name    = 'status\_0200' )
               called   = abap\_true
               luw\_key  = abap\_true
               tx\_state = abap\_true
               wp\_info  = abap\_true ) ).
  dynnr = sy-dynnr.
ENDMODULE.
\*&---------------------------------------------------------------------\*
\*&      Module  USER\_COMMAND\_0200  INPUT
\*&---------------------------------------------------------------------\*
\*       text
\*----------------------------------------------------------------------\*
MODULE user\_command\_0200 INPUT.
  demo=>create\_log\_entries(
     VALUE #( log      = VALUE #( context = 'PAI'
                                  name    = 'user\_command\_0200' )
              called   = abap\_true
              luw\_key  = abap\_true
              tx\_state = abap\_true
              wp\_info  = abap\_true ) ).
  FINAL(ok0200) = ok\_code.
  CLEAR ok\_code.
  CASE ok0200.
    WHEN 'GO' OR 'ENTER'.
      IF perform = abap\_true.
        "Registered subroutines cannot have any parameter interface.
        "Therefore, data can only be passed through external interfaces,
        "for example, the ABAP memory.
        EXPORT values = tab\_struc TO MEMORY ID 'DEMO\_INSERT'.
        PERFORM insert ON COMMIT.
        MESSAGE \`A subroutine that inserts the entries in the \` &&
        \`database table has been registered. \` &&
        \`When you select a commit option in the next step, \` &&
        \`COMMIT WORK and COMMIT WORK AND WAIT have \` &&
        \`the same effect. The subroutines are executed in \` &&
        \`the current work process in this case.\`
        TYPE 'I'.
      ELSE.
        CALL FUNCTION 'DEMO\_LUW\_INSERT\_FU' IN UPDATE TASK
          EXPORTING
            values = tab\_struc.
        MESSAGE \`An update function module that inserts the \` &&
        \`entries in the database table has \` &&
        \`been registered.\` TYPE 'I'.
      ENDIF.
    WHEN OTHERS.
      LEAVE PROGRAM.
  ENDCASE.
ENDMODULE.
\*&---------------------------------------------------------------------\*
\*& Module STATUS\_0300 OUTPUT
\*&---------------------------------------------------------------------\*
\*&
\*&---------------------------------------------------------------------\*
MODULE status\_0300 OUTPUT.
  SET PF-STATUS 'STATUS0300'.
  SET TITLEBAR 'TITLE0300'.
  demo=>create\_log\_entries(
     VALUE #( log      = VALUE #( context = 'PBO'
                                  name    = 'status\_0300' )
              called   = abap\_true
              luw\_key  = abap\_true
              tx\_state = abap\_true
              wp\_info  = abap\_true ) ).
  dynnr = sy-dynnr.
  IF perform = 'X'.
    LOOP AT SCREEN INTO DATA(scr).
      IF scr-name = 'EXCURSION\_WP'
      OR scr-name = 'WAIT'
      OR scr-name = 'FAIL\_LUW'
      OR scr-name = 'ERR'
      OR scr-name = 'TERMINATE'
      OR scr-name = 'ERROR\_A'.
        scr-invisible    = '1'.
        MODIFY SCREEN FROM scr.
      ENDIF.
    ENDLOOP.
  ENDIF.
ENDMODULE.
\*&---------------------------------------------------------------------\*
\*&      Module  USER\_COMMAND\_0300  INPUT
\*&---------------------------------------------------------------------\*
\*       text
\*----------------------------------------------------------------------\*
MODULE user\_command\_0300 INPUT.
  demo=>create\_log\_entries(
      VALUE #( log      = VALUE #( context = 'PAI'
                                   name    = 'user\_command\_0300' )
               called   = abap\_true
               luw\_key  = abap\_true
               tx\_state = abap\_true
               wp\_info  = abap\_true ) ).
  FINAL(ok0300) = ok\_code.
  CLEAR ok\_code.
  CASE ok0300.
    WHEN 'GO' OR 'ENTER' OR 'OK'.
      CASE 'X'.
        WHEN commit.
          IF perform = abap\_false.
            CALL FUNCTION 'DEMO\_LUW\_LOG\_FU' IN UPDATE TASK
              EXPORTING
                log = log\_itab.
            MESSAGE \`An update function module that inserts \` &&
           \`entries for the log has been registered. \` &&
           \`COMMIT WORK is about to be executed.\` TYPE 'I'.
          ELSE.
            PERFORM update\_log ON COMMIT.
            MESSAGE \`A subroutine that inserts entries for the \` &&
            \`log has been registered \` &&
            \`COMMIT WORK is about to be executed.\` TYPE 'I'.
          ENDIF.
          COMMIT WORK.
          SELECT COUNT(\*) FROM demo\_luw\_tab INTO @DATA(entries).
          MESSAGE \`COMMIT WORK has been executed. Current \` &&
          \`number of database table entries: \` &&
          entries &&
          \`. If it is 4 and not 1, the update will be done \` &&
          \`asynchronously.\` TYPE 'I'.
        WHEN commit\_wait.
          IF perform = abap\_false.
            CALL FUNCTION 'DEMO\_LUW\_LOG\_FU' IN UPDATE TASK
              EXPORTING
                log = log\_itab.
            MESSAGE \`An update function module that inserts \` &&
             \`entries for the log has been registered. \` &&
             \`COMMIT WORK AND WAIT is about to be executed.\` TYPE 'I'.
          ELSE.
            PERFORM update\_log ON COMMIT.
            MESSAGE \`A subroutine that inserts entries for the \` &&
            \`log has been registered \` &&
            \`COMMIT WORK AND WAIT is about to be executed.\` TYPE 'I'.
          ENDIF.
          COMMIT WORK AND WAIT.
          SELECT COUNT(\*) FROM demo\_luw\_tab INTO @entries.
          MESSAGE \`COMMIT WORK AND WAIT has been executed. Current \` &&
          \`number of database table entries: \` &&
          entries &&
          \`. If it is 1, the update has been done \` &&
          \`synchronously.\` TYPE 'I'.
        WHEN rollback.
          ROLLBACK WORK.
          MESSAGE \`ROLLBACK WORK has been executed. A rollback has \` &&
          \`been triggered. The original database table content \` &&
          \`should be displayed.\`
          TYPE 'I'.
          MESSAGE \`Note: As an exception, the example \` &&
          \`implementation includes a database update to the log \` &&
          \`table after the rollback, just to show the progress \` &&
          \`of the program execution up to that point.\`
          TYPE 'I' DISPLAY LIKE 'E'.
          "Update log table
          cl\_demo\_sap\_luw\_helper=>create\_log\_entries( log\_itab ).
          "Log information for triggering a rollback
          cl\_demo\_sap\_luw\_helper=>create\_log\_entries(
            VALUE #( ( id        = 99
                       context   = '-'
                       name      = '-'
                       details   = \`Rollback triggered\`
                       timestamp = utclong\_current( ) ) ) ).
        WHEN err.
          CALL FUNCTION 'DEMO\_LUW\_LOG\_FU' IN UPDATE TASK
            EXPORTING
              values      = tab\_struc
              cause\_error = abap\_true.
          IF local\_update = abap\_true.
            MESSAGE \`A function module has been registered that  \` &&
            \`causes an error (zero division). COMMIT WORK AND WAIT \` &&
            \`is about to be executed. You are directly informed \` &&
            \`about the error and the program is terminated. All \` &&
            \`changes are implicitly rolled back. You can check \` &&
            \`transaction ST22 for the error caused.\`
            TYPE 'I'.
          ELSE.
            MESSAGE \`A function module has been registered that \` &&
            \`causes an error (zero division). COMMIT WORK AND WAIT\` &&
            \` is about to be excetued. All changes \` &&
            \`are implicitly rolled back. You should be \` &&
            \`informed about an issue in the SAP LUW in \` &&
            \`the Business Workplace (SBWP). \` &&
            \`Transaction ST22 shows the error caused.\`
            TYPE 'I'.
          ENDIF.
          COMMIT WORK AND WAIT.
          cl\_demo\_sap\_luw\_helper=>create\_log\_entries(
            VALUE #( ( id        = 96
                       context   = '-'
                       name      = '-'
                       details   = \`Failure in SAP LUW\`
                       timestamp = utclong\_current( ) ) ) ).
        WHEN terminate.
          MESSAGE \`This is an error message of type A. \` &&
          \`It termiantes the program. All changes are \` &&
          \`implicitly rolled back. \` &&
          \`You may want to check the database table entries of \` &&
          \`the example that remain unchanged.\` TYPE 'A'.
      ENDCASE.
    WHEN OTHERS.
      LEAVE PROGRAM.
  ENDCASE.
  SUBMIT ('DEMO\_SAP\_LUW\_BT\_DISPL').
ENDMODULE.

Description   

The example demonstrates the SAP LUW using [dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_glosry.htm "Glossary Entry"). In the dynpros, you can select various options that determine how the program runs.

All the options follow the same pattern:

-   First dynpro: The SAP LUW is started. The entries in a database table are displayed. There are four entries in total. After you have selected an option to continue with either the update task, or the update task and perform a local update, or subroutines, an update function module or subroutine is registered to delete all entries from the database table.
-   Second dynpro: You can create a new database table entry by making entries in input fields displayed on the dynpro. When the program continues, it registers an update function module or subroutine that inserts the new entry into the database table.
-   Third dynpro: The SAP LUW is ended. You have several options for ending the SAP LUW. In addition to the COMMIT WORK and COMMIT WORK AND WAIT statements, you can use ROLLBACK WORK to roll back the changes. Another option is to deliberately make the current SAP LUW fail. If a type A message is triggered, the SAP LUW is also terminated.
-   During program execution, logs are collected and eventually written to a database table (also using an update function module or subroutine). These logs document the progress of the transaction with various pieces of information. These include [work process](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwork_process_glosry.htm "Glossary Entry") information, SAP LUW key retrieval, and transaction state retrieval (using methods of the CL\_SYSTEM\_TRANSACTION\_STATE class).
-   If the program is not terminated immediately and the SAP LUW has ended, another program is called. The database table entries and logs are displayed. If the transaction was successful, a single entry (the one created during the execution of the previous program) should be displayed for the modified database table, as well as the entries of the log table.
-   Note that a helper class is available for this example. Methods perform various tasks, such as retrieving work process information.

Notes on the various options for checking out the SAP LUW:

-   Asynchronous update with COMMIT WORK
    -   Immediately after the COMMIT WORK statement, a SELECT statement is executed, retrieving all the entries of the database table. In this case, the number of the retrieved entries should be the number of the original database table entries, i.e. 4 entries, and not 1, demonstrating the asynchronous update. The current number of records is displayed in a message.
    -   Result: The database table is deleted and a single new entry is added.
    -   The log shows the value 1 for the transaction state after the update task is executed and the update function modules are called.
-   Synchronous update with COMMIT WORK AND WAIT
    -   Immediately after the COMMIT WORK AND WAIT statement, a SELECT statement is executed to retrieve all the entries in the database table. In this case, there should be one entry instead of four to demonstrate the synchronous update. The current number of records is displayed in a message.
-   Local update using a SET UPDATE TASK LOCAL statement
    -   Once the local update is enabled, it does not matter whether you choose COMMIT WORK or COMMIT WORK AND WAIT in the next step. It will be a synchronous update, so the number of current database table entries displayed in the message will be 1 in both cases. The log will show the value 1 for the transaction state after the SET UPDATE TASK LOCAL statement has been executed.
-   Rolling back changes
    -   Although update function modules and subroutines are registered, none of them affect the database. All changes are rolled back. Result: The database table is not deleted, no new entry is created. The original content of the database table should be displayed.
-   Causing a failure in the current SAP LUW
    -   An update function module intentionally includes a statement that causes a runtime error if not caught (zero division).
    -   All changes are rolled back implicitly.
    -   If the local update is active, you should be informed of the problem directly. The program is terminated. In this case, you can check the database table entries that remain unchanged. You can also use transaction ST22 to display the runtime error that occurred.
    -   In the case of a non-local update, you should receive a mail in the Business Workplace informing you of the problem in the SAP LUW. The original content of the database table should be displayed on the next screen. In this case, you can also check transaction ST22 for the runtime error.
-   Terminating the program with an error message of type A
    -   This option only indicates that if such a message is generated, the program is terminated and all changes are implicitly rolled back. In this case, you may want to check the database table entries that remain unchanged.
-   Using subroutines
    -   Note that subroutines are considered obsolete and should no longer be used. This is to demonstrate the effect as a bundling technique in an SAP LUW.
    -   Selecting this option triggers the registration of subroutines for commit (to delete the database table entry, insert a newly created entry, insert entries in the log table) and rollback (this subroutine does nothing specific; it is just to demonstrate that the subroutine is called in the event of a rollback).
    -   When you select the commit options, the subroutines registered with ON COMMIT are executed in the current work process.
    -   Choosing COMMIT WORK or COMMIT WORK AND WAIT has the same effect: When these statements are called and a SELECT statement follows, the number of database table entries is 1 in both cases.
    -   If the rollback option is selected, the subroutine registered with ON ROLLBACK is executed in the current work process.
    -   The transaction state in the log is 1 for ON COMMIT or ON ROLLBACK when the corresponding subroutines are called.
    -   Note that registered subroutines cannot have a parameter interface, so no parameters can be passed in this type of bundling. Therefore, data can only be passed through external interfaces, such as ABAP memory. In this example, the database table entry created is passed to and from ABAP memory using [EXPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster.htm) and [IMPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_data_cluster.htm) statements. The subroutines themselves do not implement the writes themselves, but instead call methods of a class.
-   The following aspects are valid for all selected options regarding the logs:
    -   Before the commit is triggered (in the last PAI), the transaction state shows the value 0 for all retrieved transaction states.
    -   The work process information may change due to the fact that [database commits](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_commit_glosry.htm "Glossary Entry") are triggered when completing a [dialog step](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendialog_step_glosry.htm "Glossary Entry"). So you might expect different numbers there, but not necessarily. The new free work process can also be the same as the one before it was freed.
    -   However, there will be no different work process information for the update. The numbers will be the same because the update is performed in a single work process.
    -   Before calling the program that displays database entries and the log, the SAP LUW key is the same throughout the transaction. It does not change until a new SAP LUW is opened. See and compare the last entry for the SAP LUW key in the log that is retrieved for the program submitted.