  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [ABAP Statements for Dynpros](javascript:call_link\('abenabap_dynpros_abap_statements.htm'\)) → 

GET CURSOR - Dynpro

[Quick Reference](javascript:call_link\('abapget_cursor_shortref.htm'\))

Syntax

GET CURSOR *{* *{* FIELD  field *\[* [field\_properties](javascript:call_link\('abapget_cursor_field.htm'\))*\]* *}*
           *|* *{* LINE line *}* *}*.

Effect

If this statement is specified during [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") processing, depending on how FIELD or LINE is specified, it passes either the name of the screen element or the number of the row of a [table control](javascript:call_link\('abentable_control_glosry.htm'\) "Glossary Entry") or of the group of a [step loop](javascript:call_link\('abenstep_loop_glosry.htm'\) "Glossary Entry") (on which the screen cursor is positioned after a user action) to the data objects field or line. field expects a character-like variable; line expects a variable of the type i. In [field\_properties](javascript:call_link\('abapget_cursor_field.htm'\)), further properties of the screen element can be defined.

If the cursor is in the command field of the [standard toolbar](javascript:call_link\('abenstandard_toolbar_glosry.htm'\) "Glossary Entry") or on a pushbutton in the [screen](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry"), the statement is ignored and the specified variables remain unchanged. If the cursor in the first variant is not in a screen element of the current [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") but on a bar in the GUI status, the contents of field and the variables specified in [field\_properties](javascript:call_link\('abapget_cursor_field.htm'\)) are initialized. If the cursor in the second variant is not on a screen element that is part of a table control or a step loop, the variable line is initialized.

System Fields

sy-subrc

Meaning

0

The cursor is on a screen element of the current dynpro, if FIELD is specified, or on the input field of the [standard toolbar](javascript:call_link\('abenstandard_toolbar_glosry.htm'\) "Glossary Entry"). If LINE is specified, the cursor is on a screen element within a table control or a step loop.

4

If FIELD is specified, the cursor is on a toolbar in the GUI status or, if LINE is specified, the cursor is outside a table control or a step loop.

Note

In the second variant, the same additions VALUE, LENGTH, and OFFSET could be specified after LINE as specified for the [use](javascript:call_link\('abapget_cursor_list.htm'\)) of the statement for lists. However, the variables specified during PAI processing are always initialized.

Continue
[GET CURSOR - field\_properties](javascript:call_link\('abapget_cursor_field.htm'\))
![Example](exa.gif "Example") [Dynpros, Determining the Cursor Position](javascript:call_link\('abendynpro_get_cursor_abexa.htm'\))