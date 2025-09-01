# ABAP - Keyword Documentation / ABAP - Programming Language / SAP GUI User Dialogs / Classic Lists / Lists - Spool / Lists - Spool Control

Included pages: 3


### abenprint_control.htm

---
title: "Lists - Spool Control"
description: |
  Configuring the Upper and Left Margins The statement SET MARGIN(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_margin.htm) can be used to define the upper and left margins of a spool list. Archiving Information in Spool Lists When spooling is active, the statement PRINT-CONTRO
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_control.htm"
abapFile: "abenprint_control.htm"
keywords: ["do", "if", "class", "abenprint", "control"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpro_list.htm) →  [Lists - Spool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Lists - Spool Control, ABENPRINT_CONTROL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

Lists - Spool Control

Configuring the Upper and Left Margins   

The statement [SET MARGIN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_margin.htm) can be used to define the upper and left margins of a spool list.

Archiving Information in Spool Lists   

When spooling is active, the statement [PRINT-CONTROL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprint-control.htm) can be used to write formatting information for optical archiving to the spool system.

Obsolete Formatting of Spool Lists   

When spooling is active, an [obsolete variant](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprint-control_obsolete.htm) of the statement PRINT-CONTROL can be used to write control statements for output devices (printers) to the spool system.

Continue
[SET MARGIN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_margin.htm)
[PRINT-CONTROL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprint-control.htm)


### abapset_margin.htm

---
title: "SET MARGIN"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_margin_shortref.htm) Syntax SET MARGIN macol marow. Effect This statement defines the left margin of a spool list as the columns specified in macol, and the upper margin as the rows specified in marow, and s
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_margin.htm"
abapFile: "abapset_margin.htm"
keywords: ["select", "insert", "do", "while", "if", "try", "class", "data", "abapset", "margin"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpro_list.htm) →  [Lists - Spool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint.htm) →  [Lists - Spool Control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_control.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SET MARGIN, ABAPSET_MARGIN, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion f
or improvement:)

SET MARGIN

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_margin_shortref.htm)

Syntax

SET MARGIN macol *\[*marow*\]*.

Effect

This statement defines the left margin of a spool list as the columns specified in macol, and the upper margin as the rows specified in marow, and sets the system fields sy-macol and sy-marow to these values. macol and marow expect data objects with the type i, with values within the current page width and page length. If macol or marow contain invalid values, the associated operand is ignored.

The set values apply to the current page and all subsequent pages until the next SET MARGIN statement. If more than one SET MARGIN statement is specified on a page, the last one applies.

SET MARGIN is ignored when screen lists are displayed. The set margins are only inserted in the list as blanks or empty lines if a list page is sent to the SAP spool system. This applies to spool lists created using [NEW-PAGE PRINT ON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapnew-page_print.htm), [SUBMIT TO SAP-SPOOL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsubmit_list_options.htm), and by the selection of Execute and Print on the [selection screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_glosry.htm "Glossary Entry"). SET MARGIN also applies if a screen list is spooled while it is being displayed, when Print (function code PRI) is selected.

Hint

For printers with an active list driver, margins can be defined in millimeters in the spool dialog. When pages are sent from the spool system to the printer, the pages, including the margins set using SET MARGIN, are positioned within these margins.


### abapprint-control.htm

---
title: "PRINT-CONTROL"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprint-control_shortref.htm) Syntax PRINT-CONTROL INDEX-LINE index_line. Effect In spool lists, this statement creates index entries for optical archiving using ArchiveLink(https://help.sap.com/doc/abapdocu_757_index_
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprint-control.htm"
abapFile: "abapprint-control.htm"
keywords: ["select", "insert", "do", "if", "try", "class", "data", "abapprint", "control"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpro_list.htm) →  [Lists - Spool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint.htm) →  [Lists - Spool Control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_control.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: PRINT-CONTROL, ABAPPRINT-CONTROL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion for improvement:)

PRINT-CONTROL

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprint-control_shortref.htm)

Syntax

PRINT-CONTROL INDEX-LINE index\_line.

Effect

In spool lists, this statement creates index entries for optical archiving using [ArchiveLink](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarchivelink_glosry.htm "Glossary Entry"). This applies only to spool lists created using [NEW-PAGE PRINT ON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapnew-page_print.htm), [SUBMIT TO SAP-SPOOL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsubmit_list_options.htm), and when selecting Execute and Print on the [selection screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_glosry.htm "Glossary Entry"). It does not work for screen lists spooled during display by selecting Print (function code PRI).

This statement inserts the content of the data object index\_line into the current spool list as an index line. index\_line must be a flat character-like data object. If the [list cursor](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlist_cursor_glosry.htm "Glossary Entry") of an output statement has been set in the current list line, the index line is inserted after the end of the line. Index lines can be used for the following purposes:

-   As DAIN lines whose structure is defined in DKEY lines. Here, they improve the performance of searches in archived spool lists.
-   As DARC lines, they enable hypertext links to other stored objects.

An index line is sent to the spool system as a part of the spool list and is displayed there, although not included in the print output. When a list is archived using [ArchiveLink](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarchivelink_glosry.htm "Glossary Entry"), the spool system divides it into a data file and a description file. The data file contains the actual spool lists, and the description file contains the index lines.

Hint

To enable the associated ArchiveLink search function to be used when an archived spool list is displayed or for the links to work, the index lines must contain certain information that must follow a fixed naming convention and be described in the ArchiveLink documentation.

Example

Inserting index lines in a list of square numbers. After every hundredth line, index lines for archiving are created (DAIN lines) using the statement PRINT-CONTROL. The structure of the DAIN lines is defined at the start of the list in two additional index lines (DKEY lines). If the user selects Execute and Print on the [selection screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_glosry.htm "Glossary Entry") and archives the list in the spool dialog, the archived list can be searched for the indexes. For more information, see the ArchiveLink documentation.

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
