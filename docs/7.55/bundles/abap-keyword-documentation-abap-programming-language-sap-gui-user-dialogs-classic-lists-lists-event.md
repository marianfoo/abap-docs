# ABAP - Keyword Documentation / ABAP - Programming Language / SAP GUI User Dialogs / Classic Lists / Lists - Event Blocks

Included pages: 10


### abenabap_lists_interactive.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) → 

Lists - Event Blocks

List events appear during the creation of a list, and following certain user actions on a displayed list. They used to process lists in the ABAP program. We differentiate between events during list creation, and interactive list events for processing user actions in a displayed list.

The events during list creation,

-   [TOP-OF-PAGE](javascript:call_link\('abaptop-of-page.htm'\))

-   [END-OF-PAGE](javascript:call_link\('abapend-of-page.htm'\))

make it possible to define page headers and footers independently of the actual page length, which is particularly helpful for the output of spool lists on different paper formats.

The events following user actions on displayed lists,

-   [AT LINE-SELECTION](javascript:call_link\('abapat_line-selection.htm'\))

-   [AT USER-COMMAND](javascript:call_link\('abapat_user-command.htm'\))

-   [AT PFnn](javascript:call_link\('abapat_pfnn.htm'\))

, enable you to create details lists.

The following statement can be used to raise a list-event in a program-controlled manner:

-   [SET USER-COMMAND](javascript:call_link\('abapset_user-command.htm'\))

Hints

-   After the execution of each event block for lists, the statement [NEW-LINE](javascript:call_link\('abapnew-line.htm'\)) is executed implicitly as in every [event block](javascript:call_link\('abenevent_blocks.htm'\)).

-   List events can be raised as program-driven events using the statement [SET USER-COMMAND](javascript:call_link\('abapset_user-command.htm'\)), instead of by user action on a displayed list.

Continue
[TOP-OF-PAGE](javascript:call_link\('abaptop-of-page.htm'\))
[END-OF-PAGE](javascript:call_link\('abapend-of-page.htm'\))
[AT list\_event](javascript:call_link\('abapat_list_event.htm'\))
[SET USER-COMMAND](javascript:call_link\('abapset_user-command.htm'\))


### abaptop-of-page.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Event Blocks](javascript:call_link\('abenabap_lists_interactive.htm'\)) → 

TOP-OF-PAGE

[Short Reference](javascript:call_link\('abaptop-of-page_shortref.htm'\))

Syntax

TOP-OF-PAGE *\[*DURING LINE-SELECTION*\]*.

Addition:

[... DURING LINE-SELECTION](#!ABAP_ONE_ADD@1@)

Effect

This statement defines an event block whose event is raised by the [ABAP runtime environment](javascript:call_link\('abenabap_runtime_envir_glosry.htm'\) "Glossary Entry") when a list is created. This occurs when a new page begins (that is, immediately before the first line on a new page is produced). All list output produced in the event block is placed below the standard page header of the list. It is not possible to produce lines than are available on the page within the event block. The statement [NEW-PAGE](javascript:call_link\('abapnew-page.htm'\)) is ignored within this event block.

The entire output written to the list in the event block is part of the [page header](javascript:call_link\('abenpage_header_glosry.htm'\) "Glossary Entry") of the current list page. The top page header cannot be moved when scrolling vertically in a list displayed on the screen.

For each TOP-OF-PAGE event, the placeholders "&1" - "&9" are replaced by the content of the system fields sy-tvar0 - sy-tvar9 in the standard heading and the column headings of the standard page header when a basic list is created. Values can be assigned to these system fields in the program.

Addition

... DURING LINE-SELECTION

Effect

If no addition is specified, an event block is raised for the event TOP-OF-PAGE when a basic list is created. If the addition DURING LINE-SELECTION is specified, an event block is raised for the events in question when details lists are created. System fields like sy-lsind must be used to distinguish between the individual details lists.

Continue
![Example](exa.gif "Example") [Lists - Page Header](javascript:call_link\('abenlist_top_of_page_abexa.htm'\))


### abenlist_top_of_page_abexa.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Event Blocks](javascript:call_link\('abenabap_lists_interactive.htm'\)) →  [TOP-OF-PAGE](javascript:call_link\('abaptop-of-page.htm'\)) → 

Lists - Page Header

The example shows how to define the page header at the TOP-OF-PAGE event.

Source Code

REPORT demo\_list\_top\_of\_page NO STANDARD PAGE HEADING
                             LINE-SIZE 80 LINE-COUNT 7.
DATA: h1(10) TYPE c VALUE '    Number',
      h2(10) TYPE c VALUE '    Square',
      h3(10) TYPE c VALUE '      Cube',
      n1 TYPE i, n2 TYPE i, n3 TYPE i,
      x TYPE i.
TOP-OF-PAGE.
  x = sy-colno + 8.  POSITION x. WRITE h1.
  x = sy-colno + 8.  POSITION x. WRITE h2.
  x = sy-colno + 8.  POSITION x. WRITE h3.
  x = sy-colno + 16. POSITION x. WRITE sy-pagno.
  ULINE.
START-OF-SELECTION.
  DO 10 TIMES.
    n1 = sy-index. n2 = sy-index \*\* 2. n3 = sy-index \*\* 3.
    NEW-LINE.
    WRITE: n1 UNDER h1,
           n2 UNDER h2,
           n3 UNDER h3.
  ENDDO.

Description

This program creates a two-page list. In the user-defined page header, column titles are placed in relative position to each other using the system field sy-colno and the POSITION statement. The actual list output is positioned under the fields of the header line using the addition UNDER of the WRITE statement. The line feeds are made using NEW-LINE.

The different output positions of the individual fields result from the ABAP default of representing character strings as left-aligned and numeric fields as right-aligned. The alignment can be adjusted using the formatting options LEFT-JUSTIFIED, RIGHT-JUSTIFIED, and CENTERED of the WRITE statement (see [WRITE - format\_options](javascript:call_link\('abapwrite_to_options.htm'\))).


### abaptop-of-page.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Event Blocks](javascript:call_link\('abenabap_lists_interactive.htm'\)) → 

TOP-OF-PAGE

[Short Reference](javascript:call_link\('abaptop-of-page_shortref.htm'\))

Syntax

TOP-OF-PAGE *\[*DURING LINE-SELECTION*\]*.

Addition:

[... DURING LINE-SELECTION](#!ABAP_ONE_ADD@1@)

Effect

This statement defines an event block whose event is raised by the [ABAP runtime environment](javascript:call_link\('abenabap_runtime_envir_glosry.htm'\) "Glossary Entry") when a list is created. This occurs when a new page begins (that is, immediately before the first line on a new page is produced). All list output produced in the event block is placed below the standard page header of the list. It is not possible to produce lines than are available on the page within the event block. The statement [NEW-PAGE](javascript:call_link\('abapnew-page.htm'\)) is ignored within this event block.

The entire output written to the list in the event block is part of the [page header](javascript:call_link\('abenpage_header_glosry.htm'\) "Glossary Entry") of the current list page. The top page header cannot be moved when scrolling vertically in a list displayed on the screen.

For each TOP-OF-PAGE event, the placeholders "&1" - "&9" are replaced by the content of the system fields sy-tvar0 - sy-tvar9 in the standard heading and the column headings of the standard page header when a basic list is created. Values can be assigned to these system fields in the program.

Addition

... DURING LINE-SELECTION

Effect

If no addition is specified, an event block is raised for the event TOP-OF-PAGE when a basic list is created. If the addition DURING LINE-SELECTION is specified, an event block is raised for the events in question when details lists are created. System fields like sy-lsind must be used to distinguish between the individual details lists.

Continue
![Example](exa.gif "Example") [Lists - Page Header](javascript:call_link\('abenlist_top_of_page_abexa.htm'\))


### abapend-of-page.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Event Blocks](javascript:call_link\('abenabap_lists_interactive.htm'\)) → 

END-OF-PAGE

[Short Reference](javascript:call_link\('abapend-of-page_shortref.htm'\))

Syntax

END-OF-PAGE.

Effect

This statement defines an event block, whose event is raised by the [ABAP runtime environment](javascript:call_link\('abenabap_runtime_envir_glosry.htm'\) "Glossary Entry") during the creation of a basic list at the following time:

-   If lines were reserved in the addition [LINE-COUNT](javascript:call_link\('abapreport_list_options.htm'\)) of the program-initiating statement for a [page footer](javascript:call_link\('abenpage_footer_glosry.htm'\) "Glossary Entry") that was reached by a write operation on this page. List output made in the event block is placed in this area. Output statements that exceed the reserved area are ignored.

-   If no lines were reserved in the addition [LINE-COUNT](javascript:call_link\('abapreport_list_options.htm'\)) for a [page footer](javascript:call_link\('abenpage_footer_glosry.htm'\) "Glossary Entry") and the end of page was reached by a write operation on this page. List outputs made in the event block have no effect.

Hint

The event END-OF-PAGE is intended for writing list outputs in the page footer and is raised only when the page footer or end of page is reached. Statements such as [NEW-PAGE](javascript:call_link\('abapnew-page.htm'\)) do not raise the event.

Example

This program displays a list of flights and creates a page for each connection with a header line and footer line.

REPORT demo\_page\_header\_footer NO STANDARD PAGE HEADING
                               LINE-COUNT 0(1).
TYPES: BEGIN OF sflight\_tab\_type,
         carrid TYPE sflight-carrid,
         connid TYPE sflight-connid,
         fldate TYPE sflight-fldate,
       END OF sflight\_tab\_type.
PARAMETERS p\_carrid TYPE sflight-carrid.
DATA: sflight\_tab TYPE TABLE OF sflight\_tab\_type,
      sflight\_wa  LIKE LINE  OF sflight\_tab.
DATA lines TYPE i.
TOP-OF-PAGE.
  WRITE: / sflight\_wa-carrid, sflight\_wa-connid.
  ULINE.
END-OF-PAGE.
  ULINE.
START-OF-SELECTION.
  SELECT carrid, connid, fldate
         FROM sflight
         WHERE carrid = @p\_carrid
         ORDER BY carrid, connid
         INTO CORRESPONDING FIELDS OF TABLE @sflight\_tab.
  LOOP AT sflight\_tab INTO sflight\_wa.
    AT NEW connid.
      SELECT COUNT( DISTINCT fldate )
             FROM sflight
             WHERE carrid = @sflight\_wa-carrid AND
                   connid = @sflight\_wa-connid
             INTO @lines.
      lines += 3.
      NEW-PAGE LINE-COUNT lines.
    ENDAT.
    WRITE / sflight\_wa-fldate.
  ENDLOOP.


### abapat_list_event.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Event Blocks](javascript:call_link\('abenabap_lists_interactive.htm'\)) → 

AT list\_event

Syntax

AT [LINE-SELECTION](javascript:call_link\('abapat_line-selection.htm'\))
  *|* [USER-COMMAND](javascript:call_link\('abapat_user-command.htm'\))
  *|* [PFnn](javascript:call_link\('abapat_pfnn.htm'\)).

Effect

Defines event blocks for interactive list processing. The associated events occur if the screen cursor is positioned on a line in a displayed list and the user chooses an appropriate function. Each interactive list event increases the system field sy-lsind by one.

If the cursor is positioned on a line in a list displayed on the screen in an interactive list event, all the values stored using [HIDE](javascript:call_link\('abaphide.htm'\)) and belonging to the line in question are assigned the respective variables and the following system fields are filled with data:

System Field

Meaning

sy-cpage

Page number of the first displayed page of the list from which the event was raised

sy-cucol

Position of the column in the GUI window from which the event was raised (counting starts with 2)

sy-curow

Position of the line in the GUI window from which the event was raised (counting starts with 1)

sy-lilli

Number of the line from which the event was raised

sy-lisel

Content of the line that raised the event (is limited to the first 255 characters)

sy-listi

Index of the list from which the event was raised

sy-lsind

Index of the list level that was created in the event block

sy-staco

Number of the first column displayed in the list from which the event was raised (counting starts with 1)

sy-staro

Number of the first line of the first page displayed of the list from which the event was raised (counting starts with 1)

sy-ucomm

Function code to which the user action that raised the event is assigned

After each list event AT LINE-SELECTION, AT PFnn, and AT USER-COMMAND, the statement [NEW-PAGE PRINT OFF](javascript:call_link\('abapnew-page_print.htm'\)) is executed explicitly.

Hint

The list event [AT PFnn](javascript:call_link\('abapat_pfnn.htm'\)) is obsolete and the other two list events (preferably [AT USER-COMMAND](javascript:call_link\('abapat_user-command.htm'\))) should be used instead.

Continue
[AT LINE-SELECTION](javascript:call_link\('abapat_line-selection.htm'\))
[AT USER-COMMAND](javascript:call_link\('abapat_user-command.htm'\))


### abapat_line-selection.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Event Blocks](javascript:call_link\('abenabap_lists_interactive.htm'\)) →  [AT list\_event](javascript:call_link\('abapat_list_event.htm'\)) → 

AT LINE-SELECTION

[Short Reference](javascript:call_link\('abapat_line-selection_shortref.htm'\))

Syntax

AT LINE-SELECTION.

Effect

This statement defines an event block whose event is raised by the [ABAP runtime environment](javascript:call_link\('abenabap_runtime_envir_glosry.htm'\) "Glossary Entry") when a screen list is displayed. This is provided the screen cursor is a list line and a function is selected using the function code PICK. By defining this event block, the [standard list status](javascript:call_link\('abenstandard_list_status_glosry.htm'\) "Glossary Entry") is enhanced automatically in such a way that the function code F2 and, with it, the double-click mouse functionality is associated with the function code PICK.

Hint

If the function key F2 is associated with a function code other than PICK, each double click raises its event, usually AT USER-COMMAND, and not AT LINE-SELECTION.

Example

If the following section of an executable program is executed with the standard list status, selecting a line with the left mouse key raises the event AT LINE-SELECTION and creates details lists.

START-OF-SELECTION.
  WRITE 'Click me!' COLOR = 5 HOTSPOT.
AT LINE-SELECTION.
  WRITE: / 'You clicked list', sy-listi,
         / 'You are on list',  sy-lsind.
  IF sy-lsind < 20.
    SKIP.
    WRITE: 'More ...' COLOR = 5 HOTSPOT.
  ENDIF.


### abapat_user-command.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Event Blocks](javascript:call_link\('abenabap_lists_interactive.htm'\)) →  [AT list\_event](javascript:call_link\('abapat_list_event.htm'\)) → 

AT USER-COMMAND

[Short Reference](javascript:call_link\('abapat_user-command_shortref.htm'\))

Syntax

AT USER-COMMAND.

Effect

This statement defines an event block whose event is raised by the [ABAP runtime environment](javascript:call_link\('abenabap_runtime_envir_glosry.htm'\) "Glossary Entry") if, when a screen list is displayed, a function with a self-defined function code is chosen. The function code is available in the system field sy-ucomm when processing starts.

Self-defined function codes are all those that include character combinations, except for the following:

-   The function codes "PICK" and "PFnn" ("nn" stands for 01 to 24) do not raise the event AT USER-COMMAND, but the events AT LINE-SELECTION and AT PFnn instead.

-   All function codes that start with the character "%" are interpreted as system functions and do not raise the event AT USER-COMMAND. The system functions for lists are listed in the following table 1.

-   The function codes in the following table 2, likewise, do not raise the event AT USER-COMMAND, but are handled by the list processor.
    

Table 1

Function Code

Function

%CTX

Calls a context menu

%EX

Exit

%PC

Save to file

%PRI

Spool

%SC

Search for ...

%SC+

Find next

%SL

Save in Office

%ST

Save in report tree

Table 2

Function Code

Function

BACK

Back

P-

Scroll to previous page

P--

Scroll to first page

P+

Scroll to next page

P++

Scroll to last page

PFILE name

Saves list lines in a [text file](javascript:call_link\('abenfile_glosry.htm'\) "Glossary Entry") named "abap.lst" in standard character format in the standard directory on the [AS instance](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry") [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry"). If a name is entered using name, this is converted to lowercase letters and used as the file name.

PL-

Scroll to first line of the page

PL-n

Scroll back n lines

PL+

Scroll to last line of the page

PL+n

Scroll forward n lines

PNOP

None

PP-

Scroll back one page

PP-n

Scroll back n pages

PP+

Scroll forward one page

PP+n

Scroll forward n pages

PPn

Scroll to beginning of page n

PRI, PRINT

Spool

PS--

Scroll to first column

PS++

Scroll to last column

PS-

Scroll one column to the left

PS-n

Scroll n columns to the left

PS+

Scroll one column to the right

PS+n

Scroll n columns to the right

PSn

Scroll to column n

PZn

Scroll to line n

RW

Cancel

Example

The following body of an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") works with a self-defined GUI status MYLIST. The function associated there with the function code MY\_SELECTION raises the event AT USER-COMMAND when the list is displayed and also creates details lists.

START-OF-SELECTION.
  SET PF-STATUS 'MYLIST'.
  WRITE 'List line'.
AT USER-COMMAND.
  IF sy-lsind = 20.
    SET PF-STATUS 'MYLIST' EXCLUDING 'MY\_SELECTION'.
  ENDIF.
  CASE sy-ucomm.
    WHEN 'MY\_SELECTION'.
      WRITE: / 'You worked on list', sy-listi,
             / 'You are on list', sy-lsind.
    ...
  ENDCASE.


### abapat_list_event.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Event Blocks](javascript:call_link\('abenabap_lists_interactive.htm'\)) → 

AT list\_event

Syntax

AT [LINE-SELECTION](javascript:call_link\('abapat_line-selection.htm'\))
  *|* [USER-COMMAND](javascript:call_link\('abapat_user-command.htm'\))
  *|* [PFnn](javascript:call_link\('abapat_pfnn.htm'\)).

Effect

Defines event blocks for interactive list processing. The associated events occur if the screen cursor is positioned on a line in a displayed list and the user chooses an appropriate function. Each interactive list event increases the system field sy-lsind by one.

If the cursor is positioned on a line in a list displayed on the screen in an interactive list event, all the values stored using [HIDE](javascript:call_link\('abaphide.htm'\)) and belonging to the line in question are assigned the respective variables and the following system fields are filled with data:

System Field

Meaning

sy-cpage

Page number of the first displayed page of the list from which the event was raised

sy-cucol

Position of the column in the GUI window from which the event was raised (counting starts with 2)

sy-curow

Position of the line in the GUI window from which the event was raised (counting starts with 1)

sy-lilli

Number of the line from which the event was raised

sy-lisel

Content of the line that raised the event (is limited to the first 255 characters)

sy-listi

Index of the list from which the event was raised

sy-lsind

Index of the list level that was created in the event block

sy-staco

Number of the first column displayed in the list from which the event was raised (counting starts with 1)

sy-staro

Number of the first line of the first page displayed of the list from which the event was raised (counting starts with 1)

sy-ucomm

Function code to which the user action that raised the event is assigned

After each list event AT LINE-SELECTION, AT PFnn, and AT USER-COMMAND, the statement [NEW-PAGE PRINT OFF](javascript:call_link\('abapnew-page_print.htm'\)) is executed explicitly.

Hint

The list event [AT PFnn](javascript:call_link\('abapat_pfnn.htm'\)) is obsolete and the other two list events (preferably [AT USER-COMMAND](javascript:call_link\('abapat_user-command.htm'\))) should be used instead.

Continue
[AT LINE-SELECTION](javascript:call_link\('abapat_line-selection.htm'\))
[AT USER-COMMAND](javascript:call_link\('abapat_user-command.htm'\))


### abapset_user-command.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Event Blocks](javascript:call_link\('abenabap_lists_interactive.htm'\)) → 

SET USER-COMMAND

[Short Reference](javascript:call_link\('abapset_user-command_shortref.htm'\))

Syntax

SET USER-COMMAND fcode.

Effect

Raises a list event with a function code specified in fcode. fcode must be a [character-like data object](javascript:call_link\('abencharlike_data_object_glosry.htm'\) "Glossary Entry"). This statement can be used when creating a list. After completion, but before display of the current list, the runtime environment responds as if a user action were performed in the displayed list using the function code specified in fcode.

The assignment of list events to function codes corresponds to the description under [AT USER-COMMAND](javascript:call_link\('abapat_user-command.htm'\)):

-   The predefined function codes of the tables specified under AT USER-COMMAND are caught by the runtime environment

-   The function codes "PICK" and "PFnn" raise the events [AT LINE-SELECTION](javascript:call_link\('abapat_line-selection.htm'\)) or [AT PFnn](javascript:call_link\('abapat_pfnn.htm'\))

-   all other functions raise the event [AT USER-COMMAND](javascript:call_link\('abapat_user-command.htm'\))

If the corresponding event block is implemented, the value of sy-lsind is increased by one and the event block is executed.

If multiple SET USER-COMMAND statements are used when creating a list, all are ignored except the last one.

Hints

-   The function code "PICK" only raises an event if the cursor is positioned on a list line.

-   If a function code is assigned to the Return key in the current [GUI status](javascript:call_link\('abengui_status_glosry.htm'\) "Glossary Entry"), this function code is used instead of the one specified in fcode.
    

Example

Creates (program-driven) one basic list and two details lists and displays a search dialog box in the second details list using the predefined function code "%SC". The statement SET CURSOR is used to position the cursor in a list line in the event block AT LINE-SELECTION to enable the function code "PICK".

START-OF-SELECTION.
  SET USER-COMMAND 'MYCOMM'.
  WRITE 'Basic List'.
AT USER-COMMAND.
  CASE sy-ucomm.
    WHEN 'MYCOMM'.
      WRITE 'Details List from USER-COMMAND,'.
      WRITE: 'SY-LSIND', sy-lsind.
      SET CURSOR LINE 1.
      SET USER-COMMAND 'PICK'.
  ENDCASE.
AT LINE-SELECTION.
  WRITE 'Details List from LINE-SELECTION,'.
  WRITE: 'SY-LSIND', sy-lsind.
  SET USER-COMMAND '%SC'.
