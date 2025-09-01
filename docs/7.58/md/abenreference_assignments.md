---
title: "Assigning References"
description: |
  This section discusses the assignments and special statements that set the references (pointers) contained in data references and field symbols. -   Setting Reference Variables(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenset_references.htm) -   Setting Field Symbols(https://he
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreference_assignments.htm"
abapFile: "abenreference_assignments.htm"
keywords: ["do", "if", "try", "data", "internal-table", "field-symbol", "abenreference", "assignments"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_assignments.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Assigning%20References%2C%20ABENREFERENCE_ASSIGNMENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Assigning References

This section discusses the assignments and special statements that set the references (pointers) contained in data references and field symbols.

-   [Setting Reference Variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenset_references.htm)
-   [Setting Field Symbols](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenset_field_symbols.htm)

When using field symbols and data references that contain references to data objects, the following should be noted:

-   In a regular assignment between field symbols, as in an [assignment of data objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmove.htm), each field symbol is handled as a dereferenced pointer ([value semantics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_semantics_glosry.htm "Glossary Entry")).
-   In a regular assignment between data references, as in an [upcast or downcast](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmove_cast.htm), the references are copied ([reference semantics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreference_semantics_glosry.htm "Glossary Entry")). The corresponding rules can be found in the [assignment rules for reference variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_references.htm).

Programming Guideline

[Use field symbols and data references in appropriate ways](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendyn_access_data_obj_guidl.htm "Guideline")

Hint

For the [dynamic data objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynamic_data_object_glosry.htm "Glossary Entry") (strings, internal tables) and [boxed components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenboxed_component_glosry.htm "Glossary Entry") that are also managed internally using references, value semantics apply. This means that the internal administration is not visible for the developers.

Continue
[Assigning Reference Variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenset_references.htm)
[Assigning Field Symbols](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenset_field_symbols.htm)