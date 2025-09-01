  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  C

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CALL TRANSACTION, ABAPCALL_TRANSACTION_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

CALL TRANSACTION - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction.htm)

Syntax

CALL TRANSACTION ta WITH*|*WITHOUT AUTHORITY-CHECK
                    *{* *\[*AND SKIP FIRST SCREEN*\]*
                    *|* *\[*USING bdc\_tab
                             *{**{**\[*MODE mode*\]*
                               *\[*UPDATE upd*\]**}*
                              *|**\[*OPTIONS FROM opt*\]**}*
                             *\[*MESSAGES INTO itab*\]**\]* *}*.

Effect

Calls the [transaction](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransaction_glosry.htm "Glossary Entry") of the transaction code entered in ta and returns to the calling point.

Additions   

-   [WITH*|*WITHOUT AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction_authority.htm)
    Executes or suppresses an authorization check.
-   [AND SKIP FIRST SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction_standard.htm)
    Suppresses the initial dynpro.
-   [USING bdc\_tab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction_using.htm)
    Executes the transaction using a [batch input table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbatch_input_table_glosry.htm "Glossary Entry") bdc\_tab.
    Specifies the processing mode in mode after [MODE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction_using.htm).
    Specifies the processing update mode in upd after [UPDATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction_using.htm).
    Specifies the processing mode and update mode in opt after [OPTIONS FROM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction_using.htm).
    Collects the processing [messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_glosry.htm "Glossary Entry") in the internal tale itab after [MESSAGES INTO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction_using.htm).