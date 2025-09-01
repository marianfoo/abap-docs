  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 3.0](javascript:call_link\('abennews-30.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20List%20Processing%20in%20ABAP%20Release%203.0%2C%20ABENNEWS-30-LIST%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

List Processing in ABAP Release 3.0

[1\. WRITE and ULINE with Variable Position and Length Specifications](#!ABAP_MODIFICATION_1@1@)
[2\. Variable Format Specifications with FORMAT, WRITE, MODIFY LINE](#!ABAP_MODIFICATION_2@2@)
[3\. Saving Lists](#!ABAP_MODIFICATION_3@3@)
[4\. Exit List and Return to the Selection Screen](#!ABAP_MODIFICATION_4@4@)
[5\. SET CURSOR and GET CURSOR with Addition LINE... (without FIELD)](#!ABAP_MODIFICATION_5@5@)
[6\. Handling of EXIT in List Events](#!ABAP_MODIFICATION_6@6@)
[7\. SET PF-STATUS SPACE Activates Standard List Status](#!ABAP_MODIFICATION_7@7@)
[8\. Fixed List Columns when Displaying a List (Leading Column)](#!ABAP_MODIFICATION_8@8@)
[9\. New Behavior of SKIP at End of Page](#!ABAP_MODIFICATION_9@9@)
[10\. New Additions with WRITE *\[*TO*\]* for Alignment](#!ABAP_MODIFICATION_10@10@)
[11\. Field Help (F1) and Input Help (F4) Now Also in LIKE Fields](#!ABAP_MODIFICATION_11@11@)
[12\. GET CURSOR on Field Symbols and Literals](#!ABAP_MODIFICATION_12@12@)
[13\. System Tables %\_LIST ... Protected Against Access](#!ABAP_MODIFICATION_13@13@)
[14\. Symbols in Lists](#!ABAP_MODIFICATION_14@14@)
[15\. Hotspots in Lists](#!ABAP_MODIFICATION_15@15@)
[16\. Output of QUAN Fields (WRITE Addition UNIT)](#!ABAP_MODIFICATION_16@16@)

Modification 1   

WRITE and ULINE with Variable Position and Length Specifications

In [WRITE](javascript:call_link\('abapwrite-.htm'\)) and [ULINE](javascript:call_link\('abapuline.htm'\)), the addition AT is not available which allows dynamic position and/or length specifications.

Example

DATA: POS TYPE I    VALUE 5,
      LEN TYPE I    VALUE 10,
      F(20)         VALUE 'Test output'.
WRITE AT /POS(LEN) F.
ULINE AT /POS(LEN).

Modification 2   

Variable Format Specifications with FORMAT, WRITE, MODIFY LINE

In [FORMAT](javascript:call_link\('abapformat.htm'\)), [WRITE](javascript:call_link\('abapwrite-.htm'\)), and [MODIFY LINE](javascript:call_link\('abapmodify_line.htm'\)), it is not possible to use variables to give parameters to all format specifications (INPUT, INTENSIFIED, INVERSE, and COLOR). In any of these additions, a \= is followed by the variable.

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

ABAP lists can now be saved as objects known as list objects.

To save the basic list or the details list of the current application, the function module 'SAVE\_LIST' is used. This function module passes the required list as a list object to an internal table of the structure ABAPLIST. Alternatively, the basic list of a report can be passed to the [user memory](javascript:call_link\('abenspa_gpa.htm'\)) instead of the display by [SUBMIT ... EXPORTING LIST TO MEMORY](javascript:call_link\('abapsubmit.htm'\)), and then, after returning from the report, be retrieved as a list object by the function module 'LIST\_FROM\_MEMORY'. The list object can be saved like any other internal table (in a database or file system, for example).

For further processing, use the function modules 'WRITE\_LIST' (output a list object as a list), 'DISPLAY\_LIST' (output a list object in a dialog box), and any existing or planned converters ('LIST\_TO\_ASCI', 'LIST\_TO\_RTF', and so on).

In SAPoffice, any displayed list can be saved in the private folders (SAPoffice) of the currently logged on user by choosing System → List Save (SAPoffice). More functions are planned.

Modification 4   

Exit List and Return to the Selection Screen

When the list display of a report is exited, the selection screen of the report is displayed again. The entries made on the selection screen are preserved. As a prerequisite, the selection screen has not been suppressed by the request ([SUBMIT...VIA SELECTION-SCREEN](javascript:call_link\('abapsubmit.htm'\))). The list can be exited by

-   F3 / going back to the basic list of the report
-   F15 / exiting any list of the report
-   the programmed function [LEAVE SCREEN](javascript:call_link\('abapleave_screen.htm'\)) in the application program

Hint

For reasons of compatibility, the function [LEAVE](javascript:call_link\('abapleave-.htm'\)) does not offer this function. Instead, ABAP release 3.0 includes a special variant [LEAVE LIST-PROCESSING](javascript:call_link\('abapleave_list-processing.htm'\)).

Modification 5   

SET CURSOR and GET CURSOR with Addition LINE... (without FIELD)

The functions [SET CURSOR LINE](javascript:call_link\('abapset_cursor_list.htm'\)) and [GET CURSOR LINE](javascript:call_link\('abapget_cursor_list.htm'\)) enable the cursor to be positioned or the cursor position to be determined in lists at line level. This is useful in cases where the whole list line (and not the field within the line) is relevant. Previously, the syntax rules required the addition FIELD to be used.

Hint

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
  CURSORPOSITION = CURSOROFFSET + 1.                      "new

Modification 6   

Handling of EXIT in List Events

The function [EXIT](javascript:call_link\('abapexit_processing_blocks.htm'\)) now has the same effect in all list events ([AT LINE-SELECTION](javascript:call_link\('abapat_line-selection.htm'\)), [AT USER-COMMAND](javascript:call_link\('abapat_user-command.htm'\)), [AT PF...](javascript:call_link\('abapat_pfnn.htm'\)), [TOP-OF-PAGE ...](javascript:call_link\('abaptop-of-page.htm'\)), and [END-OF-PAGE](javascript:call_link\('abapend-of-page.htm'\))) as in [MODULE](javascript:call_link\('abapmodule.htm'\)), [FORM](javascript:call_link\('abapform.htm'\)), and [FUNCTION](javascript:call_link\('abapfunction.htm'\)). The event therefore ends immediately and the processing continues at the call location (for example, after EXIT from TOP-OF-PAGE, the triggering statement WRITE is executed; after EXIT from AT LINE-SELECTION, the list is displayed immediately). Previously, the list was displayed here in both cases (the triggering WRITE was ignored) and, if there was also indented list processing ([LEAVE TO LIST-PROCESSING](javascript:call_link\('abapleave_to_list-processing.htm'\)) from [CALL SCREEN](javascript:call_link\('abapcall_screen.htm'\))), the entire list processing was terminated.

Hint

This change has the following consequence: In report processing ([with a logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry")), EXIT from TOP-OF-PAGE and END-OF-PAGE previously terminated processing of the logical database and branched directly to the list display. Now, only the event TOP-OF-PAGE or END-OF-PAGE is terminated. Any remaining logical database events ([START-OF-SELECTION](javascript:call_link\('abapstart-of-selection.htm'\)), [GET](javascript:call_link\('abapget-.htm'\)), and so on) are not affected by this change.

Modification 7   

SET PF-STATUS SPACE Activates Standard List Status

If a standard list status (STLI, PICK, or INLI) is required in list processing, but a dialog with a separate user interface is needed first, this is made possible by using [SET PF-STATUS SPACE](javascript:call_link\('abapset_pf-status_list.htm'\)) (when creating the list).

Previously, this was only possible by copying the standard list status to a separate PF status.

Modification 8   

Fixed List Columns when Displaying a List (Leading Column)

[SET SCROLL-BOUNDARY](javascript:call_link\('abapset_scroll-boundary.htm'\)) enables the area of a list page affected by horizontal scrolling to be restricted. [NEW-LINE NO-SCROLLING](javascript:call_link\('abapnew-line.htm'\)) can be used to flag individual list lines as unmovable.

Modification 9   

New Behavior of SKIP at End of Page

Previously, if [SKIP](javascript:call_link\('abapskip.htm'\)) occurred at the end of a page and there was a fixed number of lines per page (as defined by [NEW-PAGE LINE-COUNT](javascript:call_link\('abapnew-page.htm'\))), a new page was started and the blank line was displayed as the first line of that new page (after [TOP-OF-PAGE](javascript:call_link\('abaptop-of-page.htm'\))).

This produced unwanted line shifts on a new page, although the only purpose of SKIP was to separate different areas of the list. Therefore, SKIP is no longer executed on the next page unless explicitly requested by [NEW-PAGE](javascript:call_link\('abapnew-page.htm'\)).

Modification 10   

New Additions with WRITE *\[*TO*\]* for Alignment

[WRITE](javascript:call_link\('abapwrite-.htm'\)) now has the additions LEFT-JUSTIFIED, CENTERED, and RIGHT-JUSTIFIED for left-aligned, centered, or right-aligned output. They can be used in output to lists and for string processing with [WRITE ... TO](javascript:call_link\('abapwrite_to.htm'\)). In the first case, the alignment refers to the output field in the list. In the latter case, it refers to the target field specified after TO.

Modification 11   

Field Help (F1) and Input Help (F4) Now Also in LIKE Fields

Previously, field help (F1) and input help (F4) were only available for fields which had a direct reference to a data element (usually table fields). Now this is supported for work fields that refer to a table field with [DATA ... LIKE](javascript:call_link\('abapdata_simple.htm'\)) as well. This of course also applies to field symbols and parameters of subroutines.

Modification 12   

GET CURSOR on Field Symbols and Literals

The function [GET CURSOR FIELD](javascript:call_link\('abapget_cursor_list.htm'\)) now always returns the name of a global symbol, in other words, a field that is still valid when the list is displayed. Names of field symbols and local variables are invalid in this context.

For field symbols and reference parameters of subroutines, the function returns the name of the global symbol that may have been assigned when the list was displayed. For literals, the return code is no longer set to 4 and the field name becomes SPACE and the return code 0. The content of the literal is returned as ... VALUE.

Modification 13   

System Tables %\_LIST ... Protected Against Access

Previously it was possible to directly address the system tables of list processing (%\_LIST, ) in all ABAP programs and in debugging. This is no longer possible. The most common reason for wanting to do this (determining the number of lines in a list with DESCRIBE TABLE %\_LIST LINES lin) can now be achieved by using [DESCRIBE LIST NUMBER OF LINES lin INDEX SY-LSIND](javascript:call_link\('abapdescribe_list.htm'\)).

Modification 14   

Symbols in Lists

WRITE with the addition ['...AS SYMBOL'](javascript:call_link\('abapwrite_list_elements.htm'\)) is now used to display certain characters in a list as symbols.

Example

INCLUDE <SYMBOL>.
WRITE: / SYM\_PHONE AS SYMBOL.        " Output: telephone symbol

Modification 15   

Hotspots in Lists

By using the addition ['...HOTSPOT'](javascript:call_link\('abapformat.htm'\)) with the statements FORMAT and WRITE, it is now possible to define particular areas in a list as hotspots.

Clicking once with the mouse in one of these areas triggers the same response as placing the cursor on the clicked position in the list and then pressing the function key F2 (in other words a double-click is achieved with a single click).

Example

DATA F.
FORMAT HOTSPOT.
\* or
WRITE: / F HOTSPOT.

Modification 16   

Output of QUAN Fields (WRITE Addition UNIT)

[WRITE](javascript:call_link\('abapwrite-.htm'\)) now has the addition UNIT which enables quantity fields to be formatted by unit. Quantity fields are packed fields and usually have the type QUAN in ABAP Dictionary. Apart from their defined number of [decimal places](javascript:call_link\('abenfract_digit_glosry.htm'\) "Glossary Entry"), they can be formatted by the unit specified in UNIT, for example, for item specifications without [decimal places](javascript:call_link\('abendecimal_place_glosry.htm'\) "Glossary Entry").