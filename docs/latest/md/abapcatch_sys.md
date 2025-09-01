  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Program Flow](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobsolete_program_flow.htm) →  [Obsolete Catchable Runtime Errors](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem-exceptions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CATCH%20SYSTEM-EXCEPTIONS%2C%20ABAPCATCH_SYS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CATCH SYSTEM-EXCEPTIONS

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcatch_system-except_shortref.htm)

Obsolete Syntax

CATCH SYSTEM-EXCEPTIONS *\[*exc1 = n1 exc2 = n2...*\]*
                        *\[*OTHERS = n\_others*\]*.
  *\[*statement\_block*\]*
ENDCATCH.

Effect

Handling [catchable runtime errors](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencatchable_runtime_error_glosry.htm "Glossary Entry"). The statement CATCH SYSTEM-EXCEPTIONS introduces a control structure containing a statement block statement\_block that is always processed. In the list exc1 = n1 exc2 = n2 ..., [catchable runtime errors](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencatchable_runtime_error_glosry.htm "Glossary Entry") and [exception groups](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexception_group_glosry.htm "Glossary Entry") can be specified in any order. A directly specified number n1 n2 ... must be assigned to each of them.

The OTHERS addition can be specified independently or after the list exc1 = n1 exc2 = n2 .... Its effect is the same as specifying an exception group that includes all catchable runtime errors of the runtime framework.

The system handles the CATCH control structure as follows:

-   If one of the specified catchable runtime errors or a catchable runtime error contained in the specified exception groups occurs, the execution of the statement block is immediately terminated, the program continues after the statement ENDCATCH, and the number n1 n2 ... assigned to the catchable runtime error or the exception group, is stored for evaluation in the system field sy-subrc. If the list contains a catchable runtime error and its exception group or if a catchable runtime error occurs in some of the specified exception groups, sy-subrc contains the assigned number of the first position in the list.

-   If a catchable runtime error occurs in the statement block that is not specified in the statement CATCH SYSTEM-EXCEPTIONS or is not contained in one of the specified exception groups, the program terminates with a [short dump](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshort_dump_glosry.htm "Glossary Entry")

-   If the end of the statement block is reached and no runtime error occurs, sy-subrc is set to 0.

A CATCH control structure cannot be defined in the same [processing block](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocessing_block_glosry.htm "Glossary Entry"), in which the class-based exceptions are handled in a [TRY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptry.htm) control structure or are raised by the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_class.htm) or by the addition [THROW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expressions.htm).

Hints

-   Catchable runtime errors are not passed from called [procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocedure_glosry.htm "Glossary Entry") to the caller. They can only be caught within a processing block. Within a processing block, catchable runtime errors are caught in control structures that can be nested in any depth. If multiple CATCH control structures are nested, the system branches behind the ENDCATCH statement of the innermost CATCH control structure that handles the runtime error.
-   The handling of catchable runtime errors using CATCH SYSTEM-EXCEPTIONS is obsolete and should be replaced by a [TRY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptry.htm) control structure. Since class-based exceptions are assigned to all catchable runtime errors, this is possible without restriction. The class-based exceptions can also be passed from a procedure using RAISING, as well as by using TRY.

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
[ENDCATCH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapendcatch.htm)