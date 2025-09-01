  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpro_list.htm) →  [Event Blocks for Lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_lists_interactive.htm) →  [AT list\_event](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_list_event.htm) → 

AT USER-COMMAND

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_user-command_shortref.htm)

Syntax

AT USER-COMMAND.

Effect

This statement defines an event block whose event is raised by the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") if, when a screen is displayed, a function with a self-defined function code is chosen. The function code is available in the system field sy-ucomm when processing starts.

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

Saves list lines in a [text file](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfile_glosry.htm "Glossary Entry") named "abap.lst" in standard character format in the standard directory on the [AS Instance](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapplication_server_glosry.htm "Glossary Entry") [host computer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhost_computer_glosry.htm "Glossary Entry"). If a name is entered using name, this is converted to lowercase letters and used as the file name.

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

This program works with a self-defined GUI status MYLIST. The function associated there with the function code MY\_SELECTION raises the event AT USER-COMMAND when the list is displayed and also creates details lists.

REPORT demo\_at\_user\_command.
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