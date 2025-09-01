  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Creating Selection Screens](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)) → 

SELECT-OPTIONS - screen\_options

[Quick Reference](javascript:call_link\('abapselect-options_shortref.htm'\))

Syntax

... *\[*OBLIGATORY*|*NO-DISPLAY*\]*
    *\[*VISIBLE LENGTH vlen*\]*
    *\[*NO-EXTENSION*\]*
    *\[*NO INTERVALS*\]*
    *\[*[MODIF ID modid](javascript:call_link\('abapselection-screen_modif_id.htm'\))*\]* ...

Extras:

[1\. ... OBLIGATORY](#!ABAP_ADDITION_1@1@)
[2\. ... NO-DISPLAY](#!ABAP_ADDITION_2@2@)
[3\. ... VISIBLE LENGTH vlen](#!ABAP_ADDITION_3@3@)
[4\. ... NO-EXTENSION](#!ABAP_ADDITION_4@4@)
[5\. ... NO INTERVALS](#!ABAP_ADDITION_5@5@)

Effect

These additions can be used to declare the first input field as a mandatory field, hide the input field on the [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry"), and define the visible length of the field. You can suppress the second input field and the pushbutton for multiple selection. The addition [MODIF ID](javascript:call_link\('abapselection-screen_modif_id.htm'\)) assigns all screen elements of the [selection criterion](javascript:call_link\('abenselection_criterion_glosry.htm'\) "Glossary Entry") to the [modification group](javascript:call_link\('abenmodification_group_glosry.htm'\) "Glossary Entry") modid.

Note

As well as the additions already available, the function module SELECT\_OPTIONS\_RESTRICT can also be used to restrict the number of selection options offered and prohibit the value "E" for the column sign in the [selection table](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry") before the selection screen is sent.

Addition 1

... OBLIGATORY

Effect

This addition defines the first input field for the selection criterion on the selection screen as a mandatory field. If this field is blank, the user cannot exit the selection screen using the Execute function (F8) and can only use the Back, Exit, or Cancel functions.

Addition 2

... NO-DISPLAY

Effect

If you specify this addition, no screen elements are created on the selection screen for the selection criterion. In an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry"), a selection criterion of this type is used exclusively as part of the interface defined by the selection screen. It can be supplied with a value by the calling program when it is called with [SUBMIT](javascript:call_link\('abapsubmit.htm'\)).

If the addition NO-DISPLAY is specified, the low and high columns in the selection table can have any [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") data types. These selection tables can only be supplied with data using the addition [WITH](javascript:call_link\('abapsubmit_selscreen_parameters.htm'\)) of the statement SUBMIT.

Note

The length of the values passed to the columns low and high in the selection table, for which there is no input field, is not restricted to 45 characters, as is the case for selection criteria with input fields.

Addition 3

... VISIBLE LENGTH vlen

Effect

This addition defines the visible length of the input field as vlen, where vlen is entered directly as a positive number. If vlen is shorter than the length of columns low and high in the selection table and shorter than the maximum visible length, it is possible to scroll in the input field, which is displayed with the length of vlen. Otherwise, the addition is ignored.

Addition 4

... NO-EXTENSION

Effect

If this addition is specified, the pushbutton for multiple selection is not created on the [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry").

Note

The user cannot access the dialog box for multiple selection on the selection screen, which means that he or she cannot edit [selection tables](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry") containing multiple rows.

Addition 5

... NO INTERVALS

Effect

If you specify this addition, the second input field is not generated on the selection screen.

Note

The user can only specify a single comparison in the first row of the selection table on the selection screen. Intervals can still be selected in the dialog box for multiple selection.

Example

Declaration of a selection criterion for which a single comparison is possible on the selection screen, but multiple selection is not possible.

DATA spfli\_wa TYPE spfli.
SELECT-OPTIONS s\_carrid FOR spfli\_wa-carrid NO-EXTENSION
                                            NO INTERVALS.