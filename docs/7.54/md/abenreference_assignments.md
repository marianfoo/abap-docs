---
title: "Assigning References"
description: |
  This section discusses the assignments and special statements that set the references (or pointers) used in data references and field symbols. -   Setting Reference Variables(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenset_references.htm) -   Setting Field Symbols(https://help
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreference_assignments.htm"
abapFile: "abenreference_assignments.htm"
keywords: ["do", "try", "data", "internal-table", "field-symbol", "abenreference", "assignments"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_assignments.htm) → 

Assigning References

This section discusses the assignments and special statements that set the references (or pointers) used in data references and field symbols.

-   [Setting Reference Variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenset_references.htm)

-   [Setting Field Symbols](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenset_field_symbols.htm)

When using field symbols and data references that contain references to data objects, the following should be noted:

-   In a regular assignment between field symbols, as occurs in an [assignment of data objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmove.htm), each field symbol is handled as a dereferenced pointer ([value semantics](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_semantics_glosry.htm "Glossary Entry")).

-   In a regular assignment between data references, as occurs in an [up cast or down cast](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmove_cast.htm), the references are copied ([reference semantics](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreference_semantics_glosry.htm "Glossary Entry")). The corresponding rules can be found in the [assignment rules for reference variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_references.htm).

Programming Guideline

[Use field symbols and data references in appropriate ways](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendyn_access_data_obj_guidl.htm "Guideline")

Note

For the [dynamic data objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynamic_data_object_glosry.htm "Glossary Entry") (strings, internal tables, and [boxed components](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenboxed_component_glosry.htm "Glossary Entry")) which are also managed internally using references, value semantics apply. This means that the internal management is not visible for the developers.

Continue
[Setting Reference Variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenset_references.htm)
[Setting Field Symbols](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenset_field_symbols.htm)