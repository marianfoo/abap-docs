---
title: "FREE OBJECT, OLE - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfree_object.htm) Syntax FREE OBJECT ole NO FLUSH. Effect Frees the memory of an automation object(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenole_automation_glosry.htm 'Glossary Entry') ole create
version: "7.56"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfree_object_shortref.htm"
abapFile: "abapfree_object_shortref.htm"
keywords: ["do", "try", "abapfree", "object", "shortref"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  F

FREE OBJECT, OLE - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfree_object.htm)

Syntax

FREE OBJECT ole *\[*NO FLUSH*\]*.

Effect

Frees the memory of an [automation object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenole_automation_glosry.htm "Glossary Entry") ole created using CREATE OBJECT ole on the presentation server.

Addition

-   NO FLUSH
    The effect is that the release is passed to the presentation layer only after function module FLUSH is called or when a [screen layout](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenscreen_glosry.htm "Glossary Entry") changes.