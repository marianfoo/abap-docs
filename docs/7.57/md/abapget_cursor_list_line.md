  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Display](javascript:call_link\('abenlists_displayed.htm'\)) →  [GET CURSOR, List](javascript:call_link\('abapget_cursor_list.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: GET CURSOR, line_properties, ABAPGET_CURSOR_LIST_LINE, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

GET CURSOR, line\_properties

[Short Reference](javascript:call_link\('abapget_cursor_shortref.htm'\))

Syntax

... *\[*VALUE val*\]* *\[*LENGTH len*\]* *\[**\[*DISPLAY*|*MEMORY*\]* OFFSET off*\]*.

Additions:

[1\. ... VALUE val](#!ABAP_ADDITION_1@1@)
[2\. ... LENGTH len](#!ABAP_ADDITION_2@2@)
[3\. ... *\[*DISPLAY*|*MEMORY*\]* OFFSET off](#!ABAP_ADDITION_3@3@)

Effect

Using these additions, further information about the cursor position can be read using the addition LINE of the statement [GET CURSOR](javascript:call_link\('abapget_cursor_list.htm'\)).

Addition 1   

... VALUE val

Effect

The addition VALUE assigns the formatted content of the list line on which the cursor is positioned to the data object val. val expects a character-like variable.

Addition 2   

... LENGTH len

Effect

The addition LENGTH assigns the line length of the line on which the cursor is positioned, set using the addition LINE-SIZE of the program-initiating statement or using NEW-PAGE to the data object len. len expects a variable of the type i.

Addition 3   

... *\[*DISPLAY*|*MEMORY*\]* OFFSET off

Effect

The addition OFFSET without an addition or with the addition DISPLAY assigns the position of the cursor in the displayed line on which it is positioned to the data object off. off expects a variable of the type i.

The addition OFFSET with the addition MEMORY assigns the position of the character in the list buffer line on whose output the cursor is currently positioned to the data object off. If the cursor is on one of the characters < or > for characters cut off in the display, the position of the character in the list buffer that is overwritten by the character is assigned. off expects a variable of the type i.