  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands.htm) →  [Functions and Expressions in Operand Positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands_expressions.htm) → 

Functions and Expressions for Operand Positions

-   [Writing Positions](#@@ITOC@@ABENFUNCTIONS_EXPRESSIONS_1)

-   [Reading Positions](#@@ITOC@@ABENFUNCTIONS_EXPRESSIONS_2)

Writing Positions

The following expressions can be specified in [writing positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwriting_position_glosry.htm "Glossary Entry"):

-   [Declaration expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclaration_expression_glosry.htm "Glossary Entry")

-   ... [DATA(...)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_inline.htm) ...

-   ... [FIELD-SYMBOL(...)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfield-symbol_inline.htm) ...

-   [Writable expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwritable_expression_glosry.htm "Glossary Entry")

-   The [constructor expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") NEW class( ... [)->attr](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennew_constructor_params_class.htm) and [CAST type( ... )->dobj](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_cast.htm)

-   [Table expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_expression_glosry.htm "Glossary Entry") [itab\[ ... \]](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_expressions.htm) and their [chainings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_chaining.htm)

Reading Positions

Functions that can be executed in a read position are

-   [Built-in functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredefined_function_glosry.htm "Glossary Entry")
    ... [func( arg )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuilt_in_functions_syntax.htm) ...
    ... [... func( val = arg p1 = arg1 p2 = arg2 ... )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuilt_in_functions_syntax.htm) ...
    

-   [Functional methods](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_method_glosry.htm "Glossary Entry")
    ... [meth( )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_functional.htm) ...
    ... [meth( a )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_functional.htm) ...
    ... [meth( p1 = a1 p2 = a2 ... )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_functional.htm) ...
    ... [meth( *\[*EXPORTING  p1 = a1 p2 = a2 ...*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_functional.htm)
              [*\[*IMPORTING  p1 = a1 p2 = a2 ...*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_functional.htm)
              [*\[*CHANGING   p1 = a1 p2 = a2 ...*\]* )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_functional.htm) ...
    

-   [Method chaining](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmethod_chaining_glosry.htm "Glossary Entry")
    

-   Chained method call:
    ... [...->meth1( ... )->meth2( ... )->...->meth( ... )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_static_chain.htm) ...
    

-   Chained attribute access:
    ... [...->meth1( ... )->meth2( ... )->...->attr](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_static_chain.htm) ...

The following expressions can be specified in reading positions:

-   [Calculation expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalculation_expression_glosry.htm "Glossary Entry"):

-   [Arithmetic expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry")
    ... [arith\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_arith.htm) ...
    

-   [Bit expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry")
    ... [bit\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_bit.htm) ...
    

-   [String Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_expression_glosry.htm "Glossary Entry")
    ... [string\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string.htm) ...

-   [Constructor expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"):

-   [Instance operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninstance_operator_glosry.htm "Glossary Entry")
    [NEW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_new.htm)
    

-   [Value operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_operator_glosry.htm "Glossary Entry")
    [VALUE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_value.htm)
    

-   [Conversion operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_operator_glosry.htm "Glossary Entry")
    [CONV](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_conv.htm)
    

-   [Component operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencorresponding_operator_glosry.htm "Glossary Entry")
    [CORRESPONDING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expr_corresponding.htm)
    

-   [Casting operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninstance_operator_glosry.htm "Glossary Entry")
    [CAST](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_cast.htm)
    

-   [Reference operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreference_operator_glosry.htm "Glossary Entry")
    [REF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_ref.htm)
    

-   [Lossless operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlossless_operator_glosry.htm "Glossary Entry")
    [EXACT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_exact.htm)
    

-   [Reduction operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreduce_operator_glosry.htm "Glossary Entry")
    [REDUCE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_reduce.htm)
    

-   [Filter operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfilter_operator_glosry.htm "Glossary Entry")
    [FILTER](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_filter.htm)
    

-   [Conditional operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_operator_glosry.htm "Glossary Entry")
    [COND](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconditional_expression_cond.htm), [SWITCH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconditional_expression_switch.htm)

-   [Table expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_expression_glosry.htm "Glossary Entry") [itab\[ ... \]](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_expressions.htm) and their [chainings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_chaining.htm)

Notes

-   Functions with numeric return values and arithmetic expressions are combined as [numeric expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennumerical_expression_glosry.htm "Glossary Entry").

-   Functions with character-like return values and string expressions are combined as [character-like expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharlike_expression_glosry.htm "Glossary Entry").

-   Functions with a byte-like return values and bit expressions are combined as [byte-like expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbyte_like_expression_glosry.htm "Glossary Entry").

Example

Numerical expression as an index specified for an internal table.

DATA: itab TYPE STANDARD TABLE OF i,
      n    TYPE i.
...
READ TABLE itab INDEX lines( itab ) - n
                INTO  DATA(wa).