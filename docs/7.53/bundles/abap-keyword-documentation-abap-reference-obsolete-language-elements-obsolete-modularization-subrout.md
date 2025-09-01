# ABAP Keyword Documentation / ABAP − Reference / Obsolete Language Elements / Obsolete Modularization / Subroutines

Included pages: 8


### abenabap_subroutines.htm

---
title: "Subroutines"
description: |
  Before the introduction of ABAP Objects, subroutines were mainly used for the local modularization of programs, however, they can also be called externally. Their functions are implemented between the statements FORM(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform.htm) and END
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_subroutines.htm"
abapFile: "abenabap_subroutines.htm"
keywords: ["do", "try", "method", "abenabap", "subroutines"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobsolete_modularization.htm) → 

Subroutines

Before the introduction of ABAP Objects, subroutines were mainly used for the local modularization of programs, however, they can also be called externally. Their functions are implemented between the statements [FORM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform.htm) and [ENDFORM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapendform.htm). A subroutine is declared immediately when implemented.

Subroutines should no longer be created in new programs for the following reasons:

-   The parameter interface has clear weaknesses when compared with the parameter interface of methods, such as:

-   Positional parameters instead of keyword parameters

-   No genuine input parameters in pass by reference

-   Typing is optional

-   No optional parameters

-   Every subroutine belongs implicitly to the public interface of its program, which is generally not wanted.

-   Calling subroutines externally is critical with respect to the assignment of the container program to a [program group](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_group_glosry.htm "Glossary Entry") in the [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry"). This assignment cannot generally be defined statically.

In those places where subroutines cannot yet be replaced by methods ([PERFORM ON COMMIT*|*ROLLBACK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapperform_subr.htm), [GENERATE SUBROUTINE POOL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgenerate_subroutine_pool.htm)), they should be used purely as wrappers for method calls and must not contain any other functional code.

Note

The syntax allows the definition of a subroutine to be split between a declaration part and an implementation part using the statements [FORM ... DEFINITION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_definition.htm) and [FORM ... IMPLEMENTATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_definition.htm), but this is not supported by all tools and should be avoided.

Continue
[FORM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform.htm)
[ENDFORM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapendform.htm)
[FORM - DEFINITION, IMPLEMENTATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_definition.htm)


### abapform.htm

---
title: "FORM"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_shortref.htm) Obsolete Syntax FORM subr TABLES table_parameters(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_tables.htm) USING parameters(https://help.sap.com/doc/abapdocu_75
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform.htm"
abapFile: "abapform.htm"
keywords: ["do", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "abapform"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobsolete_modularization.htm) →  [Subroutines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_subroutines.htm) → 

FORM

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_shortref.htm)

Obsolete Syntax

FORM subr *\[*TABLES [table\_parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_tables.htm)*\]*
          *\[*USING [parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_parameters.htm)*\]*
          *\[*CHANGING [parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_parameters.htm)*\]*
          *\[*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*\]*.
  ...
ENDFORM.

Extras:

[1\. ... TABLES table\_parameters](#!ABAP_ADDITION_1@1@)
[2\. ... USING parameters](#!ABAP_ADDITION_2@2@)
[3\. ... CHANGING parameters](#!ABAP_ADDITION_3@3@)
[4\. ... RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...](#!ABAP_ADDITION_4@4@)

Effect

The statement FORM defines a [subroutine](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubroutine_glosry.htm "Glossary Entry") subr and its interface. [Naming conventions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennaming_conventions.htm) apply to the subr name. The functions of the subroutine subr are implemented between the statements FORM and ENDFORM. The additions define the formal parameters of the subroutine and declare the propagation of the [class-based exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") to the caller.

Local data types and data objects can be declared within the subroutine. Furthermore, the formal parameters of the subroutine and the global data types and data objects of the [master program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenframe_program_glosry.htm "Glossary Entry") can be accessed.

Subroutines are called using the statement [PERFORM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapperform.htm).

Note

Subroutines are obsolete. In new programs, methods must be used instead.

Addition 1

... TABLES table\_parameters

Effect

TABLES is used to declare table parameters [table\_parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_tables.htm). Table parameters are obsolete formal parameters that are typed as internal [standard tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_table_glosry.htm "Glossary Entry") with [header lines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenheader_line_glosry.htm "Glossary Entry"). The addition TABLES can be specified only before USING or CHANGING.

If an internal table without header line or a [table body](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_body_glosry.htm "Glossary Entry") is passed as an actual parameter to this type of formal parameter, an empty local header line is generated in the subroutine. If an internal table with header line is used as the actual parameter, both the table body and the header line are passed to the subroutine. Pass by value is not possible in formal parameters defined using TABLES.

Notes

-   Formal parameters defined using TABLES can be replaced by formal parameters defined using USING or CHANGING. A local work area can also be created in the subroutine using the addition LIKE LINE OF itab of the statement DATA.
    
-   If TABLES is specified after USING or CHANGING, a formal parameter called "TABLES" is created.
    

Addition 2

... USING parameters

Addition 3

... CHANGING parameters

Effect

These additions define formal parameters [parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_parameters.htm). Formal parameters can be used in the subroutine as data objects in all operand positions that match their [typing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_glosry.htm "Glossary Entry") and their modifiability defined by USING or CHANGING.

When the formal parameters [parameter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_parameters.htm) are defined, either pass by reference or pass by value can be defined. The effect of this definition for formal parameters defined with USING and CHANGING is as follows:

-   Pass by reference for USING parameters
    The formal parameters p1 p2 ... are handled exactly like those parameters defined for pass by reference using CHANGING.
    
-   Pass by reference for CHANGING parameters
    For the formal parameters p1 p2 ..., no local data object is created in the subroutine. Instead, when it is called, a reference is passed to the specified actual parameter. A change to the formal parameter in the subroutine also changes the value of the actual parameter.
    
-   Pass by value for USING parameters
    For each formal parameter p1 p2 ..., a local data object with the same data type as the corresponding actual parameter is created in the subroutine and filled with its values. A change to the formal parameter in the subroutine does not change the value of the actual parameter. The actual parameter also retains its original value even after the subroutine has ended.
    
-   Pass by value for CHANGING parameters
    For each formal parameter p1 p2 ..., a local data object with the same data type as the corresponding actual parameter is created in the subroutine and filled with its values. A change to the formal parameter in the subroutine does not directly change the value of the actual parameter. If the subroutine is ended using ENDFORM, RETURN, CHECK, or EXIT however, the content of the formal parameter is assigned to the actual parameter. If the subroutine is ended by a [message](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmessage_glosry.htm "Glossary Entry") or an exception, the actual parameter remains unchanged.
    

Notes

-   Formal parameters defined for pass by reference with USING should not be changed in the subroutine. In this case, CHANGING can be used instead. Modifying access to USING parameters produces syntax check warnings if CHANGING parameters are specified at the same time.
    
-   The addition CHANGING should be used for the formal parameter whose value is changed in the subroutine.
    
-   The order of USING and CHANGING is not arbitrary. Specifying USING after CHANGING creates a formal parameter called "USING".
    

Example

In a subroutine, the formal parameter ptab can be used in an operand position that expects an index table, since it is typed accordingly. The formal parameter wa is completely generic and the system waits until runtime to check whether it is suitable for the row type of the internal table.

FORM fill\_table USING    wa   TYPE any
                CHANGING ptab TYPE INDEX TABLE.
  APPEND wa TO ptab.
ENDFORM.

Addition 4

... RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...

Effect

The addition RAISING can be used to pass class-based exceptions exc1 exc2 ..., which are triggered in or propagated to the subroutine by the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") or using the statement RAISE EXCEPTION or the addition [THROW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconditional_expressions.htm), but are not handled in a [TRY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptry.htm) block. Subclasses of CX\_STATIC\_CHECK and CX\_DYNAMIC\_CHECK can be declared explicitly. Subclasses of CX\_NO\_CHECK are always declared implicitly with the addition RESUMABLE.

For exc1 exc2 ..., all exception classes that are visible at this point that are subclasses of CX\_STATIC\_CHECK CX\_DYNAMIC\_CHECK can be specified here. The exception classes must be specified in ascending order with respect to their inheritance hierarchy. Each exception class may only be specified once.

If an exception for this superclass is raised that cannot be handled and cannot be passed on, this produces either a syntax error or an exception that must be handled by the caller CX\_SY\_NO\_HANDLER.

The addition RESUMABLE declares an exception that can be propagated as a [resumable exception](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenresumable_exception_glosry.htm "Glossary Entry"). This means:

-   A resumable exception is therefore propagated as such
    
-   The addition does not have any effect on a non-resumable exception.
    
-   If a resumable exception is propagated in RAISING and the addition RESUMABLE is not specified, it thus becomes non-resumable.
    

If a superclass is declared as resumable, any subclasses must also be declared as resumable.

Notes

-   Exceptions that are based on the subclasses of CX\_STATIC\_CHECK and CX\_DYNAMIC\_CHECK must be handled either in the subroutine or declared explicitly using the RAISING addition. For CX\_STATIC\_CHECK, this is checked during the syntax check; for CX\_DYNAMIC\_CHECK, the check is not performed until runtime.
    
-   In a subroutine, in which class-based exceptions are declared using the addition RAISING, the obsolete statement [CATCH SYSTEM-EXCEPTIONS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcatch_sys.htm) cannot be used to handle [catchable runtime errors](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencatchable_runtime_error_glosry.htm "Glossary Entry"). Instead, the handleable exceptions assigned to the runtime errors should be handled in a [TRY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptry.htm) control structure.
    
-   An exception that is raised as a resumable exception in the subroutine using [RAISE RESUMABLE EXCEPTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapraise_exception_class.htm) should also be declared as resumable in the interface, since the exception would otherwise lose this property when the method is exited.
    
-   See also [Class-Based Exceptions in Procedures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexceptions_procedures.htm).
    

Continue
[FORM - parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_parameters.htm)
[FORM - STRUCTURE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_structure.htm)
[FORM - table\_parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_tables.htm)


### abapform_parameters.htm

---
title: "FORM - parameters"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_shortref.htm) Obsolete Syntax ...  VALUE(p1)  p1   typing(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_syntax.htm)structure(https://help.sap.com/doc/abapdocu_753_index_h
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_parameters.htm"
abapFile: "abapform_parameters.htm"
keywords: ["do", "if", "try", "data", "types", "abapform", "parameters"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobsolete_modularization.htm) →  [Subroutines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_subroutines.htm) →  [FORM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform.htm) → 

FORM - parameters

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_shortref.htm)

Obsolete Syntax

... *{* VALUE(p1) *|* p1 *}* *\[* [typing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_syntax.htm)*|*[structure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_structure.htm)*\]*
    *{* VALUE(p2) *|* p2 *}* *\[* [typing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_syntax.htm)*|*[structure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_structure.htm)*\]*
    ...

Effect

Defines the formal parameters p1 p2 ... for subroutines.

The addition typing types a formal parameter p1 p2 .... The syntax of typing is described in [Typing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_syntax.htm). The typing of a formal parameter causes the data type to be [checked](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_check.htm) against the typing when an actual parameter is passed. In addition, the typing specifies at which operand positions the formal parameter can be used in the subroutine. If no explicit typing is specified, a formal parameter is typed with the fully generic type any.

VALUE can be used to specify how [values are passed](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpass_by_value_glosry.htm "Glossary Entry") for a formal parameter p1 p2 .... If VALUE is not specified, values are [passed by reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpass_by_reference_glosry.htm "Glossary Entry").

The addition [structure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_structure.htm) can also be used to implement an obsolete form of typing.

Note

Without an explicit typing, a formal parameter is typed implicitly with the fully generic type any.


### abapform_structure.htm

---
title: "FORM - STRUCTURE"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_shortref.htm) Obsolete Syntax ... STRUCTURE struc ... Effect A formal parameter p1 p2 ... of a subroutine can be specified with the addition STRUCTURE instead of typing(https://help.sap.com/doc/abapdocu_753_index
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_structure.htm"
abapFile: "abapform_structure.htm"
keywords: ["do", "if", "case", "try", "data", "field-symbol", "abapform", "structure"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobsolete_modularization.htm) →  [Subroutines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_subroutines.htm) →  [FORM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform.htm) → 

FORM - STRUCTURE

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_shortref.htm)

Obsolete Syntax

... STRUCTURE struc ...

Effect

A formal parameter p1 p2 ... of a subroutine can be specified with the addition STRUCTURE instead of [typing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_syntax.htm), where struc must be a program-local structure (data object, no data type) or a [flat structure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_structure_glosry.htm "Glossary Entry") from ABAP Dictionary. This structure is then applied to the formal parameter ([casting](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencast_casting_glosry.htm "Glossary Entry")) and individual components can be accessed in the subroutine.

When an actual parameter is passed to a formal parameter typed using STRUCTURE, the actual parameter must be at least as long as the formal parameter:

-   In the case of a structured actual parameter, its [fragment view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry") must match the fragment view of the corresponding initial part of struc.
    
-   An elementary actual parameter must be character-like and flat and the corresponding initial part of struc can contain only components of this type.
    

Note

Formal parameters typed with STRUCTURE can usually be replaced by formal parameters typed with TYPE or LIKE. If a casting is necessary, generic formal parameters should be used and assigned to field symbols using the statement [ASSIGN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign.htm) and the addition CASTING.

Example

This example assigns the character string text the structure line.

DATA: BEGIN OF line,
        col1 TYPE c LENGTH 1,
        col2 TYPE c LENGTH 1,
      END OF line.
DATA text LENGTH 2 TYPE c VALUE 'XY'.
PERFORM demo USING text.
FORM demo USING p STRUCTURE line.
  cl\_demo\_output=>display\_data( p ).
ENDFORM.


### abapform_tables.htm

---
title: "Obsolete Syntax"
description: |
  ... t1 TYPE itab_typeLIKE itabSTRUCTURE struc t2 TYPE itab_typeLIKE itabSTRUCTURE struc ... Effect Defines table parameters(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_parameter_glosry.htm 'Glossary Entry')
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_tables.htm"
abapFile: "abapform_tables.htm"
keywords: ["do", "if", "try", "internal-table", "abapform", "tables"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobsolete_modularization.htm) →  [Subroutines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_subroutines.htm) →  [FORM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform.htm) → 

FORM - table\_parameters

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_shortref.htm)

Obsolete Syntax

... t1 *\[**{*TYPE itab\_type*}**|**{*LIKE itab*}**|**{*STRUCTURE struc*}**\]*
    t2 *\[**{*TYPE itab\_type*}**|**{*LIKE itab*}**|**{*STRUCTURE struc*}**\]*
    ...

Effect

Defines [table parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_parameter_glosry.htm "Glossary Entry") t1 t2 ... for subroutines

A table type table\_type or an internal table itab from the table category [standard table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_table_glosry.htm "Glossary Entry") can be specified after the additions TYPE and LIKE.

The additions TYPE and LIKE type the row type of the formal parameter with the row type of the specified internal table. The other obsolete addition, [STRUCTURE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_parameters.htm), stamps the row type with the [flat structure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_structure_glosry.htm "Glossary Entry") struc.

When TABLES parameters are accessed that are not bound to any type-friendly actual parameters, the same [exception situation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentables_parameters_restrictions.htm) can arise as in function modules.

Note

The definition of table parameters is obsolete and can be replaced by general [formal parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_parameters.htm) defined using USING and CHANGING.


### abapform.htm

---
title: "FORM"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_shortref.htm) Obsolete Syntax FORM subr TABLES table_parameters(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_tables.htm) USING parameters(https://help.sap.com/doc/abapdocu_75
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform.htm"
abapFile: "abapform.htm"
keywords: ["do", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "abapform"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobsolete_modularization.htm) →  [Subroutines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_subroutines.htm) → 

FORM

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_shortref.htm)

Obsolete Syntax

FORM subr *\[*TABLES [table\_parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_tables.htm)*\]*
          *\[*USING [parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_parameters.htm)*\]*
          *\[*CHANGING [parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_parameters.htm)*\]*
          *\[*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*\]*.
  ...
ENDFORM.

Extras:

[1\. ... TABLES table\_parameters](#!ABAP_ADDITION_1@1@)
[2\. ... USING parameters](#!ABAP_ADDITION_2@2@)
[3\. ... CHANGING parameters](#!ABAP_ADDITION_3@3@)
[4\. ... RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...](#!ABAP_ADDITION_4@4@)

Effect

The statement FORM defines a [subroutine](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubroutine_glosry.htm "Glossary Entry") subr and its interface. [Naming conventions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennaming_conventions.htm) apply to the subr name. The functions of the subroutine subr are implemented between the statements FORM and ENDFORM. The additions define the formal parameters of the subroutine and declare the propagation of the [class-based exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") to the caller.

Local data types and data objects can be declared within the subroutine. Furthermore, the formal parameters of the subroutine and the global data types and data objects of the [master program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenframe_program_glosry.htm "Glossary Entry") can be accessed.

Subroutines are called using the statement [PERFORM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapperform.htm).

Note

Subroutines are obsolete. In new programs, methods must be used instead.

Addition 1

... TABLES table\_parameters

Effect

TABLES is used to declare table parameters [table\_parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_tables.htm). Table parameters are obsolete formal parameters that are typed as internal [standard tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_table_glosry.htm "Glossary Entry") with [header lines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenheader_line_glosry.htm "Glossary Entry"). The addition TABLES can be specified only before USING or CHANGING.

If an internal table without header line or a [table body](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_body_glosry.htm "Glossary Entry") is passed as an actual parameter to this type of formal parameter, an empty local header line is generated in the subroutine. If an internal table with header line is used as the actual parameter, both the table body and the header line are passed to the subroutine. Pass by value is not possible in formal parameters defined using TABLES.

Notes

-   Formal parameters defined using TABLES can be replaced by formal parameters defined using USING or CHANGING. A local work area can also be created in the subroutine using the addition LIKE LINE OF itab of the statement DATA.
    
-   If TABLES is specified after USING or CHANGING, a formal parameter called "TABLES" is created.
    

Addition 2

... USING parameters

Addition 3

... CHANGING parameters

Effect

These additions define formal parameters [parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_parameters.htm). Formal parameters can be used in the subroutine as data objects in all operand positions that match their [typing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_glosry.htm "Glossary Entry") and their modifiability defined by USING or CHANGING.

When the formal parameters [parameter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_parameters.htm) are defined, either pass by reference or pass by value can be defined. The effect of this definition for formal parameters defined with USING and CHANGING is as follows:

-   Pass by reference for USING parameters
    The formal parameters p1 p2 ... are handled exactly like those parameters defined for pass by reference using CHANGING.
    
-   Pass by reference for CHANGING parameters
    For the formal parameters p1 p2 ..., no local data object is created in the subroutine. Instead, when it is called, a reference is passed to the specified actual parameter. A change to the formal parameter in the subroutine also changes the value of the actual parameter.
    
-   Pass by value for USING parameters
    For each formal parameter p1 p2 ..., a local data object with the same data type as the corresponding actual parameter is created in the subroutine and filled with its values. A change to the formal parameter in the subroutine does not change the value of the actual parameter. The actual parameter also retains its original value even after the subroutine has ended.
    
-   Pass by value for CHANGING parameters
    For each formal parameter p1 p2 ..., a local data object with the same data type as the corresponding actual parameter is created in the subroutine and filled with its values. A change to the formal parameter in the subroutine does not directly change the value of the actual parameter. If the subroutine is ended using ENDFORM, RETURN, CHECK, or EXIT however, the content of the formal parameter is assigned to the actual parameter. If the subroutine is ended by a [message](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmessage_glosry.htm "Glossary Entry") or an exception, the actual parameter remains unchanged.
    

Notes

-   Formal parameters defined for pass by reference with USING should not be changed in the subroutine. In this case, CHANGING can be used instead. Modifying access to USING parameters produces syntax check warnings if CHANGING parameters are specified at the same time.
    
-   The addition CHANGING should be used for the formal parameter whose value is changed in the subroutine.
    
-   The order of USING and CHANGING is not arbitrary. Specifying USING after CHANGING creates a formal parameter called "USING".
    

Example

In a subroutine, the formal parameter ptab can be used in an operand position that expects an index table, since it is typed accordingly. The formal parameter wa is completely generic and the system waits until runtime to check whether it is suitable for the row type of the internal table.

FORM fill\_table USING    wa   TYPE any
                CHANGING ptab TYPE INDEX TABLE.
  APPEND wa TO ptab.
ENDFORM.

Addition 4

... RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...

Effect

The addition RAISING can be used to pass class-based exceptions exc1 exc2 ..., which are triggered in or propagated to the subroutine by the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") or using the statement RAISE EXCEPTION or the addition [THROW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconditional_expressions.htm), but are not handled in a [TRY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptry.htm) block. Subclasses of CX\_STATIC\_CHECK and CX\_DYNAMIC\_CHECK can be declared explicitly. Subclasses of CX\_NO\_CHECK are always declared implicitly with the addition RESUMABLE.

For exc1 exc2 ..., all exception classes that are visible at this point that are subclasses of CX\_STATIC\_CHECK CX\_DYNAMIC\_CHECK can be specified here. The exception classes must be specified in ascending order with respect to their inheritance hierarchy. Each exception class may only be specified once.

If an exception for this superclass is raised that cannot be handled and cannot be passed on, this produces either a syntax error or an exception that must be handled by the caller CX\_SY\_NO\_HANDLER.

The addition RESUMABLE declares an exception that can be propagated as a [resumable exception](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenresumable_exception_glosry.htm "Glossary Entry"). This means:

-   A resumable exception is therefore propagated as such
    
-   The addition does not have any effect on a non-resumable exception.
    
-   If a resumable exception is propagated in RAISING and the addition RESUMABLE is not specified, it thus becomes non-resumable.
    

If a superclass is declared as resumable, any subclasses must also be declared as resumable.

Notes

-   Exceptions that are based on the subclasses of CX\_STATIC\_CHECK and CX\_DYNAMIC\_CHECK must be handled either in the subroutine or declared explicitly using the RAISING addition. For CX\_STATIC\_CHECK, this is checked during the syntax check; for CX\_DYNAMIC\_CHECK, the check is not performed until runtime.
    
-   In a subroutine, in which class-based exceptions are declared using the addition RAISING, the obsolete statement [CATCH SYSTEM-EXCEPTIONS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcatch_sys.htm) cannot be used to handle [catchable runtime errors](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencatchable_runtime_error_glosry.htm "Glossary Entry"). Instead, the handleable exceptions assigned to the runtime errors should be handled in a [TRY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptry.htm) control structure.
    
-   An exception that is raised as a resumable exception in the subroutine using [RAISE RESUMABLE EXCEPTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapraise_exception_class.htm) should also be declared as resumable in the interface, since the exception would otherwise lose this property when the method is exited.
    
-   See also [Class-Based Exceptions in Procedures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexceptions_procedures.htm).
    

Continue
[FORM - parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_parameters.htm)
[FORM - STRUCTURE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_structure.htm)
[FORM - table\_parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_tables.htm)


### abapendform.htm

---
title: "ENDFORM"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_shortref.htm) Obsolete Syntax ENDFORM. Effect The statement ENDFORM closes a subroutine definition introduced using FORM(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform.htm).
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapendform.htm"
abapFile: "abapendform.htm"
keywords: ["do", "abapendform"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobsolete_modularization.htm) →  [Subroutines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_subroutines.htm) → 

ENDFORM

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_shortref.htm)

Obsolete Syntax

ENDFORM.

Effect

The statement ENDFORM closes a subroutine definition introduced using [FORM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform.htm).


### abapform_definition.htm

---
title: "FORM - DEFINITION, IMPLEMENTATION"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_definition_shortref.htm) Obsolete Syntax FORM subr DEFINITION TABLES table_parameters(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_tables.htm) USING parameters(https://help.s
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_definition.htm"
abapFile: "abapform_definition.htm"
keywords: ["do", "try", "abapform", "definition"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobsolete_modularization.htm) →  [Subroutines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_subroutines.htm) → 

FORM - DEFINITION, IMPLEMENTATION

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_definition_shortref.htm)

Obsolete Syntax

FORM subr DEFINITION
          *\[*TABLES [table\_parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_tables.htm)*\]*
          *\[*USING [parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_parameters.htm)*\]*
          *\[*CHANGING [parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_parameters.htm)*\]*
          *\[*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*\]*.
FORM subr IMPLEMENTATION.
  ...
ENDFORM.

Effect

In this variant of the statement [FORM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform.htm) the definition of a subroutine subr is shared between a declaration part and an implementation part:

-   The statement FORM subr DEFINITION declares the subroutine and its parameter interface. The meaning of the additions is the same as in [FORM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform.htm). A subroutine declaration of this type is part of the [global declaration part](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenglobal_declaration_sect_glosry.htm "Glossary Entry") of a program.
    
-   The subroutine is implemented between the statements FORM subr IMPLEMENTATION and ENDFORM. These statements define a processing block in the implementation part of the program.
    

Note

This variant of defining a subroutine is not supported by all tools and should be avoided.
