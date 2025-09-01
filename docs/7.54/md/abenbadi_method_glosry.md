---
title: "BAdI method"
description: |
  Method(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_glosry.htm 'Glossary Entry') of a BAdI interface(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbadi_interface_glosry.htm 'Glossary Entry'). A BAdI method is implemented in BAdI implementations(https:/
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbadi_method_glosry.htm"
abapFile: "abenbadi_method_glosry.htm"
keywords: ["do", "if", "try", "method", "abenbadi", "glosry"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

BAdI method

[Method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_glosry.htm "Glossary Entry") of a [BAdI interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbadi_interface_glosry.htm "Glossary Entry"). A BAdI method is implemented in [BAdI implementations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbadi_implementation_glosry.htm "Glossary Entry") and then called using the associated BAdI object and [CALL BADI](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_badi.htm). If the BAdI interface is part of the definition of a [BAdI](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbadi_glosry.htm "Glossary Entry") that is defined for multiple use, the [parameter interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenparameter_interface_glosry.htm "Glossary Entry") of a BAdI method can only contain [input parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninput_parameter_glosry.htm "Glossary Entry") and [input/output parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninput_output_parameter_glosry.htm "Glossary Entry"). If all BAdIs are defined for single use, the interface can also have [output parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoutput_parameter_glosry.htm "Glossary Entry") or a [return value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreturn_value_glosry.htm "Glossary Entry"). BAdI methods can define or propagate [exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexception_glosry.htm "Glossary Entry"), and their implementation can be made[optional](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods_default.htm).