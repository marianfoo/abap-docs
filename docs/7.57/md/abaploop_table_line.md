---
title: "LOOP AT itab, TABLE LINE"
description: |
  Obsolete Syntax LOOP AT itab(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab.htm) ... WHERE(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_cond.htm) TABLE LINE .... Effect The addition TABLE LINE can also be specified outside of classes in
version: "7.57"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_table_line.htm"
abapFile: "abaploop_table_line.htm"
keywords: ["loop", "do", "if", "class", "data", "internal-table", "abaploop", "table", "line"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_internal_obsolete.htm) →  [Obsolete Internal Table Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: LOOP AT itab, TABLE LINE, ABAPLOOP_TABLE_LINE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

LOOP AT itab, TABLE LINE

Obsolete Syntax

[LOOP AT itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab.htm) ... [WHERE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_cond.htm) TABLE LINE ....

Effect

The addition TABLE LINE can also be specified outside of classes in the WHERE condition of a LOOP statement, instead of the pseudo component table\_line.

Hint

The ABAP Compiler should consider this addition as an error, retained only for reasons of downward compatibility. The pseudo component table\_line should always be specified instead of TABLE LINE.

Bad Example

DATA: itab TYPE TABLE OF i,
      wa   TYPE i.
LOOP AT itab INTO wa WHERE TABLE LINE > 10.
ENDLOOP.

Good Example

DATA: itab TYPE TABLE OF i,
      wa   TYPE i.
LOOP AT itab INTO wa WHERE table\_line > 10.
ENDLOOP.