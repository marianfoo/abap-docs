  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-70_ehps.htm) →  [News for ABAP Release 7.0, EhP2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-71.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Expression%20Positions%20in%20ABAP%20Release%207.0%2C%20EhP2%2C%20ABENNEWS-71-EXPRESSIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%
20improvement:)

Expression Positions in ABAP Release 7.0, EhP2

[1\. Using Functions and Calculation Expressions](#!ABAP_MODIFICATION_1@1@)
[2\. Method Chainings](#!ABAP_MODIFICATION_2@2@)
[3\. Access to Components of Structured Return Values](#!ABAP_MODIFICATION_3@3@)
[4\. Built-In Functions with Multiple Arguments](#!ABAP_MODIFICATION_4@4@)

Hint

The program DEMO\_EXPRESSIONS shows examples of the enhanced expressions in ABAP release 7.0, EhP2.

Modification 1   

Using Functions and Calculation Expressions

The usability of [functions and expressions in operand positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperands_expressions.htm) has been substantially improved in ABAP release 7.0, EhP2:

-   [Calculation expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencalculation_expression_glosry.htm "Glossary Entry"), [built-in functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_function_glosry.htm "Glossary Entry"), and [functional methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunctional_method_glosry.htm "Glossary Entry") can be used in [general expression positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengeneral_expression_positions.htm).
-   [Numeric expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennumerical_expression_glosry.htm "Glossary Entry") can be used in [numeric expression positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennumeric_expression_positions.htm).
-   [String expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_expression_glosry.htm "Glossary Entry") can be used in [character-like expression positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_expression_positions.htm).
-   [Functional methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunctional_method_glosry.htm "Glossary Entry") can be used in [functional operand positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunctional_positions.htm).

From ABAP release 7.0, EhP2, the following [general expression positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") are available:

-   Operands of [relational expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrelational_expression_glosry.htm "Glossary Entry")
    
    Example: a + b < oref->meth( )
    
-   [Actual parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_arith_expr.htm) for input parameters of methods
    
    Example: oref1->meth1( oref2->meth2( ... ) )
    

Before ABAP release 7.0, EhP2, operand positions on the right side of assignments with \= were the only general expression positions.

Hint

From EhP1, the character-like arguments of [description functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendescriptive_functions.htm) are (with one exception) [character-like expression positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry"). Before EhP1, they were character-like [functional operand positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunctional_position_glosry.htm "Glossary Entry").

Modification 2   

Method Chainings

As well as the previous [chained names](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenchained_name_glosry.htm "Glossary Entry"), [operand positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexpression_positions.htm) that accept functional methods now also accept [method chainings](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmethod_chaining_glosry.htm "Glossary Entry"), that is [chained method calls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenchained_method_call_glosry.htm "Glossary Entry") and [chained attributes accesses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenchained_attribute_acc_glosry.htm "Glossary Entry").

Modification 3   

Access to Components of Structured Return Values

If the result of a [functional method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunctional_method_glosry.htm "Glossary Entry") or [method chaining](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") is structured, the call can (like the name of a structure) be written directly in front of the [structure component selector](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstructure_component_sel_glosry.htm "Glossary Entry") to access a component of the result.

Modification 4   

Built-In Functions with Multiple Arguments

ABAP release 7.0, EhP2 introduces new [built-in functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_functions.htm) that can now accept multiple arguments. A built-in function of this type is called in the same way as a functional method with multiple input parameters.

... func( p1 = arg1 p2 = arg2 ... ) ...

The new functions are include:

-   [Rounding functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendec_floating_point_functions.htm)
-   [Search](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensearch_functions.htm), [similarity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendistance_functions.htm), and [processing functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocess_functions.htm) for character strings
-   [Logical functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogic_functions.htm)