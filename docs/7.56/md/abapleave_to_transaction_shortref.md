  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  L

LEAVE TO TRANSACTION - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapleave_to_transaction.htm)

Syntax

LEAVE TO *{* *{*TRANSACTION ta*}* *|* *{*CURRENT TRANSACTION*}* *}*
         *\[*AND SKIP FIRST SCREEN*\]*.

Effect

Calls either the [transaction](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentransaction_glosry.htm "Glossary Entry") of the transaction code specified in ta or the current transaction without returning to the call position.

Addition

-   AND SKIP FIRST SCREEN
    Suppresses the initial screen.