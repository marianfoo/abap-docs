  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  P

PROGRAM - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapprogram.htm)

Syntax

PROGRAM prog *\[*NO STANDARD PAGE HEADING*\]*
             *\[*LINE-SIZE width*\]*
             *\[*LINE-COUNT page\_lines*\[*(footer\_lines)*\]**\]*
             *\[*MESSAGE-ID mid*\]*
             *\[*REDUCED FUNCTIONALITY*\]*.

Effect

Initiates a [module pool](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmodul_pool_glosry.htm "Glossary Entry") or a [subroutine pool](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensubroutine_pool_glosry.htm "Glossary Entry") prog.

Additions

-   NO STANDARD PAGE HEADING, LINE-SIZE, LINE-COUNT, MESSAGE-ID
    See [REPORT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreport_shortref.htm).
    
-   [REDUCED FUNCTIONALITY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapprogram.htm)
    Minimizes the components loaded when calling a subroutine pool.