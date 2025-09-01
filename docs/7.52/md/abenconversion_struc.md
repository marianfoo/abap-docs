---
title: "Conversion Rules for Structures"
description: |
  Assignments between structures(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_objects_structure.htm) distinguish between flat structures(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_structure_glosry.htm 'Glossary Entry') and deep structures(https://h
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_struc.htm"
abapFile: "abenconversion_struc.htm"
keywords: ["do", "if", "try", "data", "abenconversion", "struc"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_rules.htm) → 

Conversion Rules for Structures

Assignments between [structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_objects_structure.htm) distinguish between [flat structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_structure_glosry.htm "Glossary Entry") and [deep structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeep_structure_glosry.htm "Glossary Entry"):

-   Deep structures can only be assigned to each other if they are [compatible](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompatibility.htm). Full compatibility is not required for the following deep components, to which the specified requirements apply:

-   For components that have a [reference type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreference_type_glosry.htm "Glossary Entry"), [up casts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenup_cast_glosry.htm "Glossary Entry") but not [down casts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendown_cast_glosry.htm "Glossary Entry") are permitted.

-   For table-like components, it is sufficient if the [row type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrow_type_glosry.htm "Glossary Entry") is compatible. This means that the full [compatibility](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompatibility.htm) needed for [table categories](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_category_glosry.htm "Glossary Entry") and [table keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_key_glosry.htm "Glossary Entry") is not required here.

-   For flat structures, there are conversion rules for the following assignments between incompatible data objects:

-   [Conversion between flat structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_flat-flat.htm)

-   [Conversion between flat structures and single fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_flat-elementary.htm)

Notes

-   If [substring access](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoffset_length.htm) is performed on a structure and the substring is shorter than the structure, the substring is handled like an operand of type c and the corresponding conversion rules apply. If the substring is exactly the same length as the structure, the substring is handled like the structure itself.

-   A [lossless assignment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlossless_assignment_glosry.htm "Glossary Entry") can be used to apply the same assignment rule to flat structures as to deep structures.

-   The conversion rules for structures are designed to prevent handleable exceptions from being raised. If a conversion is allowed, it takes place.

-   The statement [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove-corresponding.htm) or the conversion operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expr_corresponding.htm) can be used to assign structures component by component.

Programming Guideline

[Avoid unexpected conversion results](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuse_conversion_rules_guidl.htm "Guideline")

Continue
[Conversion Between Flat Structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_flat-flat.htm)
[Conversion Between Flat Structures and Single Fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_flat-elementary.htm)
[Structural Fragment View](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_fragment_view.htm)