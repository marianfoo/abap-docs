---
title: "weak_reference_glosry"
description: |
  weak_reference_glosry - ABAP 7.55 language reference documentation
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenweak_reference_glosry.htm"
abapFile: "abenweak_reference_glosry.htm"
keywords: ["delete", "do", "try", "class", "abenweak", "reference", "glosry"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_glossary.htm) → 

weak reference

Reference to an [object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobject_glosry.htm "Glossary Entry") of a [class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_glosry.htm "Glossary Entry") that is ignored when the [Garbage Collector](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengarbage_collector_glosry.htm "Glossary Entry") is executed, unlike [object references](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobject_reference_glosry.htm "Glossary Entry") in [reference variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreference_variable_glosry.htm "Glossary Entry"). An object that is only pointed to by weak references is deleted by Garbage Collector. Weak references are represented by objects of the class [CL\_ABAP\_WEAK\_REFERENCE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencl_abap_weak_reference.htm). See also [soft reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensoft_reference_glosry.htm "Glossary Entry").

[→ More about](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencl_abap_weak_reference.htm)