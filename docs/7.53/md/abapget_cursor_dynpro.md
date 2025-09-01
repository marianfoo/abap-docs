---
title: "GET CURSOR - Dynpro"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_cursor_shortref.htm) Syntax GET CURSOR   FIELD  field  field_properties(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_cursor_field.htm)    LINE line  . Effect If
version: "7.53"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_cursor_dynpro.htm"
abapFile: "abapget_cursor_dynpro.htm"
keywords: ["loop", "do", "if", "try", "data", "abapget", "cursor", "dynpro"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros.htm) →  [ABAP Statements for Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros_abap_statements.htm) → 

GET CURSOR - Dynpro

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_cursor_shortref.htm)

Syntax

GET CURSOR *{* *{* FIELD  field *\[* [field\_properties](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_cursor_field.htm)*\]* *}*
           *|* *{* LINE line *}* *}*.

Effect

If this statement is specified during [PAI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpai_glosry.htm "Glossary Entry") processing, depending on how FIELD or LINE is specified, it passes either the name of the screen element or the number of the row of a [table control](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_control_glosry.htm "Glossary Entry") or of the group of a [step loop](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstep_loop_glosry.htm "Glossary Entry") (on which the screen cursor is positioned after a user action) to the data objects field or line. field expects a character-like variable; line expects a variable of the type i. In [field\_properties](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_cursor_field.htm), further properties of the screen element can be defined.

If the cursor is in the command field of the [standard toolbar](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_toolbar_glosry.htm "Glossary Entry") or on a pushbutton in the [screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_glosry.htm "Glossary Entry"), the statement is ignored and the specified variables remain unchanged. If the cursor in the first variant is not in a screen element of the current [dynpro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm "Glossary Entry") but on a bar in the GUI status, the contents of field and the variables specified in [field\_properties](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_cursor_field.htm) are initialized. If the cursor in the second variant is not on a screen element that is part of a table control or a step loop, the variable line is initialized.

System Fields

sy-subrc

Meaning

0

The cursor is on a screen element of the current dynpro, if FIELD is specified, or on the input field of the [standard toolbar](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_toolbar_glosry.htm "Glossary Entry"). If LINE is specified, the cursor is on a screen element within a table control or a step loop.

4

If FIELD is specified, the cursor is on a toolbar in the GUI status or, if LINE is specified, the cursor is outside a table control or a step loop.

Note

In the second variant, the same additions VALUE, LENGTH, and OFFSET could be specified after LINE as specified for the [use](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_cursor_list.htm) of the statement for lists. However, the variables specified during PAI processing are always initialized.

Continue
[GET CURSOR - field\_properties](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_cursor_field.htm)
![Example](exa.gif "Example") [Dynpros, Determining the Cursor Position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_get_cursor_abexa.htm)