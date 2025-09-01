---
title: "GET CURSOR, Dynpro"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_cursor_shortref.htm) Syntax GET CURSOR   FIELD  field  field_properties(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_cursor_field.htm)    LINE line  . Effect If
version: "7.57"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_cursor_dynpro.htm"
abapFile: "abapget_cursor_dynpro.htm"
keywords: ["loop", "do", "if", "try", "data", "abapget", "cursor", "dynpro"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros.htm) →  [dynpro - ABAP Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_abap_statements.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: GET CURSOR, Dynpro, ABAPGET_CURSOR_DYNPRO, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion for improvement:)

GET CURSOR, Dynpro

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_cursor_shortref.htm)

Syntax

GET CURSOR *{* *{* FIELD  field *\[* [field\_properties](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_cursor_field.htm)*\]* *}*
           *|* *{* LINE line *}* *}*.

Effect

If this statement is specified during [PAI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpai_glosry.htm "Glossary Entry") processing, depending on how FIELD or LINE is specified, it passes either the name of the screen element or the number of the line of a [table control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_control_glosry.htm "Glossary Entry") or of the group of a [step loop](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstep_loop_glosry.htm "Glossary Entry") on which the screen cursor is positioned after a user action to the data objects field or line. field expects a character-like variable; line expects a variable of the type i. In [field\_properties](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_cursor_field.htm), further properties of the screen element can be defined.

If the cursor is in the command field of the [standard toolbar](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_toolbar_glosry.htm "Glossary Entry") or on a pushbutton in the [screen layout](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscreen_glosry.htm "Glossary Entry"), the statement is ignored, and the specified variables remain unchanged. If the cursor in the first variant is not in a screen element of the current [dynpro](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm "Glossary Entry") but on a bar in the GUI status, the content of field and the variables specified in [field\_properties](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_cursor_field.htm) is initialized. If the cursor in the second variant is not on a screen element that is part of a table control or a step loop, the variable line is initialized.

System Fields

sy-subrc

Meaning

0

If FIELD is specified, the cursor is on a screen element of the current dynpro, or on the input field of the [standard toolbar](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_toolbar_glosry.htm "Glossary Entry"). If LINE is specified, the cursor is on a screen element within a table control or a step loop.

4

If FIELD is specified, the cursor is on a toolbar in the GUI status or, if LINE is specified, the cursor is outside a table control or a step loop.

Hint

In the second variant, the same additions VALUE, LENGTH, and OFFSET can be specified after LINE as when [using](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_cursor_list.htm) statements for lists. However, the variables specified during PAI processing are always initialized.

Continue
[GET CURSOR, field\_properties](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_cursor_field.htm)
![Example](exa.gif "Example") [dynpro - Determining the Cursor Position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_get_cursor_abexa.htm)