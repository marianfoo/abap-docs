---
title: "CASE, WHEN (Obsolete)"
description: |
  Obsolete Syntax CASE ... statements WHEN ... ... ENDCASE. Effect The statements statements between CASE(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcase.htm) and the first statement WHEN(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwhen.htm) have th
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencase_when_obsolete.htm"
abapFile: "abencase_when_obsolete.htm"
keywords: ["do", "if", "case", "class", "abencase", "when", "obsolete"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Program Flow](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobsolete_program_flow.htm) →  [Obsolete Control Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobsolete_control_structures.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CASE%2C%20WHEN%20%28Obsolete%29%2C%20ABENCASE_WHEN_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CASE, WHEN (Obsolete)

Obsolete Syntax

CASE ...
  statements
  WHEN ...
    ...
ENDCASE.

Effect

The statements statements between [CASE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcase.htm) and the first statement [WHEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwhen.htm) have the same effect as when they are specified directly in front of CASE. This construct is not allowed in classes and produces a syntax warning outside of classes. The statements must be placed in front of CASE.