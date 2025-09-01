  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  L

LEAVE TO TRANSACTION - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapleave_to_transaction.htm)

Syntax

LEAVE TO *{* *{*TRANSACTION ta*}* *|* *{*CURRENT TRANSACTION*}* *}*
         *\[*AND SKIP FIRST SCREEN*\]*.

Effect

Calls either the [transaction](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentransaction_glosry.htm "Glossary Entry") of the transaction code specified in ta or the current transaction without returning to the call position.

Addition

-   AND SKIP FIRST SCREEN
    Suppresses the initial screen.