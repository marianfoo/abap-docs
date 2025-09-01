  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  W

WRITE TO itab - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwrite_to_itab.htm)

Syntax

WRITE dobj TO itab*\[*+off*\]**\[*(len)*\]* INDEX idx
      *\[*int\_format\_options*\]*.

Effect

Obsolete: Writes the content of a data object to the row of the internal table itab with the index idx.

Additions

-   *\[*+off*\]**\[*(len)*\]*
    Writes to the section from position pos and the length len of the table row.
    
-   [format\_options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwrite_to_options.htm)
    Additions as in the statement [WRITE TO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwrite_to_shortref.htm) for variables.