---
title: "Flow of an Executable Program"
description: |
  The statement SUBMIT(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit.htm) loads the called program in a separate internal session(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm 'Glossary Entry') and starts a series of processes in
version: "7.54"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreporting_process.htm"
abapFile: "abenreporting_process.htm"
keywords: ["select", "do", "if", "try", "data", "abenreporting", "process"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_call.htm) →  [Calling Executable Programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_submit_report.htm) → 

Flow of an Executable Program

The statement [SUBMIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit.htm) loads the called program in a separate [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry") and starts a series of processes in the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") that raise events and actions in the called program in the following order:

1.  [Program constructor event](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_construct_event_glosry.htm "Glossary Entry") [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapload-of-program.htm).
    
2.  The [start values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstart_value_glosry.htm "Glossary Entry") defined using the addition DEFAULT in the statements [PARAMETERS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapparameters.htm) and [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect-options.htm) are passed to the relevant data objects. The start values of all other data objects are set before LOAD-OF-PROGRAM.
    
3.  [Reporting event](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreporting_event_glosry.htm "Glossary Entry") [INITIALIZATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinitialization.htm).
    
4.  The [selection screen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen_glosry.htm "Glossary Entry") specified in [selscreen\_options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit_interface.htm) is called if it contains at least one input field or button. If no explicit selection screen is specified, the standard selection screen is called. Here, the [selection screens are processed](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselscreen_processing_glosry.htm "Glossary Entry") in full. After the selection screen processing, the program flow is either continued or ended, depending on the last user action on the selection screen. Before the first event in selection screen processing, [AT SELECTION-SCREEN OUTPUT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_selection-screen.htm), the values specified in selscreen\_options are passed.
    
5.  [Reporting event](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreporting_event_glosry.htm "Glossary Entry") [START-OF-SELECTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapstart-of-selection.htm)
    
6.  Various [GET](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget-.htm) events, if the called program is associated with a [logical database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogical_data_base_glosry.htm "Glossary Entry").
    
7.  [Reporting event](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreporting_event_glosry.htm "Glossary Entry") [END-OF-SELECTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapend-of-selection.htm).
    
8.  The [basic list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbasic_list_glosry.htm "Glossary Entry") is called.
    If the basic list is empty, the program is exited..
    If the basic list is a spool list, it is sent to the SAP spool system and the program is exited.
    If [EXPORTING LIST TO MEMORY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit_list_options.htm) is specified in list\_options, the basic lists is saved in the [ABAP memory](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_memory_glosry.htm "Glossary Entry") and the program exits.
    Otherwise, the basic list is a screen list and is displayed on the screen. User actions on a displayed screen list raise list events. The program is exited when the user exits the list display.
    
9.  If no selection screen is displayed in step 4, because processing is performed in the background or not at all, the program flow is complete.
    If a selection screen is displayed in step 4, the runtime environment calls the called program again after exiting the basic list (or, if the basic list is empty, after ending the program). This loads the program again and the associated actions and events are performed again, starting with [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapload-of-program.htm). In this new call, the runtime environment supplies the parameters, the selection criteria, and the dynamic selections of the selection screen between the events [INITIALIZATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinitialization.htm) and [AT SELECTION-SCREEN OUTPUT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_selection-screen_events.htm) with the previous input values (other settings, such as whether the tabstrip page was active, are not passed). The program call is not ended until the user exits selection screen processing by choosing Back, Exit, or Cancel.

The called program can be exited in any of these steps by using the statement [LEAVE PROGRAM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapleave_list-processing.htm) and during list processing by using [LEAVE LIST-PROCESSING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapleave_program.htm).

Notes

-   If the called program is associated with a logical database, the system calls the relevant subroutines of the [database program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_program_glosry.htm "Glossary Entry") for the steps listed above. More information can be found under [Logical Databases - Associated with Executable Programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenldb_usage_executable.htm).

-   After the events START-OF-SELECTION and END-OF-SELECTION, the obsolete event [START-OF-EDITING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapstart-of-editing.htm) or [END-OF-EDITING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapend-of-editing.htm) is raised. It is possible to implement an event block for this event, but this is unnecessary.