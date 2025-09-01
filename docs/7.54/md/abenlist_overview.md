  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) → 

Lists - Overview

-   [Lists as Screens](#@@ITOC@@ABENLIST_OVERVIEW_1)

-   [Lists in ABAP Programs](#@@ITOC@@ABENLIST_OVERVIEW_2)

-   [Basic List](#@@ITOC@@ABENLIST_OVERVIEW_3)

-   [Details Lists](#@@ITOC@@ABENLIST_OVERVIEW_4)

-   [Structure of a List](#@@ITOC@@ABENLIST_OVERVIEW_5)

-   [Spool Lists](#@@ITOC@@ABENLIST_OVERVIEW_6)

-   [Characters in Lists](#@@ITOC@@ABENLIST_OVERVIEW_7)

-   [Lists and ABAP Objects](#@@ITOC@@ABENLIST_OVERVIEW_8)

Lists as Screens

By default, classic lists (or lists for short) are [screens](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") that contain text output defined using ABAP statements instead of screen elements in their display area. Lists are displayed as part of a special [list dynpro](javascript:call_link\('abenlist_dynpro_glosry.htm'\) "Glossary Entry"), which is a component of the list processor system program.

Lists in ABAP Programs

An ABAP program can process multiple lists, which are stored in one or more [list buffers](javascript:call_link\('abenlist_buffer_glosry.htm'\) "Glossary Entry"). Each time a [dynpro sequence](javascript:call_link\('abendynpro_sequence_glosry.htm'\) "Glossary Entry") is called, a new list buffer is opened and assigned to this dynpro sequence. A single list buffer can contain up to 21 lists, a basic list and 20 detail lists. A list index is assigned to each list, and this index organizes the lists in the list buffer in hierarchical list levels. The first list of a list buffer is the basic list with list index 0. All other lists, whose list indexes are increased continuously starting at 1, are details lists.

The output statements of an ABAP program write to the current list, whose list index is determined by the system field sy-lsind. The current list after the call of a dynpro sequence is the basic list. As long as the basic list is not displayed, no other list levels can be created.

Basic List

The basic list is displayed either implicitly during the processing of an executable program (see [SUBMIT](javascript:call_link\('abapsubmit.htm'\))) or explicitly using the statement [LEAVE TO LIST-PROCESSING](javascript:call_link\('abapleave_to_list-processing.htm'\)). In both cases, the list processor is called, which then sends the list to the list dynpro. Displaying this list closes it in the list buffer. It can no longer be written to, but it can be read or modified.

Details Lists

Every user action on a displayed list that raises a list event for which an [event block](javascript:call_link\('abenevent_block_glosry.htm'\) "Glossary Entry") is defined in the ABAP program, creates a new details list. The list index of this details list is always one more than the list index of the list on which the event was raised. This index is contained in the system field sy-listi. The output statements of the event block write to the current details list. If the event block is finished normally, the details list is displayed automatically in the list dynpro.

User actions on displayed lists can cause a stack of up to 20 details lists to be created in the list buffer. The list with the highest list index (sy-lsind) is always the current list of the ABAP program, while the list with the list index one below the highest (sy-listi) is displayed on the screen. In certain list processing statements, the list index can be used to access all lists within the stack for reading or changing.

The details list stack in a list buffer can be reduced in two ways:

1.  A user action on a displayed details list is linked to function code "BACK". This function code causes the previous list to be displayed and reduces the value of sy-lsind by 1. In the basic list, "BACK" causes the current dynpro sequence to be exited.
2.  Within an event block for a list event, a value is assigned to the system field sy-lsind. If the value of sy-lsind after the event block is closed is less than the list index of the current list and greater than or equal to 0, the current list replaces the list of this list level and all lists whose list index is greater than the value of sy-lsind are deleted from the list buffer. Other values of sy-lsind are reset to the index of the current list after the event block is closed.

Structure of a List

A list consists of list lines with a fixed width of up to 1023 characters. The line width of the current list is stored in the system field sy-linsz. The number of lines in a list is limited only by the memory resources of the system.

A list is divided into pages. Every list starts on page 1. The current page of the current list is stored in the system field sy-pagno. The output position on the current page in the list buffer is determined by the list cursor, which is provided in the system fields sy-colno (column) and sy-linno (line). A page can contain a maximum of 60000 lines. The number of lines per page is stored for the current list in the system field sy-linct. The value 0 represents the maximum number of lines per page.

On every page of a list, lines can be used for a page header and a page footer. The lines of the page header of the basic list are by default filled with a standard page header from the text elements of the ABAP program. The standard page header consists of a standard title and can contain column headings. The standard title is fixed so that it does not disappear when the page is scrolled vertically on the screen.

In the list event [TOP-OF-PAGE](javascript:call_link\('abaptop-of-page.htm'\)), the page header can be filled with additional lines. The page footer can only be filled only in the list event [END-OF-PAGE](javascript:call_link\('abapend-of-page.htm'\)). The entire page header of the list displayed on top is fixed so that it does not move when the page is scrolled vertically. The column headings of the standard page header and the lines filled in TOP-OF-PAGE are moved when the page is scrolled horizontally.

Spool Lists

The lists in the list buffer are screen lists. Their content is displayed in the list dynpro after an implicit call of the list processor in an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") or after an explicit call using LEAVE TO LIST-PROCESSING.

When lists are created, there is also the option of excluding individual pages or all pages of one or more lists from the screen display and to send them to the SAP spool system instead. This is done using the addition [PRINT ON](javascript:call_link\('abapnew-page_print.htm'\)) of the statement [NEW-PAGE](javascript:call_link\('abapnew-page.htm'\)). All these pages together then form the spool list. The addition [TO SAP-SPOOL](javascript:call_link\('abapsubmit_list_options.htm'\)) of the statement [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) provides another option for creating spool lists.

See also [Spooling Lists](javascript:call_link\('abenprint.htm'\)).

Characters in Lists

Any character supported by the current [system code page](javascript:call_link\('abensystem_codepage_glosry.htm'\) "Glossary Entry") can be displayed in a list. The prerequisite here is that a code page or a font is defined in the output medium (GUI, printer), into which the characters can be converted. Control characters for line breaks or tabs are ignored in strings and cannot be displayed. Non-displayable characters, such as control characters and non-convertible characters, appear as the # character in list output.

When displaying or spooling a list, the content stored in the list buffer is passed to the list Every character represented in the Unicode character representation [UCS-2](javascript:call_link\('abenucs2_glosry.htm'\) "Glossary Entry") used by the ABAP programming language usually occupies one place in the list buffer. On the list, however, a character can occupy more than one column (especially Eastern Asian characters). However, since the list only contains the same number of columns as there are places in the list buffer, this means the list can only display fewer characters than are saved in the list buffer. The list output is shortened accordingly (the page is displayed according to the [alignment](javascript:call_link\('abenalignment_gap_glosry.htm'\) "Glossary Entry")) and is flagged (\> or <). On a displayed list, the entire list content can be displayed by choosing System → List → Unicode Display.

For these reasons, the horizontal position of the list cursor definitely matches the output column of a displayed or spooled list only in the case of the lower and upper output limits.

Note

The following list programming rules must be followed to guarantee that lists appear and work as expected:

-   Specify an adequate output length

-   Do not overwrite parts of a field

-   Do not use the additions RIGHT-JUSTIFIED or CENTERED for [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)) if this statement is followed by list output with WRITE.

-   In customer-programmed horizontal scrolling with the statement [SCROLL](javascript:call_link\('abapscroll.htm'\)), only the upper or lower limit of data objects displayed should be specified, since the positions in the list buffer and in the list displayed are only certain to match for these field limits.

Example

The program DEMO\_CHARACTERS\_IN\_LISTS shows the current display of all characters that are assigned to the hexadecimal codes "0000" to "FFFF" in the current code page.

Lists and ABAP Objects

The list processing statements covered in this section are based on global data and events of the runtime environment and are no longer completely supported in ABAP Objects and when using ABAP Objects.

Classic lists are no longer intended to be used directly in production programs. The use of other suitable output media is recommended instead.

-   For table list output, the classes of SAP List Viewer (ALV), such as CL\_SALV\_TABLE, should be used.

-   For simple text output, the wrappers of the browser control, such as dynamic documents or wrappers of the textedit control should be used. [Dynpros, Text Output](javascript:call_link\('abentext_output_abexa.htm'\)) shows an executable example of the latter.

-   For simple console output, XML-based output streams can be used. An example of this is shown by the class CL\_DEMO\_OUTPUT\_STREAM. The program DEMO\_OUTPUT\_STREAM shows potential uses of this class. The class CL\_DEMO\_OUTPUT, which is based on CL\_DEMO\_OUTPUT\_STREAM, is used in programs from the [ABAP Example Library](javascript:call_link\('abenabap_examples.htm'\)).