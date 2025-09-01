# ABAP - Keyword Documentation / ABAP - Programming Language / Program Flow Logic / Conditional Expressions

Included pages: 6


### abenconditional_expressions.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Conditional Expressions, ABENCONDITIONAL_EXPRESSIONS, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

Conditional Expressions

A conditional expression is a [constructor expression](javascript:call_link\('abenconstructor_expressions.htm'\)) that creates a value or raises a class-based exception depending on a logical expression or a case distinction. Conditional expressions are constructed using the following conditional operators:

-   [COND](javascript:call_link\('abenconditional_expression_cond.htm'\))
-   [SWITCH](javascript:call_link\('abenconditional_expression_switch.htm'\))

Continue
[COND, Conditional Operator](javascript:call_link\('abenconditional_expression_cond.htm'\))
[SWITCH, Conditional Operator](javascript:call_link\('abenconditional_expression_switch.htm'\))
[COND, SWITCH, result](javascript:call_link\('abenconditional_expression_result.htm'\))
[COND, SWITCH, Type Inference for Actual Parameters](javascript:call_link\('abencond_constructor_inference.htm'\))
![Example](exa.gif "Example") [Conditional Operator, Type Inference](javascript:call_link\('abencond_type_inference_abexa.htm'\))


### abenconditional_expression_cond.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Conditional Expressions](javascript:call_link\('abenconditional_expressions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: COND, Conditional Operator, ABENCONDITIONAL_EXPRESSION_COND, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

COND, Conditional Operator

Syntax

... COND type( *\[*[let\_exp](javascript:call_link\('abaplet.htm'\))*\]*
               WHEN [log\_exp1](javascript:call_link\('abenlogexp.htm'\)) THEN *\[* [let\_exp](javascript:call_link\('abaplet.htm'\))*\]* [result1](javascript:call_link\('abenconditional_expression_result.htm'\))
             *\[* WHEN [log\_exp2](javascript:call_link\('abenlogexp.htm'\)) THEN *\[* [let\_exp](javascript:call_link\('abaplet.htm'\))*\]* [result2](javascript:call_link\('abenconditional_expression_result.htm'\)) *\]*
             ...
             *\[* ELSE *\[* [let\_exp](javascript:call_link\('abaplet.htm'\))*\]* [resultn](javascript:call_link\('abenconditional_expression_result.htm'\)) *\]* ) ...

Effect

A [conditional expression](javascript:call_link\('abenconditional_expression_glosry.htm'\) "Glossary Entry") with the conditional operator COND has a result, [result](javascript:call_link\('abenconditional_expression_result.htm'\)), that is dependent on logical expressions. Either a value with the data type specified by type is created or a class-based exception is raised. The following can be specified for type:

-   A non-generic data type dtype.
-   The # character as a symbol for the [operand type](javascript:call_link\('abenoperand_type_glosry.htm'\) "Glossary Entry").
    -   If the data type required in an operand position is unique and known completely, this type is used.
    -   If the operand type is not known completely, an operand with a type known statically must be specified after the first THEN, except when passing the constructor parameter to an actual parameter with a generically typed formal parameter, and this type is then used. No [THROW](javascript:call_link\('abenconditional_expression_result.htm'\)) statement can be specified after THEN in this case.
    -   If the constructor expression is passed to an actual parameter with a generically typed formal parameter, the operand type is derived in accordance with [special rules](javascript:call_link\('abencond_constructor_inference.htm'\)).
    -   In other cases, the character # cannot be specified.

All operands specified after THEN must be convertible to the data type determined by type. In the case of reference variables, an [upcast](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry") must be possible.

WHEN must be specified at least once with any [logical expression](javascript:call_link\('abenlogical_expression_glosry.htm'\) "Glossary Entry") [log\_exp](javascript:call_link\('abenlogexp.htm'\)) in the parentheses. This can be followed by any number of WHEN statements with further logical expressions. An ELSE can be specified at the end. The expression evaluates the logical expressions one after the other and selects the [result](javascript:call_link\('abenconditional_expression_result.htm'\)) specified after THEN of the first logical expression whose result is true. The selected [result](javascript:call_link\('abenconditional_expression_result.htm'\)) determines the result of the conditional expression. If none of the logical expressions are true, the [result](javascript:call_link\('abenconditional_expression_result.htm'\)) specified after ELSE is selected. If ELSE is not specified, the result is the initial value of the data type type.

To define local helper fields, an optional [LET expression](javascript:call_link\('abaplet.htm'\)) can be specified before the first WHEN, after every THEN, and after ELSE.

Hints

-   The rules for derivations of the type where # is specified for actual parameters that are passed to generically typed formal parameters can prevent syntax errors in programs that call a procedure and in which the complete typing of a formal parameter is subsequently generalized by converting to a generic type.
-   No suitable complete type can be derived for formal parameters with the generic types c, n, and x.

Example

Transformation of a time to 12 hour format using a conditional expression in an operand position. The type of the result is used by the operand after the first THEN specification and is therefore string.

CLASS cx\_cant\_be DEFINITION INHERITING FROM cx\_no\_check.
ENDCLASS.
cl\_demo\_output=>display(
  COND #( LET t = '120000' IN
          WHEN sy-timlo < t THEN
            |{ sy-timlo TIME = ISO } AM|
          WHEN sy-timlo > t AND sy-timlo < '240000' THEN
            |{ CONV t( sy-timlo - 12 \* 3600 ) TIME = ISO } PM|
          WHEN sy-timlo = t THEN
            |High Noon|
          ELSE
            THROW cx\_cant\_be( ) ) ).


### abenconditional_expression_switch.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Conditional Expressions](javascript:call_link\('abenconditional_expressions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SWITCH, Conditional Operator, ABENCONDITIONAL_EXPRESSION_SWITCH, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SWITCH, Conditional Operator

Syntax

... SWITCH type( *\[*[let\_exp](javascript:call_link\('abaplet.htm'\))*\]*
                 operand
                 WHEN const1 THEN *\[* [let\_exp](javascript:call_link\('abaplet.htm'\))*\]* [result1](javascript:call_link\('abenconditional_expression_result.htm'\))
               *\[* WHEN const2 THEN *\[* [let\_exp](javascript:call_link\('abaplet.htm'\))*\]* [result2](javascript:call_link\('abenconditional_expression_result.htm'\)) *\]*
               ...
               *\[* ELSE *\[* [let\_exp](javascript:call_link\('abaplet.htm'\))*\]* [resultn](javascript:call_link\('abenconditional_expression_result.htm'\)) *\]* ) ...

Effect

A [conditional expression](javascript:call_link\('abenconditional_expression_glosry.htm'\) "Glossary Entry") with the conditional operator SWITCH has a result, [result](javascript:call_link\('abenconditional_expression_result.htm'\)), that is dependent on a case distinction. Either a value with the data type specified by type is produced or a class-based exception is raised. The following can be specified for type:

-   A non-generic data type dtype.
-   The # character as a symbol for the [operand type](javascript:call_link\('abenoperand_type_glosry.htm'\) "Glossary Entry").
    -   If the data type required in an operand position is unique and known completely, this type is used.
    -   If the operand type is not known completely, an operand with a type known statically must be specified after the first THEN, except when passing the constructor parameter to an actual parameter with a generically typed formal parameter, and this type is then used. No [THROW](javascript:call_link\('abenconditional_expression_result.htm'\)) statement can be specified after THEN in this case.
    -   If the constructor expression is passed to an actual parameter with a generically typed formal parameter, the operand type is derived in accordance with [special rules](javascript:call_link\('abencond_constructor_inference.htm'\)).
    -   In other cases, the character # cannot be specified.

All operands specified after THEN must be convertible to the data type determined by type. In the case of reference variables, an [upcast](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry") must be possible.

The position operand in the parentheses is the value that is checked in the case distinction. This is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"). It must be followed by at least one WHEN. Literals and [constants](javascript:call_link\('abenconstant_glosry.htm'\) "Glossary Entry") can be specified for const after WHEN. It must be possible to [compare](javascript:call_link\('abenlogexp_rules.htm'\)) them with operand. [Substring access](javascript:call_link\('abenoffset_length.htm'\)) is not possible. This can be followed by any number of WHEN statements with further constant values. An ELSE can be specified at the end. This expression compares the values of the operand operand with the specified constant values one after another and chooses the [result](javascript:call_link\('abenconditional_expression_result.htm'\)) after THEN for which the values of operand and constant are identical for the first time. The selected [result](javascript:call_link\('abenconditional_expression_result.htm'\)) determines the result of the conditional expression. If no matches are found, the [result](javascript:call_link\('abenconditional_expression_result.htm'\)) specified after ELSE is selected. If ELSE is not specified, the result is the initial value of the data type type.

If a specification after THEN or ELSE can be selected, either the result is set or a class-based exception is raised, just as with a conditional expression [COND](javascript:call_link\('abenconditional_expression_cond.htm'\)).

To define local helper fields, an optional [LET expression](javascript:call_link\('abaplet.htm'\)) can be specified in front of the operand operand, after every THEN, and after ELSE.

Hints

-   No [text symbols](javascript:call_link\('abentext_symbol_glosry.htm'\) "Glossary Entry") for const can be specified after WHEN.
-   A conditional expression with SWITCH has the same meaning as the following conditional expression with [COND](javascript:call_link\('abenconditional_expression_cond.htm'\)):
    
    COND type( WHEN operand = const1 THEN result1
             *\[* WHEN operand = const2 THEN result2 *\]*
             ...
             *\[* ELSE resultn *\]* )
    
-   The rules for derivations of the type where # is specified for actual parameters that are passed to generically typed formal parameters can prevent syntax errors in programs that call a procedure and in which the complete typing of a formal parameter is subsequently generalized by converting to a generic type.
-   No suitable complete type can be derived for formal parameters with the generic types c, n, and x.

Example

Conditional operator SWITCH in an operand position in a loop. The loop is exited when the exception after ELSE is caught.

CLASS cx\_overflow DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
FINAL(out) = cl\_demo\_output=>new( ).
DO.
  TRY.
      out->write(
        SWITCH string( sy-index
                       WHEN 1 THEN 'one'
                       WHEN 2 THEN 'two'
                       WHEN 3 THEN 'three'
                       ELSE THROW cx\_overflow( ) ) ).
    CATCH cx\_overflow.
      out->display( ).
      EXIT.
  ENDTRY.
ENDDO.


### abenconditional_expression_result.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Conditional Expressions](javascript:call_link\('abenconditional_expressions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: COND, SWITCH, result, ABENCONDITIONAL_EXPRESSION_RESULT, 757%0D%0A%0D%0AError:%0D%0A%
0D%0A%0D%0A%0D%0ASuggestion for improvement:)

COND, SWITCH, result

Syntax

...   operand
  *|* *{* THROW *\[*RESUMABLE*|*SHORTDUMP*\]* cx\_class( *\[* [message](javascript:call_link\('abapraise_exception_message.htm'\))*\]*
                                            *\[*p1 = a1 p2 = a2 ...*\]* ) *}* ...

Alternatives:

[1\. ... operand](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... THROW *\[*RESUMABLE*|*SHORTDUMP*\]* cx\_class( *\[*message*\]* *\[*p1 = a1 p2 = a2 ...*\]* )](#!ABAP_ALTERNATIVE_2@2@)

Effect

These specifications after THEN and ELSE in the [conditional expressions](javascript:call_link\('abenconditional_expression_glosry.htm'\) "Glossary Entry") [COND](javascript:call_link\('abenconditional_expression_cond.htm'\)) and [SWITCH](javascript:call_link\('abenconditional_expression_cond.htm'\)) determine the result of the expression when the corresponding branch is selected.

Alternative 1   

... operand

Effect

If an operand operand is specified, its value is converted to the data type type if necessary and returned as the result of the conditional expression. operand is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry") with the following restrictions:

-   If operand is specified as a [string expression](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry"), type must be character-like.
-   If operand is specified as a [bit expression](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry"), type must be byte-like.

Hint

When an operand is specified, the conditional operators COND and SWITCH create a temporary data object whose data type is determined by the specified type and whose content is determined by the selected operand. This data object is used as the operand of a statement and then deleted. It is deleted either when the current statement is completed or when a relational expression is evaluated after the truth value is determined.

Example

Specification of the operands sum and sum + 1. The number of times a random number is less than half of its maximum value is counted.

FINAL(rnd) = cl\_abap\_random\_int=>create(
  seed = CONV i( sy-uzeit ) min = 1 max = 101 ).
DATA(sum) = 0.
DO 100 TIMES.
  sum = COND i( WHEN rnd->get\_next( ) <= 50 THEN sum + 1
                                            ELSE sum ).
ENDDO.
cl\_demo\_output=>display( sum ).

Alternative 2   

... THROW *\[*RESUMABLE*|*SHORTDUMP*\]* cx\_class( *\[*message*\]* *\[*p1 = a1 p2 = a2 ...*\]* )

Effect

The specification of THROW raises either an exception or a runtime error.

-   If the addition SHORTDUMP is not specified, THROW works like the statement [RAISE EXCEPTION TYPE](javascript:call_link\('abapraise_exception_class.htm'\)) and raises an exception of the [exception class](javascript:call_link\('abenexception_class_glosry.htm'\) "Glossary Entry") cx\_class. The following applies here:
    -   The addition RESUMABLE can be used to make the exception resumable.
    -   A message can be passed to the exception object using the addition [message](javascript:call_link\('abapraise_exception_message.htm'\)).
    -   The input parameters p1, p2, ... of the instance constructor can be filled with actual parameters a1, a2.
-   If the addition SHORTDUMP is specified, THROW works like the statement [RAISE SHORTDUMP TYPE](javascript:call_link\('abapraise_shortdump.htm'\)) and raises a runtime error with the [exception class](javascript:call_link\('abenexception_class_glosry.htm'\) "Glossary Entry") cx\_class, whereby a message can be also passed and the input parameters can be filled.

Hints

-   If the exception class is specified after THROW, the parentheses must always be specified, even if no messages or actual parameters are passed. EXPORTING cannot be specified, nor is it necessary.
-   Like the statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)), the specification THROW without the addition SHORTDUMP cannot be used in a method or function module in whose interface [non-class-based](javascript:call_link\('abenexceptions_non_class.htm'\)) exceptions are declared. Furthermore, it does not allow simultaneous use of the statement [CATCH SYSTEM-EXCEPTIONS](javascript:call_link\('abapcatch_sys.htm'\)) for the obsolete handling of [catchable runtime errors](javascript:call_link\('abencatchable_runtime_error_glosry.htm'\) "Glossary Entry"), and the statements [RAISE](javascript:call_link\('abapraise_exception.htm'\)) or [MESSAGE RAISING](javascript:call_link\('abapmessage_raising.htm'\)) to raise non-class-based exceptions in the current processing block.

Example

Raising of an exception of the class CX\_DEMO\_DYN\_T100 that implements the interface [IF\_T100\_DYN\_MSG](javascript:call_link\('abenif_t100_dyn_msg.htm'\)).

DATA cflag TYPE abap\_bool.
...
TRY.
    FINAL(iflag) = COND i( WHEN cflag = abap\_true  THEN 1
                          WHEN cflag = abap\_false THEN 0
                          ELSE THROW cx\_demo\_dyn\_t100(
                                 MESSAGE e888(sabapdemos)
                                   WITH 'Illegal value!' '' '' '' ) ).
  CATCH cx\_demo\_dyn\_t100.
    ...
ENDTRY.

Example

Raising of a runtime error with an exception object of the class CX\_DEMO\_DYN\_T100, which implements the interface [IF\_T100\_DYN\_MSG](javascript:call_link\('abenif_t100_dyn_msg.htm'\)).

FINAL(time) = COND t( WHEN sy-timlo BETWEEN '090000' AND '170000'
                       THEN sy-timlo
                     ELSE
                       THROW SHORTDUMP cx\_demo\_dyn\_t100(
                          MESSAGE e888(sabapdemos)
                                  WITH \`I\` \`don't\` \`work\` \`now!\` ) ).


### abencond_constructor_inference.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Conditional Expressions](javascript:call_link\('abenconditional_expressions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: COND, SWITCH, Type Inference for Actual Parameters, ABENCOND_CONSTRUCTOR_INFERENCE, 7
57%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

COND, SWITCH, Type Inference for Actual Parameters

If the following constructor expression is passed to generically typed formal parameters as an actual parameter using the character # as a symbol for the operand type, the following type inference is performed for the character #:

[COND](javascript:call_link\('abenconditional_expression_cond.htm'\))*|*[SWITCH](javascript:call_link\('abenconditional_expression_switch.htm'\)) #( ... THEN ... )

is passed to generically typed formal parameters as an actual parameter using the character # as a symbol for the operand type, the following type inference is performed for the character #:

-   If the data type of the operand after the first THEN is known statically and matches the generic type of the formal parameter, this data type is used.
-   If the data type of the operand after the first THEN is known statically and does not match the generic type of the formal parameter or if it is not known statically, the type is derived from the generic type as follows:
    -   string for csequence and clike
    -   xstring for xsequence
    -   decfloat34 for numeric and decfloat
    -   p with the length 8 and no decimal places if p is generic
    -   The [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry") for a standard table type with generic primary table key
        
        Generic data types other than table types that are explicitly generic with respect to their secondary table keys cannot be made more concrete and produce a syntax error. More specifically, this applies to the types c, n, and x with generic lengths.
        

Hint

The rules for derivations of the type where # is specified for actual parameters that are passed to generically typed formal parameters can prevent syntax errors in programs that call a procedure and in which the complete typing of a formal parameter is subsequently generalized by converting to a generic type.

Example

The operator COND generates a result of type string in this case. The generic parameter p has this type during the execution of the method, which is displayed by the value "g" returned by [DESCRIBE FIELD](javascript:call_link\('abapdescribe_field.htm'\)). The method call leads to a corresponding syntax warning.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main IMPORTING p TYPE csequence.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DESCRIBE FIELD p TYPE DATA(t).
    cl\_demo\_output=>display( |{ p } of type { t }| ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  FIELD-SYMBOLS:
    <fs1> TYPE any,
    <fs2> TYPE any.
  ASSIGN 'AM' TO <fs1>.
  ASSIGN 'PM' TO <fs2>.
  demo=>main( COND #( WHEN sy-timlo < '120000' THEN <fs1>
                                               ELSE <fs2> ) ).

Executable Example

[Conditional Operator, Type Inference](javascript:call_link\('abencond_type_inference_abexa.htm'\))


### abencond_type_inference_abexa.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Conditional Expressions](javascript:call_link\('abenconditional_expressions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Conditional Operator, Type Inference, ABENCOND_TYPE_INFERENCE_ABEXA, 757%0D%0A%0D%0AE
rror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Conditional Operator, Type Inference

This example demonstrates a type inference for the conversion operator [COND](javascript:call_link\('abenconditional_expression_cond.htm'\)).

Source Code   

REPORT demo\_cond\_type\_inference.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    TYPES c10 TYPE c LENGTH 10.
    CLASS-METHODS:
      main,
      meth1 IMPORTING p TYPE c10,
      meth2 IMPORTING p TYPE c,
      meth3 IMPORTING p TYPE csequence,
      descr IMPORTING p TYPE any.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FIELD-SYMBOLS <fs> TYPE any.
    DATA txt TYPE c LENGTH 20.
    DATA num TYPE i.
    ASSIGN num TO <fs>.
    demo=>meth1( p = COND #( WHEN 1 = 1 THEN txt ) ).
    demo=>meth1( p = COND #( WHEN 1 = 1 THEN txt ) ).
    demo=>meth1( p = COND #( WHEN 1 = 1 THEN <fs> ) ).
    cl\_demo\_output=>line( ).
    demo=>meth2( p = COND #( WHEN 1 = 1 THEN txt ) ).
   "demo=>meth2( p = COND #( WHEN 1 = 1 THEN num ) ).  "not possible
   "demo=>meth2( p = COND #( WHEN 1 = 1 THEN <fs> ) ). "not possible
    cl\_demo\_output=>line( ).
    demo=>meth3( p = COND #( WHEN 1 = 1 THEN txt ) ).
    demo=>meth3( p = COND #( WHEN 1 = 1 THEN num ) )  ##type.
    demo=>meth3( p = COND #( WHEN 1 = 1 THEN <fs> ) ) ##type.
    cl\_demo\_output=>display( ).  ENDMETHOD.
  METHOD meth1.
    descr( p ).
  ENDMETHOD.
  METHOD meth2.
    descr( p ).
  ENDMETHOD.
  METHOD meth3.
    descr( p ).
  ENDMETHOD.
  METHOD descr.
    DATA type   TYPE string.
    DATA length TYPE i.
    DESCRIBE FIELD p TYPE type.
    IF type = 'g'.
      type = 'STRING'.
      length = strlen( p ).
    ELSE.
      DESCRIBE FIELD p LENGTH length IN CHARACTER MODE.
    ENDIF.
    cl\_demo\_output=>write( |{ type } { length }| ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Constructor expressions with the conditional operator [COND](javascript:call_link\('abenconditional_expression_cond.htm'\)) are passed to differently typed formal parameters of methods. In the case of generic formal parameters, [special rules](javascript:call_link\('abencond_constructor_inference.htm'\)) apply when determining the operand type. Replacing the conditional operator COND with [SWITCH](javascript:call_link\('abenconditional_expression_switch.htm'\)) produces the same results.

-   Completely typed formal parameter
    
    When the method meth1 is called with a completely typed formal parameter, the operand type for # is determined using this parameter and the result of the conditional expression is converted to c with length 10 in all three calls.
    
-   Formal parameter typed generically with c
    
    The operand type for # is determined from the data type of the operand after THEN.
    
    -   In the first call, the type c with length 20 of the operand after THEN matches the generic type and is used.
    -   In the second call, the type i of the operand after THEN does not match the generic type and the call is not possible.
    -   In the third call, no type can be derived from the generically typed field symbol <fs> after THEN. No call is possible here, since there is no inference rule for the generic type c.
-   Formal parameter typed generically with csequence
    -   In the first call, the type c with length 20 of the operand after THEN matches the generic type and is used.
    -   In the second call, the type i of the operand after THEN does not match the generic type and the type string is used, which is indicated by a syntax check warning.
    -   In the third call, no type is derived from the generically typed field symbol <fs> after THEN and the type string is used, which is indicated by a syntax check warning.
