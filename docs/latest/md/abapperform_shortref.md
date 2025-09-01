---
title: "PERFORM - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapperform.htm) Syntax PERFORM    subr  subr(sname) IN PROGRAM prog(pname) IF FOUND  n OF subr1 subr2 ...  subr(prog) IF FOUND  TABLES itab1 itab2 ...
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapperform_shortref.htm"
abapFile: "abapperform_shortref.htm"
keywords: ["do", "if", "internal-table", "abapperform", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  P

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20PERFORM%2C%20ABAPPERFORM_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

PERFORM - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapperform.htm)

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

-   [subr](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapperform_form.htm) - Subroutine subr of the same program.
-   [subr*|*(sname) IN PROGRAM *\[*prog*|*(pname)*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapperform_form.htm) - Specifies a subroutine statically or dynamically in any program.
-   [n OF subr1 subr2 ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapperform_form.htm) - Subroutine n from a list of subroutines.
-   [subr(prog)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapperform_obsolete.htm) - Obsolete: Specifies a subroutine statically in another program prog.
-   [IF FOUND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapperform_form.htm)
    Suppresses an exception if the subroutine is not found.
    

Specifies the parameters:

-   [TABLES itab1 itab2 ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapperform_parameters.htm)
    Assigns internal tables itab1, itab2, ...to the table parameters of the same position.
-   [USING a1 a2 ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapperform_parameters.htm)
    Assigns actual parameters a1, a2, ... to the formal parameters of the same position.
-   [CHANGING a1 a2 ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapperform_parameters.htm)
    Assigns actual parameters a1, a2, ... to the formal parameters of the same position.
    

Specifies the execution:

-   [ON COMMIT *\[*LEVEL idx*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapperform_on_commit.htm)
    Registers the subroutine for execution with COMMIT WORK, where the execution order can be controlled using LEVEL.
-   [ON ROLLBACK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapperform_on_commit.htm)
    Registers the subroutine for execution in ROLLBACK WORK.