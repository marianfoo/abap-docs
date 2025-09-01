  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  C

CALL TRANSACTION - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transaction.htm)

Syntax

CALL TRANSACTION ta WITH*|*WITHOUT AUTHORITY-CHECK
                    *{* *\[*AND SKIP FIRST SCREEN*\]*
                    *|* *\[*USING bdc\_tab
                             *{**{**\[*MODE mode*\]*
                               *\[*UPDATE upd*\]**}*
                              *|**\[*OPTIONS FROM opt*\]**}*
                             *\[*MESSAGES INTO itab*\]**\]* *}*.

Effect

Calls the [transaction](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentransaction_glosry.htm "Glossary Entry") of the transaction code entered in ta and returns to the calling point.

Additions

-   [WITH*|*WITHOUT AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transaction_authority.htm)
    Executes or suppresses an authorization check.
    
-   [AND SKIP FIRST SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transaction_standard.htm)
    Suppresses the initial screen.
    
-   [USING bdc\_tab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transaction_using.htm)
    Executes the transaction using a [batch input table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbatch_input_table_glosry.htm "Glossary Entry") bdc\_tab.
    Specifies the processing mode in mode after [MODE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transaction_using.htm).
    Specifies the processing update mode in upd after [UPDATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transaction_using.htm).
    Specifies the processing mode and update mode in opt after [OPTIONS FROM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transaction_using.htm).
    Collects the processing [messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_glosry.htm "Glossary Entry") in the internal tale itab after [MESSAGES INTO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transaction_using.htm).