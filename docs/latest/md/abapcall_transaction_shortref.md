---
title: "CALL TRANSACTION - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transaction.htm) Syntax CALL TRANSACTION ta WITHWITHOUT AUTHORITY-CHECK  AND SKIP FIRST SCREEN  USING bdc_tab MODE mode UPDATE upd OPTIONS FROM opt ME
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transaction_shortref.htm"
abapFile: "abapcall_transaction_shortref.htm"
keywords: ["update", "do", "if", "try", "abapcall", "transaction", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  C

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CALL%20TRANSACTION%2C%20ABAPCALL_TRANSACTION_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CALL TRANSACTION - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transaction.htm)

Syntax

CALL TRANSACTION ta WITH*|*WITHOUT AUTHORITY-CHECK
                    *{* *\[*AND SKIP FIRST SCREEN*\]*
                    *|* *\[*USING bdc\_tab
                             *{**{**\[*MODE mode*\]*
                               *\[*UPDATE upd*\]**}*
                              *|**\[*OPTIONS FROM opt*\]**}*
                             *\[*MESSAGES INTO itab*\]**\]* *}*.

Effect

Calls the [transaction](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransaction_glosry.htm "Glossary Entry") of the transaction code entered in ta and returns to the calling point.

Additions   

-   [WITH*|*WITHOUT AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transaction_authority.htm)
    Executes or suppresses an authorization check.
-   [AND SKIP FIRST SCREEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transaction_standard.htm)
    Suppresses the initial dynpro.
-   [USING bdc\_tab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transaction_using.htm)
    Executes the transaction using a [batch input table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbatch_input_table_glosry.htm "Glossary Entry") bdc\_tab.
    Specifies the processing mode in mode after [MODE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transaction_using.htm).
    Specifies the processing update mode in upd after [UPDATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transaction_using.htm).
    Specifies the processing mode and update mode in opt after [OPTIONS FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transaction_using.htm).
    Collects the processing [messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_glosry.htm "Glossary Entry") in the internal tale itab after [MESSAGES INTO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transaction_using.htm).