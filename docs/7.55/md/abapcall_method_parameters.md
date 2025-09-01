  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and exiting program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) →  [Calling Procedures](javascript:call_link\('abencall_procedures.htm'\)) →  [Method Calls](javascript:call_link\('abenmethod_calls.htm'\)) →  [Static Method Calls](javascript:call_link\('abenmethod_calls_static.htm'\)) → 

meth( ... ), Parameter Passing

[Short Reference](javascript:call_link\('abapcall_method_shortref.htm'\))

Syntax

... *\[*EXPORTING  p1 = a1 p2 = a2 ...*\]*
    *\[*IMPORTING  p1 = a1 p2 = a2 ...*\]*
    *\[*CHANGING   p1 = a1 p2 = a2 ...*\]*
    *\[*RECEIVING  r  = a  *\]*
    *\[*EXCEPTIONS *\[*exc1 = n1 exc2 = n2 ...*\]*
                *\[*OTHERS = n\_others*\]* *\]*.

Additions:

[1\. ... EXPORTING p1 = a1 p2 = a2 ...](#!ABAP_ADDITION_1@1@)
[2\. ... IMPORTING p1 = a1 p2 = a2 ...](#!ABAP_ADDITION_2@2@)
[3\. ... CHANGING p1 = a1 p2 = a2 ...](#!ABAP_ADDITION_3@3@)
[4\. ... RECEIVING r = a](#!ABAP_ADDITION_4@4@)
[5\. ... EXCEPTIONS exc1 = n1 exc2 = n2 ... *\[*OTHERS = n\_others*\]*](#!ABAP_ADDITION_5@5@)

Effect

Apart from the addition EXCEPTIONS, these additions assign actual parameters a1 a2... to the formal parameters p1 p2 ... or r of the parameter interface of the called method. Any data objects (and some expressions) can be specified as actual parameters if their data type matches the [typing](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry") of the corresponding formal parameter in accordance with the rules of the [typing check](javascript:call_link\('abentyping_check.htm'\)).

With the exception of the return value r for [functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") and the specification of arithmetic expressions for input parameters, every formal parameter assumes all attributes of the assigned actual parameters when called. Non-class-based exceptions can be handled using the addition EXCEPTIONS. The order of the additions is fixed.

Hints

-   The formal parameters and non-class-based exceptions of a method are defined as its [parameter interface](javascript:call_link\('abenparameter_interface_glosry.htm'\) "Glossary Entry") using the additions of the statements [METHODS](javascript:call_link\('abapmethods_parameters.htm'\)) or [CLASS-METHODS](javascript:call_link\('abapclass-methods_general.htm'\)) of global or local classes.

-   Unlike [function module calls](javascript:call_link\('abapcall_function_general.htm'\)), static parameter passing is checked by the syntax check and not just by the extended program check.

-   A [system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") should [never be used as an actual parameter](javascript:call_link\('abenuse_actual_parameters_guidl.htm'\) "Guideline").
    

Addition 1

... EXPORTING p1 = a1 p2 = a2 ...

Effect

This addition assigns actual parameters to the [input parameters](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry") of the called method. EXPORTING can be used to assign actual parameters to the optional input parameters and it must be used to assign actual parameters to the non-optional input parameters. In [pass by reference](javascript:call_link\('abenpass_by_reference_glosry.htm'\) "Glossary Entry"), a reference to an actual parameter is passed when the call is made. In [pass by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry"), the content of an actual parameter is assigned to the relevant formal parameter.

a1, a2, ... are [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"), which means that, in addition to data objects, functions and expressions can also be passed as actual parameters. [Special rules](javascript:call_link\('abentyping_arith_expr.htm'\)) apply in this case.

Hints

-   No [substring access](javascript:call_link\('abenoffset_length.htm'\)) is possible after an actual parameter of type string or xstring specified after EXPORTING.

-   The addition EXPORTING can also be omitted in the [short form](javascript:call_link\('abapcall_method_static_short.htm'\)) of the static method call.
    

Example

Calls of a method with passing of actual parameters to input parameters. The first call is the syntax short form of the second call. Both have the same functionality.

cl\_demo\_output=>display\_data( name  = 'Some text'
                              value = 'blah, blah ...' ).
cl\_demo\_output=>display\_data( EXPORTING name  = 'Some text'
                                        value = 'blah, blah ...' ).

Addition 2

... IMPORTING p1 = a1 p2 = a2 ...

Effect

This addition assigns actual parameters to the [output parameters](javascript:call_link\('abenoutput_parameter_glosry.htm'\) "Glossary Entry") of the called method. IMPORTING can be used to assign actual parameters to all output parameters, but this is not mandatory. In [pass by reference](javascript:call_link\('abenpass_by_reference_glosry.htm'\) "Glossary Entry"), a reference is passed to an actual parameter when the call is made. In [pass by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry"), the content of an output parameter is assigned to the relevant actual parameter only if the method is completed without errors.

The actual parameters are [result positions](javascript:call_link\('abenresult_position_glosry.htm'\) "Glossary Entry"), which means that variables and [writable expressions](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") can be specified. [Special rules](javascript:call_link\('abentyping_arith_expr.htm'\)) apply in this case.

-   Existing variables or writable expressions can be specified as actual parameters for [functional method calls](javascript:call_link\('abapcall_method_functional.htm'\)). Inline declarations, however, cannot be specified.

-   Inline declarations [DATA(var)](javascript:call_link\('abendata_inline.htm'\)) can also be specified for [standalone method calls](javascript:call_link\('abapcall_method_static_short.htm'\)). If an inline declaration is specified and a formal parameter is completely typed, this type is used for the declaration. If the formal parameter is typed generically, the following data types are used:

-   string for csequence and clike

-   xstring for xsequence

-   decfloat34 for numeric and decfloat

-   p with the length 8 and no decimal places if p is generic

-   The [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry") for a standard table type with a generic primary table key

Other generic data types cannot be specified correctly for inline declarations and produce a syntax error.

Hints

-   If a formal parameter is typed with the generic type c or x, for example, string or xstring cannot be used as the type for an inline declaration, since the typing cannot be checked.

-   Functional method calls are on the right side of assignments or are part of expressions where no inline declarations are possible.
    

Example

The method GET\_DOCU of the class CL\_ABAP\_DOCU\_ITF has two input parameters and two output parameters, as well as a return value that indicates whether the method was executed successfully. [Functionally](javascript:call_link\('abapcall_method_functional.htm'\)), the method is called as an operand of a [comparison expression](javascript:call_link\('abencomparison_expression_glosry.htm'\) "Glossary Entry") in a logical expression. The values in the output are reused in further method calls only if the method completed successfully.

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

This addition assigns actual parameters to the [input/output parameters](javascript:call_link\('abeninput_output_parameter_glosry.htm'\) "Glossary Entry") of the called method. CHANGING can be used to assign actual parameters to the optional input/output parameters and it must be used to assign actual parameters to the non-optional input/output parameters. In [pass by reference](javascript:call_link\('abenpass_by_reference_glosry.htm'\) "Glossary Entry"), a reference to an actual parameter is passed when the call is made. In [pass by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry"), the content of an actual parameter is assigned to the relevant formal parameter. In [pass by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry"), the modified content of an input/output parameter is assigned to the relevant actual parameter only if the method is completed without errors.

The actual parameters are [result positions](javascript:call_link\('abenresult_position_glosry.htm'\) "Glossary Entry"), which means that variables and [writable expressions](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") can be specified. [Special rules](javascript:call_link\('abentyping_arith_expr.htm'\)) apply in this case.

Example

Call of a method with an input/output parameter.

DATA(text) = \`...\`.
cl\_demo\_input=>request( CHANGING field = text ).

Addition 4

... RECEIVING r = a

Effect

This addition assigns an actual parameter to the [return value](javascript:call_link\('abenreturn_value_glosry.htm'\) "Glossary Entry") of the called method. It is only possible for [standalone method calls](javascript:call_link\('abapcall_method_static_short.htm'\)) and not for [functional method calls](javascript:call_link\('abapcall_method_functional.htm'\)). An actual parameter can be assigned to the return value of a [functional method](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") using RECEIVING. The data type of the actual parameter does not have to follow the general rules of the [typing check](javascript:call_link\('abentyping_check.htm'\)) and it is sufficient if the return value can be converted to the actual parameter in accordance with the [conversion rules](javascript:call_link\('abenconversion_rules.htm'\)).

If the method is completed without errors, the content of the formal parameter is assigned to the actual parameter. The content is converted if necessary. If an exception is raised here, it cannot be handled and a runtime error always occurs instead.

The actual parameter is a [result position](javascript:call_link\('abenresult_position_glosry.htm'\) "Glossary Entry"), which means that variables and [writable expressions](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") can be specified. [Special rules](javascript:call_link\('abentyping_arith_expr.htm'\)) apply in this case.

An existing variable or expression or an inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)) can be specified as an actual parameter. An inline declaration is made as soon as the data type of the return value is fully known.

Hint

The addition RECEIVING is not usually used for static method calls. A functional method with a return value is not usually called as a [standalone method call](javascript:call_link\('abapcall_method_static_short.htm'\)) but as a [functional method call](javascript:call_link\('abapcall_method_functional.htm'\)) in [operand positions](javascript:call_link\('abenoperand_position_glosry.htm'\) "Glossary Entry") instead.

Example

Calls of a functional method with return value. The first call is the usual [functional method call](javascript:call_link\('abapcall_method_functional.htm'\)). The second call demonstrates the unusual use of the addition RECEIVING. The result is the same in both cases.

DATA html type string.
html = cl\_demo\_output=>get( 'blah, blah ...' ).
cl\_demo\_output=>get( EXPORTING data   = 'blah, blah ...'
                     RECEIVING output = html ).

Addition 5

... EXCEPTIONS exc1 = n1 exc2 = n2 ... *\[*OTHERS =n\_others*\]*

Effect

This addition is only possible for [standalone method calls](javascript:call_link\('abapcall_method_static_short.htm'\)) and not for [functional method calls](javascript:call_link\('abapcall_method_functional.htm'\)).

EXCEPTIONS can be used to assign return values to [non-class-based exceptions](javascript:call_link\('abenexceptions_non_class.htm'\)) exc1 exc2 ... declared in the parameter interface. Each exception exc1 exc2 ... that the caller wants to handle must be assigned to a directly specified number n1 n2 ... All numbers between 0 and 65535 can be specified. The behavior outside of this range is undefined.

By specifying OTHERS as the last entry after EXCEPTIONS, a common return value can be assigned to all exceptions not specified explicitly in exc1 exc2.... This is done by assigning a number n\_others. The same return value can be assigned to different exceptions (including OTHERS). The behavior when an exception is raised is as follows:

-   If the statement [RAISE](javascript:call_link\('abapraise_exception.htm'\)) or [MESSAGE RAISING](javascript:call_link\('abapmessage_raising.htm'\)) is used to raise an exception exc1 exc2 ... to which a return value is assigned, the statement is terminated immediately, any procedure parameters passed by value are not filled, and the number n1 n2 ... assigned to the exception is available to be evaluated in sy-subrc .

-   If the call of an exception raised by [RAISE](javascript:call_link\('abapraise_exception.htm'\)) does not assign a return value, the program is terminated with a runtime error.

-   If the call of an exception raised by [MESSAGE RAISING](javascript:call_link\('abapmessage_raising.htm'\)) does not assign a return value, the [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") is sent, and the system resumes in accordance with the message type.

If no exception is raised, a call sets sy-subrc to 0.

The addition EXCEPTIONS cannot be specified in the call if RAISING is used to declare [class-based exceptions](javascript:call_link\('abenclass_based_exception_glosry.htm'\) "Glossary Entry") in the parameter interface of the called procedure. The specified exceptions must exist in the parameter interface of the method.

Hints

-   If the value 0 is assigned to an exception, this indicates that the caller wants to ignore this exception. If the exception is raised in the method, no runtime error occurs, but the exception cannot be handled.

-   For more information about the behavior of class-based exceptions in methods, see [Class-Based Exceptions in Procedures](javascript:call_link\('abenexceptions_procedures.htm'\)).
    

Example

Handling of non-class-based exceptions in a method call.

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