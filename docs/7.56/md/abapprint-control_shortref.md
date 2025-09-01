  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  P

PRINT-CONTROL - Short Reference

[Reference](javascript:call_link\('abapprint-control.htm'\))

Syntax

PRINT-CONTROL   { INDEX-LINE index\_line }
              *|* *{* formats*|**{*FUNCTION code*}*
                  *\[*LINE line*\]* *\[*POSITION col*\]* *}*.

Effect

Creates index entries for list archiving or sets a print format (obsolete).

Additions

-   [INDEX-LINE index\_line](javascript:call_link\('abapprint-control.htm'\))
    Inserts the content of index\_line as an index line into the current spool list.
-   Obsolete: [formats](javascript:call_link\('abapprint-control_obsolete.htm'\))
    Predefined print formats for print control codes.
-   Obsolete: [FUNCTION code](javascript:call_link\('abapprint-control_obsolete.htm'\))
    Specifies print control codes directly in code.
-   Obsolete: [*\[*LINE line*\]* *\[*POSITION col*\]*](javascript:call_link\('abapprint-control_obsolete.htm'\))
    Sets the print format starting from the list line specified in line and position specified in col.