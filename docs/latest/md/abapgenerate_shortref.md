  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  G

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20GENERATE%20SUBROUTINE%20POOL%2C%20ABAPGENERATE_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

GENERATE SUBROUTINE POOL - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapgenerate_subroutine_pool.htm)

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

Generates a temporary [subroutine pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensubroutine_pool_glosry.htm "Glossary Entry") from the content of an internal table itab. Its name is returned in prog.

Additions   

-   [MESSAGE mess](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapgenerate_subr_error_handling.htm)
    If there is a syntax error, returns the first error message in mess.
-   [INCLUDE incl](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapgenerate_subr_error_handling.htm)
    If there is a syntax error, returns the name of the include program in which the error occurred in incl.
-   [LINE lin](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapgenerate_subr_error_handling.htm)
    If there is a syntax error, returns the first line with an error in lin.
-   [WORD wrd](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapgenerate_subr_error_handling.htm)
    If there is a syntax error, returns the first word with an error in wrd.
-   [OFFSET off](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapgenerate_subr_error_handling.htm)
    If there is a syntax error, returns the offset of the first error in the line in off.
-   [MESSAGE-ID mid](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapgenerate_subr_error_handling.htm)
    If there is a syntax error, returns the key of the first error message from the table TRMSG in mid.
-   [SHORTDUMP-ID sid](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapgenerate_subr_error_handling.htm)
    If there is a generation error, returns the ID of the error from the table SNAPT in sid.