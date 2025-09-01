---
title: "CREATE OBJECT, OLE - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_object_ole2.htm) Syntax CREATE OBJECT ole class NO FLUSH QUEUE-ONLY. Effect Creates an OLE automation object(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenole_automation_glosry.htm 'G
version: "7.55"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_object_ole_shortref.htm"
abapFile: "abapcreate_object_ole_shortref.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "abapcreate", "object", "ole", "shortref"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  C

CREATE OBJECT, OLE - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_object_ole2.htm)

Syntax

CREATE OBJECT ole class *\[*NO FLUSH*\]* *\[*QUEUE-ONLY*\]*.

Effect

Creates an [OLE automation object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenole_automation_glosry.htm "Glossary Entry") ole of the automation class class. Here, ole must have the type ole2\_object from the [type pool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentype_pool_glosry.htm "Glossary Entry") OLE2 and class specifies the name of the class.

Additions

-   NO FLUSH
    Specifies that the request to create an object is not passed to the current presentation server until the function module FLUSH is called or when the [screen](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenscreen_glosry.htm "Glossary Entry") changes.
    

-   QUEUE-ONLY
    Specifies that, in the case of a flush, the return codes of the methods called using [CALL METHOD OF](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_method_of_ole_shortref.htm) in the automation queue are not written to the data objects rc.