---
title: "Checking Elementary Data Objects"
description: |
  In conversions between incompatible elementary data objects(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenelementary_data_object_glosry.htm 'Glossary Entry'), the operator EXACT(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_exact.htm) ensu
version: "7.58"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmove_exact_elementary.htm"
abapFile: "abenmove_exact_elementary.htm"
keywords: ["do", "if", "case", "try", "catch", "class", "data", "types", "abenmove", "exact", "elementary"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_assignments.htm) →  [Lossless Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlossless_move.htm) →  [Lossless Assignments, Rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmove_exact.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Checking%20Elementary%20Data%20Objects%2C%20ABENMOVE_EXACT_ELEMENTARY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Checking Elementary Data Objects

In conversions between incompatible [elementary data objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenelementary_data_object_glosry.htm "Glossary Entry"), the operator [EXACT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_exact.htm) ensures that no values are lost. Regardless of the value of the argument, the operator EXACT generally does not allow conversions between data objects with the following data types, for which the values are always lost when the [conversion rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_elementary.htm) are applied.

-   From x, xstring to n, d, t, and vice versa.
-   From x, xstring to all [numeric data types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennumeric_data_type_glosry.htm "Glossary Entry"), and vice versa.
-   From d and t to b and s

Conversions from d to t and vice versa, and most conversions for time stamps of the type utclong are prohibited regardless of the operator EXACT. Other conversions that are not allowed are conversions in which byte-like fields are converted directly or as an interim result to the data type i and vice versa.

If the compiler detects a forbidden conversion a syntax error occurs. If a forbidden conversion is detected at runtime, an exception of the class CX\_SY\_CONVERSION\_EXACT\_NOT\_SUP is raised. The same applies to types for which conversions are allowed, but for which a loss of values can be identified regardless of the content, for example, if a conversion is made to fields that are too short.

If allowed conversions are made between incompatible elementary data objects, the operator EXACT checks the content of the argument at runtime as follows:

-   [Valid Values for Lossless Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmove_exact_elementary_valid.htm)
-   [Suitable Values for Lossless Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmove_exact_elementary_fit.htm)

If the elementary data types for which no conversion is required are [compatible](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencompatible_glosry.htm "Glossary Entry"), no checks are performed, and no exceptions are raised.

Hints

-   When the operator EXACT is used, a catchable exception is always raised at runtime when a forbidden conversions is made, in particular, when an attempt is made to convert between d and t. In all other cases, an attempted conversion of this type raises an uncatchable exception.
-   If an argument contains an invalid or inappropriate value, this is assigned to its return value, even if the operator EXACT is used.

Executable Example

[Lossless Assignment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmove_exact_abexa.htm).

Continue
[Valid Values for Lossless Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmove_exact_elementary_valid.htm)
[Suitable Values for Lossless Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmove_exact_elementary_fit.htm)
![Example](exa.gif "Example") [Lossless Assignment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmove_exact_abexa.htm)