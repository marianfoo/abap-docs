---
title: "SET PROPERTY, OLE - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_property.htm) Syntax SET PROPERTY OF ole attr = dobj NO FLUSH EXPORTING p1 = f1 p2 = f2 .... Effect Assigns the content of the data object dobj to the attribute attr of an automation object(https://help.
version: "7.55"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_property_shortref.htm"
abapFile: "abapset_property_shortref.htm"
keywords: ["do", "try", "data", "abapset", "property", "shortref"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  S

SET PROPERTY, OLE - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_property.htm)

Syntax

SET PROPERTY OF ole attr = dobj *\[*NO FLUSH*\]*
                                *\[*EXPORTING p1 = f1 p2 = f2 ...*\]*.

Effect

Assigns the content of the data object dobj to the attribute attr of an [automation object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenole_automation_glosry.htm "Glossary Entry") ole created using CREATE OBJECT ole.

Addition

-   NO FLUSH
    Dictates that the attribute is not passed until the [function module](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunction_module_glosry.htm "Glossary Entry") FLUSH is called, or until a change of [screen layout](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenscreen_glosry.htm "Glossary Entry") is passed to the presentation layer.
    

-   EXPORTING p1 = f1 p2 = f2 ...
    Passes actual parameters f1, f2, ... to parameters p1, p2, ... of the attribute.