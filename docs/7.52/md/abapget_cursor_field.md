  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [ABAP Statements for Dynpros](javascript:call_link\('abenabap_dynpros_abap_statements.htm'\)) →  [GET CURSOR - Dynpro](javascript:call_link\('abapget_cursor_dynpro.htm'\)) → 

GET CURSOR - field\_properties

[Quick Reference](javascript:call_link\('abapget_cursor_shortref.htm'\))

Syntax

... *\[*VALUE val*\]* *\[*LENGTH len*\]* *\[*OFFSET off*\]* *\[*LINE lin*\]* *\[*AREA area*\]*.

Extras:

[1\. ... VALUE val](#!ABAP_ADDITION_1@1@)
[2\. ... LENGTH len](#!ABAP_ADDITION_2@2@)
[3\. ... OFFSET off](#!ABAP_ADDITION_3@3@)
[4\. ... LINE lin](#!ABAP_ADDITION_4@4@)
[5\. ... AREA area](#!ABAP_ADDITION_5@5@)

Effect

Using these additions, further information about the cursor position can be imported during [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") processing if the addition FIELD is specified for the statement [GET CURSOR](javascript:call_link\('abapget_cursor_dynpro.htm'\)).

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

If the screen element on which the cursor is positioned is within a [table control](javascript:call_link\('abentable_control_glosry.htm'\) "Glossary Entry") or a [step loop](javascript:call_link\('abenstep_loop_glosry.htm'\) "Glossary Entry"), the addition LINE assigns the number of the row of the table control or the group of the step loop to the data object lin. If not, lin is set to 0. lin expects a variable of the type i.

Addition 5

... AREA area

Effect

If the screen element on which the cursor is positioned is within a [table control](javascript:call_link\('abentable_control_glosry.htm'\) "Glossary Entry"), the addition AREA assigns the name of the table control to the data object area. If not, area is initialized. area expects a character-like variable.