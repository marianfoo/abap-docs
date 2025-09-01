---
title: "STOP"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapstop_shortref.htm) Syntax STOP. Effect The statement STOP is only to be used in executable programs(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexecutable_program_glosry.htm 'Glossary Entry') and in
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapstop.htm"
abapFile: "abapstop.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "data", "abapstop"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_program_units.htm) →  [Exiting Processing Blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_processing_blocks.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: STOP, ABAPSTOP, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improveme
nt:)

STOP

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapstop_shortref.htm)

Syntax

STOP.

Effect

The statement STOP is only to be used in [executable programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexecutable_program_glosry.htm "Glossary Entry") and in the following event blocks:

-   [AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_selection-screen.htm) (without additions)
-   [START-OF-SELECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapstart-of-selection.htm)
-   [GET](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget-.htm)

These event blocks are exited immediately using STOP and the runtime framework raises the event END-OF-SELECTION.

Hint

The statement STOP is forbidden in methods and raises a uncatchable exception when processing [dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm "Glossary Entry") called using [CALL SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_screen.htm), during a [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapload-of-program.htm) event, and in programs not called using [SUBMIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsubmit.htm).

Example

Termination of the event block GET sbook of the [logical database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") F1S, after max postings have been issued, and branching to END-OF-SELECTION.

NODES: sflight,
       sbook.
DATA: bookings TYPE i,
      max TYPE i VALUE 100.
GET sflight.
  cl\_demo\_output=>next\_section( |{ sflight-carrid } | &&
                                |{ sflight-connid } | &&
                                |{ sflight-fldate }| ).
GET sbook.
  bookings += 1.
  cl\_demo\_output=>write( |{ sbook-bookid } | &&
                         |{ sbook-customid }| ).
  IF bookings = max.
    STOP.
  ENDIF.
END-OF-SELECTION.
  cl\_demo\_output=>line( ).
  cl\_demo\_output=>display( |First { bookings } bookings| ).

[Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: The statement STOP was executed outside the process flow for an executable program.
    Runtime error: STOP\_NO\_REPORT
-   Cause: The statement STOP was executed during the process flow for a dynpro and therefore outside the allowed events.
    Runtime error: STOP\_WITHIN\_CALLED\_DYNPRO