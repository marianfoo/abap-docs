  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenleave_program_units.htm) →  [Exiting Processing Blocks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenleave_processing_blocks.htm) → 

STOP

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapstop_shortref.htm)

Syntax

STOP.

Effect

The statement STOP is only to be used in [executable programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexecutable_program_glosry.htm "Glossary Entry") and in the following event blocks:

-   [AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_selection-screen.htm) (without additions)
    
-   [START-OF-SELECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapstart-of-selection.htm)
    
-   [GET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget-.htm)
    

These event blocks are exited using STOP and the runtime environment raises the event END-OF-SELECTION.

Note

The statement STOP cannot be used in methods and raises a non-handleable exception when processing [dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm "Glossary Entry") called using [CALL SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_screen.htm), during a [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapload-of-program.htm) event, and in programs not called using [SUBMIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit.htm).

Example

Ends the event block GET sbook of the [logical database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") F1S, after max postings have been issued, and branches to END-OF-SELECTION.

NODES: sflight,
       sbook.
DATA: bookings TYPE i,
      max TYPE i VALUE 100.
GET sflight.
  cl\_demo\_output=>next\_section( |{ sflight-carrid } | &&
                                |{ sflight-connid } | &&
                                |{ sflight-fldate }| ).
GET sbook.
  bookings = bookings + 1.
  cl\_demo\_output=>write( |{ sbook-bookid } | &&
                         |{ sbook-customid }| ).
  IF bookings = max.
    STOP.
  ENDIF.
END-OF-SELECTION.
  cl\_demo\_output=>line( ).
  cl\_demo\_output=>display( |First { bookings } bookings| ).

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: The statement STOP was executed outside the process flow for an executable program.
    Runtime error: STOP\_NO\_REPORT
    
-   Cause: The statement STOP was executed during the process flow for a dynpro and therefore outside the permitted events.
    Runtime error: STOP\_WITHIN\_CALLED\_DYNPRO