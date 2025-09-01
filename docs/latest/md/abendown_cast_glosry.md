---
title: "down_cast_glosry"
description: |
  down_cast_glosry - ABAP latest language reference documentation
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendown_cast_glosry.htm"
abapFile: "abendown_cast_glosry.htm"
keywords: ["do", "if", "case", "try", "abendown", "cast", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20downcast%2C%20ABENDOWN_CAST_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

downcast

Also called narrowing cast. [Assignment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassignment_glosry.htm "Glossary Entry") between [reference variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreference_variable_glosry.htm "Glossary Entry") in which the [static type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_type_glosry.htm "Glossary Entry") of the target variable is more specific than the static type of the source variable and the assignability is not checked until runtime. A downcast must always be performed explicitly. This is done using assignments with the [casting operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencasting_operator_glosry.htm "Glossary Entry") ([?=](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmove_cast.htm)) and [constructor expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") with the casting operator [CAST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_cast.htm). Downcasts are also still possible using the INTO addition of the statement [WHEN TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwhen_type.htm) of a case distinction using [CASE TYPE OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcase_type.htm). See also [upcast](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenup_cast_glosry.htm "Glossary Entry").

[→ More about](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_references.htm)