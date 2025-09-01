  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - ABAP Statements](javascript:call_link\('abenabap_dynpros_abap_statements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CALL SCREEN, ABAPCALL_SCREEN, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
 for improvement:)

CALL SCREEN

[Short Reference](javascript:call_link\('abapcall_screen_shortref.htm'\))

Syntax

CALL SCREEN dynnr
            *\[*STARTING AT col1 lin1
            *\[*ENDING   AT col2 lin2*\]**\]*.

Addition:

[... STARTING AT col1 lin1 *\[*ENDING AT col2 lin2*\]*](#!ABAP_ONE_ADD@1@)

Effect

This statement calls the [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") with the [dynpro number](javascript:call_link\('abendynpro_number_glosry.htm'\) "Glossary Entry") specified in dynnr. dynnr expects a data object of the type n and the length 4. The call starts a new [dynpro sequence](javascript:call_link\('abendynpro_sequence_glosry.htm'\) "Glossary Entry"), which is embedded in the current dynpro sequence. The dynpro with dynpro number dynnr is the initial dynpro of the dynpro sequence. In a dynpro sequence started by a transaction code, up to 50 other dynpro sequences can be nested.

The called dynpro sequence is ended when one of the dynpros involved branches to the [next dynpro](javascript:call_link\('abennext_dynpro_glosry.htm'\) "Glossary Entry") with the number 0. The program flow is then continued after CALL SCREEN.

The statement CALL SCREEN accesses the dynpros of the relevant [main program](javascript:call_link\('abenmain_program_glosry.htm'\) "Glossary Entry") of the current [program group](javascript:call_link\('abenprogram_group_glosry.htm'\) "Glossary Entry") and these use the global data and dialog modules of the main program. Except when calling a dynpro in an externally called subroutine, the main program usually is the current program. If the specified dynpro does not exist in the main program of the program group, an uncatchable exception is raised.

By default, the [screens](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") of all dynpros of the called dynpro sequence are displayed in the current GUI window. The addition STARTING AT can be used to open a modal dialog box.

Addition   

... STARTING AT col1 lin1 *\[*ENDING AT col2 lin2*\]*

Effect

The addition STARTING AT can be used to open a new [popup level](javascript:call_link\('abenpop-up_level_glosry.htm'\) "Glossary Entry") and to display all screens of the called dynpro sequence in a modal dialog box. The upper left corner of the dialog box is determined by the values in col1 and lin1 for column and line. The values refer to the GUI window with popup level 0. The lower right corner is set automatically or col2 and lin2 can be used to specify it after ENDING AT. col1, lin1, col2, and lin2 expect data objects of the type i. The values of col1, lin1 should be less than col2, lin2, otherwise the behavior will be undefined. The maximum popup level is 9.

Hints

-   The called dynpro should not be a [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry"). To call a selection screen, the statement [CALL SELECTION-SCREEN](javascript:call_link\('abapcall_selection_screen.htm'\)) must be used.
-   When nesting dynpro sequences and creating popup levels, it must be noted that a (nested) dynpro sequence has generally already been entered when the program is being executed and that the system itself can also create other dynpro sequences or popup levels (for example, field or input help or [messages](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") in dialog boxes). For this reason, the maximum values of 50 dynpro sequences or nine popup levels within a program should never be used.
-   If during the processing of a modal dialog box a new dynpro sequence is called, it must be started in another popup level. In this case, the statement CALL SCREEN cannot be used without the addition STARTING AT.
-   When a dynpro is called in a dialog box, the window should be specified as a modal dialog box in its properties and a corresponding GUI status set beforehand. It is recommended that a dynpro sequence in a modal dialog box consists of one dynpro only.
-   If there is an open [spool request](javascript:call_link\('abenspool_request_glosry.htm'\) "Glossary Entry") during the execution of the statement CALL SCREEN, a new [spool list level](javascript:call_link\('abenspool_list_level_glosry.htm'\) "Glossary Entry") is created. The first list output in the new spool list level creates a new spool request.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Uncatchable Exceptions

-   Cause: Dynpro was not found.
    Runtime error: DYNPRO\_NOT\_FOUND