  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and exiting program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Programs](javascript:call_link\('abenabap_program_call.htm'\)) →  [Calling Executable Programs](javascript:call_link\('abenabap_submit_report.htm'\)) →  [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) → 

SUBMIT, selscreen\_options

Syntax

... *\[*USING SELECTION-SCREEN dynnr*\]*
    *\[*VIA SELECTION-SCREEN*\]*
*\[* [selscreen\_parameters](javascript:call_link\('abapsubmit_selscreen_parameters.htm'\))*\]* ...

Additions:

[1\. ... USING SELECTION-SCREEN dynnr](#!ABAP_ADDITION_1@1@)
[2\. ... VIA SELECTION-SCREEN](#!ABAP_ADDITION_2@2@)

Effect

The addition USING SELECTION-SCREEN specifies the [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") and VIA SELECTION-SCREEN determines whether it is displayed. The additions [selscreen\_parameters](javascript:call_link\('abapsubmit_selscreen_parameters.htm'\)) supply values to the parameters and selection criteria, as well as the free selection of the called selection screen.

The values are passed to the selection screen between the events [INITIALIZATION](javascript:call_link\('abapinitialization.htm'\)) and [AT SELECTION SCREEN OUTPUT](javascript:call_link\('abapat_selection-screen.htm'\)). The following hierarchy applies to the passing of the values:

1.  First, the [selection screen variant](javascript:call_link\('abenvariant_glosry.htm'\) "Glossary Entry") of the addition USING SELECTION-SET is passed, which sets all parameters and selection criteria to the values of the variant. The values previously set in the called program are overwritten.
    
2.  The values of the table of the addition WITH SELECTION-TABLE are then passed. All parameters and selection criteria specified here are overwritten accordingly.
    
3.  Finally, the values of the additions WITH sel value are passed. All parameters and selection criteria specified here are overwritten accordingly. If the addition WITH sel value is used more than once for the same parameter, the parameter is overwritten with the last specified value. If the addition WITH sel value is used more than once for the same [selection criterion](javascript:call_link\('abenselection_criterion_glosry.htm'\) "Glossary Entry"), a [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry") with the corresponding number of lines is passed.
    

Free selections are supplied independently of this hierarchy.

Hints

-   The options for parameter passing can be used to view a selection screen as a parameter interface of an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry"). This applies in particular to background [selection screen processing](javascript:call_link\('abenselscreen_processing_glosry.htm'\) "Glossary Entry") and to parameters and selection criteria defined without screen elements using the addition [NO-DISPLAY](javascript:call_link\('abapparameters_screen.htm'\))

-   When data is passed, any adjustments made to the screen format, such as reductions and the execution of [conversion routines](javascript:call_link\('abenconversion_routine_glosry.htm'\) "Glossary Entry"), should not be executed for fields for which there are no screen elements on the selection screen. This applies to all parameters and selection criteria defined with NO DISPLAY. It also applies to all lines in a ranges table with the exception of the first line.

-   The additions selscreen\_parameters only take effect the first time the called program is executed. If a selection screen is displayed in the called program, the runtime environment calls the program again after it has ended, replacing the values specified in selscreen\_parameters with the previous input values.
    

Addition 1

... USING SELECTION-SCREEN dynnr

Effect

This addition defines which [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") is called. Here, dynnr is a data object that must contain the [dynpro number](javascript:call_link\('abendynpro_number_glosry.htm'\) "Glossary Entry") of a selection screen defined in the called program when the statement SUBMIT is executed.

-   If the addition USING SELECTION-SCREEN is omitted or the dynpro number 1000 is specified, the standard selection screen is called. If no standard selection screen is defined in the called program, no selection screen is called.

-   If a dynpro number not equal to 1000 is specified in the addition USING SELECTION-SCREEN, the corresponding standalone selection screen is called. If no selection screen with this dynpro number is defined in the called program, an uncatchable exception is raised.
    

Addition 2

... VIA SELECTION-SCREEN

Effect

If this addition is specified, the selection screen is displayed on the screen, otherwise background selection screen processing takes place. In background selection screen processing, the [selection screen events](javascript:call_link\('abenselection_screen_event_glosry.htm'\) "Glossary Entry") are raised without the selection screen being displayed on the screen.

Executable Example

[Program Calls, Filling the Selection Screen](javascript:call_link\('abensubmit_selscreen_abexa.htm'\))

Continue
[SUBMIT, selscreen\_parameters](javascript:call_link\('abapsubmit_selscreen_parameters.htm'\))
![Example](exa.gif "Example") [Program Calls, Filling the Selection Screen](javascript:call_link\('abensubmit_selscreen_abexa.htm'\))