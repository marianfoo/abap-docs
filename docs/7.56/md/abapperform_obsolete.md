  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Calls](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprogram_call_obsolete.htm) → 

PERFORM subr(prog)

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapperform_shortref.htm)

Obsolete Syntax

PERFORM subr(prog) *\[*IF FOUND*\]* *\[*[parameter\_list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapperform_parameters.htm)*\]*.

Effect

A variant of the [external subroutine call](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapperform_form.htm) that is not allowed in classes. The statement PERFORM calls the statically specified subroutine subr of a statically specified program prog.

-   The existence of the specified program and subroutine is not checked by the syntax check. Only the [extended program check](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenextended_program_check_glosry.htm "Glossary Entry") reports a nonexistent program or subroutine as an error by default. If the addition IF FOUND is specified, the extended program check does not perform a check either.
-   If the specified subroutine or program does not exist at runtime, a catchable exception of the class CX\_SY\_DYN\_CALL\_ILLEGAL\_FORM or CX\_SY\_PROGRAM\_NOT\_FOUND is raised by default. If the addition IF FOUND is specified, the statement PERFORM is skipped.

Hints

-   In this variant, the program name prog is specified directly in parentheses. Since parentheses in operand positions indicate a dynamic specification in all other cases, this form of the name is obsolete. The specification with the addition [IN PROGRAM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapperform_form.htm) should be used instead.
-   External calls of subroutines are obsolete anyway. Instead of subroutines, methods and function modules can be used as explicit functional interfaces of a program.
-   Furthermore, external calls of subroutines are critical, since it cannot usually be statically determined to which [program groups](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprogram_groups.htm) the compilation unit is assigned.