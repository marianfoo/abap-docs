---
title: "CREATE DATA dref"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_shortref.htm) Syntax CREATE DATA dref area_handle(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_area_handle.htm). Effect Creates an anonymous data object with an impli
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_implicit.htm"
abapFile: "abapcreate_data_implicit.htm"
keywords: ["select", "do", "if", "try", "data", "abapcreate", "implicit"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencreate_objects.htm) →  [CREATE DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data.htm) → 

CREATE DATA dref

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_shortref.htm)

Syntax

CREATE DATA dref *\[*[area\_handle](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_area_handle.htm)*\]*.

Effect

Creates an anonymous data object with an implicit type. If none of the additions TYPE or LIKE is specified, data reference variable dref must be fully typed. The data object is then created with the static data type of the data reference variable.

Note

When the character # is used in an operand position with the operand type of a data reference variable, the [instance operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninstance_operator_glosry.htm "Glossary Entry") [NEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_new.htm) works like the statement CREATE DATA dref.

Example

Creates an anonymous data object of the type SCARR from ABAP Dictionary. The type is implicitly determined using the static data type of the data reference variable.

DATA dref TYPE REF TO scarr.
CREATE DATA dref.
SELECT SINGLE \*
       FROM scarr
       WHERE  carrid = 'LH'
       INTO @dref->\*.
cl\_demo\_output=>display( |{ dref->carrid }, { dref->carrname }| ).

Executable Example

[Creating Data Objects with Implicit Type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencreate_data_implicit_abexa.htm)

Continue
![Example](exa.gif "Example") [Creating Data Objects with Implicit Type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencreate_data_implicit_abexa.htm)