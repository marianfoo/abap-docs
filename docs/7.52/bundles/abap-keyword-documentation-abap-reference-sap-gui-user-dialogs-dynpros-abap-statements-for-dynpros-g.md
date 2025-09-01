# ABAP - Keyword Documentation / ABAP - Reference / SAP GUI User Dialogs / Dynpros / ABAP Statements for Dynpros / GET CURSOR - Dynpro

Included pages: 3


### abapget_cursor_dynpro.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros.htm) →  [ABAP Statements for Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros_abap_statements.htm) → 

GET CURSOR - Dynpro

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_cursor_shortref.htm)

Syntax

GET CURSOR *{* *{*FIELD field *\[* [field\_properties](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_cursor_field.htm)*\]**}*
           *|* *{* LINE line *}* *}*.

Effect

If this statement is specified during [PAI](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpai_glosry.htm "Glossary Entry") processing, depending on how FIELD or LINE is specified, it passes either the name of the screen element or the number of the row of a [table control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_control_glosry.htm "Glossary Entry") or of the group of a [step loop](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstep_loop_glosry.htm "Glossary Entry") (on which the screen cursor is positioned after a user action) to the data objects field or line. field expects a character-like variable; line expects a variable of the type i. In [field\_properties](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_cursor_field.htm), further properties of the screen element can be defined.

If the cursor is in the command field of the [standard toolbar](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_toolbar_glosry.htm "Glossary Entry") or on a pushbutton in the [screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscreen_glosry.htm "Glossary Entry"), the statement is ignored and the specified variables remain unchanged. If the cursor in the first variant is not in a screen element of the current [dynpro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm "Glossary Entry") but on a bar in the GUI status, the contents of field and the variables specified in [field\_properties](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_cursor_field.htm) are initialized. If the cursor in the second variant is not on a screen element that is part of a table control or a step loop, the variable line is initialized.

System Fields

sy-subrc

Meaning

0

The cursor is on a screen element of the current dynpro, if FIELD is specified, or on the input field of the [standard toolbar](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_toolbar_glosry.htm "Glossary Entry"). If LINE is specified, the cursor is on a screen element within a table control or a step loop.

4

If FIELD is specified, the cursor is on a toolbar in the GUI status or, if LINE is specified, the cursor is outside a table control or a step loop.

Note

In the second variant, the same additions VALUE, LENGTH, and OFFSET could be specified after LINE as specified for the [use](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_cursor_list.htm) of the statement for lists. However, the variables specified during PAI processing are always initialized.

Continue
[GET CURSOR - field\_properties](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_cursor_field.htm)
![Example](exa.gif "Example") [Screens, Determining the Cursor Position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_get_cursor_abexa.htm)


### abapget_cursor_field.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros.htm) →  [ABAP Statements for Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros_abap_statements.htm) →  [GET CURSOR - Dynpro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_cursor_dynpro.htm) → 

GET CURSOR - field\_properties

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_cursor_shortref.htm)

Syntax

... *\[*VALUE val*\]* *\[*LENGTH len*\]* *\[*OFFSET off*\]* *\[*LINE lin*\]* *\[*AREA area*\]*.

Extras:

[1\. ... VALUE val](#!ABAP_ADDITION_1@1@)
[2\. ... LENGTH len](#!ABAP_ADDITION_2@2@)
[3\. ... OFFSET off](#!ABAP_ADDITION_3@3@)
[4\. ... LINE lin](#!ABAP_ADDITION_4@4@)
[5\. ... AREA area](#!ABAP_ADDITION_5@5@)

Effect

Using these additions, further information about the cursor position can be imported during [PAI](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpai_glosry.htm "Glossary Entry") processing if the addition FIELD is specified for the statement [GET CURSOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_cursor_dynpro.htm).

Addition 1

... VALUE val

Effect

The addition VALUE assigns the formatted content of the screen element on which the cursor is positioned to the data object val as a character string. val expects a character-like variable.

Addition 2

... LENGTH len

Effect

The addition LENGTH assigns the length of the screen element on which the cursor is positioned to the data object len. len expects a variable of the type i.

Addition 3

... OFFSET off

Effect

The addition OFFSET assigns the position of the cursor within the screen element on which the cursor is positioned to the data object off. off expects a variable of the type i.

Addition 4

... LINE lin

Effect

If the screen element on which the cursor is positioned is within a [table control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_control_glosry.htm "Glossary Entry") or a [step loop](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstep_loop_glosry.htm "Glossary Entry"), the addition LINE assigns the number of the row of the table control or the group of the step loop to the data object lin. If not, lin is set to 0. lin expects a variable of the type i.

Addition 5

... AREA area

Effect

If the screen element on which the cursor is positioned is within a [table control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_control_glosry.htm "Glossary Entry"), the addition AREA assigns the name of the table control to the data object area. If not, area is initialized. area expects a character-like variable.


### abendynpro_get_cursor_abexa.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros.htm) →  [ABAP Statements for Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros_abap_statements.htm) →  [GET CURSOR - Dynpro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_cursor_dynpro.htm) → 

Screens, Determining the Cursor Position

The example shows how to determine the cursor position on screens.

Source Code

PROGRAM demo\_dynpro\_get\_cursor .
DATA: ok\_code TYPE sy-ucomm,
      save\_ok LIKE ok\_code.
DATA: input\_output(20) TYPE c,
      fld(20) TYPE c,
      off     TYPE i,
      val(20) TYPE c,
      len     TYPE i.
CALL SCREEN 100.
MODULE init\_screen\_0100 OUTPUT.
  SET PF-STATUS 'STATUS\_100'.
ENDMODULE.
MODULE user\_command\_0100 INPUT.
  save\_ok = ok\_code.
  CLEAR ok\_code.
  CASE save\_ok.
    WHEN 'CANCEL'.
      LEAVE PROGRAM.
    WHEN 'SELE'.
      GET CURSOR FIELD fld OFFSET off VALUE val LENGTH len.
  ENDCASE.
ENDMODULE.

Description

The static next screen number of screen 100 is 100. All input/output fields except for the screen field of input\_output have been set as not ready for input in the Screen Painter. Module init\_screen\_0100 sets the GUI status to STATUS\_100 in the PBO event. In the GUI status, the 'Cancel' ( F12) has been activated using the function code CANCEL, and the function key F2 has been assigned the function code SELE. When the program is executed, the user may select all screen elements by double-clicking them or all interface elements linked to SELE. The output fields then show the corresponding cursor position.
