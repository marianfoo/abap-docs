  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  G

GENERATE SUBROUTINE POOL - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgenerate_subroutine_pool.htm)

Syntax

GENERATE SUBROUTINE POOL itab NAME prog
  *\[*MESSAGE mess*\]*
  *\[*INCLUDE incl*\]*
  *\[*LINE lin*\]*
  *\[*WORD wrd*\]*
  *\[*OFFSET off*\]*
  *\[*MESSAGE-ID mid*\]*
  *\[*SHORTDUMP-ID sid*\]*.

Effect

Generates a temporary [subroutine pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensubroutine_pool_glosry.htm "Glossary Entry") from the content of an internal table itab. Its name is returned in prog.

Additions

-   [MESSAGE mess](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgenerate_subr_error_handling.htm)
    If there is a syntax error, returns the first error message in mess.
-   [INCLUDE incl](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgenerate_subr_error_handling.htm)
    If there is a syntax error, returns the name of the include program in which the error occurred in incl.
-   [LINE lin](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgenerate_subr_error_handling.htm)
    If there is a syntax error, returns the first line with an error in lin.
-   [WORD wrd](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgenerate_subr_error_handling.htm)
    If there is a syntax error, returns the first word with an error in wrd.
-   [OFFSET off](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgenerate_subr_error_handling.htm)
    If there is a syntax error, returns the offset of the first error in the line in off.
-   [MESSAGE-ID mid](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgenerate_subr_error_handling.htm)
    If there is a syntax error, returns the key of the first error message from the table TRMSG in mid.
-   [SHORTDUMP-ID sid](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgenerate_subr_error_handling.htm)
    If there is a generation error, returns the ID of the error from the table SNAPT in sid.