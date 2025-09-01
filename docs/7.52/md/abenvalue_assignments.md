  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) → 

Assignments

An assignment passes the content of a source to a target data object. A source can be one of the following:

-   [Data objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_object_glosry.htm "Glossary Entry")

-   Return values or results of [functional methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_method_glosry.htm "Glossary Entry"), return values or results of [built-in functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredefined_function_glosry.htm "Glossary Entry") and [constructor expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), or return values or results of [table expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expression_glosry.htm "Glossary Entry")

-   Results of [calculation expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculation_expression_glosry.htm "Glossary Entry")

The following sections describe the rules, operators, and key words where the assignment of source values to target data objects is of significance.

-   [Assignment and conversion rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_rules.htm)

-   [\= - assignment operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_operator.htm)

-   [CONV - conversion operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_conv.htm)

-   [Assigning structure components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencorresponding.htm)

-   [Assigning references](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreference_assignments.htm)

-   [Lossless assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlossless_move.htm)

-   [Special assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_move.htm)

-   [Initializations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninitializations.htm)

Assignments also occur, however, in the [operand positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperand_position_glosry.htm "Glossary Entry") of many other statements in which the [assignment rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_rules.htm) also apply.

Example

Typical assignment with the assignment operator (\=) in which a conversion takes place. During the assignment to a data object num of type i, the current date in the system field sy-datlo is converted to the number of days since 01.01.0001.

DATA num TYPE i.
num = sy-datlo.
cl\_demo\_output=>display( |{ sy-datlo }->{ num }| ).

Continue
[Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_rules.htm)
[\= - Assignment Operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_operator.htm)
[CONV - Conversion Operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_conv.htm)
[Assigning Structure Components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencorresponding.htm)
[Assigning References](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreference_assignments.htm)
[Lossless Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlossless_move.htm)
[Special Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_move.htm)
[Initializations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninitializations.htm)