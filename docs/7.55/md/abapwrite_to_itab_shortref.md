  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  W

WRITE TO itab - Quick reference

[Reference](javascript:call_link\('abapwrite_to_itab.htm'\))

Syntax

WRITE dobj TO itab*\[*+off*\]**\[*(len)*\]* INDEX idx
      *\[*int\_format\_options*\]*.

Effect

Obsolete: Writes the content of a data object to the line of the internal table itab with the index idx.

Additions

-   *\[*+off*\]**\[*(len)*\]*
    Writes to the section from position pos and the length len of the table line.
    

-   [format\_options](javascript:call_link\('abapwrite_to_options.htm'\))
    Additions as in the statement [WRITE TO](javascript:call_link\('abapwrite_to_shortref.htm'\)) for variables.