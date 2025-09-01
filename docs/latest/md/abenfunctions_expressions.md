  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Functions and Expressions in Operand Positions](javascript:call_link\('abenoperands_expressions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Functions%20and%20Expressions%20for%20Operand%20Positions%2C%20ABENFUNCTIONS_EXPRESSIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

Functions and Expressions for Operand Positions

-   [Write Positions](#abenfunctions-expressions-1-------read-positions---@ITOC@@ABENFUNCTIONS_EXPRESSIONS_2)

Write Positions   

The following expressions can be specified in [write positions](javascript:call_link\('abenwrite_position_glosry.htm'\) "Glossary Entry"):

-   [Declaration expressions](javascript:call_link\('abendeclaration_expression_glosry.htm'\) "Glossary Entry")
    -   ... [DATA(...)](javascript:call_link\('abendata_inline.htm'\)) ...
    -   ... [FINAL(...)](javascript:call_link\('abenfinal_inline.htm'\)) ...
    -   ... [FIELD-SYMBOL(...)](javascript:call_link\('abenfield-symbol_inline.htm'\)) ...
-   [Writable expressions](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry")
    -   The [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") [NEW class( ... )->attr](javascript:call_link\('abennew_constructor_params_class.htm'\)) and [CAST type( ... )->dobj](javascript:call_link\('abenconstructor_expression_cast.htm'\))
    -   [Table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") [itab\[ ... \]](javascript:call_link\('abentable_expressions.htm'\)) and their [chainings](javascript:call_link\('abentable_exp_chaining.htm'\))

Read Positions   

Functions that can be specified in a read position include the following:

-   [Built-in functions](javascript:call_link\('abenbuiltin_function_glosry.htm'\) "Glossary Entry")
    
    ... [func( arg )](javascript:call_link\('abenbuilt_in_functions_syntax.htm'\)) ...
    ... [... func( val = arg p1 = arg1 p2 = arg2 ... )](javascript:call_link\('abenbuilt_in_functions_syntax.htm'\)) ...
    
-   [Functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry")
    
    ... [meth( )](javascript:call_link\('abapcall_method_functional.htm'\)) ...
    ... [meth( a )](javascript:call_link\('abapcall_method_functional.htm'\)) ...
    ... [meth( p1 = a1 p2 = a2 ... )](javascript:call_link\('abapcall_method_functional.htm'\)) ...
    ... [meth( *\[*EXPORTING  p1 = a1 p2 = a2 ...*\]*](javascript:call_link\('abapcall_method_functional.htm'\))
              [*\[*IMPORTING  p1 = a1 p2 = a2 ...*\]*](javascript:call_link\('abapcall_method_functional.htm'\))
              [*\[*CHANGING   p1 = a1 p2 = a2 ...*\]* )](javascript:call_link\('abapcall_method_functional.htm'\)) ...
    
-   [Method chaining](javascript:call_link\('abenmethod_chaining_glosry.htm'\) "Glossary Entry")
    -   Chained method call:
        
        ... [...->meth1( ... )->meth2( ... )->...->meth( ... )](javascript:call_link\('abapcall_method_static_chain.htm'\)) ...
        
    -   Chained attribute access:
        
        ... [...->meth1( ... )->meth2( ... )->...->attr](javascript:call_link\('abapcall_method_static_chain.htm'\)) ...
        

The following expressions can be specified in read positions:

-   [Calculation expressions](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry"):
    -   [Arithmetic expressions](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry")
        
        ... [arith\_exp](javascript:call_link\('abapcompute_arith.htm'\)) ...
        
    -   [Bit expressions](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry")
        
        ... [bit\_exp](javascript:call_link\('abapcompute_bit.htm'\)) ...
        
    -   [String Expressions](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry")
        
        ... [string\_exp](javascript:call_link\('abapcompute_string.htm'\)) ...
        
-   [Constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry"):
    -   [Instance operator](javascript:call_link\('abeninstance_operator_glosry.htm'\) "Glossary Entry")
        
        [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\))
        
    -   [Value operator](javascript:call_link\('abenvalue_operator_glosry.htm'\) "Glossary Entry")
        
        [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\))
        
    -   [Conversion operator](javascript:call_link\('abenconversion_operator_glosry.htm'\) "Glossary Entry")
        
        [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\))
        
    -   [Component operator](javascript:call_link\('abencorresponding_operator_glosry.htm'\) "Glossary Entry") [CORRESPONDING](javascript:call_link\('abenconstructor_expr_corresponding.htm'\))
        
    -   [Casting operator](javascript:call_link\('abeninstance_operator_glosry.htm'\) "Glossary Entry")
        
        [CAST](javascript:call_link\('abenconstructor_expression_cast.htm'\))
        
    -   [Reference operator](javascript:call_link\('abenreference_operator_glosry.htm'\) "Glossary Entry")
        
        [REF](javascript:call_link\('abenconstructor_expression_ref.htm'\))
        
    -   [Lossless operator](javascript:call_link\('abenlossless_operator_glosry.htm'\) "Glossary Entry")
        
        [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\))
        
    -   [Reduction operator](javascript:call_link\('abenreduce_operator_glosry.htm'\) "Glossary Entry")
        
        [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\))
        
    -   [Filter operator](javascript:call_link\('abenfilter_operator_glosry.htm'\) "Glossary Entry")
        
        [FILTER](javascript:call_link\('abenconstructor_expression_filter.htm'\))
        
    -   [Conditional operator](javascript:call_link\('abenconditional_operator_glosry.htm'\) "Glossary Entry")
        
        [COND](javascript:call_link\('abenconditional_expression_cond.htm'\)), [SWITCH](javascript:call_link\('abenconditional_expression_switch.htm'\))
        
-   [Table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") [itab\[ ... \]](javascript:call_link\('abentable_expressions.htm'\)) and their [chainings](javascript:call_link\('abentable_exp_chaining.htm'\))

Hints

-   Functions with numeric return values and arithmetic expressions are summarized as [numeric expressions](javascript:call_link\('abennumerical_expression_glosry.htm'\) "Glossary Entry").
-   Functions with character-like return values and string expressions are summarized as [character-like expressions](javascript:call_link\('abencharlike_expression_glosry.htm'\) "Glossary Entry").
-   Functions with a byte-like return values and bit expressions are summarized as [byte-like expressions](javascript:call_link\('abenbyte_like_expression_glosry.htm'\) "Glossary Entry").

Example

Numeric expression used for specification of a table index for an internal table.

DATA: itab TYPE STANDARD TABLE OF i,
      n    TYPE i.
...
READ TABLE itab INDEX lines( itab ) - n
                INTO  FINAL(wa).