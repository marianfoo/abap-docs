# ABAP Keyword Documentation / ABAP − Reference / SAP GUI User Dialogs / Classic Lists / Displaying Lists / GET CURSOR - List

Included pages: 3


### abapget_cursor_list.htm

---
title: "GET CURSOR - List"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_cursor_shortref.htm) Syntax GET CURSOR  FIELD field  field_properties(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_cursor_list_field.htm)  LINE line  line_proper
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_cursor_list.htm"
abapFile: "abapget_cursor_list.htm"
keywords: ["do", "if", "class", "data", "field-symbol", "abapget", "cursor", "list"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpro_list.htm) →  [Displaying Lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlists_displayed.htm) → 

GET CURSOR - List

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_cursor_shortref.htm)

Syntax

GET CURSOR *{* *{*FIELD field *\[* [field\_properties](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_cursor_list_field.htm)*\]**}*
           *|* *{*LINE line *\[* [line\_properties](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_cursor_list_field.htm)*\]**}* *}*.

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

Returns the name of the displayed field in field after a user action. This name is where the cursor is positioned in the currently displayed list. field expects a character-like variable. The addition [field\_properties](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_cursor_list_field.htm) can be used to read further information about the cursor position.

If the screen cursor is on a subarea displayed using an [offset/length](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoffset_length.htm) of a structure, the following rules apply:

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

Returns the number of the list line in line after a user action. This line is where the cursor is positioned in the currently displayed list. line expects a variable of type i. The addition [line\_properties](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_cursor_list_line.htm) can be used to read further information about the cursor position.

Continue
[GET CURSOR - field\_properties](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_cursor_list_field.htm)
[GET CURSOR - line\_properties](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_cursor_list_line.htm)


### abapget_cursor_list_field.htm

---
title: "Syntax"
description: |
  ... VALUE val LENGTH len DISPLAYMEMORY OFFSET off LINE lin. Extras: 1. ... VALUE val(#!ABAP_ADDITION_1@1@) 2. ... LENGTH len(#!ABAP_ADDITION_2@2@) 3. ... DISPLAYMEMORY OFFSET off(#!ABAP_ADDITION_3@3@) 4. ... LINE lin(#!ABAP_ADDITION_4
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_cursor_list_field.htm"
abapFile: "abapget_cursor_list_field.htm"
keywords: ["do", "if", "class", "data", "abapget", "cursor", "list", "field"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpro_list.htm) →  [Displaying Lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlists_displayed.htm) →  [GET CURSOR - List](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_cursor_list.htm) → 

GET CURSOR - field\_properties

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_cursor_shortref.htm)

Syntax

... *\[*VALUE val*\]* *\[*LENGTH len*\]*
    *\[**\[*DISPLAY*|*MEMORY*\]* OFFSET off*\]* *\[*LINE lin*\]*.

Extras:

[1\. ... VALUE val](#!ABAP_ADDITION_1@1@)
[2\. ... LENGTH len](#!ABAP_ADDITION_2@2@)
[3\. ... *\[*DISPLAY*|*MEMORY*\]* OFFSET off](#!ABAP_ADDITION_3@3@)
[4\. ... LINE lin](#!ABAP_ADDITION_4@4@)

Effect

Using these additions, further information about the cursor position can be read during list processing with the addition FIELD of the [GET CURSOR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_cursor_list.htm) statement.

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

If [Subfields](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoffset_length.htm) is displayed in lists, the returned offset is counted starting from the offset of the subfield.

Addition 4

... LINE lin

Effect

The addition LINE assigns the number of the list line on which the cursor is positioned to the data object lin. lin expects a variable of the type i.


### abapget_cursor_list_line.htm

---
title: "Syntax"
description: |
  ... VALUE val LENGTH len DISPLAYMEMORY OFFSET off. Extras: 1. ... VALUE val(#!ABAP_ADDITION_1@1@) 2. ... LENGTH len(#!ABAP_ADDITION_2@2@) 3. ... DISPLAYMEMORY OFFSET off(#!ABAP_ADDITION_3@3@) Effect Using these additions, further information abo
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_cursor_list_line.htm"
abapFile: "abapget_cursor_list_line.htm"
keywords: ["do", "if", "class", "data", "abapget", "cursor", "list", "line"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpro_list.htm) →  [Displaying Lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlists_displayed.htm) →  [GET CURSOR - List](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_cursor_list.htm) → 

GET CURSOR - line\_properties

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_cursor_shortref.htm)

Syntax

... *\[*VALUE val*\]* *\[*LENGTH len*\]* *\[**\[*DISPLAY*|*MEMORY*\]* OFFSET off*\]*.

Extras:

[1\. ... VALUE val](#!ABAP_ADDITION_1@1@)
[2\. ... LENGTH len](#!ABAP_ADDITION_2@2@)
[3\. ... *\[*DISPLAY*|*MEMORY*\]* OFFSET off](#!ABAP_ADDITION_3@3@)

Effect

Using these additions, further information about the cursor position can be read using the addition LINE of the statement [GET CURSOR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_cursor_list.htm).

Addition 1

... VALUE val

Effect

The addition VALUE assigns the formatted content of the list line on which the cursor is positioned to the data object val. val expects a character-like variable.

Addition 2

... LENGTH len

Effect

The addition LENGTH assigns the line length set using the addition LINE-SIZE of the statement introducing the program or using NEW-PAGE (this is the line on which the cursor is positioned) to the data object len. len expects a variable of the type i.

Addition 3

... *\[*DISPLAY*|*MEMORY*\]* OFFSET off

Effect

The addition OFFSET without an addition or with the addition DISPLAY assigns the position of the cursor in the displayed line on which it is positioned to the data object off. off expects a variable of the type i.

The addition OFFSET with the addition MEMORY assigns the position of the character in the list buffer line (on whose output the cursor is currently positioned) to the data object off. If the cursor is on one of the characters < or > for characters cut off in the display, the position of the character in the list buffer that is overwritten by the character is assigned. off expects a variable of the type i.
