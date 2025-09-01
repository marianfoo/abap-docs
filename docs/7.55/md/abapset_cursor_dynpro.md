  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - ABAP Statements](javascript:call_link\('abenabap_dynpros_abap_statements.htm'\)) → 

SET CURSOR, Dynpro

[Short Reference](javascript:call_link\('abapset_cursor_shortref.htm'\))

Syntax

SET CURSOR *{* *{* FIELD field *\[*LINE line*\]* *\[**\[*DISPLAY*\]* OFFSET off*\]* *}*
           *|* *{* col lin *}* *}*.

Alternatives:

[1\. ... FIELD field *\[*LINE line*\]* *\[**\[*DISPLAY*\]* OFFSET off*\]*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... col lin](#!ABAP_ALTERNATIVE_2@2@)

Effect

During [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") processing, this statement sets the cursor in the [screen](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") of the current [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry"). The cursor can be positioned by entering a screen element after FIELD or by specifying an absolute position using col and lin. Outside of PBO processing, the cursor is positioned in the next [list](javascript:call_link\('abapset_cursor_list.htm'\)) displayed on the screen.

If the statement SET CURSOR is not specified, the cursor is set according to the following hierarchy, depending on the definition of the dynpro:

1.  on the cursor position determined statically in the dynpro properties,
    
2.  on the first input field of the dynpro,
    
3.  on the first screen element of the dynpro,
    
4.  on the command field in the [system toolbar](javascript:call_link\('abenstandard_toolbar_glosry.htm'\) "Glossary Entry").
    

The latter also applies if the command field in the system toolbar is not displayed.

Alternative 1

... FIELD field *\[*LINE line*\]* *\[**\[*DISPLAY*\]* OFFSET off*\]*

Effect

The cursor is positioned on the screen element whose name is contained in uppercase letters in field. The data object field must be character-like and [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry"). The screen layout or a [table control](javascript:call_link\('abentable_control_glosry.htm'\) "Glossary Entry") is scrolled in the display so that the screen element on which the cursor is positioned is visible. If the specified screen element is not found, the statement is ignored.

If the specified screen element is part of a table control or a [step loop](javascript:call_link\('abenstep_loop_glosry.htm'\) "Glossary Entry"), the row of the table control or group of the step loop in which the cursor is positioned on the specified screen element must be specified using the addition LINE. The data object line expects the type i. If there is no row or group for the value of line, or the addition LINE is not specified, the statement is ignored. The statement is also ignored if the addition LINE is specified and the screen element is not part of a table control or step loop.

If the addition OFFSET is not specified, the cursor is set to the first position of the screen element. Using the addition OFFSET, the cursor can be set to the position in a screen element entered in off. The position of the cursor is only visible in input/output fields. In other screen elements, the whole element is selected. The data object off expects the type i. If the value of off is greater than the length of the screen element, the addition is ignored. If the value of off is negative, the cursor is positioned at the end of the screen element. The addition DISPLAY is standard and can be omitted.

Alternative 2

... col lin

Effect

The cursor is positioned in the column specified in col and the row specified in lin in the screen, if a screen element exists in this position that is not part of a [table control](javascript:call_link\('abentable_control_glosry.htm'\) "Glossary Entry") or [tabstrip control](javascript:call_link\('abentabstrip_control_glosry.htm'\) "Glossary Entry"). col and lin expect data objects of the type i. The counting of the columns starts at 2. If the screen element is not an input/output field, the whole element is selected. If no screen element is available at the specified positions, or if the cursor is positioned in a table control or tabstrip control, or if negative values are entered in col or lin, the statement is ignored.

Continue
![Example](exa.gif "Example") [dynpro - Defining the Cursor Position](javascript:call_link\('abendynpro_set_cursor_abexa.htm'\))