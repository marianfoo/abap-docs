---
title: "Syntax"
description: |
  ... VALUE val LENGTH len OFFSET off LINE lin AREA area. Additions: 1. ... VALUE val(#!ABAP_ADDITION_1@1@) 2. ... LENGTH len(#!ABAP_ADDITION_2@2@) 3. ... OFFSET off(#!ABAP_ADDITION_3@3@) 4. ... LINE lin(#!ABAP_ADDITION_4@4@) 5. ... AREA area(#!AB
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_cursor_field.htm"
abapFile: "abapget_cursor_field.htm"
keywords: ["loop", "do", "if", "try", "data", "abapget", "cursor", "field"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros.htm) →  [dynpro - ABAP Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_abap_statements.htm) →  [GET CURSOR, Dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_cursor_dynpro.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20GET%20CURSOR%2C%20field_properties%2C%20ABAPGET_CURSOR_FIELD%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

GET CURSOR, field\_properties

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_cursor_shortref.htm)

Syntax

... *\[*VALUE val*\]* *\[*LENGTH len*\]* *\[*OFFSET off*\]* *\[*LINE lin*\]* *\[*AREA area*\]*.

Additions:

[1\. ... VALUE val](#!ABAP_ADDITION_1@1@)
[2\. ... LENGTH len](#!ABAP_ADDITION_2@2@)
[3\. ... OFFSET off](#!ABAP_ADDITION_3@3@)
[4\. ... LINE lin](#!ABAP_ADDITION_4@4@)
[5\. ... AREA area](#!ABAP_ADDITION_5@5@)

Effect

Using these additions, further information about the cursor position can be imported during [PAI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpai_glosry.htm "Glossary Entry") processing if the addition FIELD is specified for the statement [GET CURSOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_cursor_dynpro.htm).

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

If the screen element on which the cursor is positioned is within a [table control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_control_glosry.htm "Glossary Entry") or a [step loop](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstep_loop_glosry.htm "Glossary Entry"), the addition LINE assigns the number of the line of the table control or the group of the step loop to the data object lin. If not, lin is set to 0. lin expects a variable of the type i.

Addition 5   

... AREA area

Effect

If the screen element on which the cursor is positioned is within a [table control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_control_glosry.htm "Glossary Entry"), the addition AREA assigns the name of the table control to the data object area. If not, area is initialized. area expects a character-like variable.