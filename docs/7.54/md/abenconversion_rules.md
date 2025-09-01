---
title: "Assignment and Conversion Rules"
description: |
  When the value of a source object (source) is assigned to a destination object (destination), three cases can be distinguished with respect to the data type: 1.  source and destination are compatible(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencompatible_glosry.htm 'Glossary Ent
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_rules.htm"
abapFile: "abenconversion_rules.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abenconversion", "rules"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_assignments.htm) → 

Assignment and Conversion Rules

When the value of a source object (source) is assigned to a destination object (destination), three cases can be distinguished with respect to the data type:

1.  source and destination are [compatible](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencompatible_glosry.htm "Glossary Entry"), which means that all [technical type attributes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentechnical_type_attr_glosry.htm "Glossary Entry") match. The content is copied from source to destination without being converted. For flat data objects and related character-like or byte-like structural areas, a copy of the source object is created down to the exact byte. In the case of [deep](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeep_glosry.htm "Glossary Entry") data objects, a reference is created in the destination object and the actual byte-like content of the reference cannot be seen externally. When entire structures are assigned, the response in terms of [alignment gaps](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenalignment_gap_glosry.htm "Glossary Entry") is undefined. The binary content of an alignment gap in the destination structure can either be copied from the source structure or keep the original value.
    
2.  source and destination are not compatible, but can be [converted](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconvertible_glosry.htm "Glossary Entry"). The content of source is converted in accordance with the conversion rules and then copied to destination. Two data types are convertible if a conversion rule exists for them. An exception is raised if the content of source cannot be handled in accordance with the conversion rules. After an exception, the content of destination is determined by the category of the data type. An assignment that requires a conversion is always slower than an assignment without conversion.
    
3.  If the data objects are not compatible or convertible, no assignment can take place. If the syntax check detects this situation, a syntax error is displayed. If it does not, an exception is raised when the program is executed.

The following sections describe the conversion rules. Conversion rules exist for:

-   [Elementary data objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_elementary.htm)

-   [Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_struc.htm)

-   [Internal tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_itab.htm)

-   [Meshes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_mesh.htm)

-   [Enumerated types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_enumerated.htm)

The special [assignment rules for reference variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_references.htm) are described in a separate section.

The conversion rules explained here generally apply to all [assignments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenequals_operator.htm) and all statements in which the content of data objects is changed. Exceptions to these rules are explained for each individual statement.

The [conversion operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_operator_glosry.htm "Glossary Entry") [CONV](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_conv.htm) can be used in many operand positions to perform a conversion of a source value to an explicitly specified target data type in accordance with the rules explained here. [System classes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_abap_conv.htm) are provided for special conversions of character sets and numeric formats.

Notes

-   In the [operand positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperand_position_glosry.htm "Glossary Entry") of many statements, assignments take place internally according to the assignment rules. If exceptions occur during an assignment, whether they can be handled or not depends on the operand and the operand position. The following are some examples:

-   If [functional method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_functional.htm) are used in operand positions, exceptions that can be handled when data objects are used directly cannot be handled and lead directly to runtime errors.

-   In [comparisons](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm), some different [rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_rules_operands.htm) apply than in assignments. Exceptions that are handleable in assignments are either handled implicitly or produce runtime errors and cannot be handled explicitly in comparisons.

-   Using [expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_glosry.htm "Glossary Entry") in operand positions can make unhandleable exceptions handleable in some cases.

-   The [lossless operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlossless_operator_glosry.htm "Glossary Entry") [EXACT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_exact.htm) can be used to perform checks before the conversion is carried out. These ensure that only applicable values are assigned and that no values are lost in assignments.

-   Checks generally are not made on assignments between compatible data objects. If a data object already contains an invalid value, for example an invalid date or time in a date or time field, then this value is passed just like a valid value if the assignment is being made to a compatible data object.

Programming Guideline

[Avoid unexpected conversion results](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuse_conversion_rules_guidl.htm "Guideline")

Continue
[Conversion Rules for Elementary Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_elementary.htm)
[Conversion Rules for Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_struc.htm)
[Conversion Rules for Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_itab.htm)
[Conversion Rules for Meshes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_mesh.htm)
[Conversion Rules for Enumerated Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_enumerated.htm)
[System Classes for Converting Character Sets and Number Formats](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_abap_conv.htm)
[Conversions - Performance Notes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_perfo.htm)