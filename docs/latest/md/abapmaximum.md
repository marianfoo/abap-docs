---
title: "MAXIMUM"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmaximum_shortref.htm) Obsolete Syntax MAXIMUM dobj. Effect For each WRITE(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite-.htm) statement that writes the content of the data object dobj
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmaximum.htm"
abapFile: "abapmaximum.htm"
keywords: ["do", "if", "try", "class", "data", "abapmaximum"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengui_obsolete.htm) →  [Obsolete Statements in List Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlists_obsolete.htm) →  [Obsolete Calculations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencalculate_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20MAXIMUM%2C%20ABAPMAXIMUM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

MAXIMUM

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmaximum_shortref.htm)

Obsolete Syntax

MAXIMUM dobj.

Effect

For each [WRITE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite-.htm) statement that writes the content of the data object dobj to a list at any list level after the statement MAXIMUM, which is forbidden in classes, is executed, the maximum value of all values of dobj produced as output since the statement MAXIMUM was executed with WRITE is determined implicitly and assigned to a data object max\_dobj.

The statement MAXIMUM declares the global data object max\_dobj with the same type as dobj. All data objects can be specified for dobj that can be written to a list using the statement WRITE. The statement MAXIMUM must not be specified within a [procedure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocedure_glosry.htm "Glossary Entry") and can only be specified once in a program.

Hint

This statement is not allowed in classes because it works with implicitly created global variables. The built-in function [nmax](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennmax_nmin_functions.htm) can, for example, be used instead.

Example

See [SUMMING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsumming.htm)