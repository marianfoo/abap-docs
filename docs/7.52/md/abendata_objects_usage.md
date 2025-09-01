  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) → 

Operand Type

An operand position is typed using an operand type, which is complete or generic and can also be dependent on other operand positions, for example in statements. When a statement is executed, an operand with a suitable data type is expected. If a data object specified at an operand position has a different data type than the operand type, an attempt is usually made to convert the content of the data object to the operand type on the basis of the [conversion rules](javascript:call_link\('abenconversion_rules.htm'\)) in [writing positions](javascript:call_link\('abenwriting_position_glosry.htm'\) "Glossary Entry"), and, in the other direction, in [reading positions](javascript:call_link\('abenreading_position_glosry.htm'\) "Glossary Entry"). Note that every conversion incurs runtime costs. If no appropriate conversion rules have been defined, or the content cannot be converted, a syntax error occurs or an exception is raised. Deviations from this rule, for example that the data object must exactly match the operand type, or the data object is to be interpreted as an operand type, regardless of its actual type ([casting](javascript:call_link\('abencast_casting_glosry.htm'\) "Glossary Entry")), are described in the individual statements.

-   [Operand Positions for Elementary Data Objects](#abendata-objects-usage-1--------operand-positions-for-structures---@ITOC@@ABENDATA_OBJECTS_USAGE_2)

-   [Operand Positions for Internal Tables](#abendata-objects-usage-3--------operand-positions-for-reference-variables---@ITOC@@ABENDATA_OBJECTS_USAGE_4)

Operand Positions for Elementary Data Objects

For operand positions for [elementary data objects](javascript:call_link\('abenelementary_data_object_glosry.htm'\) "Glossary Entry"), the following must be specified when the statement is executed, depending on the operand type:

-   [Character-like data objects](javascript:call_link\('abencharlike_data_object_glosry.htm'\) "Glossary Entry")

-   [Numeric data objects](javascript:call_link\('abennumeric_data_object_glosry.htm'\) "Glossary Entry")

-   [Byte-like data objects](javascript:call_link\('abenbyte_like_data_object_glosry.htm'\) "Glossary Entry")

Generic [typed](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry") formal parameters or field symbols can also be specified statically if they are typed more generally than the expected type.

[Flat structures](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry") with only character-like components of the types c, n, d, or t can also be used in all operand positions that expect elementary fields. Structures like this are handled in the same way as a single data object of type c (implicit casting).

Operand Positions for Structures

Structures must be specified at operand positions for [structures](javascript:call_link\('abenstructure_glosry.htm'\) "Glossary Entry") when the statement is executed. Formal parameters or field symbols of generic type data or any can also be specified statically.

Operand Positions for Internal Tables

In operand positions for [internal tables](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry"), internal tables must be specified both when the statement is executed and be specified as internal tables known statically. Generic formal parameters and field symbols can only be specified if they are typed with at least the generic type [any table](javascript:call_link\('abenbuilt_in_types_generic.htm'\)). Only index tables can be specified in operand positions that include index access, and generic formal parameters and field symbols must be typed with at least the generic type [index table](javascript:call_link\('abenbuilt_in_types_generic.htm'\)).

Operand Positions for Reference Variables

Depending on the operand type, either data reference variables or object reference variables must be specified in operand positions for [reference variables](javascript:call_link\('abenreference_variable_glosry.htm'\) "Glossary Entry") when the statement is executed. Formal parameters or field symbols of generic type data or any can also be specified statically.