  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_rules.htm) →  [Conversion Rules for Structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_struc.htm) → 

Structural Fragment View

The structure fragment view splits a structure into fragments. A fragment is a grouping of structure components of the same or similar data types. In nested structures, the elementary components on the lowest nesting depth are respected when forming fragments in nested structures. The following parts of a structure are each grouped to form fragments:

-   Consecutive [flat](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_glosry.htm "Glossary Entry") character-like components of the types c, n, d, and t, between which there are no [alignment gaps](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenalignment_gap_glosry.htm "Glossary Entry"), form character-like fragments.

-   Consecutive flat byte-like components of the type x, between which there are no alignment gaps, form byte-like fragments.

-   Consecutive, similarly typed numeric components of type (b, s), i, int8, decfloat16, decfloat34, or f, between which there are no alignment gaps, each form a common fragment.

-   Each individual numeric type p component forms a separate fragment. For this type of fragment it is the length that is important, not the number of decimal places.

-   In [deep](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeep_glosry.htm "Glossary Entry") structures, each deep component (reference) forms a separate fragment.

-   Each component with an [enumerated type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_type_glosry.htm "Glossary Entry") comprises a separate fragment of this type.

-   Each alignment gap is regarded as a fragment.

Notes

-   In nested structures, alignment gaps can arise before and after aligned substructures.

-   When structure components are passed using [INCLUDE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinclude_type.htm), an additional alignment gap can appear in front of the passed components.

-   The fragment view of structures with components of type p can match, even when the number of decimal places in the components concerned is different.

-   An [enumerated structure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_structure_glosry.htm "Glossary Entry") of an [enumerated type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_type_glosry.htm "Glossary Entry") is a special structure in which each component has an enumerated type and a separate fragment.

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

The structure struc contains the following fragments for the character representation [UCS-2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenucs2_glosry.htm "Glossary Entry") used by the ABAP programming language (in which character-like fields are represented by two bytes per character). Alignment gaps are marked with an A.

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