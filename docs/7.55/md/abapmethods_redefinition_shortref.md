---
title: "METHODS, REDEFINITION - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethods_redefinition.htm) Syntax METHODS meth FINAL REDEFINITION. Effect Redefines(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenredefinition_glosry.htm 'Glossary Entry') a meth instance method in t
version: "7.55"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethods_redefinition_shortref.htm"
abapFile: "abapmethods_redefinition_shortref.htm"
keywords: ["do", "try", "method", "class", "abapmethods", "redefinition", "shortref"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  M

METHODS, REDEFINITION - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethods_redefinition.htm)

Syntax

METHODS meth *\[*FINAL*\]* REDEFINITION.

Effect

[Redefines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenredefinition_glosry.htm "Glossary Entry") a meth instance method in the declaration part of a class. The method is reimplemented in the implementation part.

Addition

-   FINAL
    Makes a redefined method final so that it cannot be redefined again in a subclass.