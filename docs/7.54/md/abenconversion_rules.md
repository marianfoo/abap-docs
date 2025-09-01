  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) → 

Assignment and Conversion Rules

When the value of a source object (source) is assigned to a destination object (destination), three cases can be distinguished with respect to the data type:

1.  source and destination are [compatible](javascript:call_link\('abencompatible_glosry.htm'\) "Glossary Entry"), which means that all [technical type attributes](javascript:call_link\('abentechnical_type_attr_glosry.htm'\) "Glossary Entry") match. The content is copied from source to destination without being converted. For flat data objects and related character-like or byte-like structural areas, a copy of the source object is created down to the exact byte. In the case of [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data objects, a reference is created in the destination object and the actual byte-like content of the reference cannot be seen externally. When entire structures are assigned, the response in terms of [alignment gaps](javascript:call_link\('abenalignment_gap_glosry.htm'\) "Glossary Entry") is undefined. The binary content of an alignment gap in the destination structure can either be copied from the source structure or keep the original value.
    
2.  source and destination are not compatible, but can be [converted](javascript:call_link\('abenconvertible_glosry.htm'\) "Glossary Entry"). The content of source is converted in accordance with the conversion rules and then copied to destination. Two data types are convertible if a conversion rule exists for them. An exception is raised if the content of source cannot be handled in accordance with the conversion rules. After an exception, the content of destination is determined by the category of the data type. An assignment that requires a conversion is always slower than an assignment without conversion.
    
3.  If the data objects are not compatible or convertible, no assignment can take place. If the syntax check detects this situation, a syntax error is displayed. If it does not, an exception is raised when the program is executed.

The following sections describe the conversion rules. Conversion rules exist for:

-   [Elementary data objects](javascript:call_link\('abenconversion_elementary.htm'\))

-   [Structures](javascript:call_link\('abenconversion_struc.htm'\))

-   [Internal tables](javascript:call_link\('abenconversion_itab.htm'\))

-   [Meshes](javascript:call_link\('abenconversion_mesh.htm'\))

-   [Enumerated types](javascript:call_link\('abenconversion_enumerated.htm'\))

The special [assignment rules for reference variables](javascript:call_link\('abenconversion_references.htm'\)) are described in a separate section.

The conversion rules explained here generally apply to all [assignments](javascript:call_link\('abenequals_operator.htm'\)) and all statements in which the content of data objects is changed. Exceptions to these rules are explained for each individual statement.

The [conversion operator](javascript:call_link\('abenconversion_operator_glosry.htm'\) "Glossary Entry") [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) can be used in many operand positions to perform a conversion of a source value to an explicitly specified target data type in accordance with the rules explained here. [System classes](javascript:call_link\('abencl_abap_conv.htm'\)) are provided for special conversions of character sets and numeric formats.

Notes

-   In the [operand positions](javascript:call_link\('abenoperand_position_glosry.htm'\) "Glossary Entry") of many statements, assignments take place internally according to the assignment rules. If exceptions occur during an assignment, whether they can be handled or not depends on the operand and the operand position. The following are some examples:

-   If [functional method calls](javascript:call_link\('abapcall_method_functional.htm'\)) are used in operand positions, exceptions that can be handled when data objects are used directly cannot be handled and lead directly to runtime errors.

-   In [comparisons](javascript:call_link\('abenlogexp.htm'\)), some different [rules](javascript:call_link\('abenlogexp_rules_operands.htm'\)) apply than in assignments. Exceptions that are handleable in assignments are either handled implicitly or produce runtime errors and cannot be handled explicitly in comparisons.

-   Using [expressions](javascript:call_link\('abenexpression_glosry.htm'\) "Glossary Entry") in operand positions can make unhandleable exceptions handleable in some cases.

-   The [lossless operator](javascript:call_link\('abenlossless_operator_glosry.htm'\) "Glossary Entry") [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) can be used to perform checks before the conversion is carried out. These ensure that only applicable values are assigned and that no values are lost in assignments.

-   Checks generally are not made on assignments between compatible data objects. If a data object already contains an invalid value, for example an invalid date or time in a date or time field, then this value is passed just like a valid value if the assignment is being made to a compatible data object.

Programming Guideline

[Avoid unexpected conversion results](javascript:call_link\('abenuse_conversion_rules_guidl.htm'\) "Guideline")

Continue
[Conversion Rules for Elementary Data Objects](javascript:call_link\('abenconversion_elementary.htm'\))
[Conversion Rules for Structures](javascript:call_link\('abenconversion_struc.htm'\))
[Conversion Rules for Internal Tables](javascript:call_link\('abenconversion_itab.htm'\))
[Conversion Rules for Meshes](javascript:call_link\('abenconversion_mesh.htm'\))
[Conversion Rules for Enumerated Types](javascript:call_link\('abenconversion_enumerated.htm'\))
[System Classes for Converting Character Sets and Number Formats](javascript:call_link\('abencl_abap_conv.htm'\))
[Conversions - Performance Notes](javascript:call_link\('abenconversion_perfo.htm'\))