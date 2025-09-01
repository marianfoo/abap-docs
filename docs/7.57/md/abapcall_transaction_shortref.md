  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CALL TRANSACTION, ABAPCALL_TRANSACTION_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

CALL TRANSACTION - Short Reference

[Reference](javascript:call_link\('abapcall_transaction.htm'\))

Syntax

CALL TRANSACTION ta WITH*|*WITHOUT AUTHORITY-CHECK
                    *{* *\[*AND SKIP FIRST SCREEN*\]*
                    *|* *\[*USING bdc\_tab
                             *{**{**\[*MODE mode*\]*
                               *\[*UPDATE upd*\]**}*
                              *|**\[*OPTIONS FROM opt*\]**}*
                             *\[*MESSAGES INTO itab*\]**\]* *}*.

Effect

Calls the [transaction](javascript:call_link\('abentransaction_glosry.htm'\) "Glossary Entry") of the transaction code entered in ta and returns to the calling point.

Additions   

-   [WITH*|*WITHOUT AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\))
    Executes or suppresses an authorization check.
-   [AND SKIP FIRST SCREEN](javascript:call_link\('abapcall_transaction_standard.htm'\))
    Suppresses the initial dynpro.
-   [USING bdc\_tab](javascript:call_link\('abapcall_transaction_using.htm'\))
    Executes the transaction using a [batch input table](javascript:call_link\('abenbatch_input_table_glosry.htm'\) "Glossary Entry") bdc\_tab.
    Specifies the processing mode in mode after [MODE](javascript:call_link\('abapcall_transaction_using.htm'\)).
    Specifies the processing update mode in upd after [UPDATE](javascript:call_link\('abapcall_transaction_using.htm'\)).
    Specifies the processing mode and update mode in opt after [OPTIONS FROM](javascript:call_link\('abapcall_transaction_using.htm'\)).
    Collects the processing [messages](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") in the internal tale itab after [MESSAGES INTO](javascript:call_link\('abapcall_transaction_using.htm'\)).