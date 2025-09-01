---
title: "Obsolete Syntax"
description: |
  SELECT  FROM dbtab WHERE col1 = f1 AND col2 = f2 ... INTO wa WHENEVER NOT FOUND SEND  ERRORMESSAGE  WARNING  num WITH  p1 ... . Effect The standalone use of the statement SELECT in the dynpro flow logic is obsolete. The effect of the statement is described in
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpselect.htm"
abapFile: "dynpselect.htm"
keywords: ["select", "do", "if", "try", "dynpselect"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengui_obsolete.htm) →  [dynpro - Obsolete Statements in Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_obsolet.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - SELECT, DYNPSELECT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
for improvement:)

dynpro - SELECT

Obsolete Syntax

SELECT \*
       FROM dbtab
       WHERE col1 = f1 AND col2 = f2 ...
       INTO wa
       WHENEVER *\[*NOT*\]* FOUND
         SEND *{* ERRORMESSAGE *|* WARNING *}* *\[*num *\[*WITH *{* p1 ... *}**\]**\]*.

Effect

The standalone use of the statement SELECT in the dynpro flow logic is obsolete. The effect of the statement is described in its also obsolete use as an addition of the statement [FIELD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpfield_value_select.htm).

Hint

If the SELECT statement is used in the dynpro flow logic, [table buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffering_glosry.htm "Glossary Entry") is applied, if activated.