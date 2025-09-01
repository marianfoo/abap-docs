---
title: "CREATE DATA dref"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcreate_data_shortref.htm) Syntax CREATE DATA dref area_handle(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcreate_data_area_handle.htm). Effect Creation of an anonymous data object with an i
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcreate_data_implicit.htm"
abapFile: "abapcreate_data_implicit.htm"
keywords: ["select", "do", "if", "try", "data", "abapcreate", "implicit"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencreate_objects.htm) →  [CREATE DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcreate_data.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CREATE DATA dref, ABAPCREATE_DATA_IMPLICIT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion for improvement:)

CREATE DATA dref

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcreate_data_shortref.htm)

Syntax

CREATE DATA dref *\[*[area\_handle](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcreate_data_area_handle.htm)*\]*.

Effect

Creation of an anonymous data object with an implicit type. If neither of the additions TYPE or LIKE are specified, the data reference variable dref must be completely typed. The data object is then created with the static data type of the data reference variable.

Hint

When the character # is used in an operand position with the operand type of a data reference variable, the [instance operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninstance_operator_glosry.htm "Glossary Entry") [NEW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_new.htm) works like the statement CREATE DATA dref.

Example

Creation of an anonymous data object of the type SCARR from the ABAP Dictionary. The type is implicitly determined using the static data type of the data reference variable.

DATA dref TYPE REF TO scarr.
CREATE DATA dref.
SELECT SINGLE \*
       FROM scarr
       WHERE carrid = 'LH'
       INTO @dref->\*.
cl\_demo\_output=>display( |{ dref->carrid }, { dref->carrname }| ).

Executable Example

[Creating Data Objects with Implicit Type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencreate_data_implicit_abexa.htm)

Continue
![Example](exa.gif "Example") [Creating Data Objects with Implicit Type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencreate_data_implicit_abexa.htm)