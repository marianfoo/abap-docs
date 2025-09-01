---
title: "FORM"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform_shortref.htm) Obsolete Syntax FORM subr TABLES table_parameters(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform_tables.htm) USING parameters(https://help.sap.com/doc/abapdocu_75
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform.htm"
abapFile: "abapform.htm"
keywords: ["do", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "abapform"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobsolete_modularization.htm) →  [Subroutines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_subroutines.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: FORM, ABAPFORM, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improveme
nt:)

FORM

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform_shortref.htm)

Obsolete Syntax

FORM subr *\[*TABLES [table\_parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform_tables.htm)*\]*
          *\[*USING [parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform_parameters.htm)*\]*
          *\[*CHANGING [parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform_parameters.htm)*\]*
          *\[*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*\]*.
  ...
ENDFORM.

Additions:

[1\. ... TABLES table\_parameters](#!ABAP_ADDITION_1@1@)
[2\. ... USING parameters](#!ABAP_ADDITION_2@2@)
[3\. ... CHANGING parameters](#!ABAP_ADDITION_3@3@)
[4\. ... RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...](#!ABAP_ADDITION_4@4@)

Effect

The statement FORM defines a [subroutine](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensubroutine_glosry.htm "Glossary Entry") subr and its interface. [Naming conventions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennaming_conventions.htm) apply to the subr name. The functions of the subroutine subr are implemented between the statements FORM and ENDFORM. The additions define the formal parameters of the subroutine and declare the propagation of the [class-based exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") to the caller.

Local data types and data objects can be declared within the subroutine. Furthermore, the formal parameters of the subroutine as well as the global data types and data objects of the current [compilation unit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencompilation_unit_glosry.htm "Glossary Entry") can be accessed.

Subroutines are called using the statement [PERFORM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapperform.htm).

Hint

Subroutines are obsolete. In new programs, methods should be created instead.

Addition 1   

... TABLES table\_parameters

Effect

TABLES is used to declare table parameters [table\_parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform_tables.htm). Table parameters are obsolete formal parameters that are typed as internal [standard tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_table_glosry.htm "Glossary Entry") with [header lines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenheader_line_glosry.htm "Glossary Entry"). The addition TABLES can be specified only before USING or CHANGING.

If an internal table without header line or a [table body](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_body_glosry.htm "Glossary Entry") is passed as an actual parameter to this type of formal parameter, an empty local header line is generated in the subroutine. If an internal table with header line is used as the actual parameter, both the table body and the header line are passed to the subroutine. Pass by value is not possible in formal parameters defined using TABLES.

Hints

-   Formal parameters defined using TABLES can be replaced by formal parameters defined using USING or CHANGING. A local work area can also be created for the internal table in the subroutine using the addition LIKE LINE OF itab of the statement DATA.
-   If TABLES is specified after USING or CHANGING, a formal parameter called TABLES is created.

Addition 2   

... USING parameters

Addition 3   

... CHANGING parameters

Effect

These additions define formal parameters [parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform_parameters.htm). Formal parameters can be used in the subroutine as data objects in all operand positions that match their [typing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentyping_glosry.htm "Glossary Entry") and their modifiability defined by USING or CHANGING.

When the formal parameters [parameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform_parameters.htm) are defined, either pass by reference or pass by value can be defined. The effect of this definition for formal parameters defined with USING and CHANGING is as follows:

-   Pass by reference for USING parameters
    
    The formal parameters p1 p2 ... are handled exactly like those parameters defined for pass by reference using CHANGING.
    
-   Pass by reference for CHANGING parameters
    
    For the formal parameters p1 p2 ..., no local data object is created in the subroutine. Instead, when it is called, a reference is passed to the specified actual parameter. A change to the formal parameter in the subroutine also changes the value of the actual parameter.
    
-   Pass by value for USING parameters
    
    For each formal parameter p1 p2 ..., a local data object with the same data type as the associated actual parameter is created in the subroutine and filled with its values. A change to the formal parameter in the subroutine does not change the value of the actual parameter. The actual parameter also retains its original value even after the subroutine has ended.
    
-   Pass by value for CHANGING parameters
    
    For each formal parameter p1 p2 ..., a local data object with the same data type as the associated actual parameter is created in the subroutine and filled with its values. A change to the formal parameter in the subroutine does not directly change the value of the actual parameter. If the subroutine is ended using ENDFORM, RETURN, CHECK, or EXIT however, the content of the formal parameter is assigned to the actual parameter. If the subroutine is ended by a [message](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_glosry.htm "Glossary Entry") or an exception, the actual parameter remains unchanged.
    

Hints

-   Formal parameters defined for pass by reference with USING should not be changed in subroutines. In this case, CHANGING can be used instead. Write access to USING parameters produces syntax check warnings if CHANGING parameters are specified at the same time.
-   The addition CHANGING should be used for precisely those formal parameters whose value is changed in the subroutine.
-   The order of USING and CHANGING is not arbitrary. Specifying USING after CHANGING creates a formal parameter named using.
-   Since from the [caller's](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapperform.htm) point of view there is no syntactical difference between passing an actual parameter to a USING parameter defined for [pass by value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpass_by_value_glosry.htm "Glossary Entry") or to a USING parameter defined for [pass by reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpass_by_reference_glosry.htm "Glossary Entry"), the value returned by the subroutine should not depend on the kind of parameter passing.

Example

In a subroutine, the formal parameter ptab can be used in an operand position that expects an index table, since it is typed accordingly. The formal parameter wa is completely generic and the system waits until runtime to check whether it is suitable for the line type of the internal table.

FORM fill\_table USING    wa   TYPE any
                CHANGING ptab TYPE INDEX TABLE.
  APPEND wa TO ptab.
ENDFORM.

Addition 4   

... RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...

Effect

The addition RAISING can be used to declare class-based exceptions exc1 exc2 ..., which are raised in or propagated to the subroutine by the [ABAP runtime framework](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry") or using the statement RAISE EXCEPTION or the addition [THROW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconditional_expressions.htm), but are not handled in a [TRY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptry.htm) block. Subclasses of CX\_STATIC\_CHECK and CX\_DYNAMIC\_CHECK can be declared explicitly. Subclasses of CX\_NO\_CHECK are always declared implicitly with the addition RESUMABLE but can also be declared explicitly.

For exc1 exc2 ..., all exception classes that are visible at this point can be specified. The exception classes must be specified in ascending order with respect to their inheritance hierarchy. Each exception class may only be specified once.

If an exception for this superclass is raised that cannot be handled and cannot be passed on, this produces either a syntax error or an exception CX\_SY\_NO\_HANDLER that must be handled by the caller.

The addition RESUMABLE declares an exception that can be propagated as a [resumable exception](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenresumable_exception_glosry.htm "Glossary Entry"). This means:

-   A resumable exception is therefore propagated as such
-   The addition has no effect on a non-resumable exception.
-   If a resumable exception is propagated in RAISING and the addition RESUMABLE is not specified, it thus becomes non-resumable.

If a superclass is declared as resumable, any subclasses must also be declared as resumable.

Hints

-   Exceptions that are based on the subclasses of CX\_STATIC\_CHECK and CX\_DYNAMIC\_CHECK must be handled either in the subroutine or declared explicitly using the RAISING addition. For CX\_STATIC\_CHECK, this is checked during the syntax check; for CX\_DYNAMIC\_CHECK, the check is not performed until runtime. For exceptions of the category CX\_NO\_CHECK no check is performed.
-   Exceptions of the category CX\_NO\_CHECK can be declared explicitly with or without the addition RESUMABLE. The addition RESUMABLE is always added implicitly. An explicit declaration of an exception of the category CX\_NO\_CHECK has no effect but documents for the user of a subroutine, that this exception is to be expected. Furthermore, it allows the category of existing exceptions to be changed to CX\_NO\_CHECK without producing a syntax error.
-   In a subroutine, in which class-based exceptions are declared using the addition RAISING, the obsolete statement [CATCH SYSTEM-EXCEPTIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcatch_sys.htm) cannot be used to handle [catchable runtime errors](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencatchable_runtime_error_glosry.htm "Glossary Entry"). Instead, the catchable exceptions assigned to the runtime errors should be handled in a [TRY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptry.htm) control structure.
-   An exception that is raised as a resumable exception in the subroutine using [RAISE RESUMABLE EXCEPTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception_class.htm) should also be declared as resumable in the interface, since the exception would otherwise lose this property when the method is exited.
-   See also [Class-Based Exceptions in Procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexceptions_procedures.htm).

Continue
[FORM, parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform_parameters.htm)
[FORM, STRUCTURE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform_structure.htm)
[FORM, table\_parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform_tables.htm)