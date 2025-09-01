---
title: "BAdI method"
description: |
  Method(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmethod_glosry.htm 'Glossary Entry') of a BAdI interface(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbadi_interface_glosry.htm 'Glossary Entry'). A BAdI method is implemented in BAdI implementations(https:/
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbadi_method_glosry.htm"
abapFile: "abenbadi_method_glosry.htm"
keywords: ["do", "if", "try", "method", "abenbadi", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20BAdI%20method%2C%20ABENBADI_METHOD_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

BAdI method

[Method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmethod_glosry.htm "Glossary Entry") of a [BAdI interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbadi_interface_glosry.htm "Glossary Entry"). A BAdI method is implemented in [BAdI implementations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbadi_implementation_glosry.htm "Glossary Entry") and then called exclusively via the associated BAdI object using [CALL BADI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_badi.htm). If the BAdI interface is part of the definition of a [BAdI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbadi_glosry.htm "Glossary Entry") that is defined for multiple use, the [parameter interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenparameter_interface_glosry.htm "Glossary Entry") of a BAdI method can only contain [input parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninput_parameter_glosry.htm "Glossary Entry") and [input/output parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninput_output_parameter_glosry.htm "Glossary Entry"). If all BAdIs are defined for single use, the interface can also have [output parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoutput_parameter_glosry.htm "Glossary Entry") or a [return value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreturn_value_glosry.htm "Glossary Entry"). BAdI methods can define or propagate [exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_glosry.htm "Glossary Entry"), and their implementation can be made [optional](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_default.htm).