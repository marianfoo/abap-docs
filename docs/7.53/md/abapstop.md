  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and Exiting Program Units](javascript:call_link\('abenabap_execution.htm'\)) →  [Exiting Program Units](javascript:call_link\('abenleave_program_units.htm'\)) →  [Exiting Processing Blocks](javascript:call_link\('abenleave_processing_blocks.htm'\)) → 

STOP

[Quick Reference](javascript:call_link\('abapstop_shortref.htm'\))

Syntax

STOP.

Effect

The statement STOP is only to be used in [executable programs](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") and in the following event blocks:

-   [AT SELECTION-SCREEN](javascript:call_link\('abapat_selection-screen.htm'\)) (without additions)
    
-   [START-OF-SELECTION](javascript:call_link\('abapstart-of-selection.htm'\))
    
-   [GET](javascript:call_link\('abapget-.htm'\))
    

These event blocks are exited using STOP and the runtime environment raises the event END-OF-SELECTION.

Note

The statement STOP cannot be used in methods and raises a non-handleable exception when processing [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") called using [CALL SCREEN](javascript:call_link\('abapcall_screen.htm'\)), during a [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)) event, and in programs not called using [SUBMIT](javascript:call_link\('abapsubmit.htm'\)).

Example

Ends the event block GET sbook of the [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry") F1S, after max postings have been issued, and branches to END-OF-SELECTION.

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

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: The statement STOP was executed outside the process flow for an executable program.
    Runtime error: STOP\_NO\_REPORT
    
-   Cause: The statement STOP was executed during the process flow for a dynpro and therefore outside the permitted events.
    Runtime error: STOP\_WITHIN\_CALLED\_DYNPRO