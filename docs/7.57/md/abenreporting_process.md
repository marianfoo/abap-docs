  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and Exiting Program Units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Programs](javascript:call_link\('abenabap_program_call.htm'\)) →  [Calling Executable Programs](javascript:call_link\('abenabap_submit_report.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Flow of an Executable Program After SUBMIT, ABENREPORTING_PROCESS, 757%0D%0A%0D%0AErr
or:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Flow of an Executable Program After SUBMIT

The statement [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) loads the called program into a separate [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") and starts a sequence of processes in the [ABAP runtime framework](javascript:call_link\('abenabap_runtime_frmwk_glosry.htm'\) "Glossary Entry") that raise events and actions in the called program in the following order:

1.  [Program constructor event](javascript:call_link\('abenprogram_construct_event_glosry.htm'\) "Glossary Entry") [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)).
2.  Passing the [start values](javascript:call_link\('abenstart_value_glosry.htm'\) "Glossary Entry") defined using the addition DEFAULT in the statements [PARAMETERS](javascript:call_link\('abapparameters.htm'\)) and [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)) to the corresponding data objects. The start values of all other data objects are set before LOAD-OF-PROGRAM.
3.  [Reporting event](javascript:call_link\('abenreporting_event_glosry.htm'\) "Glossary Entry") [INITIALIZATION](javascript:call_link\('abapinitialization.htm'\)).
4.  Calling of the [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") specified in [selscreen\_options](javascript:call_link\('abapsubmit_interface.htm'\)) if it contains at least one input field or a button. If no explicit selection screen is specified, the standard selection screen is called. Here, the [selection screens are processed](javascript:call_link\('abenselscreen_processing_glosry.htm'\) "Glossary Entry") completely. After the selection screen processing, the program flow is either continued or ended, depending on the last user action on the selection screen. Before the first event of the selection screen processing, [AT SELECTION-SCREEN OUTPUT](javascript:call_link\('abapat_selection-screen.htm'\)), the values specified in selscreen\_options are passed.
5.  [Reporting event](javascript:call_link\('abenreporting_event_glosry.htm'\) "Glossary Entry") [START-OF-SELECTION](javascript:call_link\('abapstart-of-selection.htm'\))
6.  Different [GET](javascript:call_link\('abapget-.htm'\)) events, if the called program is linked to a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry").
7.  [Reporting event](javascript:call_link\('abenreporting_event_glosry.htm'\) "Glossary Entry") [END-OF-SELECTION](javascript:call_link\('abapend-of-selection.htm'\)).
8.  Calling of the [basic list](javascript:call_link\('abenbasic_list_glosry.htm'\) "Glossary Entry").
    1.  If the basic list is empty, the program is terminated.
    2.  If the basic list is a spool list, it is sent to the SAP spool system and the program is terminated.
    3.  If [EXPORTING LIST TO MEMORY](javascript:call_link\('abapsubmit_list_options.htm'\)) is specified in list\_options, the basic list is stored in the [ABAP memory](javascript:call_link\('abenabap_memory_glosry.htm'\) "Glossary Entry") and the program terminates.
    4.  Otherwise, the basic list is a screen list and is displayed on the screen. User actions on a displayed screen list raise list events. The program is terminated when the user exits the list display.
9.  If no selection screen is displayed in step 4, because processing is either performed in the background or not at all, the program flow is terminated.
    
    If a selection screen is displayed in step 4, the runtime framework calls the called program again after exiting the basic list (or, if the basic list is empty, after ending the program). This loads the program again and the corresponding actions and events are performed again, starting with [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)). In this new call, the runtime framework supplies the parameters, the selection criteria, and the dynamic selections of the selection screen between the events [INITIALIZATION](javascript:call_link\('abapinitialization.htm'\)) and [AT SELECTION-SCREEN OUTPUT](javascript:call_link\('abapat_selection-screen_events.htm'\)) with the previous input values (other settings, such as which tabstrip page was active, are not passed). The program call is not ended until the user exits selection screen processing by choosing Back, Exit, or Cancel.
    

The called program can be exited in any of these steps by using the statement [LEAVE PROGRAM](javascript:call_link\('abapleave_list-processing.htm'\)) and during list processing by using [LEAVE LIST-PROCESSING](javascript:call_link\('abapleave_program.htm'\)).

Hints

-   If the called program is linked with a logical database, the system calls the relevant subroutines of the [database program](javascript:call_link\('abendatabase_program_glosry.htm'\) "Glossary Entry") for the steps listed above. More information can be found under [Logical Databases - Associated with Executable Programs](javascript:call_link\('abenldb_usage_executable.htm'\)).
-   After the events START-OF-SELECTION and END-OF-SELECTION, the obsolete event [START-OF-EDITING](javascript:call_link\('abapstart-of-editing.htm'\)) or [END-OF-EDITING](javascript:call_link\('abapend-of-editing.htm'\)) is raised. It is possible to implement an event block for this event, but this is unnecessary.