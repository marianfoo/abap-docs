  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Spool](javascript:call_link\('abenprint.htm'\)) →  [Lists - Spool Control](javascript:call_link\('abenprint_control.htm'\)) → 

PRINT-CONTROL

[Short Reference](javascript:call_link\('abapprint-control_shortref.htm'\))

Syntax

PRINT-CONTROL INDEX-LINE index\_line.

Effect

In spool lists, this statement creates index entries for optical archiving using [ArchiveLink](javascript:call_link\('abenarchivelink_glosry.htm'\) "Glossary Entry"). This applies only to spool lists created using [NEW-PAGE PRINT ON](javascript:call_link\('abapnew-page_print.htm'\)), [SUBMIT TO SAP-SPOOL](javascript:call_link\('abapsubmit_list_options.htm'\)), and when selecting Execute and Print on the [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry"). It does not work for screen lists spooled during display by selecting Print (function code "PRI").

This statement inserts the content of the data object index\_line into the current spool list as an index line. index\_line must be a flat character-like data object. If the [list cursor](javascript:call_link\('abenlist_cursor_glosry.htm'\) "Glossary Entry") of an output statement has been set in the current list line, the index line is inserted after the end of the line. Index lines can be used for the following purposes:

-   As DAIN lines whose structure is defined in DKEY lines. Here, they improve the performance of searches in archived spool lists.
-   As DARC lines, they enable hypertext links to other stored objects.

An index line is sent to the spool system as a part of the spool list and is displayed there, although not included in the print output. When a list is archived using [ArchiveLink](javascript:call_link\('abenarchivelink_glosry.htm'\) "Glossary Entry"), the spool system divides it into a data file and a description file. The data file contains the actual spool lists, and the description file contains the index lines.

Hint

To enable the associated ArchiveLink search function to be used when an archived spool list is displayed or for the links to work, the index lines must contain certain information that must follow a fixed naming convention and be described in the ArchiveLink documentation.

Example

Inserting index lines in a list of square numbers. After every hundredth line, index lines for archiving are created (DAIN lines) using the statement PRINT-CONTROL. The structure of the DAIN lines is defined at the start of the list in two additional index lines (DKEY lines). If the user selects Execute and Print on the [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") and archives the list in the spool dialog, the archived list can be searched for the indexes. For more information, see the ArchiveLink documentation.

PARAMETERS number TYPE i.
DATA: index  TYPE i,
      square TYPE decfloat16,
      numb   TYPE i,
      num    TYPE c LENGTH 4,
      dkey   TYPE c LENGTH 100,
      dain   TYPE c LENGTH 100.
dkey ='DKEYIndex'.
dkey+44 = '0'.
dkey+47 = '3'.
PRINT-CONTROL INDEX-LINE dkey.
CLEAR dkey.
dkey ='DKEYNumber'.
dkey+44 = '3'.
dkey+47 = '4'.
PRINT-CONTROL INDEX-LINE dkey.
index = 0.
DO number TIMES.
  index += 1.
  IF index = 100.
    numb = sy-index / 100.
    WRITE numb TO num LEFT-JUSTIFIED.
    dain = 'DAIN' && 'IDX' && num.
    PRINT-CONTROL INDEX-LINE dain.
    index = 0.
  ENDIF.
  square = sy-index \*\* 2.
  WRITE: / sy-index, square STYLE cl\_abap\_math=>scientific.
ENDDO.