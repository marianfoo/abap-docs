---
title: "Lists - Overview"
description: |
  -   Screen Lists(#abenlist-overview-1-------lists-in-abap-programs---@ITOC@@ABENLIST_OVERVIEW_2) -   Basic List(#abenlist-overview-3-------details-lists---@ITOC@@ABENLIST_OVERVIEW_4) -   Structure of a List(#abenlist-overview-5-------spool-lists---@ITOC@@ABENLIST_OVERVIEW_6) -   Characters in
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlist_overview.htm"
abapFile: "abenlist_overview.htm"
keywords: ["delete", "do", "while", "if", "case", "try", "class", "data", "abenlist", "overview"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpro_list.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Lists - Overview, ABENLIST_OVERVIEW, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASug
gestion for improvement:)

Lists - Overview

-   [Screen Lists](#abenlist-overview-1-------lists-in-abap-programs---@ITOC@@ABENLIST_OVERVIEW_2)
-   [Basic List](#abenlist-overview-3-------details-lists---@ITOC@@ABENLIST_OVERVIEW_4)
-   [Structure of a List](#abenlist-overview-5-------spool-lists---@ITOC@@ABENLIST_OVERVIEW_6)
-   [Characters in Lists](#abenlist-overview-7-------lists-and-abap-objects---@ITOC@@ABENLIST_OVERVIEW_8)

Screen Lists   

By default, classic lists (or lists for short) are [screen lists](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscreen_list_glosry.htm "Glossary Entry"). A screen list is displayed as the [screen layout](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscreen_glosry.htm "Glossary Entry") of a special [list dynpro](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlist_dynpro_glosry.htm "Glossary Entry") that is a component of the list processor system program. Such a screen layout contains text output defined using ABAP statements instead of screen elements.

Lists in ABAP Programs   

An ABAP program can process multiple lists, which are stored in one or more [list buffers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlist_buffer_glosry.htm "Glossary Entry"). Each time a [dynpro sequence](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_sequence_glosry.htm "Glossary Entry") is called, a new list buffer is opened and assigned to this dynpro sequence. A single list buffer can contain up to 21 lists, a basic list and 20 details lists. A list index is assigned to each list, and this index organizes the lists in the list buffer in hierarchical list levels. The first list of a list buffer is the basic list with list index 0. All other lists, whose list indexes are increased continuously starting at 1, are details lists.

The output statements of an ABAP program write to the current list, whose list index is determined by the system field sy-lsind. The current list after the call of a dynpro sequence is the basic list. If the basic list is not displayed, no other list levels can be created.

Basic List   

The basic list is displayed either implicitly during the processing of an executable program (see [SUBMIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsubmit.htm)) or explicitly using the statement [LEAVE TO LIST-PROCESSING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave_to_list-processing.htm). In both cases, the list processor is called, which then sends the list to the list dynpro. Displaying this list closes it in the list buffer. It can no longer be written to, but it can be read or modified.

Details Lists   

Every user action on a displayed list that raises a list event for which an [event block](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenevent_block_glosry.htm "Glossary Entry") is defined in the ABAP program, creates a new details list. The list index of this details list is always one more than the list index of the list on which the event was raised. This index is contained in the system field sy-listi. The output statements of the event block write to the current details list. If the event block is completed normally, the details list is displayed automatically in the list dynpro.

User actions on displayed lists can cause a stack of up to 20 details lists to be created in the list buffer. The list with the highest list index (sy-lsind) is always the current list of the ABAP program, while the list with the list index one below the highest (sy-listi) is displayed on the screen. In certain list processing statements, the list index can be used to access all lists within the stack for reading or changing.

The details list stack in a list buffer can be reduced in two ways:

1.  A user action on a displayed details list is linked to function code BACK. This function code causes the previous list to be displayed and reduces the value of sy-lsind by 1. In the basic list, BACK causes the current dynpro sequence to be exited.
2.  Within an event block for a list event, a value is assigned to the system field sy-lsind. If the value of sy-lsind after the event block is closed is less than the list index of the current list and greater than or equal to 0, the current list replaces the list of this list level and all lists whose list index is greater than the value of sy-lsind are deleted from the list buffer. Other values of sy-lsind are reset to the index of the current list after the event block is closed.

Structure of a List   

A list is made up of list lines with a fixed width of up to 1023 characters. The line width of the current list is stored in the system field sy-linsz. The number of lines of a list is limited only by the storage capacity of the system.

A list is divided into pages. Every list starts on page 1. The current page of the current list is stored in the sy-pagno system field. The output position on the current page in the list buffer is determined by the list cursor, which is provided in the system fields sy-colno (column) and sy-linno (line). A page can contain a maximum of 60000 lines. The number of lines per page is stored for the current list in the system field sy-linct. The value 0 represents the maximum number of lines per page.

On every page of a list, lines can be used for a page header and a page footer. The lines of the page header of the basic list are by default filled with a standard page header from the text elements of the ABAP program. The standard page header consists of a standard title and can contain column headers. The standard title is fixed so that it does not disappear when the page is scrolled vertically on the screen.

In the list event [TOP-OF-PAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptop-of-page.htm), the page header can be filled with additional lines. The page footer can only be filled only in the list event [END-OF-PAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapend-of-page.htm). The entire page header of the list displayed on top is fixed so that it does not move when the page is scrolled vertically. The column headers of the standard page header and the lines filled in TOP-OF-PAGE are moved when the page is scrolled horizontally.

Spool Lists   

The lists in the list buffer are screen lists. Their content is displayed in the list dynpro after an implicit call of the list processor in an [executable program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexecutable_program_glosry.htm "Glossary Entry") or after an explicit call using LEAVE TO LIST-PROCESSING.

When lists are created, there is also the option of excluding individual pages or all pages of one or more lists from the screen layout and to send them to the SAP spool system instead. This is done using the addition [PRINT ON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapnew-page_print.htm) of the statement [NEW-PAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapnew-page.htm). All these pages together then form the spool list. The addition [TO SAP-SPOOL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsubmit_list_options.htm) of the statement [SUBMIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsubmit.htm) provides another option for creating spool lists.

See also [Spooling Lists](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint.htm).

Characters in Lists   

Any character supported by the current [system code page](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_codepage_glosry.htm "Glossary Entry") can be displayed in a list. The prerequisite here is that a code page or a font is defined in the output medium (GUI, spooler), into which the characters can be converted. Control characters, such as for line breaks or tabs are ignored in strings and cannot be displayed. Non-displayable characters, such as control characters and non-convertible characters, appear as the # character in list output.

When displaying or spooling a list, the content stored in the list buffer is passed to the list Every character represented in the Unicode character representation [UCS-2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenucs2_glosry.htm "Glossary Entry") used by the ABAP programming language usually occupies one place in the list buffer. On the list, however, a character can occupy more than one column, especially Eastern Asian characters. However, since the list only contains the same number of columns as there are positions in the list buffer, this means the list can only display fewer characters than are stored in the list buffer. The list output is shortened accordingly, where the page is displayed according to the [alignment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenalignment_gap_glosry.htm "Glossary Entry"), and is flagged \> or <. On a displayed list, the entire list content can be displayed by choosing System → List → Unicode Display.

For these reasons, it is guaranteed that the horizontal position of the list cursor matches the output column of a displayed or spooled list only in the case of the lower and upper output limits.

Hint

The following list programming rules must be followed to guarantee that lists appear and work as expected:

-   Specifying an adequate output length
-   No overwriting of parts of a field
-   The additions RIGHT-JUSTIFIED or CENTERED are not used for [WRITE TO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwrite_to.htm) if this statement is followed by list output with WRITE.
-   In customer-programmed horizontal scrolling with the statement [SCROLL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapscroll.htm), only the upper or lower limit of data objects displayed should be specified, since the positions in the list buffer and in the list displayed are only certain to match for these field limits.

Example

The program DEMO\_CHARACTERS\_IN\_LISTS shows the current display of all characters that are assigned to the hexadecimal codes 0000 to FFFF in the current code page.

Lists and ABAP Objects   

The list processing statements listed in this section are based on global data and events of the runtime framework and are no longer completely supported in ABAP Objects and when using ABAP Objects.

Classic lists are no longer intended to be used directly in production programs. The use of other suitable output media is recommended instead.

-   For tabular list output, the classes of SAP List Viewer (ALV) are used, for example CL\_SALV\_TABLE.
-   For simple text output, the wrappers of the browser control, such as dynamic documents or wrappers of the textedit control should be used. [Dynpros, Text Output](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_output_abexa.htm) shows an executable example of the latter.
-   For simple console output, XML-based output streams can be used. An example of this is shown by the class CL\_DEMO\_OUTPUT\_STREAM. The program DEMO\_OUTPUT\_STREAM shows potential uses of this class. The class CL\_DEMO\_OUTPUT, which is based on CL\_DEMO\_OUTPUT\_STREAM, is used in programs from the [ABAP Example Library](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_examples.htm).