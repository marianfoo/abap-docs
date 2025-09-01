  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Displaying Lists](javascript:call_link\('abenlists_displayed.htm'\)) → 

GET CURSOR - List

[Quick Reference](javascript:call_link\('abapget_cursor_shortref.htm'\))

Syntax

GET CURSOR *{* *{*FIELD field *\[* [field\_properties](javascript:call_link\('abapget_cursor_list_field.htm'\))*\]**}*
           *|* *{*LINE line *\[* [line\_properties](javascript:call_link\('abapget_cursor_list_field.htm'\))*\]**}* *}*.

Variants:

[1\. GET CURSOR FIELD field *\[*field\_properties*\]*.](#!ABAP_VARIANT_1@1@)
[2\. GET CURSOR LINE line *\[*line\_properties*\]*.](#!ABAP_VARIANT_2@2@)

Effect

If this statement is specified in list processing, it passes the name of the output field or the number of the list line on which the screen cursor in the displayed list is positioned (after the user action) to the variables field or line, depending on how FIELD or LINE is specified. Further information on the cursor position can be read if required.

System Fields

sy-subrc

Meaning

0

The cursor is on a field or a list line and the statement was executed successfully.

4

The cursor is not on any field or any list line.

Variant 1

GET CURSOR FIELD field *\[*field\_properties*\]*.

Effect

Returns the name of the displayed field in field after a user action. This name is where the cursor is positioned in the currently displayed list. field expects a character-like variable. The addition [field\_properties](javascript:call_link\('abapget_cursor_list_field.htm'\)) can be used to read further information about the cursor position.

If the screen cursor is on a subarea displayed using an [offset/length](javascript:call_link\('abenoffset_length.htm'\)) of a structure, the following rules apply:

-   The subarea of the structure has been displayed using the name of the structure:
    

-   If the subarea includes the entire structure, the name of the structure is returned.

-   If the subarea only includes a part of the structure, the name of the component is returned in which the subarea begins.

-   The subarea of the structure has been displayed using the name of a component of the structure:
    

-   The name of the component is returned in which the subarea begins.

These rules also apply to substructures.

The addition FIELD can only be used to determine the names of global data objects of the ABAP program. If the cursor is positioned on the output of a data object that is not visible in the current context or a literal, field is initialized. This has no influence on the other additions or on sy-subrc.

If the cursor is on the output area of a data object that was accessed in the WRITE statement using a field symbol, the name of the data object is returned and not the name of the field symbol.

Variant 2

GET CURSOR LINE line *\[*line\_properties*\]*.

Effect

Returns the the number of the list line in line after a user action. This line is where the cursor is positioned in the currently displayed list. line expects a variable of type i. The addition [line\_properties](javascript:call_link\('abapget_cursor_list_line.htm'\)) can be used to read further information about the cursor position.

Continue
[GET CURSOR - field\_properties](javascript:call_link\('abapget_cursor_list_field.htm'\))
[GET CURSOR - line\_properties](javascript:call_link\('abapget_cursor_list_line.htm'\))