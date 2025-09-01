  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands.htm) → 

Operand Type

An operand position is typed using an operand type, which is complete or generic and can also be dependent on other operand positions, for example in statements. When a statement is executed, an operand with a suitable data type is expected. If a data object specified at an operand position has a different data type than the operand type, an attempt is usually made to convert the content of the data object to the operand type on the basis of the [conversion rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_rules.htm) in [writing positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwriting_position_glosry.htm "Glossary Entry"), and, in the other direction, in [reading positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreading_position_glosry.htm "Glossary Entry"). Note that every conversion incurs runtime costs. If no appropriate conversion rules have been defined, or the content cannot be converted, a syntax error occurs or an exception is raised. Deviations from this rule, for example that the data object must exactly match the operand type, or the data object is to be interpreted as an operand type, regardless of its actual type ([casting](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencast_casting_glosry.htm "Glossary Entry")), are described in the individual statements.

-   [Operand Positions for Elementary Data Objects](#@@ITOC@@ABENDATA_OBJECTS_USAGE_1)

-   [Operand Positions for Structures](#@@ITOC@@ABENDATA_OBJECTS_USAGE_2)

-   [Operand Positions for Internal Tables](#@@ITOC@@ABENDATA_OBJECTS_USAGE_3)

-   [Operand Positions for Reference Variables](#@@ITOC@@ABENDATA_OBJECTS_USAGE_4)

Operand Positions for Elementary Data Objects

For operand positions for [elementary data objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenelementary_data_object_glosry.htm "Glossary Entry"), the following must be specified when the statement is executed, depending on the operand type:

-   [Character-like data objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharlike_data_object_glosry.htm "Glossary Entry")

-   [Numeric data objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennumeric_data_object_glosry.htm "Glossary Entry")

-   [Byte-like data objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbyte_like_data_object_glosry.htm "Glossary Entry")

Generic [typed](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_glosry.htm "Glossary Entry") formal parameters or field symbols can also be specified statically if they are typed more generally than the expected type.

[Flat structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_structure_glosry.htm "Glossary Entry") with only character-like components of the types c, n, d, or t can also be used in all operand positions that expect elementary fields. Structures like this are handled in the same way as a single data object of type c (implicit casting).

Operand Positions for Structures

Structures must be specified at operand positions for [structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstructure_glosry.htm "Glossary Entry") when the statement is executed. Formal parameters or field symbols of generic type data or any can also be specified statically.

Operand Positions for Internal Tables

In operand positions for [internal tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_table_glosry.htm "Glossary Entry"), internal tables must be specified both when the statement is executed and be specified as internal tables known statically. Generic formal parameters and field symbols can only be specified if they are typed with at least the generic type [any table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuilt_in_types_generic.htm). Only index tables can be specified in operand positions that include index access, and generic formal parameters and field symbols must be typed with at least the generic type [index table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuilt_in_types_generic.htm).

Operand Positions for Reference Variables

Depending on the operand type, either data reference variables or object reference variables must be specified in operand positions for [reference variables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreference_variable_glosry.htm "Glossary Entry") when the statement is executed. Formal parameters or field symbols of generic type data or any can also be specified statically.