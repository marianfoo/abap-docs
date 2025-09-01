  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  G

GENERATE SUBROUTINE POOL - Quick reference

[Reference](javascript:call_link\('abapgenerate_subroutine_pool.htm'\))

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

Generates a temporary [subroutine pool](javascript:call_link\('abensubroutine_pool_glosry.htm'\) "Glossary Entry") from the content of an internal table itab. Its name is returned in prog.

Additions

-   [MESSAGE mess](javascript:call_link\('abapgenerate_subr_error_handling.htm'\))
    If there is a syntax error, returns the first error message in mess.
    
-   [INCLUDE incl](javascript:call_link\('abapgenerate_subr_error_handling.htm'\))
    If there is a syntax error, returns the name of the include program in which the error occurred in incl.
    
-   [LINE lin](javascript:call_link\('abapgenerate_subr_error_handling.htm'\))
    If there is a syntax error, returns the first line with an error in lin.
    
-   [WORD wrd](javascript:call_link\('abapgenerate_subr_error_handling.htm'\))
    If there is a syntax error, returns the first word with an error in wrd.
    
-   [OFFSET off](javascript:call_link\('abapgenerate_subr_error_handling.htm'\))
    If there is a syntax error, returns the offset of the first error in the line in off.
    
-   [MESSAGE-ID mid](javascript:call_link\('abapgenerate_subr_error_handling.htm'\))
    If there is a syntax error, returns the key of the first error message from the table TRMSG in mid.
    
-   [SHORTDUMP-ID sid](javascript:call_link\('abapgenerate_subr_error_handling.htm'\))
    If there is a generation error, returns the ID of the error from the table SNAPT in sid.