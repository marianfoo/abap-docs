  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  L

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: LEAVE TO TRANSACTION, ABAPLEAVE_TO_TRANSACTION_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%
0D%0A%0D%0A%0D%0ASuggestion for improvement:)

LEAVE TO TRANSACTION - Short Reference

[Reference](javascript:call_link\('abapleave_to_transaction.htm'\))

Syntax

LEAVE TO *{* *{*TRANSACTION ta*}* *|* *{*CURRENT TRANSACTION*}* *}*
         *\[*AND SKIP FIRST SCREEN*\]*.

Effect

Calls either the [transaction](javascript:call_link\('abentransaction_glosry.htm'\) "Glossary Entry") of the transaction code specified in ta or the current transaction without returning to the call position.

Addition  

-   AND SKIP FIRST SCREEN
    Suppresses the initial screen.