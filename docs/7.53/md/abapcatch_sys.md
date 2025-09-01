  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Program Flow](javascript:call_link\('abenobsolete_program_flow.htm'\)) →  [Obsolete Catchable Runtime Errors](javascript:call_link\('abensystem-exceptions.htm'\)) → 

CATCH SYSTEM-EXCEPTIONS

[Quick Reference](javascript:call_link\('abapcatch_system-except_shortref.htm'\))

Obsolete Syntax

CATCH SYSTEM-EXCEPTIONS *\[*exc1 = n1 exc2 = n2...*\]*
                        *\[*OTHERS = n\_others*\]*.
  *\[*statement\_block*\]*
ENDCATCH.

Effect

Handling [Catchable Runtime Errors](javascript:call_link\('abencatchable_runtime_error_glosry.htm'\) "Glossary Entry"). The statement CATCH SYSTEM-EXCEPTIONS introduces a control structure containing a statement block statement\_block that is always processed. In the list exc1 = n1 exc2 = n2 ..., [catchable runtime errors](javascript:call_link\('abencatchable_runtime_error_glosry.htm'\) "Glossary Entry") and [exception groups](javascript:call_link\('abenexception_group_glosry.htm'\) "Glossary Entry") can be specified in any order. A directly specified number n1 n2 ... must be assigned to each of them.

The OTHERS addition can be executed independently or after the list exc1 = n1 exc2 = n2 .... Its effect is the same as specifying an exception group that includes all catchable runtime errors of the runtime environment.

The system handles the CATCH control structure as follows:

-   If one of the specified catchable runtime errors or a catchable runtime error contained in the specified exception groups occurs, the execution of the statement block is immediately terminated, the program continues after the statement ENDCATCH, and the number n1 n2 ... assigned to the catchable runtime error or the exception group, is stored for evaluation in the system field sy-subrc. If the list contains a catchable runtime error and its exception group or if a catchable runtime error occurs in some of the specified exception groups, sy-subrc contains the assigned number of the first position in the list.
    
-   If a catchable runtime error that is not specified in the statement CATCH SYSTEM-EXCEPTIONS or is not contained in one of the specified exception groups occurs in the statement block, the program terminates with a [short dump](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry")
    
-   If the end of the statement block is reached and no runtime error occurs, sy-subrc is set to 0.
    

A CATCH control structure cannot be defined in the same [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry"), in which the class-based exceptions are handled in a [TRY](javascript:call_link\('abaptry.htm'\)) control structure or are raised by the statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) or by the addition [THROW](javascript:call_link\('abenconditional_expression_result.htm'\)) in a [conditional expression](javascript:call_link\('abenconditional_expressions.htm'\)).

Notes

-   Catchable runtime errors are not passed from called [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") to the caller. They can only be caught within a processing block. Within a processing block, catchable runtime errors are caught in control structures that can be nested in any depth. If multiple CATCH control structures are nested, the system branches behind the ENDCATCH statement of the inner CATCH control structure that handles the runtime error.
    
-   The handling of catchable runtime errors using CATCH SYSTEM-EXCEPTIONS is obsolete and should be replaced by a [TRY](javascript:call_link\('abaptry.htm'\)) control structure. Since class-based exceptions are assigned to all catchable runtime errors, this is possible without restriction. The class-based exceptions can also be passed from a procedure using RAISING, as well as by using TRY.
    

Example

Catches all possible catchable runtime errors in a statement block. Catchable runtime errors of the exception group ARITHMETIC\_ERRORS set sy-subrc to 4, all other catchable runtime errors set sy-subrc to 8. The division by 0 causes the catchable runtime error COMPUTE\_INT\_ZERODIVIDE, which is contained in the exception group ARITHMETIC\_ERRORS. In this case, sy-subrc is also set to 4.

DATA: result TYPE i,
      number TYPE i.
CATCH SYSTEM-EXCEPTIONS arithmetic\_errors = 4
                        OTHERS = 8.
  ...
  result = 1 / number.
  ...
ENDCATCH.
IF sy-subrc <> 0.
  ...
ENDIF.

Continue
[ENDCATCH](javascript:call_link\('abapendcatch.htm'\))