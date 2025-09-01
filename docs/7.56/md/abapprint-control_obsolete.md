  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengui_obsolete.htm) →  [Obsolete Statements in List Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlists_obsolete.htm) →  [Obsolete Spooling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprinting_obsolete.htm) → 

PRINT-CONTROL, formats

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapprint-control_shortref.htm)

Obsolete Syntax

PRINT-CONTROL formats*|**{*FUNCTION code*}*
              *\[*LINE line*\]* *\[*POSITION col*\]*.

Effect

This obsolete variant of the statement [PRINT-CONTROL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapprint-control.htm) formats areas of spool lists. This applies only to spool lists created using [NEW-PAGE PRINT ON](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapnew-page_print.htm), [SUBMIT TO SAP-SPOOL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsubmit_list_options.htm), and when selecting Execute and Print on the [selection screen](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselection_screen_glosry.htm "Glossary Entry"). It does not work for screen lists spooled from the display by selecting Print (function code "PRI").

This statement sets a print format starting from the line specified in line and the position specified in col for all subsequent output statements of the current page. The value in col refers to the position within the list buffer. If the additions LINE or POSITION are not specified, the current position of the [list cursor](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlist_cursor_glosry.htm "Glossary Entry") (sy-linno, sy-colno) is used. line and col expect data objects of type i whose values are within the current page width or page length. If line or col contain invalid values, the statement is ignored.

The possible print formats formats are listed in the table below. The runtime framework converts these entries into printer-independent codes called print control. When a list is actually printed, the print control codes are translated into printer-specific control characters.

formats

Print Control

Meaning

CPI cpi

CIcpi

Characters per inch

LPI lpi

LIlpi

Lines per inch

COLOR BLACK

CO001

Color black

COLOR RED

CO002

Color red

COLOR BLUE

CO003

Color blue

COLOR GREEN

CO004

Color green

COLOR YELLOW

CO005

Color yellow

COLOR PINK

CO006

Color pink

FONT font

FOfont

Font

LEFT MARGIN left

LMleft

Space from the left margin

SIZE siz

SIsiz

Font size

The conversion to device-specific control characters takes place using the database tables TSP03 and T022D. If a particular option for a particular printer type (according to table TSP03) is not supported in the table T022D (no entry), this option is ignored during printing. For more information, see the documentation for the tables TSP03 and T022D.

There are more print control codes than print formats formats than can be specified in the statement PRINT-CONTROL. All print control codes can also be specified directly in code using the addition FUNCTION. code must be a [flat](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenflat_glosry.htm "Glossary Entry") character-like data object that contains a valid print control code. Invalid content is ignored. A list of valid print control codes and their assignment to printers is available in spool administration (transaction SPAD).

Hints

-   This variant of the statement PRINT-CONTROL for print formats is obsolete and is ignored in some cases. Instead the various different options available in forms should be used to format documents.
-   The statement PRINT-CONTROL should only be used for print formats that cannot also be set using the formatting options of the statements [WRITE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwrite-.htm) and [FORMAT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapformat.htm), or in the spool dialog.
-   The statement PRINT-CONTROL must be executed for every page to be formatted. If the additions LINE and POSITION are used, the source code position of the statement PRINT-CONTROL in relation to the output statements is irrelevant.
-   The print control codes are written to the spool list line at the specified position. A line is limited internally to 4092 characters. If an overflow occurs as a result of too many print control codes, surplus output text lines and print control codes are cut off without warning.