---
title: "pass_by_value_glosry"
description: |
  pass_by_value_glosry - ABAP 7.52 language reference documentation
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpass_by_value_glosry.htm"
abapFile: "abenpass_by_value_glosry.htm"
keywords: ["do", "if", "try", "method", "data", "abenpass", "value", "glosry"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_glossary.htm) → 

pass by value

Method of passing data from [actual parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenactual_parameter_glosry.htm "Glossary Entry") to [formal parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenformal_parameter_glosry.htm "Glossary Entry") when the procedure is called, which is defined in the [parameter interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenparameter_interface_glosry.htm "Glossary Entry") of a [procedure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocedure_glosry.htm "Glossary Entry"). In pass by value, a local [data object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_object_glosry.htm "Glossary Entry") is created as a copy of the actual parameter. [Output parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoutput_parameter_glosry.htm "Glossary Entry") and [return values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreturn_value_glosry.htm "Glossary Entry") are initialized when the procedure is called. [Input parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninput_parameter_glosry.htm "Glossary Entry") and [input/output parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninput_output_parameter_glosry.htm "Glossary Entry") are passed the value of the actual parameter when they are called. Changed formal parameters are only passed to the actual parameter if the procedure was concluded without errors - that is, whenever the last statement is reached or there is an exit using [RETURN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreturn.htm) (or [EXIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexit_processing_blocks.htm) or [CHECK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcheck_processing_blocks.htm)). Refer also to [pass by reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpass_by_reference_glosry.htm "Glossary Entry").

[→ More](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenformal_parameters_oview.htm)