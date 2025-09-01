  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Display](javascript:call_link\('abenlists_displayed.htm'\)) →  [GET CURSOR, List](javascript:call_link\('abapget_cursor_list.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20GET%20CURSOR%2C%20field_properties%2C%20ABAPGET_CURSOR_LIST_FIELD%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

GET CURSOR, field\_properties

[Short Reference](javascript:call_link\('abapget_cursor_shortref.htm'\))

Syntax

... *\[*VALUE val*\]* *\[*LENGTH len*\]*
    *\[**\[*DISPLAY*|*MEMORY*\]* OFFSET off*\]* *\[*LINE lin*\]*.

Additions:

[1\. ... VALUE val](#!ABAP_ADDITION_1@1@)
[2\. ... LENGTH len](#!ABAP_ADDITION_2@2@)
[3\. ... *\[*DISPLAY*|*MEMORY*\]* OFFSET off](#!ABAP_ADDITION_3@3@)
[4\. ... LINE lin](#!ABAP_ADDITION_4@4@)

Effect

Using these additions, further information about the cursor position can be read during list processing with the addition FIELD of the [GET CURSOR](javascript:call_link\('abapget_cursor_list.htm'\)) statement.

Addition 1   

... VALUE val

Effect

The addition VALUE assigns the formatted content of the output area on which the cursor is positioned to the data object val. val expects a character-like variable.

Addition 2   

... LENGTH len

Effect

The addition LENGTH assigns the length of the output area on which the cursor is positioned to the data object len. len expects a variable of the type i.

Addition 3   

... *\[*DISPLAY*|*MEMORY*\]* OFFSET off

Effect

The addition OFFSET without an addition or with the addition DISPLAY assigns the position of the cursor in the output area on which it is positioned to the data object off. off expects a variable of the type i. Counting begins at 0.

The addition OFFSET with the addition MEMORY assigns the offset of the character in the area of the data object in the list buffer on whose output the cursor is positioned to the data object off. If the cursor is on one of the characters < or > for characters cut off in the display, the position of the character in the list buffer that is overwritten by the character is assigned. off expects a variable of the type i.

Hint

If [substrings](javascript:call_link\('abenoffset_length.htm'\)) are displayed in lists, the returned offset is counted starting from the offset of the subfield.

Addition 4   

... LINE lin

Effect

The addition LINE assigns the number of the list line on which the cursor is positioned to the data object lin. lin expects a variable of the type i.