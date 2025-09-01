  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Exceptions Before Class-Based Exceptions](javascript:call_link\('abenexceptions_pre_610.htm'\)) →  [Non-Class-Based Exceptions](javascript:call_link\('abenexceptions_non_class.htm'\)) → 

RAISE

[Quick Reference](javascript:call_link\('abapraise_shortref.htm'\))

Syntax

RAISE exception.

Effect

This statement raises the [non-class-based exception](javascript:call_link\('abenexceptions_non_class.htm'\)) exception.

-   RAISE can be specified in a method only if the non-class-based exception is defined in the interface of the method.
    
-   Specify RAISE in function modules only if the non-class-based exception is defined in the interface of the function module.
    
-   It is possible to specify RAISE in all other positions, but this is not recommended.
    

After the exception exception is raised, the system proceeds as follows:

-   If the exception is raised in a method or function module whose caller assigns a return value to the exception, the [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") ends immediately, the system returns to the calling position, and the system field sy-subrc is set according to the assignment.
    
-   If the exception is raised in a method or function module whose caller does not assign a return value to the exception, a runtime error is then triggered whose [short dump](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry") contains the name of the exception.
    
-   If the exception is raised in a subroutine, the system searches for the first function module in the procedures of the preceding call stack. If it finds a function module of this type and the exception is defined in it, the system acts as though the exception was raised in this function module. Otherwise, a runtime error occurs.
    
-   In all other processing blocks, raising a non class-based exception produces a runtime error that immediately ends the program.
    

This form of the statement RAISE cannot be used in the same [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry") as the statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) or the addition [THROW](javascript:call_link\('abenconditional_expression_result.htm'\)) in a [conditional expression](javascript:call_link\('abenconditional_expressions.htm'\)) to raise class-based exceptions.

Notes

-   The statement MESSAGE with the addition [RAISING](javascript:call_link\('abapmessage_raising.htm'\)) also raises a non-class-based exception. In cases in which non-class-based exceptions are still used, this statement is preferred instead of RAISE, because it offers the option of adding a text to the exception.
    
-   If a [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") is exited by raising an exception, the content of the formal parameter for which the [pass by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry") is defined is not assigned to the respective actual parameters.
    

Example

Raising a non-class-based exception in a method.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS meth EXCEPTIONS exc.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD meth.
    ...
    RAISE exc.
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  cls=>meth( EXCEPTIONS exc = 4 ).
  CASE sy-subrc.
    WHEN 4.
      cl\_demo\_output=>display( 'Exception' ).
    WHEN OTHERS.
      ...
  ENDCASE.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: The raised exception was not handled by the caller.
    Runtime error: RAISE\_EXCEPTION