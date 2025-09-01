  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_assignments.htm) → 

Assignment and Conversion Rules

When the value of a source object (source) is assigned to a destination object (destination), three cases can be distinguished with respect to the data type:

1.  source and destination are [compatible](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencompatible_glosry.htm "Glossary Entry"), which means that all [technical type attributes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentechnical_type_attr_glosry.htm "Glossary Entry") match. The content is transferred from source to destination without being converted. For flat data objects and coherent character-like or byte-like structural areas, a copy of the source object is created down to the exact byte. In the case of [deep](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeep_glosry.htm "Glossary Entry") data objects, a reference is created whose actual byte-like content is not visible externally in the destination object. When entire structures are assigned, the behavior in terms of [alignment gaps](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenalignment_gap_glosry.htm "Glossary Entry") is undefined. The binary content of an alignment gap in the destination structure can either be copied from the source structure or keep the original value.
    
2.  source and destination are not compatible but can be [converted](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconvertible_glosry.htm "Glossary Entry"). The content of source is converted in accordance with the conversion rules and then transferred to destination. Two data types are convertible if a conversion rule exists for them. An exception is raised if the content of source cannot be handled in accordance with the conversion rules. After an exception, the content of destination depends on the category of the data type. An assignment where a conversion takes place is always slower than an assignment without conversion.
    
3.  If the data objects are neither compatible nor convertible, no assignment can take place. If the syntax check recognizes this status, a syntax error is raised, otherwise an exception is raised when the program is executed.
    

The following sections describe the conversion rules. Conversion rules exist for:

-   [Elementary data objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_elementary.htm)

-   [Structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_struc.htm)

-   [Internal tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_itab.htm)

-   [Meshes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_mesh.htm)

-   [Enumerated types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_enumerated.htm)

The special [assignment rules for reference variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_references.htm) are listed in a separate section.

The conversion rules shown here generally apply to all [assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenequals_operator.htm) and all statements in which the content of data objects is changed. Exceptions to these rules are described in the individual statements.

The [conversion operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_operator_glosry.htm "Glossary Entry") [CONV](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_conv.htm) can be used in many operand positions to convert a source value to an explicitly specified target data type in accordance with the rules described here. [System classes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencl_abap_conv.htm) are available for special conversions of character sets and numeric formats.

Hints

-   In the [operand positions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperand_position_glosry.htm "Glossary Entry") of many statements, assignments take place internally according to the assignment rules. It depends on the operands and the operand position whether the exceptions that occur during an assignment can be handled or not. The following are some examples:

-   If [functional method calls](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_method_functional.htm) are used in operand positions, exceptions that can be handled when data objects are used directly cannot be handled, but lead directly to runtime errors.

-   In [comparisons](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp.htm), some different [rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_rules_operands.htm) apply than in assignments. Exceptions that are catchable in assignments are either handled implicitly or lead to runtime errors and cannot be handled explicitly in comparisons.

-   Using [expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexpression_glosry.htm "Glossary Entry") in operand positions can make uncatchable exceptions catchable in some cases.

-   The [lossless operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlossless_operator_glosry.htm "Glossary Entry") [EXACT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_exact.htm) can be used to perform checks before the conversion is executed, which ensure that only valid values are assigned and that no values are lost in assignments.

-   Checks generally are not made on assignments between compatible data objects. If a data object already contains an invalid value, for example an invalid date or time in a date or time field, it is transferred like a valid value if the assignment is being made to a compatible data object.

Programming Guideline

[Avoid unexpected conversion results](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuse_conversion_rules_guidl.htm "Guideline")

Continue
[Conversion Rules for Elementary Data Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_elementary.htm)
[Conversion Rules for Structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_struc.htm)
[Conversion Rules for Internal Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_itab.htm)
[Conversion Rules for Meshes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_mesh.htm)
[Conversion Rules for Enumerated Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_enumerated.htm)
[System Classes for Converting Character Sets and Number Formats](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencl_abap_conv.htm)
[Conversions, Performance Notes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_perfo.htm)