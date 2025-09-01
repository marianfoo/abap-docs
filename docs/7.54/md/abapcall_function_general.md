  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_procedures.htm) →  [CALL FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function.htm) → 

CALL FUNCTION func

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_shortref.htm)

Syntax

CALL FUNCTION func *{* [parameter\_list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_parameter.htm)
                   *|* [parameter\_tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_dynamic.htm) *}*.

Effect

This statement calls the [function module](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_module_glosry.htm "Glossary Entry") specified in func. The name func must be a character-like data object. When the statement is executed, this data object must contain the name of a function module permitted by the package check in uppercase. Each function module in [AS ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_nw_abap_glosry.htm "Glossary Entry") has a unique name, which is why the function group does not need to be specified. The following can be specified for func:

-   Literal or constant
    

If the data object func is specified as a [character literal](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_literal_glosry.htm "Glossary Entry") or as a [constant](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstant_glosry.htm "Glossary Entry"), it is evaluated as a statically specified object by tools such as for the [extended program check](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenextended_program_check_glosry.htm "Glossary Entry") or for the where-used list.

-   Variable
    

If the data object func is specified as a [variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvariable_glosry.htm "Glossary Entry"), it is specified only dynamically and the content is not evaluated statically.

When the statement is executed, func is not evaluated until runtime (in both cases). More specifically, the types of the [parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_parameter.htm) are not known until runtime. In both cases, incorrectly specified function modules or parameters produce runtime errors and not syntax errors

The additions [parameter\_list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_parameter.htm) or [parameter\_tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_dynamic.htm) are used to assign (statically or dynamically) actual parameters to the formal parameters of the function module and return codes to the non-class-based exceptions.

Security Note

If the name of a program unit is specified dynamically when it is called, and this name is passed to a program from outside, the result is a serious security risk. Any names passed to a program from outside must be checked thoroughly before being used in calls. The system class CL\_ABAP\_DYN\_PRG, for example, can be used to do this. See [Dynamic Calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendyn_call_scrty.htm).

Note

func is not evaluated until runtime, which means that, unlike in static method calls, no [writable expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwritable_expression_glosry.htm "Glossary Entry") and no [inline declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninline_declaration_glosry.htm "Glossary Entry") can be specified as actual parameters in function module calls.

Example

Call of function modules READ\_SPFLI\_INTO\_TABLE and READ\_SPFLI\_INTO\_TABLE\_NEW with parameter passing and handling of non-classified and/or class-based exceptions.

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

[Calling Function Modules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_function_abexa.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_NO\_HANDLER

-   See [Class-Based Exceptions in Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexceptions_procedures.htm).
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

-   Cause: The function expects a parameter not specified by the caller.
    Runtime error: CALL\_FUNCTION\_PARM\_MISSING
    

CX\_SY\_DYN\_CALL\_PARAM\_NOT\_FOUND

-   Cause: The caller specified a parameter not recognized by the function.
    Runtime error: CALL\_FUNCTION\_PARM\_UNKNOWN
    

Continue
![Example](exa.gif "Example") [Calling Function Modules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_function_abexa.htm)