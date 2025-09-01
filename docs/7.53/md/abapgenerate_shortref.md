---
title: "GENERATE SUBROUTINE POOL - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgenerate_subroutine_pool.htm) Syntax GENERATE SUBROUTINE POOL itab NAME prog MESSAGE mess INCLUDE incl LINE lin WORD wrd OFFSET off MESSAGE-ID mid SHORTDUMP-ID sid. Effe
version: "7.53"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgenerate_shortref.htm"
abapFile: "abapgenerate_shortref.htm"
keywords: ["do", "if", "try", "internal-table", "abapgenerate", "shortref"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  G

GENERATE SUBROUTINE POOL - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgenerate_subroutine_pool.htm)

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

Generates a temporary [subroutine pool](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubroutine_pool_glosry.htm "Glossary Entry") from the content of an internal table itab. Its name is returned in prog.

Additions

-   [MESSAGE mess](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgenerate_subr_error_handling.htm)
    If there is a syntax error, returns the first error message in mess.
    
-   [INCLUDE incl](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgenerate_subr_error_handling.htm)
    If there is a syntax error, returns the name of the include program in which the error occurred in incl.
    
-   [LINE lin](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgenerate_subr_error_handling.htm)
    If there is a syntax error, returns the first line with an error in lin.
    
-   [WORD wrd](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgenerate_subr_error_handling.htm)
    If there is a syntax error, returns the first word with an error in wrd.
    
-   [OFFSET off](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgenerate_subr_error_handling.htm)
    If there is a syntax error, returns the offset of the first error in the line in off.
    
-   [MESSAGE-ID mid](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgenerate_subr_error_handling.htm)
    If there is a syntax error, returns the key of the first error message from the table TRMSG in mid.
    
-   [SHORTDUMP-ID sid](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgenerate_subr_error_handling.htm)
    If there is a generation error, returns the ID of the error from the table SNAPT in sid.