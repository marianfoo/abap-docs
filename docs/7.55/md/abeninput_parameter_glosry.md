---
title: "input_parameter_glosry"
description: |
  input_parameter_glosry - ABAP 7.55 language reference documentation
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninput_parameter_glosry.htm"
abapFile: "abeninput_parameter_glosry.htm"
keywords: ["do", "try", "method", "abeninput", "parameter", "glosry"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_glossary.htm) → 

input parameter

[Formal parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenformal_parameter_glosry.htm "Glossary Entry") of a [procedure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprocedure_glosry.htm "Glossary Entry") to which the value of an [actual parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenactual_parameter_glosry.htm "Glossary Entry") is passed at the time of a call and which is evaluated in the procedure. Input parameters for which [pass by reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpass_by_reference_glosry.htm "Glossary Entry") is defined must not be accessed with write access in the procedure. Input parameters are defined for [methods](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmethod_glosry.htm "Glossary Entry") and [function modules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunction_module_glosry.htm "Glossary Entry") using IMPORTING, which is why they are also called IMPORTING parameters. For [subroutines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubroutine_glosry.htm "Glossary Entry"), input parameters are defined using USING and the latter are not protected against write access defined for pass by reference.