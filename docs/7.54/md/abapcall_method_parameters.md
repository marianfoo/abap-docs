---
title: "Syntax"
description: |
  ... EXPORTING  p1 = a1 p2 = a2 ... IMPORTING  p1 = a1 p2 = a2 ... CHANGING   p1 = a1 p2 = a2 ... RECEIVING  r  = a   EXCEPTIONS exc1 = n1 exc2 = n2 ... OTHERS = n_others . Extras: 1. ... EXPORTING p1 = a1 p2 = a2 ...(#!ABAP_ADDITION_1@1@)
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_parameters.htm"
abapFile: "abapcall_method_parameters.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "types", "abapcall", "parameters"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_procedures.htm) →  [Method Calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_calls.htm) →  [Static Method Calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_calls_static.htm) → 

meth( ... ) - Parameter Passing

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_shortref.htm)

Syntax

... *\[*EXPORTING  p1 = a1 p2 = a2 ...*\]*
    *\[*IMPORTING  p1 = a1 p2 = a2 ...*\]*
    *\[*CHANGING   p1 = a1 p2 = a2 ...*\]*
    *\[*RECEIVING  r  = a  *\]*
    *\[*EXCEPTIONS *\[*exc1 = n1 exc2 = n2 ...*\]*
                *\[*OTHERS = n\_others*\]* *\]*.

Extras:

[1\. ... EXPORTING p1 = a1 p2 = a2 ...](#!ABAP_ADDITION_1@1@)
[2\. ... IMPORTING p1 = a1 p2 = a2 ...](#!ABAP_ADDITION_2@2@)
[3\. ... CHANGING p1 = a1 p2 = a2 ...](#!ABAP_ADDITION_3@3@)
[4\. ... RECEIVING r = a](#!ABAP_ADDITION_4@4@)
[5\. ... EXCEPTIONS exc1 = n1 exc2 = n2 ... *\[*OTHERS = n\_others*\]*](#!ABAP_ADDITION_5@5@)

Effect

With the exception of the addition EXCEPTIONS, these additions assign actual parameters a1 a2... to the formal parameters p1 p2 ... or r of the parameter interface of the called method. Any data objects (and some expressions) can be specified as actual parameters if they have a data type that matches the [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_glosry.htm "Glossary Entry") of the corresponding formal parameter in accordance with the rules of the [typing check](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_check.htm).

With the exception of the return code r for [functional methods](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctional_method_glosry.htm "Glossary Entry") and arithmetic expressions for input parameters, every formal parameter assumes all attributes of the assigned actual parameters when called. Non-class-based exceptions can be handled using the addition EXCEPTIONS. The order of the additions is fixed.

Notes

-   The formal parameters and non-class-based exceptions of a method are defined as its [parameter interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenparameter_interface_glosry.htm "Glossary Entry") using the additions of the statements [METHODS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods_parameters.htm) or [CLASS-METHODS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass-methods_general.htm) of global or local classes.
    
-   Unlike [function module calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_general.htm), static parameter passing is checked by the syntax check and not just by the extended program check.
    
-   A [system field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_field_glosry.htm "Glossary Entry") should [never be used an actual parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuse_actual_parameters_guidl.htm "Guideline").
    

Addition 1

... EXPORTING p1 = a1 p2 = a2 ...

Effect

This addition assigns actual parameters to the [input parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninput_parameter_glosry.htm "Glossary Entry") of the called method. EXPORTING can be used to assign actual parameters to the optional input parameters. It must be used to assign actual parameters to the non-optional input parameters. If [pass by reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpass_by_reference_glosry.htm "Glossary Entry") is used, a reference to an actual parameter is passed when the call is made. If [pass by value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpass_by_value_glosry.htm "Glossary Entry") is used, the content of an actual parameter is assigned to the corresponding formal parameter.

a1, a2, ... are [general expression positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"), which means that, alongside data objects, functions and expressions can also be passed as actual parameters. [Special rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_arith_expr.htm) apply in this case.

Notes

-   [Substring access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoffset_length.htm) is not possible after an actual parameter of type string or xstring specified after EXPORTING.
    
-   The addition EXPORTING can be omitted in the [short form](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_static_short.htm) of the static method call.
    

Example

Calls of a method with passing of actual parameters to input parameters. The first call is the syntax short form of the second call. Both work in the same way.

cl\_demo\_output=>display\_data( name  = 'Some text'
                              value = 'blah, blah ...' ).
cl\_demo\_output=>display\_data( EXPORTING name  = 'Some text'
                                        value = 'blah, blah ...' ).

Addition 2

... IMPORTING p1 = a1 p2 = a2 ...

Effect

This addition assigns actual parameters to the [output parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoutput_parameter_glosry.htm "Glossary Entry") of the called method. IMPORTING can be used to assign actual parameters to all output parameters, but this is not mandatory. If [pass by reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpass_by_reference_glosry.htm "Glossary Entry") is used, a reference is passed to an actual parameter when the call is made. If [pass by value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpass_by_value_glosry.htm "Glossary Entry") is used, the content of an output parameter is assigned to the actual parameter in question only if the method is completed without errors.

The actual parameters are [result positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenresult_position_glosry.htm "Glossary Entry"), which means that variables and [writable expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwritable_expression_glosry.htm "Glossary Entry") can be specified. [Special rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_arith_expr.htm) apply in this case.

-   Existing variables or writable expressions can be specified as actual parameters for [functional method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_functional.htm). Inline declarations, however, cannot be specified.
    
-   Inline declarations [DATA(var)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_inline.htm) can also be specified for [standalone method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_static_short.htm). If an inline declaration is specified and a formal parameter is fully typed, this type is used for the declaration. If the formal parameter is typed generically, the following data types are used:
    

-   string for csequence and clike

-   xstring for xsequence

-   decfloat34 for numeric and decfloat

-   p with the length 8 and no decimal places if p is generic

-   The [standard key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_key_glosry.htm "Glossary Entry") for a standard table type with a generic primary table key

Other generic data types cannot be made non-generic for inline declarations in any meaningful way and produce a syntax error.

Notes

-   If a formal parameter is typed with the generic type c or x, for example, string or xstring cannot be used as the type for an inline declaration, since this means the typing cannot be checked.
    
-   Functional method calls are located on the right side of assignments or are part of expressions where no inline declarations are possible.
    

Example

The method GET\_DOCU of the class CL\_ABAP\_DOCU\_ITF has two input parameters and two output parameters, plus a return value that indicates whether the method was executed successfully. [Functionally](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_functional.htm), the method is called as an operand of a [comparison expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomparison_expression_glosry.htm "Glossary Entry") in a logical expression. The values in the output are reused in further method calls only if the method completed successfully.

DATA: itf  TYPE tline\_tab,
      head TYPE thead.
IF cl\_abap\_docu\_itf=>get\_docu(
     EXPORTING langu = sy-langu
               object = 'ABENABAP'
     IMPORTING itf  = itf
               head = head ) = 0.
  cl\_abap\_docu\_itf=>get\_docu\_includes(
     EXPORTING head = head
     CHANGING  itf  = itf ).
ENDIF.

Addition 3

... CHANGING p1 = a1 p2 = a2 ...

Effect

This addition assigns actual parameters to the [input/output parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninput_output_parameter_glosry.htm "Glossary Entry") of the called method. CHANGING can be used to assign actual parameters to the optional input/output parameters. It must be used to assign actual parameters to the non-optional input/output parameters. If [pass by reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpass_by_reference_glosry.htm "Glossary Entry") is used, a reference to an actual parameter is passed when the call is made. If [pass by value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpass_by_value_glosry.htm "Glossary Entry") is used, the content of an actual parameter is assigned to the corresponding formal parameter. In [pass by value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpass_by_value_glosry.htm "Glossary Entry"), the modified content of an input/output parameter is assigned to the actual parameter in question only if the method is completed without errors.

The actual parameters are [result positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenresult_position_glosry.htm "Glossary Entry"), which means that variables and [writable expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwritable_expression_glosry.htm "Glossary Entry") can be specified. [Special rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_arith_expr.htm) apply in this case.

Example

Calls a method with an input/output parameter.

DATA(text) = \`...\`.
cl\_demo\_input=>request( CHANGING field = text ).

Addition 4

... RECEIVING r = a

Effect

This addition assigns an actual parameter to the [return value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreturn_value_glosry.htm "Glossary Entry") of the called method. This addition is only possible for [standalone method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_static_short.htm) and not for [functional method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_functional.htm). An actual parameter can be assigned to the return value of a [functional method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctional_method_glosry.htm "Glossary Entry") using RECEIVING. The data type of the actual parameter does not have to comply with the general rules of the [typing check](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_check.htm) and it is sufficient if the return value can be converted to the actual parameter in accordance with the [conversion rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_rules.htm).

If the method ends without errors, the content of the formal parameter is assigned to the actual parameter. The content is converted if necessary. If an exception is raised here, it cannot be handled and a runtime error always occurs.

The actual parameter is a [result position](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenresult_position_glosry.htm "Glossary Entry"), which means that variables and [writable expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwritable_expression_glosry.htm "Glossary Entry") can be specified. [Special rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_arith_expr.htm) apply in this case.

An existing variable or expression or an inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_inline.htm) can be specified as an actual parameter. An inline declaration is made as soon as the data type of the return value is known in full.

Note

The addition RECEIVING is not usually used for static method calls. A functional method with a return code is not usually called as a [standalone method call](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_static_short.htm) and is usually called as a [functional method call](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_functional.htm) in [operand positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperand_position_glosry.htm "Glossary Entry") instead.

Example

Calls of a functional method with return value. The first call is the usual [functional method call](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_functional.htm). The second call demonstrates the unusual use of the addition RECEIVING. The result is the same in both cases.

DATA html type string.
html = cl\_demo\_output=>get( 'blah, blah ...' ).
cl\_demo\_output=>get( EXPORTING data   = 'blah, blah ...'
                     RECEIVING output = html ).

Addition 5

... EXCEPTIONS exc1 = n1 exc2 = n2 ... *\[*OTHERS =n\_others*\]*

Effect

This addition is only possible for [standalone method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_static_short.htm) and not for [functional method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_functional.htm).

EXCEPTIONS can be used to assign return codes to [non-class-based exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexceptions_non_class.htm) exc1 exc2 ... declared in the parameter interface. Each exception exc1 exc2 ... that the caller wants to handle must be assigned to a directly specified number n1 n2 ... All numbers between 0 and 65535 can be specified. The behavior outside of this range is undefined.

OTHERS can be specified as the last entry after EXCEPTIONS to assign a common return code to all exceptions not specified explicitly in exc1 exc2.... This is done by assigning a number n\_others. The same return code can be assigned to different exceptions (including OTHERS). The behavior when an exception is raised is as follows:

-   If the statement [RAISE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapraise_exception.htm) or [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_raising.htm) is used to raise an exception exc1 exc2 ... (to which a return code is assigned), the statement is ended immediately, any procedure parameters passed by value are not filled, and the number n1 n2 ... assigned to the exception is available to be evaluated in sy-subrc .
    
-   If the call of an exception raised by [RAISE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapraise_exception.htm) does not assign a return code, the program terminates with a runtime error.
    
-   If the call of an exception raised by [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_raising.htm) does not assign a return code, the [message](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmessage_glosry.htm "Glossary Entry") is sent and the system resumes in accordance with the message type.
    

If no exception is raised, a call sets sy-subrc to 0.

The addition EXCEPTIONS cannot be specified in the call if RAISING is used to declare [class-based exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") in the parameter interface of the called procedure. The specified exceptions must be present in the parameter interface of the method.

Notes

-   If the value 0 is assigned to an exception, this indicates that the caller wants to ignore this exception. If the exception is raised in the method, no runtime error occurs, but the exception cannot be handled.
    
-   Information about the behavior of class-based exceptions in methods can be found in [Class-Based Exceptions in Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexceptions_procedures.htm).
    

Example

Handles non-class-based exceptions in a method call.

cl\_gui\_frontend\_services=>directory\_exist(
  EXPORTING
    directory            =  '...'
  RECEIVING
    result               =     DATA(flag)
  EXCEPTIONS
    cntl\_error           = 1
    error\_no\_gui         = 2
    wrong\_parameter      = 3
    not\_supported\_by\_gui = 4
    OTHERS               = 5 ).
IF sy-subrc <> 0.
  CASE sy-subrc.
    WHEN 1.
      ...
    ...
  ENDCASE.
ENDIF.