---
title: "MINIMUM"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapminimum_shortref.htm) Obsolete Syntax MINIMUM dobj. Effect For each WRITE(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwrite-.htm) statement that writes the content of the data object dobj to a list
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapminimum.htm"
abapFile: "abapminimum.htm"
keywords: ["do", "if", "try", "class", "data", "abapminimum"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengui_obsolete.htm) →  [Obsolete Statements in List Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlists_obsolete.htm) →  [Obsolete Calculations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencalculate_obsolete.htm) → 

MINIMUM

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapminimum_shortref.htm)

Obsolete Syntax

MINIMUM dobj.

Effect

For each [WRITE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwrite-.htm) statement that writes the content of the data object dobj to a list at any list level after the statement MINIMUM, which is forbidden in classes, is executed, the minimum value of all values of dobj produced as output since the statement MINIMUM was executed with WRITE is determined implicitly and assigned to a data object min\_dobj.

The statement MINIMUM declares the global data object min\_dobj with the same type as dobj. All data objects can be specified for dobj that can be written to a list using the statement WRITE. The statement MINIMUM must not be specified within a [procedure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprocedure_glosry.htm "Glossary Entry") and it can only be specified once in a program.

Hint

This statement is not allowed in classes because it works with implicitly created global variables. The built-in function [nmin](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennmax_nmin_functions.htm) can, for example, be used instead.

Example

See [SUMMING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsumming.htm)