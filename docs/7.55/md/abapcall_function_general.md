  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and exiting program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) →  [Calling Procedures](javascript:call_link\('abencall_procedures.htm'\)) →  [CALL FUNCTION](javascript:call_link\('abapcall_function.htm'\)) → 

CALL FUNCTION func

[Short Reference](javascript:call_link\('abapcall_function_shortref.htm'\))

Syntax

CALL FUNCTION func *{* [parameter\_list](javascript:call_link\('abapcall_function_parameter.htm'\))
                   *|* [parameter\_tables](javascript:call_link\('abapcall_function_dynamic.htm'\)) *}*.

Effect

This statement calls the [function module](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") specified in func. The name func must be a character-like data object that contains the name of a function module allowed by the package check in uppercase letters when the statement is executed. Since each function module in [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") has a unique name, the function pool does not need to be specified. The following can be specified for func:

-   Literal or constant

If the data object func is specified as a [character literal](javascript:call_link\('abentext_literal_glosry.htm'\) "Glossary Entry") or as a [constant](javascript:call_link\('abenconstant_glosry.htm'\) "Glossary Entry"), it is evaluated as a statically specified object by tools such as the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") or the where-used list.

-   Variable

If the data object func is specified as a [variable](javascript:call_link\('abenvariable_glosry.htm'\) "Glossary Entry"), it is specified only dynamically, and the content is not evaluated statically.

When the statement is executed, func is not evaluated until runtime in both cases. In particular, the types of the [parameters](javascript:call_link\('abapcall_function_parameter.htm'\)) are not known until runtime. In both cases, incorrectly specified function modules or parameters produce runtime errors and not syntax errors

The additions [parameter\_list](javascript:call_link\('abapcall_function_parameter.htm'\)) or [parameter\_tables](javascript:call_link\('abapcall_function_dynamic.htm'\)) are used to statically or dynamically assign actual parameters to the formal parameters of the function module and return values to the non-class-based exceptions.

Security Hint

If the name of a program unit is specified dynamically when it is called, and this name is passed to a program from outside, this a serious security risk. Any names passed to a program from outside must be checked thoroughly before being used in calls. The system class CL\_ABAP\_DYN\_PRG, for example, can be used to do this. See [Dynamic Calls](javascript:call_link\('abendyn_call_scrty.htm'\)).

Hint

Since func is not evaluated until runtime when function modules are called, no [writable expressions](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") and no [inline declarations](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry") can be specified as actual parameters, unlike in static method calls.

Example

Call of function modules READ\_SPFLI\_INTO\_TABLE and READ\_SPFLI\_INTO\_TABLE\_NEW with parameter passing and handling of non-classified and class-based exceptions.

DATA itab TYPE spfli\_tab.
CALL FUNCTION 'READ\_SPFLI\_INTO\_TABLE'
  EXPORTING
    id        = 'LH'
  IMPORTING
    itab      = itab
  EXCEPTIONS
    not\_found = 4.
IF sy-subrc <> 0.
   ...
ENDIF.
TRY.
    CALL FUNCTION 'READ\_SPFLI\_INTO\_TABLE\_NEW'
      EXPORTING
        id   = 'LH'
      IMPORTING
        itab = itab.
  CATCH cx\_no\_flight\_found INTO DATA(exc).
    ...
ENDTRY.

Executable Example

[Calling Function Modules](javascript:call_link\('abencall_function_abexa.htm'\))

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Catchable Exceptions

CX\_SY\_NO\_HANDLER

-   See [Class-Based Exceptions in Procedures](javascript:call_link\('abenexceptions_procedures.htm'\)).
    Runtime error: UNCAUGHT\_EXCEPTION

CX\_SY\_DYN\_CALL\_ILLEGAL\_FUNC

-   Cause: The called function is known but not active.
    Runtime error: CALL\_FUNCTION\_NOT\_ACTIVE

-   Cause: The called function is unknown.
    Runtime error: CALL\_FUNCTION\_NOT\_FOUND

CX\_SY\_DYN\_CALL\_ILLEGAL\_TYPE

-   Cause: The type of the actual parameter does not meet the requirements of the function interface.
    Runtime error: CALL\_FUNCTION\_CONFLICT\_GEN\_TYP

-   Cause: The actual parameter does not have the length expected by the function.
    Runtime error: CALL\_FUNCTION\_CONFLICT\_LENG

-   Cause: The actual parameter does not have the type expected by the function.
    Runtime error: CALL\_FUNCTION\_CONFLICT\_TYPE

-   Cause: Only valid functions can be called in the update.
    Runtime error: CALL\_FUNCTION\_NO\_VB

-   Cause: An actual parameter does not meet the alignment requirements of the corresponding formal parameter.
    Runtime error: CALL\_FUNCTION\_WRONG\_ALIGNMENT

CX\_SY\_DYN\_CALL\_PARAM\_MISSING

-   Cause: The function expects a parameter that was not passed by the caller.
    Runtime error: CALL\_FUNCTION\_PARM\_MISSING

CX\_SY\_DYN\_CALL\_PARAM\_NOT\_FOUND

-   Cause: The caller passed a parameter that is not recognized by the function.
    Runtime error: CALL\_FUNCTION\_PARM\_UNKNOWN
    

Continue
![Example](exa.gif "Example") [Calling Function Modules](javascript:call_link\('abencall_function_abexa.htm'\))