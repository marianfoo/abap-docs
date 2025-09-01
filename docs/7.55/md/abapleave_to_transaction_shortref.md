---
title: "LEAVE TO TRANSACTION - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapleave_to_transaction.htm) Syntax LEAVE TO  TRANSACTION ta  CURRENT TRANSACTION  AND SKIP FIRST SCREEN. Effect Calls either the transaction(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en
version: "7.55"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapleave_to_transaction_shortref.htm"
abapFile: "abapleave_to_transaction_shortref.htm"
keywords: ["do", "if", "try", "abapleave", "transaction", "shortref"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  L

LEAVE TO TRANSACTION - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapleave_to_transaction.htm)

Syntax

LEAVE TO *{* *{*TRANSACTION ta*}* *|* *{*CURRENT TRANSACTION*}* *}*
         *\[*AND SKIP FIRST SCREEN*\]*.

Effect

Calls either the [transaction](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentransaction_glosry.htm "Glossary Entry") of the transaction code specified in ta or the current transaction without returning to the call position.

Addition

-   AND SKIP FIRST SCREEN
    Suppresses the initial screen.