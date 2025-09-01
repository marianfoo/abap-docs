---
title: "CASE, WHEN - obsolete"
description: |
  Obsolete Syntax CASE ... statements WHEN ... ... ENDCASE. Effect The statements statements between CASE(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase.htm) and the first statement WHEN(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwhen.htm) work in the same
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencase_when_obsolete.htm"
abapFile: "abencase_when_obsolete.htm"
keywords: ["do", "if", "case", "class", "abencase", "when", "obsolete"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Program Flow](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobsolete_program_flow.htm) →  [Obsolete Control Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobsolete_control_structures.htm) → 

CASE, WHEN - obsolete

Obsolete Syntax

CASE ...
  statements
  WHEN ...
    ...
ENDCASE.

Effect

The statements statements between [CASE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase.htm) and the first statement [WHEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwhen.htm) work in the same way as when they are specified directly in front of CASE. This construct is not allowed in classes and produces a syntax warning outside of classes. The statements must be placed in front of CASE.