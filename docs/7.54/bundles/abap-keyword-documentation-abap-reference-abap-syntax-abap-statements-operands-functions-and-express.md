# ABAP Keyword Documentation / ABAP − Reference / ABAP Syntax / ABAP Statements / Operands / Functions and Expressions in Operand Positions

Included pages: 15


### abenoperands_expressions.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands.htm) → 

Functions and Expressions in Operand Positions

[Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_glosry.htm "Glossary Entry") and [expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_glosry.htm "Glossary Entry") can be specified in certain [reading positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreading_position_glosry.htm "Glossary Entry").

-   [Functions and Expressions for Operand Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctions_expressions.htm)

-   [Operand Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions.htm)

Note

The program DEMO\_EXPRESSIONS shows examples of how functions and expressions are used.

Continue
[Functions and Expressions for Operand Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctions_expressions.htm)
[Operand Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions.htm)


### abenfunctions_expressions.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands.htm) →  [Functions and Expressions in Operand Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands_expressions.htm) → 

Functions and Expressions for Operand Positions

-   [Writing Positions](#@@ITOC@@ABENFUNCTIONS_EXPRESSIONS_1)

-   [Reading Positions](#@@ITOC@@ABENFUNCTIONS_EXPRESSIONS_2)

Writing Positions

The following expressions can be specified in [writing positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwriting_position_glosry.htm "Glossary Entry"):

-   [Declaration expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclaration_expression_glosry.htm "Glossary Entry")

-   ... [DATA(...)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_inline.htm) ...

-   ... [FIELD-SYMBOL(...)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfield-symbol_inline.htm) ...

-   [Writable expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwritable_expression_glosry.htm "Glossary Entry")

-   The [constructor expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") NEW class( ... [)->attr](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennew_constructor_params_class.htm) and [CAST type( ... )->dobj](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_cast.htm)

-   [Table expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expression_glosry.htm "Glossary Entry") [itab\[ ... \]](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expressions.htm) and their [chainings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_exp_chaining.htm)

Reading Positions

Functions that can be executed in a read position are

-   [Built-in functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredefined_function_glosry.htm "Glossary Entry")
    ... [func( arg )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_functions_syntax.htm) ...
    ... [... func( val = arg p1 = arg1 p2 = arg2 ... )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_functions_syntax.htm) ...
    

-   [Functional methods](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctional_method_glosry.htm "Glossary Entry")
    ... [meth( )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_functional.htm) ...
    ... [meth( a )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_functional.htm) ...
    ... [meth( p1 = a1 p2 = a2 ... )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_functional.htm) ...
    ... [meth( *\[*EXPORTING  p1 = a1 p2 = a2 ...*\]*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_functional.htm)
              [*\[*IMPORTING  p1 = a1 p2 = a2 ...*\]*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_functional.htm)
              [*\[*CHANGING   p1 = a1 p2 = a2 ...*\]* )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_functional.htm) ...
    

-   [Method chaining](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_chaining_glosry.htm "Glossary Entry")
    

-   Chained method call:
    ... [...->meth1( ... )->meth2( ... )->...->meth( ... )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_static_chain.htm) ...
    

-   Chained attribute access:
    ... [...->meth1( ... )->meth2( ... )->...->attr](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_static_chain.htm) ...

The following expressions can be specified in reading positions:

-   [Calculation expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencalculation_expression_glosry.htm "Glossary Entry"):

-   [Arithmetic expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry")
    ... [arith\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcompute_arith.htm) ...
    

-   [Bit expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry")
    ... [bit\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcompute_bit.htm) ...
    

-   [String Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_expression_glosry.htm "Glossary Entry")
    ... [string\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcompute_string.htm) ...

-   [Constructor expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"):

-   [Instance operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninstance_operator_glosry.htm "Glossary Entry")
    [NEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_new.htm)
    

-   [Value operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_operator_glosry.htm "Glossary Entry")
    [VALUE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_value.htm)
    

-   [Conversion operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_operator_glosry.htm "Glossary Entry")
    [CONV](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_conv.htm)
    

-   [Component operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencorresponding_operator_glosry.htm "Glossary Entry")
    [CORRESPONDING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expr_corresponding.htm)
    

-   [Casting operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninstance_operator_glosry.htm "Glossary Entry")
    [CAST](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_cast.htm)
    

-   [Reference operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreference_operator_glosry.htm "Glossary Entry")
    [REF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_ref.htm)
    

-   [Lossless operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlossless_operator_glosry.htm "Glossary Entry")
    [EXACT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_exact.htm)
    

-   [Reduction operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreduce_operator_glosry.htm "Glossary Entry")
    [REDUCE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_reduce.htm)
    

-   [Filter operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfilter_operator_glosry.htm "Glossary Entry")
    [FILTER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_filter.htm)
    

-   [Conditional operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_operator_glosry.htm "Glossary Entry")
    [COND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_cond.htm), [SWITCH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_switch.htm)

-   [Table expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expression_glosry.htm "Glossary Entry") [itab\[ ... \]](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expressions.htm) and their [chainings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_exp_chaining.htm)

Notes

-   Functions with numeric return values and arithmetic expressions are combined as [numeric expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennumerical_expression_glosry.htm "Glossary Entry").

-   Functions with character-like return values and string expressions are combined as [character-like expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencharlike_expression_glosry.htm "Glossary Entry").

-   Functions with a byte-like return values and bit expressions are combined as [byte-like expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbyte_like_expression_glosry.htm "Glossary Entry").

Example

Numerical expression as an index specified for an internal table.

DATA: itab TYPE STANDARD TABLE OF i,
      n    TYPE i.
...
READ TABLE itab INDEX lines( itab ) - n
                INTO  DATA(wa).


### abenexpression_positions.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands.htm) →  [Functions and Expressions in Operand Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands_expressions.htm) → 

Operand Positions for Functions and Expressions

-   [Writer Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions_write.htm)

-   [Reader Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions_read.htm)

Continue
[Writing Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions_write.htm)
[Reading Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions_read.htm)


### abenexpression_positions_write.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands.htm) →  [Functions and Expressions in Operand Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands_expressions.htm) →  [Operand Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions.htm) → 

Writing Positions for Functions and Expressions

[Writing positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwriting_position_glosry.htm "Glossary Entry") are operand positions in which the operand is written to.

-   [Declaration Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclaration_positions.htm)

-   [Result Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenresult_positions.htm)

Continue
[Declaration Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclaration_positions.htm)
[Result Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenresult_positions.htm)


### abendeclaration_positions.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands.htm) →  [Functions and Expressions in Operand Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands_expressions.htm) →  [Operand Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions.htm) →  [Writing Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions_write.htm) → 

Declaration Positions

Declaration positions are [writing-only positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwriting_position_glosry.htm "Glossary Entry") in which a [declaration expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclaration_expression_glosry.htm "Glossary Entry") can be specified for an [inline declaration](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninline_declaration_glosry.htm "Glossary Entry"). There are no declaration positions within expressions.

The following declaration positions are possible:

-   Positions for the inline declaration of variables with [DATA(var)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_inline.htm). These are the following [writer positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwriting_position_glosry.htm "Glossary Entry"), where the operand type can be determined in full and where the content of the operand is completely overwritten but not evaluated.

-   Left side of an assignment with the [assignment operator \=](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenequals_operator.htm)
    [lhs = ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenequals_operator.htm)

-   Actual parameters for output parameters and return values of methods for [standalone method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_static_short.htm):
    meth( [IMPORTING p1 = a1 p2 = a2...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_parameters.htm)
          [RECEIVING r  =  a](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_parameters.htm) )
    If a method call is on the right side of an assignment or is part of an expression, these actual parameters are not declaration positions.

-   Target fields when catching an exception:
    CATCH EXCEPTION [INTO oref](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcatch_try.htm)
    CLEANUP [INTO oref](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcleanup.htm)

-   Target fields in statements for string processing and byte string processing:
    FIND ... [MATCH COUNT mcnt](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_options.htm)
             [MATCH OFFSET moff](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_options.htm)
             [MATCH LENGTH mlen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_options.htm)
             [RESULTS result\_tab*|*result\_wa](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_options.htm)
             [SUBMATCHES s1 s2 ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_options.htm)
    REPLACE  ... [REPLACEMENT COUNT rcnt](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreplace_options.htm)
                [REPLACEMENT OFFSET moff](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreplace_options.htm)
                [REPLACEMENT LENGTH mlen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreplace_options.htm)
                [RESULTS result\_tab*|*result\_wa](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreplace_options.htm)
    CONCATENATE ... [INTO result](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconcatenate.htm)
    SPLIT ... [INTO result1 result2 ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsplit.htm)
              [INTO TABLE result\_tab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsplit.htm)
    CONVERT TEXT ... [INTO SORTABLE CODE hex](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_text.htm)
    GET BIT ... [INTO val](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_bit.htm).

-   Target fields in statements for time stamps:
    CONVERT UTCLONG ... [INTO DATE dat TIME tim DAYLIGHT SAVING TIME dst](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_utclong.htm)
    CONVERT ... [INTO UTCLONG time\_stamp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_date_utclong.htm)
    GET TIME STAMP [time\_stamp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_time-stamp.htm)
    CONVERT TIME STAMP ... [INTO DATE dat TIME tim DAYLIGHT SAVING TIME dst](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_time-stamp.htm)
    CONVERT ... [INTO TIME STAMP time\_stamp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_date_time-stamp.htm)

-   Target fields in statements for internal tables:
    READ TABLE ... [*\[*REFERENCE*\]* INTO dobj](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table_outdesc.htm)
    LOOP AT ... [*\[*REFERENCE*\]* INTO dobj](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_result.htm)
    INSERT ... [*\[*REFERENCE*\]* INTO dobj](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab_result.htm)
    COLLECT    ... [*\[*REFERENCE*\]* INTO dobj](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcollect_itab_result.htm)
    APPEND     ... [*\[*REFERENCE*\]* INTO dobj](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapappend_result.htm)
    MODIFY ... [*\[*REFERENCE*\]* INTO dobj](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_itab_result.htm)
    FIND ... IN TABLE [MATCH COUNT mcnt](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_itab_options.htm)
             IN TABLE [MATCH LINE mlin](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_itab_options.htm)
             IN TABLE [MATCH OFFSET moff](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_itab_options.htm)
             IN TABLE [MATCH LENGTH mlen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_itab_options.htm)
             IN TABLE [RESULTS result\_tab*|*result\_wa](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_itab_options.htm)
             IN TABLE [SUBMATCHES s1 s2 ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_itab_options.htm)
    REPLACE ... IN TABLE [REPLACEMENT COUNT rcnt](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreplace_itab_options.htm)
                IN TABLE [REPLACEMENT LINE rlin](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreplace_itab_options.htm)
                IN TABLE [REPLACEMENT OFFSET moff](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreplace_itab_options.htm)
                IN TABLE [REPLACEMENT LENGTH mlen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreplace_itab_options.htm)
                IN TABLE [RESULTS result\_tab*|*result\_wa](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreplace_itab_options.htm)

-   Target fields of the ABAP SQL statement SELECT:
    SELECT ... [INTO (elem1, elem2, ... )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm)
    SELECT ... [INTO wa](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm)
    SELECT ... [INTO TABLE itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm)

-   Target fields of the statement DESCRIBE:
    DESCRIBE FIELD ... [TYPE typ *\[*COMPONENTS com*\]* LENGTH ilen DECIMALS dec](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdescribe_field.htm)
                       [OUTPUT-LENGTH olen HELP-ID hlp EDIT MASK mask](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdescribe_field.htm)
    DESCRIBE TABLE ... [KIND knd LINES lin OCCURS n](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdescribe_table.htm)
    DESCRIBE DISTANCE ... [INTO dst](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdescribe_distance.htm)

-   Target fields of various GET statements:
    GET PARAMETER ... [FIELD dobj](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_parameter.htm)
    GET PF-STATUS [status](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_pf.htm)
    GET REFERENCE [INTO dref](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_reference.htm)
    GET RUN TIME FIELD [rtime](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_run_time.htm)
    GET TIME [FIELD tim](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_time.htm)
    

-   Work area in statement for dynpros:
    LOOP AT SCREEN ... [INTO wa](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_screen.htm)

-   Target field for message output:
    MESSAGE ... [INTO text](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage.htm)

-   Target fields in file interface statements:
    READ DATASET ... [LENGTH alen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_dataset.htm)
    GET DATASET ... [POSITION pos](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_dataset.htm) [ATTRIBUTES attr](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_dataset.htm)
    

-   Target field for a serialization:
    CALL TRANSFORMATION ... [RESULT XML rxml](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_transformation.htm)

-   All writing positions used when generating programs:
    GENERATE GENERATE SUBROUTINE POOL ... [NAME prog](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapgenerate_subroutine_pool.htm) [error\_handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapgenerate_subr_error_handling.htm)

-   Positions for the inline declaration of field symbols with [FIELD-SYMBOL(<fs>)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfield-symbol_inline.htm). These are all places where a memory area can be assigned to a field symbol.

-   Field symbol in the statement ASSIGN:
    ASSIGN... [TO <fs>](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign.htm)

-   Field symbols in statements for internal tables:
    READ TABLE ... [ASSIGNING <fs>](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table_outdesc.htm)
    LOOP AT ... [ASSIGNING <fs>](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_result.htm)
    INSERT ... [ASSIGNING <fs>](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab_result.htm)
    COLLECT    ... [ASSIGNING <fs>](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcollect_itab_result.htm)
    APPEND     ... [ASSIGNING <fs>](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapappend_result.htm)
    MODIFY ... [ASSIGNING <fs>](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_itab_result.htm)

Note

Unlike in [standalone method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_static_short.htm), in a [functional method call](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_functional.htm) inline declarations cannot be specified as actual parameters for output parameters.

Example

Declaration expression [DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_inline.htm) for declaring an internal table itab after the addition [INTO TABLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement.

SELECT \*
       FROM scarr
       INTO TABLE @DATA(itab).


### abenresult_positions.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands.htm) →  [Functions and Expressions in Operand Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands_expressions.htm) →  [Operand Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions.htm) →  [Writing Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions_write.htm) → 

Result Positions

Result positions are [writing positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwriting_position_glosry.htm "Glossary Entry") in which [writable expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwritable_expression_glosry.htm "Glossary Entry") can be specified. Writes are performed on the result of the expression. The following result positions are possible:

-   Left side of an assignment with the [assignment operator \=](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenequals_operator.htm)

-   Operand dobj of the statement [CLEAR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclear.htm)

-   Memory area mem\_area of the statement [ASSIGN mem\_area TO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_writable_exp.htm)

-   Structure struc of the statement [ASSIGN COMPONENT comp OF STRUCTURE struc](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_dynamic_dobj.htm)

-   Actual parameter in [method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_calls.htm) for [output parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_parameters.htm), [input/output parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_parameters.htm), and [return values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_parameters.htm)

-   The right side in the declaration of a local field symbol in a [LET expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaplet.htm)

Example

Uses a table expression itab\[ sy-index \] on the left side of a [calculation assignment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencalculation_assignment_glosry.htm "Glossary Entry").

DATA itab TYPE TABLE OF i.
itab = VALUE #( ( 1 ) ( 2 ) ( 3 ) ).
DO 3 TIMES.
  itab\[ sy-index \] \*= 10.
ENDDO.


### abenexpression_positions_write.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands.htm) →  [Functions and Expressions in Operand Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands_expressions.htm) →  [Operand Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions.htm) → 

Writing Positions for Functions and Expressions

[Writing positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwriting_position_glosry.htm "Glossary Entry") are operand positions in which the operand is written to.

-   [Declaration Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclaration_positions.htm)

-   [Result Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenresult_positions.htm)

Continue
[Declaration Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclaration_positions.htm)
[Result Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenresult_positions.htm)


### abenexpression_positions_read.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands.htm) →  [Functions and Expressions in Operand Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands_expressions.htm) →  [Operand Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions.htm) → 

Reading Positions for Functions and Expressions

-   [General Expression Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengeneral_expression_positions.htm)

-   [Numeric Expression Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennumeric_expression_positions.htm)

-   [Character-Like Expression Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_expression_positions.htm)

-   [Time-Stamp-Like Expression Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentimestamp_expr_positions.htm)

-   [Functional Operand Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctional_positions.htm)

Continue
[General Expression Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengeneral_expression_positions.htm)
[Numeric Expression Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennumeric_expression_positions.htm)
[Character-Like Expression Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_expression_positions.htm)
[Time-Stamp-Like Expression Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentimestamp_expr_positions.htm)
[Functional Operand Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctional_positions.htm)


### abengeneral_expression_positions.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands.htm) →  [Functions and Expressions in Operand Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands_expressions.htm) →  [Operand Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions.htm) →  [Reading Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions_read.htm) → 

General Expression Positions

General expression positions are [reading positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreading_position_glosry.htm "Glossary Entry") in which suitable [data objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_object_glosry.htm "Glossary Entry"), [constructor expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), [table expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expression_glosry.htm "Glossary Entry"), [calculation expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencalculation_expression_glosry.htm "Glossary Entry"), [built-in functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredefined_function_glosry.htm "Glossary Entry"), or [functional method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") and [method chainings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") can be specified. The following general expression positions exist:

-   Right side of an assignment with the [assignment operator \=](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenequals_operator.htm)

-   Operands of [arithmetic expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcompute_arith.htm) and of [bit expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcompute_bit.htm)

-   [Embedded expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates_expressions.htm) in [string templates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates.htm)

-   Operands of [comparison expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomparison_expression_glosry.htm "Glossary Entry") in [logical expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm)

-   Operand of the statement [CASE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase.htm)

-   [Actual parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_arith_expr.htm) for input parameters of methods in [meth( ... )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_parameters.htm), [RAISE EVENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapraise_event.htm), [CREATE OBJECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_object.htm), and [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapraise_exception_class.htm) or [THROW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expressions.htm)

-   [Actual parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_arith_expr.htm) for input parameters of function modules in the case of [CALL FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_parameter.htm)

-   Arguments of [built-in](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_functions.htm) [numeric functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmathematical_functions.htm) if they are themselves executed in an arithmetic expression

-   Reference variable oref of statement [RAISE EXCEPTION oref.](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapraise_exception_class.htm)

-   The operands behind the addition WITH TABLE KEY of the statements [READ TABLE itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table.htm) and [DELETE TABLE itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_itab_line.htm)

-   The operands behind the addition [WITH KEY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table_free.htm) of the statement [READ TABLE itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table.htm)

-   Work area wa of the following statements:

-   [APPEND wa TO ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapappend_linespec.htm)

-   [INSERT wa INTO ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab_linespec.htm)

-   [MODIFY ... FROM wa ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_itab_single.htm)

-   Expression exp for dynamic sorts in the case of the following:

-   [SORT itab BY exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsort_itab.htm)

-   Source fields of the statements [WRITE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwrite-.htm) and [WRITE TO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwrite_to.htm), with the restriction that [arithmetic expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") and [bit expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbit_expression_glosry.htm "Glossary Entry") cannot be specified directly and can be specified only as [embedded expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenembedded_expression_glosry.htm "Glossary Entry") in [string templates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_template_glosry.htm "Glossary Entry")

The type restrictions defined by the [operand type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_objects_usage.htm) apply in the operand positions. For example, no [numeric functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmathematical_funktion_glosry.htm "Glossary Entry") can be specified in a bit expression.

Notes

-   Specifying [functional methods](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctional_method_glosry.htm "Glossary Entry") as actual parameters of methods enables the nesting of method calls in an operand position.

-   The three types of [calculation expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencalculation_expression_glosry.htm "Glossary Entry") can be executed as operands of relational expressions, but they cannot be mixed in one calculation expression.

Example

Specifies a constructor expressions with the value operator [VALUE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_value.htm) on the right side of an assignment and specifies a constructor expression with the reduction operator [REDUCE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_reduce.htm) as an input parameter for the method DISPLAY of the class CL\_DEMO\_OUTPUT.

TYPES itab TYPE TABLE OF i WITH EMPTY KEY.
DATA(itab) = VALUE itab( ( 1 ) ( 2 ) ( 3 ) ).
cl\_demo\_output=>display(
  REDUCE string( INIT s = \`\`
                 FOR <wa> IN itab
                 NEXT s = s &&  <wa> && \` \` ) ).


### abennumeric_expression_positions.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands.htm) →  [Functions and Expressions in Operand Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands_expressions.htm) →  [Operand Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions.htm) →  [Reading Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions_read.htm) → 

Numeric Expression Positions

Numeric expression positions are [reading positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreading_position_glosry.htm "Glossary Entry") in which [numeric data objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennumeric_data_object_glosry.htm "Glossary Entry"), [constructor expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), [arithmetic expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry"), [table expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expression_glosry.htm "Glossary Entry"), and [built-in functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredefined_function_glosry.htm "Glossary Entry"), or [functional method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") and [method chainings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") whose return value has a [numeric data type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennumeric_data_type_glosry.htm "Glossary Entry"), can be specified. The following numeric expression positions exist:

-   Arguments of functions

-   Numeric arguments of [string functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions.htm)

-   Numeric arguments of [extremum functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennmax_nmin_functions.htm)

-   Counters and positions:

-   Operand comp of the statement
    [ASSIGN COMPONENT comp OF STRUCTURE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_dynamic_dobj.htm)

-   Operand n of the statement
    [DO n TIMES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdo.htm)

-   Operand sec of the statement
    [WAIT UP TO sec SECONDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwait_up_to.htm)

-   Operand num of the statement
    [SHIFT ... BY num PLACES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapshift_places.htm)

-   Operands bitpos and val of the statement
    [SET BIT bitpos ... TO val](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_bit.htm).

-   Operand bitpos of the statement
    [GET BIT bitpos ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_bit.htm).

-   Positions specified in the statements FIND and REPLACE:

-   Operands off and len of the statements
    [FIND ... IN SECTION ... OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_section_of.htm)
    [REPLACE ... IN SECTION ... OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_section_of.htm)

-   Operands lin1, off1, lin2, and off2 of the statements
    [FIND ... IN TABLE ... FROM lin1 OFFSET off1 TO lin2 OFFSET off2 ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_table_range.htm)
    [REPLACE  ... IN TABLE ... FROM lin1 OFFSET off1 TO lin2 OFFSET off2 ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreplace_table_range.htm)

-   Operands off and len of the statement
    [REPLACE SECTION OFFSET off LENGTH len OF ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreplace_in_position.htm)

-   The row number idx specified with respect to a table index when accessing an internal table in the following:

-   [READ TABLE itab INDEX idx ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table_index.htm)

-   [LOOP AT itab ...FROM idx1 TO idx2 ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_cond.htm)

-   [INSERT itab ... INDEX idx ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab_position.htm)

-   [INSERT LINES OF jtab FROM idx1 TO idx2  ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab_linespec.htm)

-   [APPEND LINES OF jtab FROM idx1 TO idx2  ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapappend_linespec.htm)

-   [MODIFY itab INDEX idx  ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_itab_index.htm)

-   [DELETE itab INDEX idx  ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_itab_line.htm)

-   [DELETE itab FROM idx1 TO idx2 ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_itab_lines.htm)

Example

Specifies a built-in function lines( itab ) for specifying the loop passes of a [DO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdo.htm) loop.

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
...
DO lines( itab ) TIMES.
  ...
ENDDO.


### abenstring_expression_positions.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands.htm) →  [Functions and Expressions in Operand Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands_expressions.htm) →  [Operand Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions.htm) →  [Reading Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions_read.htm) → 

Character-Like Expression Positions

Character-like expression positions are [reading positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreading_position_glosry.htm "Glossary Entry") in which [character-like data objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencharlike_data_object_glosry.htm "Glossary Entry"), [constructor expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), [string expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_expression_glosry.htm "Glossary Entry"), [table expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expression_glosry.htm "Glossary Entry"), and [built-in functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredefined_function_glosry.htm "Glossary Entry") can be specified, as well as [functional method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") and [method chainings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") whose return values have a [character-like data type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencharlike_data_type_glosry.htm "Glossary Entry"). The following character-like expression positions exist:

-   Operand positions in [string expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcompute_string.htm)

-   Character-like arguments in [processing functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocess_functions.htm)

-   Character-like arguments in [description functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendescriptive_functions.htm)

-   Operand comp of the statement
    [ASSIGN COMPONENT comp OF STRUCTURE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_dynamic_dobj.htm)

-   Regular expression regex in the statements
    [FIND ... REGEX regex ... IN ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_pattern.htm)
    [REPLACE ... REGEX regex ... IN ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreplace_pattern.htm)

-   Search pattern substring in the statements
    [FIND ... SUBSTRING substring ... IN ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_pattern.htm)
    [REPLACE ... SUBSTRING substring ... IN ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreplace_pattern.htm)

-   Operand dobj in the statement
    [FIND ... IN dobj ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind.htm)

-   Operand new in the statement
    [REPLACE ... WITH new ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreplace.htm)
    [REPLACE ... IN TABLE ... WITH new ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreplace_itab.htm)

-   Operand substring in the statement
    [SHIFT ... UP TO substring](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapshift_places.htm)

-   Operand mask in the statement
    [SHIFT ... DELETING ... mask](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapshift_deleting.htm)

-   Operands dobj and sep in the statement
    [SPLIT dobj AT sep INTO ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsplit.htm)

-   Operand text in the statement
    [CONVERT text INTO SORTABLE CODE ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_text.htm)

-   Operands text2 and text2 in the statement
    [OVERLAY ... WITH text2 USING mask](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapoverlay.htm)

-   Operand mask in the statement
    [TRANSLATE ... USING mask](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptranslate.htm)

-   Operand sub in the statement
    [ASSERT ... SUBKEY sub ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassert.htm)
    [LOG-POINT ... SUBKEY sub ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaplog-point.htm)

-   Operands text and dobj1 to dobj4 in the statements
    MESSAGE [text](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_text.htm) ...
    MESSAGE ...[WITH dobj1 ... dobj4](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage.htm)

Example

Uses a string expression \`(\` && sub && \`)+\` to create a regular expression in the statement [FIND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind.htm) to make it possible to find groups of a substring sub.

DATA: text TYPE string,
      sub  TYPE string.
FIND REGEX \`(\` && sub && \`)+\` IN text.


### abentimestamp_expr_positions.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands.htm) →  [Functions and Expressions in Operand Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands_expressions.htm) →  [Operand Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions.htm) →  [Reading Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions_read.htm) → 

Time-Stamp-Like Expression Positions

Time-stamp-like expression positions are [reading positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreading_position_glosry.htm "Glossary Entry") in which [time stamp fields](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentimestamp_field_glosry.htm "Glossary Entry") plus [constructor expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), [table expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expression_glosry.htm "Glossary Entry"), and [built-in functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredefined_function_glosry.htm "Glossary Entry") can be specified, or [functional method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") and [method chainings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") whose return values have a [time stamp type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentimestamp_type_glosry.htm "Glossary Entry"). The following time-stamp-like expression positions exist:

-   Time-stamp-like arguments in time stamp functions

-   Operand time\_stamp of the function
    [utclong\_add( val  = time\_stamp ... )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenutclong_add.htm)

-   Operands time\_stamp2 and time\_stamp1 of the function
    [utclong\_diff( high = time\_stamp2 low = time\_stamp1 )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenutclong_diff.htm)

-   Functional operand positions in statements for time stamps

-   Operand time\_stamp of the statement
    [CONVERT UTCLONG time\_stamp TIME ZONE tz INTO ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_utclong.htm)

Example

Specifies a functional method call and a time stamp function as arguments of the time stamp function utclong\_diff.

DATA ts TYPE timestampl.
GET TIME STAMP FIELD ts.
cl\_demo\_output=>display(
  utclong\_diff(
    low =  cl\_abap\_tstmp=>tstmp2utclong( timestamp =  ts )
    high = utclong\_add( val = utclong\_current( )
                        hours = 1 ) ) ).


### abenfunctional_positions.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands.htm) →  [Functions and Expressions in Operand Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands_expressions.htm) →  [Operand Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions.htm) →  [Reading Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions_read.htm) → 

Functional Operand Positions

Functional operand positions are [reading positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreading_position_glosry.htm "Glossary Entry") in which suitable [data objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_object_glosry.htm "Glossary Entry") and [functional method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") or [method chainings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") plus [constructor expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") and [table expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expression_glosry.htm "Glossary Entry") whose return values or results have a suitable data type, can be specified. The following functional operand positions exist:

-   Functional operand positions in ABAP Objects

-   Operand oref of the statement
    [SET HANDLER ... FOR oref](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_handler_instance.htm).

-   Functional operand positions in relational expressions

-   Operand ref of the predicate expression
    [... ref IS *\[*NOT*\]* BOUND ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_bound.htm)

-   Functional operand positions in assignments

-   Operand struc1 of the statement
    [MOVE-CORRESPONDING struc1 TO ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmove-corresponding.htm)

-   Operand val of the statement
    [CLEAR ... WITH val](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclear.htm)

-   Function Operand Positions in String Processing and Byte String Processing

-   Character-like or byte-like arguments of the built-in functions
    [dbmaxlen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlength_functions.htm), [xstrlen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendescriptive_functions_binary.htm)

-   Operand itab of the statement
    [CONCATENATE LINES OF itab INTO ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconcatenate.htm)

-   Operand itab of the statement
    [FIND ... IN TABLE itab ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_itab.htm)

-   Function operand positions in statements for internal tables

-   Internal table itab of the statement
    [READ TABLE itab ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table.htm)

-   Work area wa of the statement
    [READ TABLE ... FROM wa ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table_key.htm)

-   Internal table itab of the statement
    [LOOP AT itab ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab.htm)

-   Internal table jtab of the statement
    [INSERT LINES OF jtab INTO ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab_linespec.htm)

-   Work area wa of the statement
    [COLLECT wa INTO ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcollect.htm)

-   Internal table jtab of the statement
    [APPEND LINES OF jtab TO ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapappend_linespec.htm)

-   Work area wa of the statement
    [DELETE TABLE ... FROM wa ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_itab_key.htm)

-   Function operand positions in statements for time stamps

-   Operand tz of the statement
    [CONVERT UTCLONG time\_stamp TIME ZONE tz INTO...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_utclong.htm)

-   Operands dat, tim, dst, and tz of the statement
    [CONVERT DATE dat TIME tim DAYLIGHT SAVING TIME dst INTO UTCLONG ... TIME ZONE tz](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_date_utclong.htm)

-   Operands time\_stamp and tz of the statement
    [CONVERT TIME STAMP time\_stamp TIME ZONE tz INTO ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_time-stamp.htm)

-   Operands dat, tim, dst, and tz of the statement
    [CONVERT DATE dat TIME tim DAYLIGHT SAVING TIME dst INTO TIME STAMP ... TIME ZONE tz](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_date_time-stamp.htm)

-   Functional operand positions in message processing

-   Operand oref of the statement
    MESSAGE [oref](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_msg.htm) ...

-   Operands dobj1 to dobj4 of the statement
    MESSAGE ...[WITH dobj1 ... dobj4](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage.htm)

-   Function operand positions in statements for checkpoints

-   Operands val1 val2 of the statement
    [ASSERT ... FIELDS val1 val2 ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassert.htm)

-   Operands val1 val2 ... of the statement
    [LOG-POINT ... FIELDS val1 val2 ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaplog-point.htm)

Notes

-   Alongside the regular functional operand positions, three [extended functional operand positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenextended_functional_positions.htm) exist that can be used to specify certain built-in functions. These operand positions are obsolete and should no longer be used.

-   Special functional operand positions are all places in which a [relational expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrelational_expression_glosry.htm "Glossary Entry") can be specified. A single [functional method call](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") can be specified as a [predicative method call](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredicative_method_call_glosry.htm "Glossary Entry") here. Other expressions (with the exception of [predicate functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredicate_function_glosry.htm "Glossary Entry") or single data objects (with the exception of an [obsolete short form](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_in_short_form.htm))), on the other hand, cannot be specified as [predicates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredicate_glosry.htm "Glossary Entry") of a relational expression.

-   In any expressions in string templates embedded in the [formatting options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcompute_string_format_options.htm), (dobj) and expr for fixed values (if specified) represent a summary functional operand position.

Example

Calls a functional method cl\_abap\_tstmp=>normalize in a functional operand position.

DATA ts TYPE timestamp.
...
CONVERT TIME STAMP cl\_abap\_tstmp=>normalize( ts ) TIME ZONE 'UTC'
        INTO DATE DATA(date) TIME DATA(time).


### abenexpression_positions_read.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands.htm) →  [Functions and Expressions in Operand Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands_expressions.htm) →  [Operand Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions.htm) → 

Reading Positions for Functions and Expressions

-   [General Expression Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengeneral_expression_positions.htm)

-   [Numeric Expression Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennumeric_expression_positions.htm)

-   [Character-Like Expression Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_expression_positions.htm)

-   [Time-Stamp-Like Expression Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentimestamp_expr_positions.htm)

-   [Functional Operand Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctional_positions.htm)

Continue
[General Expression Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengeneral_expression_positions.htm)
[Numeric Expression Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennumeric_expression_positions.htm)
[Character-Like Expression Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_expression_positions.htm)
[Time-Stamp-Like Expression Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentimestamp_expr_positions.htm)
[Functional Operand Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctional_positions.htm)


### abenexpression_positions.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands.htm) →  [Functions and Expressions in Operand Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands_expressions.htm) → 

Operand Positions for Functions and Expressions

-   [Writer Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions_write.htm)

-   [Reader Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions_read.htm)

Continue
[Writing Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions_write.htm)
[Reading Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions_read.htm)
