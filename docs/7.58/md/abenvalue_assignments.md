  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Assignments%2C%20ABENVALUE_ASSIGNMENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Assignments

An assignment passes the content of a source to a target data object. The source can be one of the following:

-   [Data objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_object_glosry.htm "Glossary Entry")
-   Return values or results of [functional methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunctional_method_glosry.htm "Glossary Entry"), [built-in functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_function_glosry.htm "Glossary Entry") and [constructor expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), or [table expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_expression_glosry.htm "Glossary Entry")
-   Results of [calculation expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencalculation_expression_glosry.htm "Glossary Entry")

The following sections describe the rules, operators, and keywords where the assignment of source values to target data objects is of significance.

-   [Assignment and conversion rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_rules.htm)
-   [\= - assignment operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenequals_operator.htm)
-   [CONV - conversion operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_conv.htm)
-   [Assigning structure components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencorresponding.htm)
-   [Assigning references](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreference_assignments.htm)
-   [Lossless assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlossless_move.htm)
-   [Special assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_move.htm)
-   [Initializations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninitializations.htm)

Assignments also occur, however, in the [operand positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperand_position_glosry.htm "Glossary Entry") of many other statements in which the [assignment rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_rules.htm) also apply.

Example

Typical assignment with the assignment operator (\=) during which a conversion takes place. In the assignment to a data object num of type i, the current user date is converted to the number of days since 01.01.0001.

DATA num TYPE i.
num = cl\_demo\_date\_time=>get\_user\_date( ).
cl\_demo\_output=>display(
            |{ cl\_demo\_date\_time=>get\_user\_date( ) }->{ num }|
                          ).

Continue
[Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_rules.htm)
[\=, Assignment Operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenequals_operator.htm)
[CONV, Conversion Operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_conv.htm)
[Assigning Structure Components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencorresponding.htm)
[Assigning References](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreference_assignments.htm)
[Lossless Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlossless_move.htm)
[Special Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_move.htm)
[Initializations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninitializations.htm)