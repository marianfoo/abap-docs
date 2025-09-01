---
title: "pass_by_reference_glosry"
description: |
  pass_by_reference_glosry - ABAP 7.52 language reference documentation
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpass_by_reference_glosry.htm"
abapFile: "abenpass_by_reference_glosry.htm"
keywords: ["do", "if", "try", "method", "data", "abenpass", "reference", "glosry"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_glossary.htm) → 

pass by reference

Method of passing data from [actual parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenactual_parameter_glosry.htm "Glossary Entry") to [formal parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenformal_parameter_glosry.htm "Glossary Entry") when the proecdure is called. It is defined in the [parameter interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenparameter_interface_glosry.htm "Glossary Entry") of a [procedure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocedure_glosry.htm "Glossary Entry"). In pass by reference, no local [data object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_object_glosry.htm "Glossary Entry") is specified for the actual parameter. Instead, the procedure receives a reference to the actual parameter during the call, and works with the actual parameter itself. [Input parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninput_parameter_glosry.htm "Glossary Entry") that have been passed by reference are not allowed to be changed in the procedure. Also see [pass by reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpass_by_value_glosry.htm "Glossary Entry").

[→ More](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenformal_parameters_oview.htm)