---
title: "BAdI implementation"
description: |
  Implementation of a BAdI(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbadi_glosry.htm 'Glossary Entry'). Multiple BAdI implementations can be assigned to a single BAdI. A BAdI implementation consists of a BAdI implementation class(https://help.sap.com/doc/abapdocu_latest_i
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbadi_implementation_glosry.htm"
abapFile: "abenbadi_implementation_glosry.htm"
keywords: ["select", "do", "if", "try", "method", "class", "abenbadi", "implementation", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20BAdI%20implementation%2C%20ABENBADI_IMPLEMENTATION_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

BAdI implementation

Implementation of a [BAdI](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbadi_glosry.htm "Glossary Entry"). Multiple BAdI implementations can be assigned to a single BAdI. A BAdI implementation consists of a [BAdI implementation class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbadi_implement_class_glosry.htm "Glossary Entry") and a filter condition that can be used to select the BAdI implementation in the [GET BADI](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_badi.htm) statement in the [BAdI object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbadi_method_glosry.htm "Glossary Entry"). A BAdI implementation is created as an [enhancement implementation element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenhancement_impl_elem_glosry.htm "Glossary Entry") as part of an [enhancement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenhancement_glosry.htm "Glossary Entry") in [Enhancement Builder](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenhancement_builder_glosry.htm "Glossary Entry"), where it can be marked as a standard implementation. A BAdI implementation can be in the state active or inactive, which overrides both the [Switch Framework](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenswitch_framework_glosry.htm "Glossary Entry") setting and the filter condition.