---
title: "Obsolete Syntax"
description: |
  AT(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_itab.htm) NEWEND OF <fsi>. Effect If the additions INTO wa or ASSIGNING <fs> are used in the statement LOOP(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab.htm), a field symbol <fsi> c
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_itab_obsolete.htm"
abapFile: "abapat_itab_obsolete.htm"
keywords: ["loop", "do", "if", "class", "data", "internal-table", "field-symbol", "abapat", "itab", "obsolete"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_internal_obsolete.htm) →  [Obsolete Internal Table Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: AT field_symbol, ABAPAT_ITAB_OBSOLETE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

AT field\_symbol

Obsolete Syntax

[AT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_itab.htm) *{*NEW*}**|**{*END OF*}* <fsi>.

Effect

If the additions INTO wa or ASSIGNING <fs> are used in the statement [LOOP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab.htm), a field symbol <fsi> can be specified after [AT *{*NEW*}**|**{*END OF*}*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_itab.htm), outside of classes. The associated component of the work area wa or the field symbol <fs> is assigned to this field symbol.

Hint

This form of specifying components dynamically has been replaced by [(name)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_components.htm).

Bad Example

name = 'WA-COL1'.
ASSIGN (name) TO <comp>.
LOOP AT itab INTO wa.
  AT NEW <comp>.
    ...
  ENDAT.
ENDLOOP.

Good Example

name = 'COL1'.
LOOP AT itab INTO wa.
  AT NEW (name).
    ...
  ENDAT.
ENDLOOP.