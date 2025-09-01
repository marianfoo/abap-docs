---
title: "input_parameter_glosry"
description: |
  input_parameter_glosry - ABAP latest language reference documentation
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninput_parameter_glosry.htm"
abapFile: "abeninput_parameter_glosry.htm"
keywords: ["do", "if", "try", "method", "abeninput", "parameter", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20input%20parameter%2C%20ABENINPUT_PARAMETER_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

input parameter

[Formal parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenformal_parameter_glosry.htm "Glossary Entry") of a [procedure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocedure_glosry.htm "Glossary Entry") to which the value of an [actual parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenactual_parameter_glosry.htm "Glossary Entry") is passed at the time of a call and which is evaluated in the procedure. Input parameters for which [pass by reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpass_by_reference_glosry.htm "Glossary Entry") is defined must not be accessed with write access in the procedure. Input parameters are defined for [methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethod_glosry.htm "Glossary Entry") and [function modules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_module_glosry.htm "Glossary Entry") using IMPORTING, which is why they are also called IMPORTING parameters. For [subroutines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensubroutine_glosry.htm "Glossary Entry"), input parameters are defined using USING and the latter are not protected against write access defined for pass by reference.