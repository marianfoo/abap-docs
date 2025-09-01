  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.40 and its SPs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740.htm) →  [News for Release 7.40, SP02](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp02.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Expressions and Functions in Release 7.40, SP02, ABENNEWS-740-EXPRESSIONS, 757%0D%0A%
0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Expressions and Functions in Release 7.40, SP02

[1\. Inline Declarations](#!ABAP_MODIFICATION_1@1@)
[2\. Constructor Expressions](#!ABAP_MODIFICATION_2@2@)
[3\. Table Expressions](#!ABAP_MODIFICATION_3@3@)
[4\. New Built-In Function ipow](#!ABAP_MODIFICATION_4@4@)
[5\. Writable Expressions](#!ABAP_MODIFICATION_5@5@)

Modification 1   

Inline Declarations

The new [declaration operators](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclaration_operator_glosry.htm "Glossary Entry") [DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_inline.htm) and [FIELD-SYMBOL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfield-symbol_inline.htm) make [inline declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninline_declaration_glosry.htm "Glossary Entry") possible in [declaration expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclaration_expression_glosry.htm "Glossary Entry") in [declaration positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclaration_position_glosry.htm "Glossary Entry").

Modification 2   

Constructor Expressions

A new type of expression, [constructor expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expressions.htm), uses [constructor operators](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_operator_glosry.htm "Glossary Entry") in [general expression positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengeneral_expression_positions.htm) to construct results of specified types.

-   [NEW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_new.htm) creates objects
-   [VALUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_value.htm) creates values
-   [REF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_ref.htm) gets references
-   [EXACT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_exact.htm) performs a lossless assignment or calculation
-   [CONV](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_conv.htm) converts values
-   [CAST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_cast.htm) performs an upcast or downcast
-   [COND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconditional_expression_cond.htm) and [SWITCH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconditional_expression_switch.htm) enable conditional expressions

Modification 3   

Table Expressions

The new table expressions [itab\[ ... \]](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expressions.htm) allow reads to be performed on internal tables in operand positions.

Modification 4   

New Built-In Function ipow

The new integer power function [ipow](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpower_function.htm) enables fields of any numeric type and with integer values to be raised to a power. The calculation type is determined by the base.

Modification 5   

Writable Expressions

Some expressions are [writable expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwritable_expression_glosry.htm "Glossary Entry") that can be specified in [result positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenresult_position_glosry.htm "Glossary Entry").