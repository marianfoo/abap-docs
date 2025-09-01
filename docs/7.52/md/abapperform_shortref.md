---
title: "PERFORM - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform.htm) Syntax PERFORM    subr  subr(sname) IN PROGRAM prog(pname) IF FOUND  n OF subr1 subr2 ...  subr(prog) IF FOUND  TABLES itab1 itab2 ...
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_shortref.htm"
abapFile: "abapperform_shortref.htm"
keywords: ["do", "if", "internal-table", "abapperform", "shortref"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  P

PERFORM - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform.htm)

Syntax

PERFORM *{* *{* *{* subr
            *|* *{*subr*|*(sname) IN PROGRAM *\[*prog*|*(pname)*\]* *\[*IF FOUND*\]**}*
            *|* *{*n OF subr1 subr2 ...*}*
            *|* *{*subr(prog) *\[*IF FOUND*\]**}* *}*
            *\[*TABLES itab1 itab2 ...*\]*
            *\[*USING a1 a2 ...*\]*
            *\[*CHANGING a1 a2 ...*\]* *}*
        *|* *{* ON *{* *{*COMMIT *\[*LEVEL idx*\]**}*
               *|* ROLLBACK *}* *}* *}*.

Effect

Calls a subroutine.

Additions

Specifies the subroutine:

-   [subr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_form.htm) - Subroutine subr of the same program.
    
-   [subr*|*(sname) IN PROGRAM *\[*prog*|*(pname)*\]*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_form.htm) - Specifies a subroutine statically or dynamically in any program.
    
-   [n OF subr1 subr2 ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_form.htm) - Subroutine n from a list of subroutines.
    
-   [subr(prog)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_obsolete.htm) - Obsolete: Specifies a subroutine statically in another program prog.
    
-   [IF FOUND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_form.htm)
    Suppresses an exception if the subroutine is not found.
    

Specifies the parameters:

-   [TABLES itab1 itab2 ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_parameters.htm)
    Assigns internal tables itab1, itab2, ...to the table parameters of the same position.
    
-   [USING a1 a2 ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_parameters.htm)
    Assigns actual parameters a1, a2, ... to the formal parameters of the same position.
    
-   [CHANGING a1 a2 ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_parameters.htm)
    Assigns actual parameters a1, a2, ... to the formal parameters of the same position.
    

Specifies the execution:

-   [ON COMMIT *\[*LEVEL idx*\]*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_subr.htm)
    Registers the subroutine for execution with COMMIT WORK, where the execution order can be controlled using LEVEL.
    
-   [ON ROLLBACK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_subr.htm)
    Registers the subroutine for execution in ROLLBACK WORK.