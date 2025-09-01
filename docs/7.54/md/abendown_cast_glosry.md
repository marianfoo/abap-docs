---
title: "down_cast_glosry"
description: |
  down_cast_glosry - ABAP 7.54 language reference documentation
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendown_cast_glosry.htm"
abapFile: "abendown_cast_glosry.htm"
keywords: ["do", "if", "case", "try", "abendown", "cast", "glosry"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

down cast

Also called narrowing cast. [Assignment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenassignment_glosry.htm "Glossary Entry") between [reference variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreference_variable_glosry.htm "Glossary Entry"), where the [static type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstatic_type_glosry.htm "Glossary Entry") of the target variable is more specific than the static type of the source variable and the assignability is checked at runtime. A down cast must always be performed explicitly. Assignments can be made using the [casting operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencasting_operator_glosry.htm "Glossary Entry") ([?=](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmove_cast.htm)) and [constructor expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") can be specified using the casting operator [CAST](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_cast.htm). Down casts are also still possible using the INTO addition of the statement [WHEN TYPE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwhen_type.htm) of a case distinction using [CASE TYPE OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_type.htm). See also [up cast](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenup_cast_glosry.htm "Glossary Entry").

[→ More](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_references.htm)