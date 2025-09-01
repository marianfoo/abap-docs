---
title: "PERFORM subr(prog)"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapperform_shortref.htm) Obsolete Syntax PERFORM subr(prog) IF FOUND parameter_list(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapperform_parameters.htm). Effect A variant of t
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapperform_obsolete.htm"
abapFile: "abapperform_obsolete.htm"
keywords: ["do", "if", "case", "try", "catch", "method", "class", "abapperform", "obsolete"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Calls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_call_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20PERFORM%20subr%28prog%29%2C%20ABAPPERFORM_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

PERFORM subr(prog)

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapperform_shortref.htm)

Obsolete Syntax

PERFORM subr(prog) *\[*IF FOUND*\]* *\[*[parameter\_list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapperform_parameters.htm)*\]*.

Effect

A variant of the [external subroutine call](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapperform_form.htm) that is not allowed in classes. The statement PERFORM calls the statically specified subroutine subr of a statically specified program prog.

-   The existence of the specified program and subroutine is not checked by the syntax check. Only the [extended program check](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenextended_program_check_glosry.htm "Glossary Entry") reports a nonexistent program or subroutine as an error by default. If the addition IF FOUND is specified, the extended program check does not perform a check either.
-   If the specified subroutine or program does not exist at runtime, a catchable exception of the class CX\_SY\_DYN\_CALL\_ILLEGAL\_FORM or CX\_SY\_PROGRAM\_NOT\_FOUND is raised by default. If the addition IF FOUND is specified, the statement PERFORM is skipped.

Hints

-   In this variant, the program name prog is specified directly in parentheses. Since parentheses in operand positions indicate a dynamic specification in all other cases, this form of the name is obsolete. The specification with the addition [IN PROGRAM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapperform_form.htm) should be used instead.
-   External calls of subroutines are obsolete anyway. Instead of subroutines, methods and function modules can be used as explicit functional interfaces of a program.
-   Furthermore, external calls of subroutines are critical, since it cannot usually be statically determined to which [program groups](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_groups.htm) the compilation unit is assigned.