  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselection_screen.htm) →  [Selection Screens - Create](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselection_screen_create.htm) →  [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect-options.htm) → 

SELECT-OPTIONS, screen\_options

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect-options_shortref.htm)

Syntax

... *\[*OBLIGATORY*|*NO-DISPLAY*\]*
    *\[*VISIBLE LENGTH vlen*\]*
    *\[*NO-EXTENSION*\]*
    *\[*NO INTERVALS*\]*
    *\[*[MODIF ID modid](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselection-screen_modif_id.htm)*\]* ...

Additions:

[1\. ... OBLIGATORY](#!ABAP_ADDITION_1@1@)
[2\. ... NO-DISPLAY](#!ABAP_ADDITION_2@2@)
[3\. ... VISIBLE LENGTH vlen](#!ABAP_ADDITION_3@3@)
[4\. ... NO-EXTENSION](#!ABAP_ADDITION_4@4@)
[5\. ... NO INTERVALS](#!ABAP_ADDITION_5@5@)

Effect

These additions can be used to declare the first input field as a mandatory field, hide the input field on the [selection screen](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselection_screen_glosry.htm "Glossary Entry"), and define the visible length of the field. You can suppress the second input field and the pushbutton for multiple selection. The addition [MODIF ID](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselection-screen_modif_id.htm) assigns all screen elements of the [selection criterion](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselection_criterion_glosry.htm "Glossary Entry") to the [modification group](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmodification_group_glosry.htm "Glossary Entry") modid.

Hint

As well as the additions already available, the function module SELECT\_OPTIONS\_RESTRICT can also be used to restrict the number of selection options offered and prohibit the value "E" for the column sign in the [selection table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselection_table_glosry.htm "Glossary Entry") before the selection screen is sent.

Addition 1

... OBLIGATORY

Effect

This addition defines the first input field for the selection criterion on the selection screen as a mandatory field. If this field is blank, the user cannot exit the selection screen using the Execute function (F8) and can only use the Back, Exit, or Cancel functions.

Addition 2

... NO-DISPLAY

Effect

If you specify this addition, no screen elements are created on the selection screen for the selection criterion. In an [executable program](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexecutable_program_glosry.htm "Glossary Entry"), a selection criterion of this type is used exclusively as part of the interface defined by the selection screen. It can be supplied with a value by the calling program when it is called with [SUBMIT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsubmit.htm).

If the addition NO-DISPLAY is specified, the low and high columns in the selection table can have any [flat](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenflat_glosry.htm "Glossary Entry") data types. These selection tables can only be supplied with data using the addition [WITH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsubmit_selscreen_parameters.htm) of the statement SUBMIT.

Hint

The length of the values passed to the columns low and high in the selection table, for which there is no input field, is not restricted to 45 characters, as is the case for selection criteria with input fields.

Addition 3

... VISIBLE LENGTH vlen

Effect

This addition defines the visible length of the input field as vlen, where vlen is entered directly as a positive number. If vlen is shorter than the length of columns low and high in the selection table and shorter than the maximum visible length, it is possible to scroll in the input field, which is displayed with the length of vlen. Otherwise, the addition is ignored.

Addition 4

... NO-EXTENSION

Effect

If this addition is specified, the pushbutton for multiple selection is not created on the [selection screen](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselection_screen_glosry.htm "Glossary Entry").

Hint

The user cannot access the dialog box for multiple selection on the selection screen and therefore cannot process [selection tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselection_table_glosry.htm "Glossary Entry") containing multiple lines.

Addition 5

... NO INTERVALS

Effect

If you specify this addition, the second input field is not generated on the selection screen.

Hint

The user can only specify a single comparison in the first line of the selection table on the selection screen. Intervals can still be selected in the dialog box for multiple selection.

Example

Declaration of a selection criterion for which a single comparison is possible on the selection screen, but multiple selection is not possible.

DATA spfli\_wa TYPE spfli.
SELECT-OPTIONS s\_carrid FOR spfli\_wa-carrid NO-EXTENSION
                                            NO INTERVALS.