---
title: "FREE OBJECT - OLE - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfree_object.htm) Syntax FREE OBJECT ole NO FLUSH. Effect Frees the memory of an automation object(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenole_automation_glosry.htm 'Glossary Entry') ole create
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfree_object_shortref.htm"
abapFile: "abapfree_object_shortref.htm"
keywords: ["do", "try", "abapfree", "object", "shortref"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  F

FREE OBJECT - OLE - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfree_object.htm)

Syntax

FREE OBJECT ole *\[*NO FLUSH*\]*.

Effect

Frees the memory of an [automation object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenole_automation_glosry.htm "Glossary Entry") ole created using CREATEOBJECT ole on the presentation server.

Addition

-   NO FLUSH
    The effect is that the release is passed to the presentation layer only after function module FLUSH is called or when a [screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscreen_glosry.htm "Glossary Entry") changes.