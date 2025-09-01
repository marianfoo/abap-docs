---
title: "Assignments Between Data Reference Variables"
description: |
  Data reference variables are either completely typed or typed with the generic type data. -   Upcasts in Data References(#abenconversion-references-data-1-------downcasts-in-data-references---@ITOC@@ABENCONVERSION_REFERENCES_DATA_2) Upcasts in Data References An upcast(https://help.sap.com/doc/a
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_references_data.htm"
abapFile: "abenconversion_references_data.htm"
keywords: ["do", "if", "case", "try", "catch", "class", "data", "types", "abenconversion", "references"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreference_assignments.htm) →  [Assigning Reference Variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenset_references.htm) →  [Assignment Rules for Reference Variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_references.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Assignments%20Between%20Data%20Reference%20Variables%2C%20ABENCONVERSION_REFERENCES_DATA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

Assignments Between Data Reference Variables

Data reference variables are either completely typed or typed with the generic type data.

-   [Upcasts in Data References](#abenconversion-references-data-1-------downcasts-in-data-references---@ITOC@@ABENCONVERSION_REFERENCES_DATA_2)

Upcasts in Data References   

An [upcast](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenup_cast_glosry.htm "Glossary Entry") in data references is possible in the following cases:

-   The static types of the source variable and the target variable match according to the following rules:
    -   Both are elementary data types with identical [technical type properties](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentechnical_type_prpt_glosry.htm "Glossary Entry"), namely the built-in ABAP type, length, and number of decimal places. It is not important how the static types were defined.
    -   Both have an identical structured type. In the case of structured types, identical technical type properties are not sufficient, but the same structured type must have been used to define the static types.
    -   Both are table types with matching technical type properties, that is, line types, table category, and table key. In the case of non-structured line types, identical technical properties of the line type are sufficient. In the case of structured line types, both definitions must have been made with reference to the same structured type.
-   The static type of the source variable is completely typed, and the static type of the target variable is generic.

Hint

With respect to checks on static types, structured types behave like classes. Two differently structured types do not match, even if they consist of identical components.

Downcasts in Data References   

A [downcast](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendown_cast_glosry.htm "Glossary Entry") in data references is only possible if the static type of the source variable is generic and that of the target variable is completely typed. The syntax check makes it impossible for static types of the source variable and the target variable to be completely typed, but not identical at the same time.

Example

The assignment from dref1 to dref2 is an upcast. The assignment from dref2 to dref1 is a downcast, which in the example below raises an exception. If the statement [CREATE DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data.htm) had the addition TYPE i, the downcast would also have been successful.

DATA: dref1 TYPE REF TO i,
      dref2 TYPE REF TO data.
CREATE DATA dref1.
dref2 = dref1.
CREATE DATA dref2 TYPE string.
TRY.
  dref1 ?= dref2.
  CATCH cx\_sy\_move\_cast\_error.
  ...
ENDTRY.