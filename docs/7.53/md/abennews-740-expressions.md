  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.40 and Its SPs](javascript:call_link\('abennews-740.htm'\)) →  [Changes in Release 7.40, SP02](javascript:call_link\('abennews-740_sp02.htm'\)) → 

Expressions and Functions in Release 7.40, SP02

[1\. Inline declarations](#!ABAP_MODIFICATION_1@1@)

[2\. Constructor expressions](#!ABAP_MODIFICATION_2@2@)

[3\. Table expressions](#!ABAP_MODIFICATION_3@3@)

[4\. New built-in function ipow](#!ABAP_MODIFICATION_4@4@)

[5\. Writable expressions](#!ABAP_MODIFICATION_5@5@)

Modification 1

Inline Declarations

The new [declaration operators](javascript:call_link\('abendeclaration_operator_glosry.htm'\) "Glossary Entry") [DATA](javascript:call_link\('abendata_inline.htm'\)) and [FIELD-SYMBOL](javascript:call_link\('abenfield-symbol_inline.htm'\)) make [inline declarations](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry") possible in [declaration expressions](javascript:call_link\('abendeclaration_expression_glosry.htm'\) "Glossary Entry") in [declaration positions](javascript:call_link\('abendeclaration_position_glosry.htm'\) "Glossary Entry").

Modification 2

Constructor Expressions

A new type of expression, [constructor expressions](javascript:call_link\('abenconstructor_expressions.htm'\)), uses [constructor operators](javascript:call_link\('abenconstructor_operator_glosry.htm'\) "Glossary Entry") in [general expression positions](javascript:call_link\('abengeneral_expression_positions.htm'\)) to construct results of specified types.

-   [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) creates objects
    
-   [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)) creates values
    
-   [REF](javascript:call_link\('abenconstructor_expression_ref.htm'\)) gets references
    
-   [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) performs a lossless assignment or calculation
    
-   [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) converts values
    
-   [CAST](javascript:call_link\('abenconstructor_expression_cast.htm'\)) performs an up cast or down cast
    
-   [COND](javascript:call_link\('abenconditional_expression_cond.htm'\)) and [SWITCH](javascript:call_link\('abenconditional_expression_switch.htm'\)) enable conditional expressions
    

Modification 3

Table Expressions

The new table expressions [itab\[ ... \]](javascript:call_link\('abentable_expressions.htm'\)) permit reads to be performed on internal tables in operand positions.

Modification 4

New Built-In Function ipow

The new integer power function [ipow](javascript:call_link\('abenpower_function.htm'\)) enables fields of any numeric type and with integer values to be raised to a power. The calculation type is determined by the base.

Modification 5

Writable Expressions

Some expressions are [writable expressions](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") that can be specified in [result positions](javascript:call_link\('abenresult_position_glosry.htm'\) "Glossary Entry").