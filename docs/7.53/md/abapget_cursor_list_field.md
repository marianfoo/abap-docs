  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Displaying Lists](javascript:call_link\('abenlists_displayed.htm'\)) →  [GET CURSOR - List](javascript:call_link\('abapget_cursor_list.htm'\)) → 

GET CURSOR - field\_properties

[Quick Reference](javascript:call_link\('abapget_cursor_shortref.htm'\))

Syntax

... *\[*VALUE val*\]* *\[*LENGTH len*\]*
    *\[**\[*DISPLAY*|*MEMORY*\]* OFFSET off*\]* *\[*LINE lin*\]*.

Extras:

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

The addition OFFSET with the addition MEMORY assigns the offset of the character in the area of the data object in the list buffer (on whose output the cursor is positioned) to the data object off. If the cursor is on one of the characters < or > for characters cut off in the display, the position of the character in the list buffer that is overwritten by the character is assigned. off expects a variable of the type i.

Note

If [Subfields](javascript:call_link\('abenoffset_length.htm'\)) is displayed in lists, the returned offset is counted starting from the offset of the subfield.

Addition 4

... LINE lin

Effect

The addition LINE assigns the number of the list line on which the cursor is positioned to the data object lin. lin expects a variable of the type i.