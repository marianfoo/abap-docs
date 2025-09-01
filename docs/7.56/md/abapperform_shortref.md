  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  P

PERFORM - Short Reference

[Reference](javascript:call_link\('abapperform.htm'\))

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

-   [subr](javascript:call_link\('abapperform_form.htm'\)) - Subroutine subr of the same program.
-   [subr*|*(sname) IN PROGRAM *\[*prog*|*(pname)*\]*](javascript:call_link\('abapperform_form.htm'\)) - Specifies a subroutine statically or dynamically in any program.
-   [n OF subr1 subr2 ...](javascript:call_link\('abapperform_form.htm'\)) - Subroutine n from a list of subroutines.
-   [subr(prog)](javascript:call_link\('abapperform_obsolete.htm'\)) - Obsolete: Specifies a subroutine statically in another program prog.
-   [IF FOUND](javascript:call_link\('abapperform_form.htm'\))
    Suppresses an exception if the subroutine is not found.
    

Specifies the parameters:

-   [TABLES itab1 itab2 ...](javascript:call_link\('abapperform_parameters.htm'\))
    Assigns internal tables itab1, itab2, ...to the table parameters of the same position.
-   [USING a1 a2 ...](javascript:call_link\('abapperform_parameters.htm'\))
    Assigns actual parameters a1, a2, ... to the formal parameters of the same position.
-   [CHANGING a1 a2 ...](javascript:call_link\('abapperform_parameters.htm'\))
    Assigns actual parameters a1, a2, ... to the formal parameters of the same position.
    

Specifies the execution:

-   [ON COMMIT *\[*LEVEL idx*\]*](javascript:call_link\('abapperform_on_commit.htm'\))
    Registers the subroutine for execution with COMMIT WORK, where the execution order can be controlled using LEVEL.
-   [ON ROLLBACK](javascript:call_link\('abapperform_on_commit.htm'\))
    Registers the subroutine for execution in ROLLBACK WORK.