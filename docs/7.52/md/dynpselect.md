---
title: "SELECT - Dynpro"
description: |
  Obsolete Syntax SELECT  FROM dbtab WHERE col1 = f1 AND col2 = f2 ... INTO wa WHENEVER NOT FOUND SEND  ERRORMESSAGE  WARNING  num WITH  p1 ... . Effect The use of the statement SELECT as a standalone statement in the dynpro flow logic is obsolete. The effect o
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/dynpselect.htm"
abapFile: "dynpselect.htm"
keywords: ["select", "do", "if", "try", "dynpselect"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengui_obsolete.htm) →  [Obsolete statements of the screen flow logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_obsolet.htm) → 

SELECT - Dynpro

Obsolete Syntax

SELECT \*
       FROM dbtab
       WHERE col1 = f1 AND col2 = f2 ...
       INTO wa
       WHENEVER *\[*NOT*\]* FOUND
         SEND *{* ERRORMESSAGE *|* WARNING *}* *\[*num *\[*WITH *{* p1 ... *}**\]**\]*.

Effect

The use of the statement SELECT as a standalone statement in the dynpro flow logic is obsolete. The effect of the statement is described in its (also obsolete) use as an addition of the statement [FIELD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/dynpfield_value_select.htm) .

Note

If the SELECT statement is used in the dynpro flow logic, [table buffering](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_buffering_glosry.htm "Glossary Entry") is applied, if activated.