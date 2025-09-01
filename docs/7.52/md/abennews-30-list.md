  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Release 3.0](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-30.htm) → 

List Processing in Release 3.0

[1\. WRITE and ULINE with variable position and length specifications](#!ABAP_MODIFICATION_1@1@)

[2\. Variable format specifications with FORMAT, WRITE, and MODIFY LINE](#!ABAP_MODIFICATION_2@2@)

[3\. Saving lists](#!ABAP_MODIFICATION_3@3@)

[4\. Exit list and return to the selection screen](#!ABAP_MODIFICATION_4@4@)

[5\. SET CURSOR and GET CURSOR with the addition LINE... (without FIELD)](#!ABAP_MODIFICATION_5@5@)

[6\. Handling of EXIT in list events](#!ABAP_MODIFICATION_6@6@)

[7\. SET PF-STATUS SPACE activates standard list status](#!ABAP_MODIFICATION_7@7@)

[8\. Fixed list columns in list display](#!ABAP_MODIFICATION_8@8@)
(leading column)

[9\. New behavior of SKIP at end of page](#!ABAP_MODIFICATION_9@9@)

[10\. New additions with WRITE *\[*TO*\]* for alignment](#!ABAP_MODIFICATION_10@10@)

[11\. Field help (F1) and input help (F4) now also in](#!ABAP_MODIFICATION_11@11@)
"LIKE" fields

[12\. GET CURSOR on field symbols and literals](#!ABAP_MODIFICATION_12@12@)

[13\. System tables %\_LIST ... protected against access](#!ABAP_MODIFICATION_13@13@)

[14\. Symbols in lists](#!ABAP_MODIFICATION_14@14@)

[15\. Hotspots in lists](#!ABAP_MODIFICATION_15@15@)

[16\. Output of QUAN fields (WRITE addition UNIT)](#!ABAP_MODIFICATION_16@16@)

Modification 1

WRITE and ULINE with Variable Position and Length Specifications
In [WRITE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite-.htm) and [ULINE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapuline.htm), the addition "AT" is not available which allows dynamic position and/or length specifications.

Example

DATA: POS TYPE I    VALUE 5,
      LEN TYPE I    VALUE 10,
      F(20)         VALUE 'Test output'.
WRITE AT /POS(LEN) F.
ULINE AT /POS(LEN).

Modification 2

Variable Format Specifications with FORMAT, WRITE, and MODIFY LINE
In [FORMAT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapformat.htm), [WRITE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite-.htm), and [MODIFY LINE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_line.htm), it is not possible to use variables to give parameters to all format specifications (INPUT, INTENSIFIED, INVERSE, COLOR). In any of these additions, a "=" is followed by the variable.

Example

DATA: COL TYPE I,
      INT TYPE I,
      F(20)    VALUE 'Test output'.
IF <condition>.
  INT = 1.
  COL = 5.
ENDIF.
WRITE F COLOR = COL INTENSIFIED = INT INPUT ON.
FORMAT COLOR = COL INTENSIFIED = INT.

Modification 3

Saving Lists
ABAP lists can now be saved as list objects.
To save the basic list or the details list of the current application, the function module 'SAVE\_LIST' is used. This function module passes the required list as a list object to an internal table of the structure ABAPLIST. Alternatively, the basic list of a report can be passed to the [SAP memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmemory.htm) instead of the display by [SUBMIT ... EXPORTING LIST TO MEMORY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit.htm), and then, after returning from the report, be retrieved as a list object by the function module 'LIST\_FROM\_MEMORY'. The list object can be saved like any other internal table (in a database or file system, for example).
For further processing, use the function modules 'WRITE\_LIST' (output a list object as a list), 'DISPLAY\_LIST' (output a list object in a dialog box), and any existing or planned converters ('LIST\_TO\_ASCI', 'LIST\_TO\_RTF', and so on).
In SAPoffice, any displayed list can be saved in the private folders (SAPoffice) of the currently logged on user by choosing System → ListSave (SAPoffice). More functions are planned.

Modification 4

Exit List and Return to the [Selection Screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_glosry.htm "Glossary Entry")
When the list display of a report is exited, the selection screen of the report is displayed again. The entries made on the selection screen are preserved. Prerequisite: The selection screen has not been suppressed by the request ([SUBMIT...VIA SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit.htm)). The list can be exited by
\- F3 / going back to the basic list of the report
\- F15 / exiting any list of the report
\- the programmed function [LEAVE SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapleave_screen.htm) in the application program.

Note

For reasons of compatibility, the function [LEAVE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapleave-.htm) does not offer this function. Instead, Release 3.0 includes a special variant [LEAVE LIST-PROCESSING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapleave_list-processing.htm).

Modification 5

SET CURSOR and GET CURSOR with Addition LINE... (without FIELD)
The functions [SET CURSOR LINE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_cursor_list.htm) and [GET CURSOR LINE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_cursor_list.htm) enable the cursor to be positioned or the cursor position to be determined in lists at line level. This is useful in cases where the whole list line (and not the field within the line) is relevant. Previously, the syntax rules required the addition FIELD to be used.

Note

In general, the function GET CURSOR LINE l OFFSET o should be used when the absolute cursor position (column) within a list line is evaluated during an interactive list event. The system field SY-CUCOL does not refer to the list line, but to the displayed list section. After horizontal scrolling, the relative cursor position (SY-CUCOL) and the absolute cursor position are different. Furthermore, the system field SY-CUCOL contains the value 2 if (for reasons of compatibility) the cursor is on the first visible list column, which makes the calculation of the absolute position difficult.

Example

The following example shows how the previous usage of SY-CUCOL can be replaced by the function GET CURSOR:

DATA: CURSORPOSITION TYPE I,
      CURSOROFFSET   TYPE I,
      CURSORLINE     TYPE I.
AT LINE-SELECTION.
  CURSORPOSITION = SY-CUCOL - 2 + SY-STACO.               "old
AT LINE-SELECTION.
  GET CURSOR LINE CURSORLINE OFFSET CURSOROFFSET.         "new
  CURSORPOSITION = CURSOROFFSET + 1.                      "neu

Modification 6

Handling of EXIT in List Events
The function [EXIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexit_processing_blocks.htm) now has the same effect in all list events ([AT LINE-SELECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_line-selection.htm), [AT USER-COMMAND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_user-command.htm), [AT PF...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_pfnn.htm), [TOP-OF-PAGE ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptop-of-page.htm), and [END-OF-PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapend-of-page.htm)) as in [MODULE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodule.htm), [FORM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapform.htm), and [FUNCTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfunction.htm). The event therefore ends immediately and the processing continues at the call location (for example, after EXIT from TOP-OF-PAGE, the triggering statement WRITE is executed; after EXIT from AT LINE-SELECTION, the list is displayed immediately). Previously, the list was displayed here in both cases (the triggering WRITE was ignored) and, if there was also indented list processing ([LEAVE TO LIST-PROCESSING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapleave_to_list-processing.htm) from [CALL SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_screen.htm)), the entire list processing was terminated.

Note

This change has the following consequence: In report processing ([with a logical database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_data_base_glosry.htm "Glossary Entry")), EXIT from TOP-OF-PAGE and END-OF-PAGE previously terminated processing of the logical database and branched directly to the list display. Now, only the event TOP-OF-PAGE or END-OF-PAGE is terminated. Any remaining logical database events ([START-OF-SELECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapstart-of-selection.htm), [GET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget-.htm), and so on) are not affected by this change.

Modification 7

SET PF-STATUS SPACE Activates Standard List Status
If a standard list status (STLI, PICK, or INLI) is required in list processing, but a dialog with a separate user interface is needed first, this is made possible by using [SET PF-STATUS SPACE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_pf-status_list.htm) (when creating the list).
Previously, this was only possible by copying the standard list status to a separate PF status.

Modification 8

Fixed List Columns when Displaying a List (Leading Column)
[SET SCROLL-BOUNDARY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_scroll-boundary.htm) enables the area of a list page affected by horizontal scrolling to be restricted. [NEW-LINE NO-SCROLLING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-line.htm) can be used to flag individual list lines as "unmovable".

Modification 9

New Behavior of SKIP at End of Page
Previously, if [SKIP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapskip.htm) occurred at the end of a page and there was a fixed number of lines per page (as defined by [NEW-PAGE LINE-COUNT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page.htm)), a new page was started and the blank line was displayed as the first line of that new page (after [TOP-OF-PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptop-of-page.htm)).
This produced unwanted line shifts on a new page, although the only purpose of SKIP was to separate different areas of the list. Therefore, SKIP is no longer executed on the next page unless explicitly requested by [NEW-PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page.htm).

Modification 10

New Additions with WRITE *\[*TO*\]* for [Alignment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenalignment_glosry.htm "Glossary Entry")
[WRITE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite-.htm) now has the additions LEFT-JUSTIFIED, CENTERED, and RIGHT-JUSTIFIED for left-justified, centered, or right-justified output. They can be used in output to lists and for string processing with [WRITE ... TO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to.htm). In the first case, the alignment refers to the output field in the list. In the latter case, it refers to the target field specified after TO.

Modification 11

Field Help (F1) and Input Help (F4)) Now Also in "LIKE" Fields
Previously, field help (F1) and input help (F4) were only available for fields which had a direct reference to a data element (usually table fields). Now, this is supported for work fields that refer to a table field with [DATA ... LIKE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_simple.htm) as well. This of course also applies to field symbols and parameters of subroutines.

Modification 12

GET CURSOR on Field Symbols and Literals
The function [GET CURSOR FIELD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_cursor_list.htm) now always returns the name of a "global symbol", in other words, a field that is still valid when the list is displayed. Names of field symbols and local variables are invalid in this context.
For field symbols and reference parameters of subroutines, the function returns the name of the global symbol that may have been assigned when the list was displayed. In literals, the return code is no longer set to 4, but the field name becomes SPACE and the return code 0. The contents of the literal are returned as ... VALUE.

Modification 13

System Tables %\_LIST ... Protected Against Access
Previously it was possible to directly address the system tables of list processing (%\_LIST, ) in all ABAP programs and in debugging. This is no longer possible. The most common reason for wanting to do this (determining the number of lines in a list with DESCRIBE TABLE %\_LIST LINES lin) can now be achieved by using [DESCRIBE LIST NUMBER OF LINES lin INDEX SY-LSIND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdescribe_list.htm).

Modification 14

Symbols in Lists
WRITE with the addition ['...AS SYMBOL'](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_list_elements.htm) is now used to display certain characters in a list as symbols.

Example

INCLUDE <SYMBOL>.
WRITE: / SYM\_PHONE AS SYMBOL.        " Output: telephone symbol

Modification 15

Hotspots in Lists
By using the addition ['...HOTSPOT'](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapformat.htm) with the statements FORMAT and WRITE, it is now possible to define particular areas in a list as hotspots.
Clicking once with the mouse in one of these areas triggers the same response as placing the cursor on the clicked position in the list and then pressing the function key F2 (in other words a double-click is achieved with a single click).

Example

DATA F.
FORMAT HOTSPOT.
\* or
WRITE: / F HOTSPOT.

Modification 16

Output of QUAN Fields (WRITE Addition UNIT)
[WRITE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite-.htm) now has the addition UNIT which enables quantity fields to be formatted by unit. Quantity fields are packed fields and usually have the type QUAN in ABAP Dictionary. Apart from their defined number of [decimal places](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendecimal_place_glosry.htm "Glossary Entry"), they can be formatted by the unit specified in UNIT, for example, for item specifications without [decimal places](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfractional_portion_glosry.htm "Glossary Entry").