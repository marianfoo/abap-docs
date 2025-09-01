# ABAP Keyword Documentation / ABAP − Reference / Processing Internal Data / Assignments

Included pages: 2


### abenvalue_assignments.htm

---
title: "Assignments"
description: |
  An assignment passes the content of a source to a target data object. A source can be one of the following: -   Data objects(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_object_glosry.htm 'Glossary Entry') -   Return values or results of functional methods(https://help.sap
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_assignments.htm"
abapFile: "abenvalue_assignments.htm"
keywords: ["do", "if", "try", "method", "data", "abenvalue", "assignments"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) → 

Assignments

An assignment passes the content of a source to a target data object. A source can be one of the following:

-   [Data objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_object_glosry.htm "Glossary Entry")

-   Return values or results of [functional methods](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_method_glosry.htm "Glossary Entry"), return values or results of [built-in functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredefined_function_glosry.htm "Glossary Entry") and [constructor expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), or return values or results of [table expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_expression_glosry.htm "Glossary Entry")

-   Results of [calculation expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalculation_expression_glosry.htm "Glossary Entry")

The following sections describe the rules, operators, and key words where the assignment of source values to target data objects is of significance.

-   [Assignment and conversion rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_rules.htm)

-   [\= - assignment operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_operator.htm)

-   [CONV - conversion operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_conv.htm)

-   [Assigning structure components](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencorresponding.htm)

-   [Assigning references](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreference_assignments.htm)

-   [Lossless assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlossless_move.htm)

-   [Special assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_move.htm)

-   [Initializations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninitializations.htm)

Assignments also occur, however, in the [operand positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperand_position_glosry.htm "Glossary Entry") of many other statements in which the [assignment rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_rules.htm) also apply.

Example

Typical assignment with the assignment operator (\=) in which a conversion takes place. During the assignment to a data object num of type i, the current date in the system field sy-datlo is converted to the number of days since 01.01.0001.

DATA num TYPE i.
num = sy-datlo.
cl\_demo\_output=>display( |{ sy-datlo }->{ num }| ).

Continue
[Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_rules.htm)
[\= - Assignment Operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_operator.htm)
[CONV - Conversion Operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_conv.htm)
[Assigning Structure Components](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencorresponding.htm)
[Assigning References](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreference_assignments.htm)
[Lossless Assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlossless_move.htm)
[Special Assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_move.htm)
[Initializations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninitializations.htm)


### abenunicode_fragment_view.htm

---
title: "Structural Fragment View"
description: |
  The structure fragment view splits a structure into fragments. A fragment is a grouping of structure components of the same or similar data types. In nested structures, the elementary components on the lowest nesting depth are taken into account when forming fragments in nested structures. The follo
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_fragment_view.htm"
abapFile: "abenunicode_fragment_view.htm"
keywords: ["do", "if", "try", "data", "types", "abenunicode", "fragment", "view"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_rules.htm) →  [Conversion Rules for Structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_struc.htm) → 

Structural Fragment View

The structure fragment view splits a structure into fragments. A fragment is a grouping of structure components of the same or similar data types. In nested structures, the elementary components on the lowest nesting depth are taken into account when forming fragments in nested structures. The following parts of a structure are each grouped to form fragments:

-   Consecutive [flat](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_glosry.htm "Glossary Entry") character-like components of the types c, n, d, and t, between which there are no [alignment gaps](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenalignment_gap_glosry.htm "Glossary Entry"), form character-like fragments.

-   Consecutive flat byte-like components of the type x, between which there are no alignment gaps, form byte-like fragments.

-   Consecutive, similarly typed numeric components of type (b, s), i, int8, decfloat16, decfloat34, or f, between which there are no alignment gaps, each form a common fragment.

-   Each individual numeric type p component forms a separate fragment. For this type of fragment it is the length that is important, not the number of decimal places.

-   In [deep](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeep_glosry.htm "Glossary Entry") structures, each deep component (reference) forms a separate fragment.

-   Each component with an [enumerated type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_type_glosry.htm "Glossary Entry") comprises a separate fragment of this type.

-   Each alignment gap is regarded as a fragment.

Notes

-   In nested structures, you should note that alignment gaps can arise before and after aligned substructures.

-   When structure components are passed using [INCLUDE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinclude_type.htm), an additional alignment gap can appear in front of the passed components.

-   The fragment view of structures with components of type p can match, even when the number of decimal places in the components concerned is different.

-   An [enumerated structure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_structure_glosry.htm "Glossary Entry") of an [enumerated type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_type_glosry.htm "Glossary Entry") is a special structure in which each component has an enumerated type and a separate fragment.

Example

DATA:
  BEGIN OF struc,
    a TYPE c LENGTH 3,
    b TYPE n LENGTH 4,
    c TYPE d,
    d TYPE t,
    e TYPE decfloat16,
    f TYPE x LENGTH 2,
    g TYPE x LENGTH 4,
    h TYPE i,
    i TYPE i,
    j TYPE i,
    k TYPE i,
  END OF struc.

The structure struc contains the following fragments for the character representation [UCS-2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenucs2_glosry.htm "Glossary Entry") used by the ABAP programming language (in which character-like fields are represented by two bytes per character). Alignment gaps are marked with an A.

Fragment

Components

Bytes

1

a, b, c, d

6+8+16+12

2

A

6

3

e

8

4

f, g

2+4

5

A

2

6

h, i, j, k

4+4+4+4
