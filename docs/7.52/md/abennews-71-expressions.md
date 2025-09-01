  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-70_ehps.htm) →  [Changes in Release 7.0, EhP2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-71.htm) → 

Expression Positions in Release 7.0, EhP2

[1\. Using functions and expressions](#!ABAP_MODIFICATION_1@1@)

[2\. Method chainings](#!ABAP_MODIFICATION_2@2@)

[3\. Access to components of structured return values](#!ABAP_MODIFICATION_3@3@)

[4\. Predefined functions with multiple arguments](#!ABAP_MODIFICATION_4@4@)

Note

The program DEMO\_EXPRESSIONS shows examples of the enhanced expressions in Release 7.0, EhP2.

Modification 1

Using Functions and Calculation Expressions

The usability of [functions and expressions in operand positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperands_expressions.htm) has been substantially improved in Release 7.0, EhP2:

-   [Calculation expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculation_expression_glosry.htm "Glossary Entry"), [predefined functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredefined_function_glosry.htm "Glossary Entry"), and [functional methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_method_glosry.htm "Glossary Entry") can be used in [general expression positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneral_expression_positions.htm).
    
-   [Numeric expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumerical_expression_glosry.htm "Glossary Entry") can be used in [numeric expression positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumeric_expression_positions.htm).
    
-   [String expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_expression_glosry.htm "Glossary Entry") can be used in [character-like expression positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_expression_positions.htm).
    
-   [Functional methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_method_glosry.htm "Glossary Entry") can be used in [functional operand positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_positions.htm).
    

From Release 7.0, EhP2, the following [general expression positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") are available:

-   Operands of [relational expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrelational_expression_glosry.htm "Glossary Entry")
    Example: a + b < oref->meth( )
    
-   [Actual parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_arith_expr.htm) for input parameters of methods
    Example: oref1->meth1( oref2->meth2( ... ) )
    

Before Release 7.0, EhP2, operand positions on the right side of assignments with \= were the only general expression positions.

Note

From EhP1, the character-like arguments of [description functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendescriptive_functions.htm) are (with one exception) [character-like expression positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry"). Before EhP1, they were character-like [functional operand positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_position_glosry.htm "Glossary Entry").

Modification 2

Method Chainings

As well as the previous [chained names](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenchained_name_glosry.htm "Glossary Entry"), [operand positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexpression_positions.htm) that accept functional methods now also accept [method chainings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethod_chaining_glosry.htm "Glossary Entry"), that is [chained method calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenchained_method_call_glosry.htm "Glossary Entry") and [chained attributes accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenchained_attribute_acc_glosry.htm "Glossary Entry").

Modification 3

Access to Components of Structured Return Values

If the result of a [functional method](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_method_glosry.htm "Glossary Entry") or [method chaining](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") is structured, the call can (like the name of a structure) be written directly in front of the [structure component selector](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstructure_component_sel_glosry.htm "Glossary Entry") to access a component of the result.

Modification 4

Predefined Functions with Multiple Arguments

Release 7.0, EhP2 introduces new [predefined functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_functions.htm) that can now accept multiple arguments. A predefined function of this type is called in the same way as a functional method with multiple input parameters.

... func( p1 = arg1 p2 = arg2 ... ) ...

The new functions are include:

-   [Rounding functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendec_floating_point_functions.htm)
    
-   [Search](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensearch_functions.htm), [similarity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendistance_functions.htm), and [processing functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocess_functions.htm) for character strings
    
-   [Logical functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogic_functions.htm)